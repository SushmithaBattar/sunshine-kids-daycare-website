"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Edit, Clock, User, Phone, Mail, Home, Download, Printer } from "lucide-react"
import type { AttendanceRecord } from "@/lib/types"

export default function StudentPage({ params }: { params: { id: string } }) {
  const studentId = params.id

  // Mock student data
  const student = {
    id: studentId,
    firstName: "Emma",
    lastName: "Johnson",
    dateOfBirth: new Date("2020-05-15"),
    age: "3 years",
    program: "Playful Pups",
    attendanceType: "full-time",
    enrollmentDate: new Date("2022-01-10"),
    allergies: "None",
    emergencyContact: "John Johnson (Father) - (555) 987-6543",
    photo: "/student-photo.png",
    parentInfo: {
      name: "John & Sarah Johnson",
      phone: "(555) 987-6543",
      email: "johnson@example.com",
      address: "456 Oak Street, Anytown, ST 12345",
    },
  }

  // Mock attendance records
  const attendanceRecords: AttendanceRecord[] = [
    {
      id: "att1",
      studentId: studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      date: new Date("2023-06-01"),
      checkIn: new Date("2023-06-01T08:15:00"),
      checkOut: new Date("2023-06-01T17:00:00"),
      type: "full-time" as const,
      cost: 31.82,
    },
    {
      id: "att2",
      studentId: studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      date: new Date("2023-06-02"),
      checkIn: new Date("2023-06-02T08:30:00"),
      checkOut: new Date("2023-06-02T16:45:00"),
      type: "full-time" as const,
      cost: 31.82,
    },
    {
      id: "att3",
      studentId: studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      date: new Date("2023-06-05"),
      checkIn: new Date("2023-06-05T08:20:00"),
      checkOut: new Date("2023-06-05T17:10:00"),
      type: "full-time" as const,
      cost: 31.82,
    },
    {
      id: "att4",
      studentId: studentId,
      studentName: `${student.firstName} ${student.lastName}`,
      date: new Date(),
      checkIn: new Date(new Date().setHours(8, 15)),
      checkOut: null,
      type: "full-time" as const,
      cost: 0,
    },
  ]

  // Mock invoices
  const invoices = [
    {
      id: "inv1",
      month: "June 2023",
      amount: 700,
      status: "Pending",
      dueDate: "June 1, 2023",
      paidDate: null,
    },
    {
      id: "inv2",
      month: "May 2023",
      amount: 700,
      status: "Paid",
      dueDate: "May 1, 2023",
      paidDate: "May 1, 2023",
    },
    {
      id: "inv3",
      month: "April 2023",
      amount: 700,
      status: "Paid",
      dueDate: "April 1, 2023",
      paidDate: "April 1, 2023",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Student Profile</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>
                    {student.firstName} {student.lastName}
                  </CardTitle>
                  <CardDescription>
                    {student.program} • {student.age}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/admin/students/${student.id}/edit`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-amber-300">
                  <Image
                    src={student.photo || "/placeholder.svg?height=128&width=128&query=student"}
                    alt={`${student.firstName} ${student.lastName}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Personal Information</p>
                    <p className="text-sm text-muted-foreground">
                      Date of Birth: {student.dateOfBirth.toLocaleDateString()}
                    </p>
                    <p className="text-sm text-muted-foreground">Age: {student.age}</p>
                    <p className="text-sm text-muted-foreground">Allergies: {student.allergies}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Enrollment</p>
                    <p className="text-sm text-muted-foreground">Program: {student.program}</p>
                    <p className="text-sm text-muted-foreground">
                      Type: {student.attendanceType.charAt(0).toUpperCase() + student.attendanceType.slice(1)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Since: {student.enrollmentDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Emergency Contact</p>
                    <p className="text-sm text-muted-foreground">{student.emergencyContact}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Parent/Guardian Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">{student.parentInfo.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm">{student.parentInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm">{student.parentInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm">{student.parentInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="attendance" className="space-y-4">
            <TabsList>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="attendance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance History</CardTitle>
                  <CardDescription>View and manage attendance records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg">
                    <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium">
                      <div className="col-span-2">Date</div>
                      <div className="col-span-3">Check In</div>
                      <div className="col-span-3">Check Out</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">Cost</div>
                    </div>

                    {attendanceRecords.map((record) => (
                      <div
                        key={record.id}
                        className="grid grid-cols-12 gap-2 p-4 border-b last:border-0 hover:bg-muted/50"
                      >
                        <div className="col-span-2">{record.date.toLocaleDateString()}</div>
                        <div className="col-span-3">
                          {record.checkIn.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                        <div className="col-span-3">
                          {record.checkOut ? (
                            record.checkOut.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                          ) : (
                            <span className="text-amber-600 font-medium">Still Present</span>
                          )}
                        </div>
                        <div className="col-span-2">{record.type.charAt(0).toUpperCase() + record.type.slice(1)}</div>
                        <div className="col-span-2">{record.checkOut ? `$${record.cost.toFixed(2)}` : "-"}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline">
                  <Clock className="mr-2 h-4 w-4" />
                  Log Attendance
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Records
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="billing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>View and manage invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg">
                    <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium">
                      <div className="col-span-3">Month</div>
                      <div className="col-span-3">Amount</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Due Date</div>
                      <div className="col-span-2">Paid Date</div>
                    </div>

                    {invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="grid grid-cols-12 gap-2 p-4 border-b last:border-0 hover:bg-muted/50"
                      >
                        <div className="col-span-3">{invoice.month}</div>
                        <div className="col-span-3">${invoice.amount.toFixed(2)}</div>
                        <div className="col-span-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              invoice.status === "Paid" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </div>
                        <div className="col-span-2">{invoice.dueDate}</div>
                        <div className="col-span-2">{invoice.paidDate || "-"}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Invoice
                </Button>
                <Button variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Statement
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Student Reports</CardTitle>
                  <CardDescription>View and generate reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto flex-col items-start p-4 justify-start">
                      <div className="font-medium mb-1">Attendance Summary</div>
                      <div className="text-sm text-muted-foreground text-left">
                        Generate a report of attendance patterns and statistics
                      </div>
                    </Button>

                    <Button variant="outline" className="h-auto flex-col items-start p-4 justify-start">
                      <div className="font-medium mb-1">Billing Summary</div>
                      <div className="text-sm text-muted-foreground text-left">
                        Generate a report of billing history and payment status
                      </div>
                    </Button>

                    <Button variant="outline" className="h-auto flex-col items-start p-4 justify-start">
                      <div className="font-medium mb-1">Development Report</div>
                      <div className="text-sm text-muted-foreground text-left">
                        View developmental milestones and progress
                      </div>
                    </Button>

                    <Button variant="outline" className="h-auto flex-col items-start p-4 justify-start">
                      <div className="font-medium mb-1">Incident Report</div>
                      <div className="text-sm text-muted-foreground text-left">
                        View any reported incidents or concerns
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
