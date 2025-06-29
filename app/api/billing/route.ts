import { NextResponse } from "next/server"
import { type AttendanceRecord, calculateMonthlyBill } from "@/lib/timesheet"

// Mock database of attendance records
const mockAttendanceRecords: AttendanceRecord[] = [
  {
    studentId: "student-1",
    date: new Date("2023-04-01"),
    checkIn: new Date("2023-04-01T08:00:00"),
    checkOut: new Date("2023-04-01T17:00:00"),
    type: "full-time",
  },
  {
    studentId: "student-1",
    date: new Date("2023-04-02"),
    checkIn: new Date("2023-04-02T08:15:00"),
    checkOut: new Date("2023-04-02T16:45:00"),
    type: "full-time",
  },
  {
    studentId: "student-2",
    date: new Date("2023-04-01"),
    checkIn: new Date("2023-04-01T08:30:00"),
    checkOut: new Date("2023-04-01T12:30:00"),
    type: "half-day",
  },
  {
    studentId: "student-3",
    date: new Date("2023-04-01"),
    checkIn: new Date("2023-04-01T09:00:00"),
    checkOut: new Date("2023-04-01T11:00:00"),
    type: "hourly",
  },
]

// Mock database of invoices
const mockInvoices = [
  {
    id: "invoice-1",
    studentId: "student-1",
    month: "April 2023",
    amount: 700,
    status: "paid",
    dueDate: "2023-04-01",
    paidDate: "2023-04-01",
  },
  {
    id: "invoice-2",
    studentId: "student-2",
    month: "April 2023",
    amount: 400,
    status: "paid",
    dueDate: "2023-04-01",
    paidDate: "2023-04-01",
  },
  {
    id: "invoice-3",
    studentId: "student-3",
    month: "April 2023",
    amount: 50,
    status: "pending",
    dueDate: "2023-04-01",
    paidDate: null,
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get("studentId")
    const month = searchParams.get("month")
    const status = searchParams.get("status")

    // Filter invoices
    let invoices = mockInvoices

    if (studentId) {
      invoices = invoices.filter((invoice) => invoice.studentId === studentId)
    }

    if (month) {
      invoices = invoices.filter((invoice) => invoice.month === month)
    }

    if (status) {
      invoices = invoices.filter((invoice) => invoice.status === status)
    }

    return NextResponse.json({ invoices })
  } catch (error) {
    console.error("Billing error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { studentId, month, year } = body

    // Validate required fields
    if (!studentId || !month || !year) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get the first and last day of the month
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0)

    // Filter records for the student and month
    const records = mockAttendanceRecords.filter((record) => {
      return record.studentId === studentId && record.date >= startDate && record.date <= endDate
    })

    // Calculate the bill
    const amount = calculateMonthlyBill(records)

    // Create a new invoice
    const newInvoice = {
      id: `invoice-${Date.now()}`,
      studentId,
      month: `${startDate.toLocaleString("default", { month: "long" })} ${year}`,
      amount,
      status: "pending",
      dueDate: new Date(year, month - 1, 15).toISOString().split("T")[0],
      paidDate: null,
    }

    // In a real application, you would save this to a database
    // For this example, we'll just return the new invoice
    return NextResponse.json({
      message: "Invoice created",
      invoice: newInvoice,
    })
  } catch (error) {
    console.error("Billing error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { invoiceId, status, paidDate } = body

    // Validate required fields
    if (!invoiceId || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would update the invoice in a database
    // For this example, we'll just return a success message
    return NextResponse.json({
      message: "Invoice updated",
      invoice: {
        id: invoiceId,
        status,
        paidDate: paidDate || null,
      },
    })
  } catch (error) {
    console.error("Billing error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
