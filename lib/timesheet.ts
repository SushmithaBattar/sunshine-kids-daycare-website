export type AttendanceType = "full-time" | "half-day" | "hourly"

export interface AttendanceRecord {
  studentId: string
  date: Date
  checkIn: Date
  checkOut: Date | null
  type: AttendanceType
}

export interface BillingRate {
  fullTimeRate: number // monthly rate
  halfDayRate: number // monthly rate
  hourlyRate: number // per hour rate
}

// Default billing rates
const DEFAULT_RATES: BillingRate = {
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
export function calculateDailyCost(record: AttendanceRecord, rates: BillingRate = DEFAULT_RATES): number {
  if (!record.checkOut) return 0

  const hours = calculateHours(record.checkIn, record.checkOut)

  switch (record.type) {
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
export function calculateMonthlyBill(records: AttendanceRecord[], rates: BillingRate = DEFAULT_RATES): number {
  // Group records by student and type
  const studentRecords: Record<string, { type: AttendanceType; records: AttendanceRecord[] }> = {}

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
          return sum + calculateDailyCost(record, rates)
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
  rates: BillingRate = DEFAULT_RATES,
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
    const cost = calculateDailyCost(record, rates)

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
