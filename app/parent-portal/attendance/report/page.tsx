"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronLeft, Download, Filter, Printer } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AttendanceRecord } from "@/lib/types"
import { calculateHours } from "@/lib/attendance"

export default function AttendanceReportPage() {
  const [dateRange, setDateRange] = useState("month")
  const [studentFilter, setStudentFilter] = useState("all")

  // Mock attendance records for the child
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: "att1",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-01"),
      checkIn: new Date("2023-05-01T08:15:00"),
      checkOut: new Date("2023-05-01T17:00:00"),
      type: "full-time",
      cost: 31.82, // $700 / 22 days
    },
    {
      id: "att2",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-02"),
      checkIn: new Date("2023-05-02T08:30:00"),
      checkOut: new Date("2023-05-02T16:45:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att3",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-03"),
      checkIn: new Date("2023-05-03T08:20:00"),
      checkOut: new Date("2023-05-03T17:10:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att4",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-04"),
      checkIn: new Date("2023-05-04T08:10:00"),
      checkOut: new Date("2023-05-04T16:50:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att5",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-05"),
      checkIn: new Date("2023-05-05T08:25:00"),
      checkOut: new Date("2023-05-05T17:05:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att6",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-08"),
      checkIn: new Date("2023-05-08T08:15:00"),
      checkOut: new Date("2023-05-08T17:00:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att7",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-09"),
      checkIn: new Date("2023-05-09T08:30:00"),
      checkOut: new Date("2023-05-09T16:45:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att8",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-10"),
      checkIn: new Date("2023-05-10T08:20:00"),
      checkOut: new Date("2023-05-10T17:10:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att9",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-11"),
      checkIn: new Date("2023-05-11T08:10:00"),
      checkOut: new Date("2023-05-11T16:50:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att10",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-12"),
      checkIn: new Date("2023-05-12T08:25:00"),
      checkOut: new Date("2023-05-12T17:05:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att11",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-15"),
      checkIn: new Date("2023-05-15T08:15:00"),
      checkOut: new Date("2023-05-15T17:00:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att12",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-16"),
      checkIn: new Date("2023-05-16T08:30:00"),
      checkOut: new Date("2023-05-16T16:45:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att13",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-17"),
      checkIn: new Date("2023-05-17T08:20:00"),
      checkOut: new Date("2023-05-17T17:10:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att14",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-18"),
      checkIn: new Date("2023-05-18T08:10:00"),
      checkOut: new Date("2023-05-18T16:50:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att15",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-19"),
      checkIn: new Date("2023-05-19T08:25:00"),
      checkOut: new Date("2023-05-19T17:05:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att16",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-22"),
      checkIn: new Date("2023-05-22T08:15:00"),
      checkOut: new Date("2023-05-22T17:00:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att17",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-23"),
      checkIn: new Date("2023-05-23T08:30:00"),
      checkOut: new Date("2023-05-23T16:45:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att18",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-24"),
      checkIn: new Date("2023-05-24T08:20:00"),
      checkOut: new Date("2023-05-24T17:10:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att19",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-25"),
      checkIn: new Date("2023-05-25T08:10:00"),
      checkOut: new Date("2023-05-25T16:50:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att20",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-26"),
      checkIn: new Date("2023-05-26T08:25:00"),
      checkOut: new Date("2023-05-26T17:05:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att21",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-29"),
      checkIn: new Date("2023-05-29T08:15:00"),
      checkOut: new Date("2023-05-29T17:00:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att22",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-30"),
      checkIn: new Date("2023-05-30T08:30:00"),
      checkOut: new Date("2023-05-30T16:45:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att23",
      studentId: "child1",
      studentName: "Sophie Johnson",
      date: new Date("2023-05-31"),
      checkIn: new Date("2023-05-31T08:20:00"),
      checkOut: new Date("2023-05-31T17:10:00"),
      type: "full-time",
      cost: 31.82,
    },
    {
      id: "att24",
      studentId: "child2",
      studentName: "Ethan Johnson",
      date: new Date("2023-05-01"),
      checkIn: new Date("2023-05-01T08:15:00"),
      checkOut: new Date("2023-05-01T12:00:00"),
      type: "half-day",
      cost: 18.18, // $400 / 22 days
    },
    {
      id: "att25",
      studentId: "child2",
      studentName: "Ethan Johnson",
      date: new Date("2023-05-03"),
      checkIn: new Date("2023-05-03T08:20:00"),
      checkOut: new Date("2023-05-03T12:10:00"),
      type: "half-day",
      cost: 18.18,
    },
    {
      id: "att26",
      studentId: "child2",
      studentName: "Ethan Johnson",
      date: new Date("2023-05-05"),
      checkIn: new Date("2023-05-05T08:25:00"),
      checkOut: new Date("2023-05-05T12:05:00"),
      type: "half-day",
      cost: 18.18,
    },
  ])

  // Calculate totals
  const totalHours = attendanceRecords.reduce((sum, record) => {
    if (record.checkOut) {
      return sum + Number.parseFloat(calculateHours(record.checkIn, record.checkOut))
    }
    return sum
  }, 0)

  const totalCost = attendanceRecords.reduce((sum, record) => sum + record.cost, 0)
  const averageHoursPerDay = totalHours / attendanceRecords.length

  // Filter records based on selected student
  const filteredRecords =
    studentFilter === "all"
      ? attendanceRecords
      : attendanceRecords.filter((record) => record.studentId === studentFilter)

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/parent-portal/dashboard">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-amber-800">Attendance Report</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Days</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{filteredRecords.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalHours.toFixed(1)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Average Hours/Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{averageHoursPerDay.toFixed(1)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalCost.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Attendance Details</CardTitle>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Current Week</SelectItem>
                    <SelectItem value="month">Current Month</SelectItem>
                    <SelectItem value="quarter">Current Quarter</SelectItem>
                    <SelectItem value="year">Current Year</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={studentFilter} onValueChange={setStudentFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Children</SelectItem>
                    <SelectItem value="child1">Sophie Johnson</SelectItem>
                    <SelectItem value="child2">Ethan Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <div className="border rounded-lg">
                <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium bg-muted/50">
                  <div className="col-span-2">Date</div>
                  <div className="col-span-2">Student</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Check-In</div>
                  <div className="col-span-2">Check-Out</div>
                  <div className="col-span-1">Hours</div>
                  <div className="col-span-1">Cost</div>
                </div>

                <div className="max-h-[500px] overflow-y-auto">
                  {filteredRecords.map((record) => {
                    const checkInTime = record.checkIn.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    const checkOutTime = record.checkOut
                      ? record.checkOut.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                      : "-"
                    const hours = record.checkOut ? calculateHours(record.checkIn, record.checkOut).toFixed(1) : "-"

                    return (
                      <div
                        key={record.id}
                        className="grid grid-cols-12 gap-2 p-4 border-b items-center hover:bg-muted/20"
                      >
                        <div className="col-span-2">{record.date.toLocaleDateString()}</div>
                        <div className="col-span-2">{record.studentName}</div>
                        <div className="col-span-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              record.type === "full-time"
                                ? "bg-blue-100 text-blue-800"
                                : record.type === "half-day"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {record.type.charAt(0).toUpperCase() + record.type.slice(1)}
                          </span>
                        </div>
                        <div className="col-span-2">{checkInTime}</div>
                        <div className="col-span-2">{checkOutTime}</div>
                        <div className="col-span-1">{hours}</div>
                        <div className="col-span-1">${record.cost.toFixed(2)}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="calendar">
              <div className="border rounded-lg p-4 text-center">
                <p className="text-muted-foreground">Calendar view is available in the full version.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredRecords.length} attendance records for May 2023
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Previous Month
            </Button>
            <Button variant="outline" size="sm">
              Next Month
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
          <CardDescription>Breakdown by attendance type and student</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4">Attendance by Type</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Full-time</span>
                  </div>
                  <span className="font-medium">
                    {attendanceRecords.filter((r) => r.type === "full-time").length} days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Half-day</span>
                  </div>
                  <span className="font-medium">
                    {attendanceRecords.filter((r) => r.type === "half-day").length} days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span>Hourly</span>
                  </div>
                  <span className="font-medium">
                    {attendanceRecords.filter((r) => r.type === "hourly").length} days
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Attendance by Student</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Sophie Johnson</span>
                  <span className="font-medium">
                    {attendanceRecords.filter((r) => r.studentId === "child1").length} days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ethan Johnson</span>
                  <span className="font-medium">
                    {attendanceRecords.filter((r) => r.studentId === "child2").length} days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
