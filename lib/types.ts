export interface AttendanceRecord {
  id: string
  studentId: string
  studentName: string
  date: Date
  checkIn: Date
  checkOut: Date | null
  type: "full-time" | "half-day" | "hourly"
  cost: number
}

export interface BillingRates {
  fullTimeRate: number // monthly rate
  halfDayRate: number // monthly rate
  hourlyRate: number // per hour rate
}

export interface Student {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  program: string
  attendanceType: "full-time" | "half-day" | "hourly"
  parentName: string
  contactInfo: string
}

export interface Invoice {
  id: string
  studentId: string
  studentName: string
  month: string
  year: number
  amount: number
  status: "pending" | "paid" | "overdue"
  dueDate: Date
  paidDate: Date | null
  items: InvoiceItem[]
}

export interface InvoiceItem {
  description: string
  date: Date
  hours?: number
  rate: number
  amount: number
}
