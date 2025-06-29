import type { AttendanceRecord, BillingRates } from "./types"

// Default billing rates
export const DEFAULT_RATES: BillingRates = {
  fullTimeRate: 700,
  halfDayRate: 400,
  hourlyRate: 5,
}

/**
 * Calculate the total hours between check-in and check-out
 */
export function calculateHours(checkIn: Date, checkOut: Date): number {
  const diffMs = checkOut.getTime() - checkIn.getTime()
  const diffHours = diffMs / (1000 * 60 * 60)
  return Number.parseFloat(diffHours.toFixed(2))
}

/**
 * Calculate the daily cost based on attendance type and hours
 */
export function calculateDailyCost(
  type: "full-time" | "half-day" | "hourly",
  hours: number,
  rates: BillingRates = DEFAULT_RATES,
): number {
  switch (type) {
    case "hourly":
      return Number.parseFloat((hours * rates.hourlyRate).toFixed(2))
    case "half-day":
      // For half-day, we calculate the daily rate (monthly rate / 22 working days)
      return Number.parseFloat((rates.halfDayRate / 22).toFixed(2))
    case "full-time":
      // For full-time, we calculate the daily rate (monthly rate / 22 working days)
      return Number.parseFloat((rates.fullTimeRate / 22).toFixed(2))
    default:
      return 0
  }
}

/**
 * Calculate the monthly bill based on attendance records
 */
export function calculateMonthlyBill(records: AttendanceRecord[], rates: BillingRates = DEFAULT_RATES): number {
  // Group records by student and type
  const studentRecords: Record<string, { type: "full-time" | "half-day" | "hourly"; records: AttendanceRecord[] }> = {}

  records.forEach((record) => {
    if (!studentRecords[record.studentId]) {
      studentRecords[record.studentId] = {
        type: record.type,
        records: [],
      }
    }

    studentRecords[record.studentId].records.push(record)
  })

  // Calculate bill for each student
  let totalBill = 0

  Object.values(studentRecords).forEach(({ type, records }) => {
    switch (type) {
      case "full-time":
        // Full-time students pay the monthly rate regardless of attendance
        totalBill += rates.fullTimeRate
        break
      case "half-day":
        // Half-day students pay the monthly rate regardless of attendance
        totalBill += rates.halfDayRate
        break
      case "hourly":
        // Hourly students pay based on actual hours
        const hourlyTotal = records.reduce((sum, record) => {
          if (record.checkOut) {
            const hours = calculateHours(record.checkIn, record.checkOut)
            return sum + calculateDailyCost("hourly", hours, rates)
          }
          return sum
        }, 0)
        totalBill += hourlyTotal
        break
    }
  })

  return Number.parseFloat(totalBill.toFixed(2))
}

/**
 * Generate a timesheet report for a given date range
 */
export function generateTimesheetReport(
  records: AttendanceRecord[],
  startDate: Date,
  endDate: Date,
  rates: BillingRates = DEFAULT_RATES,
): {
  totalHours: number
  totalDays: number
  totalCost: number
  records: Array<AttendanceRecord & { hours: number; cost: number }>
} {
  // Filter records within the date range
  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date)
    return recordDate >= startDate && recordDate <= endDate && record.checkOut !== null
  })

  // Calculate hours and cost for each record
  const recordsWithDetails = filteredRecords.map((record) => {
    const hours = record.checkOut ? calculateHours(record.checkIn, record.checkOut) : 0
    const cost = record.checkOut ? calculateDailyCost(record.type, hours, rates) : 0

    return {
      ...record,
      hours,
      cost,
    }
  })

  // Calculate totals
  const totalHours = Number.parseFloat(recordsWithDetails.reduce((sum, record) => sum + record.hours, 0).toFixed(2))
  const totalDays = recordsWithDetails.length
  const totalCost = Number.parseFloat(recordsWithDetails.reduce((sum, record) => sum + record.cost, 0).toFixed(2))

  return {
    totalHours,
    totalDays,
    totalCost,
    records: recordsWithDetails,
  }
}

/**
 * Generate an invoice for a student for a given month
 */
export function generateInvoice(
  studentId: string,
  studentName: string,
  records: AttendanceRecord[],
  month: number,
  year: number,
  rates: BillingRates = DEFAULT_RATES,
): {
  totalAmount: number
  invoiceItems: Array<{
    description: string
    date: Date
    hours?: number
    rate: number
    amount: number
  }>
} {
  // Filter records for the given month and student
  const startDate = new Date(year, month - 1, 1)
  const endDate = new Date(year, month, 0)

  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.date)
    return (
      record.studentId === studentId && recordDate >= startDate && recordDate <= endDate && record.checkOut !== null
    )
  })

  // Group records by type
  const recordsByType: Record<string, AttendanceRecord[]> = {
    "full-time": [],
    "half-day": [],
    hourly: [],
  }

  filteredRecords.forEach((record) => {
    recordsByType[record.type].push(record)
  })

  const invoiceItems = []
  let totalAmount = 0

  // Process full-time records
  if (recordsByType["full-time"].length > 0) {
    invoiceItems.push({
      description: "Full-time monthly rate",
      date: startDate,
      rate: rates.fullTimeRate,
      amount: rates.fullTimeRate,
    })
    totalAmount += rates.fullTimeRate
  }

  // Process half-day records
  if (recordsByType["half-day"].length > 0) {
    invoiceItems.push({
      description: "Half-day monthly rate",
      date: startDate,
      rate: rates.halfDayRate,
      amount: rates.halfDayRate,
    })
    totalAmount += rates.halfDayRate
  }

  // Process hourly records
  if (recordsByType["hourly"].length > 0) {
    let hourlyTotal = 0

    recordsByType["hourly"].forEach((record) => {
      if (record.checkOut) {
        const hours = calculateHours(record.checkIn, record.checkOut)
        const amount = calculateDailyCost("hourly", hours, rates)

        invoiceItems.push({
          description: `Hourly care on ${record.date.toLocaleDateString()}`,
          date: record.date,
          hours,
          rate: rates.hourlyRate,
          amount,
        })

        hourlyTotal += amount
      }
    })

    totalAmount += hourlyTotal
  }

  return {
    totalAmount: Number.parseFloat(totalAmount.toFixed(2)),
    invoiceItems,
  }
}
