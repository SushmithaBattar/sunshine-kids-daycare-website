import { NextResponse } from "next/server"
import { type AttendanceRecord, generateTimesheetReport } from "@/lib/timesheet"

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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get("studentId")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    // Filter records by student ID if provided
    let records = mockAttendanceRecords
    if (studentId) {
      records = records.filter((record) => record.studentId === studentId)
    }

    // Generate report if date range is provided
    if (startDate && endDate) {
      const report = generateTimesheetReport(records, new Date(startDate), new Date(endDate))

      return NextResponse.json(report)
    }

    // Otherwise, return all records
    return NextResponse.json({ records })
  } catch (error) {
    console.error("Timesheet error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { studentId, date, checkIn, checkOut, type } = body

    // Validate required fields
    if (!studentId || !date || !checkIn || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create new attendance record
    const newRecord: AttendanceRecord = {
      studentId,
      date: new Date(date),
      checkIn: new Date(checkIn),
      checkOut: checkOut ? new Date(checkOut) : null,
      type,
    }

    // In a real application, you would save this to a database
    // For this example, we'll just return the new record
    return NextResponse.json({
      message: "Attendance record created",
      record: newRecord,
    })
  } catch (error) {
    console.error("Timesheet error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { studentId, date, checkOut } = body

    // Validate required fields
    if (!studentId || !date || !checkOut) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would update the record in a database
    // For this example, we'll just return a success message
    return NextResponse.json({
      message: "Attendance record updated with check-out time",
    })
  } catch (error) {
    console.error("Timesheet error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
