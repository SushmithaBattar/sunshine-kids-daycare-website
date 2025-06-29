"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CreditCard, FileImage, FileText, MessageSquare, Settings, Users, Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { AttendanceRecord } from "@/lib/types"
import { calculateDailyCost } from "@/lib/attendance"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddStudentDialog, setShowAddStudentDialog] = useState(false)
  const [showCheckInDialog, setShowCheckInDialog] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)
  const [attendanceType, setAttendanceType] = useState<"full-time" | "half-day" | "hourly">("full-time")

  // Mock students data
  const students = [
    {
      id: "1",
      name: "Emma Johnson",
      age: "3 years",
      program: "Playful Pups",
      status: "Active",
      checkInStatus: "Checked In",
    },
    {
      id: "2",
      name: "Noah Williams",
      age: "4 years",
      program: "Wise Owls",
      status: "Active",
      checkInStatus: "Not Present",
    },
    {
      id: "3",
      name: "Olivia Brown",
      age: "2 years",
      program: "Curious Kittens",
      status: "Active",
      checkInStatus: "Checked In",
    },
    {
      id: "4",
      name: "Liam Davis",
      age: "1 year",
      program: "Little Cubs",
      status: "Active",
      checkInStatus: "Not Present",
    },
    {
      id: "5",
      name: "Sophia Miller",
      age: "4 years",
      program: "Wise Owls",
      status: "Active",
      checkInStatus: "Checked In",
    },
  ]

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Mock attendance records
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: "att1",
      studentId: "1",
      studentName: "Emma Johnson",
      date: new Date(),
      checkIn: new Date(new Date().setHours(8, 15)),
      checkOut: null,
      type: "full-time",
      cost: 0,
    },
    {
      id: "att2",
      studentId: "3",
      studentName: "Olivia Brown",
      date: new Date(),
      checkIn: new Date(new Date().setHours(8, 30)),
      checkOut: null,
      type: "half-day",
      cost: 0,
    },
    {
      id: "att3",
      studentId: "5",
      studentName: "Sophia Miller",
      date: new Date(),
      checkIn: new Date(new Date().setHours(9, 0)),
      checkOut: null,
      type: "full-time",
      cost: 0,
    },
  ])

  // Handle check-in
  const handleCheckIn = (studentId: string) => {
    const student = students.find((s) => s.id === studentId)
    if (student) {
      setSelectedStudent(studentId)
      setShowCheckInDialog(true)
    }
  }

  // Handle check-out
  const handleCheckOut = (recordId: string) => {
    setAttendanceRecords((prevRecords) =>
      prevRecords.map((record) => {
        if (record.id === recordId) {
          const checkOut = new Date()
          const hours = (checkOut.getTime() - record.checkIn.getTime()) / (1000 * 60 * 60)
          const cost = calculateDailyCost(record.type, hours)
          return {
            ...record,
            checkOut,
            cost,
          }
        }
        return record
      }),
    )
  }

  // Submit check-in
  const submitCheckIn = () => {
    if (selectedStudent) {
      const student = students.find((s) => s.id === selectedStudent)
      if (student) {
        const newRecord: AttendanceRecord = {
          id: `att${attendanceRecords.length + 1}`,
          studentId: selectedStudent,
          studentName: student.name,
          date: new Date(),
          checkIn: new Date(),
          checkOut: null,
          type: attendanceType,
          cost: 0,
        }
        setAttendanceRecords([...attendanceRecords, newRecord])
        setShowCheckInDialog(false)
      }
    }
  }

  // Handle add student (mock functionality)
  const handleAddStudent = () => {
    setShowAddStudentDialog(false)
    // In a real app, this would add the student to the database
  }

  // Handle download reports (mock functionality)
  const handleDownloadReports = () => {
    alert("Downloading reports... In a real application, this would generate and download reports.")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={handleDownloadReports}>
              <FileText className="mr-2 h-4 w-4" />
              Download Reports
            </Button>
            <Button variant="outline" asChild>
              <a href="/admin/settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">+5 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$48,500</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Registrations</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Requires review</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Enrollment Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="relative h-80">
                    <Image
                      src="/enrollment-trends-over-time.png"
                      alt="Enrollment Chart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest updates from the day care</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                        <Image
                          src="/diverse-classroom-teacher.png"
                          alt="Teacher Avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Ms. Johnson uploaded 15 new photos</p>
                        <p className="text-sm text-muted-foreground">Playful Pups classroom • 35 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                        <Image src="/diverse-parent-avatars.png" alt="Parent Avatar" fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">New registration: Emma Thompson</p>
                        <p className="text-sm text-muted-foreground">Little Cubs classroom • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                        <Image src="/stylized-admin-icon.png" alt="Admin Avatar" fill className="object-cover" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Payment reminder sent to 5 families</p>
                        <p className="text-sm text-muted-foreground">System notification • 3 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage photos, announcements, and website content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="p-4">
                      <FileImage className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Photo Gallery</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                      Upload and organize photos for parents to view
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/admin/photos">Manage Photos</a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <MessageSquare className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Announcements</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                      Create and send announcements to parents
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/admin/announcements">Manage Announcements</a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Website Content</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                      Update website pages, programs, and information
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="/admin/website">Edit Website</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-4">Recent Content Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-4">
                          <Image src="/diverse-photo-gallery.png" alt="Photo Gallery" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Summer Fun Album</p>
                          <p className="text-xs text-muted-foreground">15 photos • Added 2 days ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="/admin/photos/summer-fun">View</a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-4">
                          <Image src="/community-announcement-board.png" alt="Announcement" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Parent Night Announcement</p>
                          <p className="text-xs text-muted-foreground">Sent to 127 parents • 3 days ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="/admin/announcements/parent-night">View</a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-4">
                          <Image src="/website-refresh.png" alt="Website Update" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Updated Programs Page</p>
                          <p className="text-xs text-muted-foreground">Website change • 1 week ago</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="/admin/website/programs">View</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="/admin/content/new">Create New Content</a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage student information, attendance, and records</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      All Students
                    </Button>
                    <Button variant="ghost" size="sm">
                      Little Cubs
                    </Button>
                    <Button variant="ghost" size="sm">
                      Curious Kittens
                    </Button>
                    <Button variant="ghost" size="sm">
                      Playful Pups
                    </Button>
                    <Button variant="ghost" size="sm">
                      Wise Owls
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search students..."
                        className="w-[200px] pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Dialog open={showAddStudentDialog} onOpenChange={setShowAddStudentDialog}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Plus className="mr-1 h-4 w-4" /> Add Student
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Student</DialogTitle>
                          <DialogDescription>Enter the student's information below.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="First name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Last name" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="dob">Date of Birth</Label>
                              <Input id="dob" type="date" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="program">Program</Label>
                              <Select>
                                <SelectTrigger id="program">
                                  <SelectValue placeholder="Select program" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="little-cubs">Little Cubs</SelectItem>
                                  <SelectItem value="curious-kittens">Curious Kittens</SelectItem>
                                  <SelectItem value="playful-pups">Playful Pups</SelectItem>
                                  <SelectItem value="wise-owls">Wise Owls</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="attendanceType">Attendance Type</Label>
                            <Select>
                              <SelectTrigger id="attendanceType">
                                <SelectValue placeholder="Select attendance type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="half-day">Half-day</SelectItem>
                                <SelectItem value="hourly">Hourly</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentInfo">Parent/Guardian Information</Label>
                            <Input id="parentInfo" placeholder="Parent/Guardian name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactInfo">Contact Information</Label>
                            <Input id="contactInfo" placeholder="Email or phone number" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setShowAddStudentDialog(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleAddStudent}>Add Student</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="border rounded-lg">
                  <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium">
                    <div className="col-span-1">#</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Age</div>
                    <div className="col-span-2">Program</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>

                  {filteredStudents.map((student, index) => (
                    <div key={student.id} className="grid grid-cols-12 gap-2 p-4 border-b items-center">
                      <div className="col-span-1">{student.id}</div>
                      <div className="col-span-3 flex items-center">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={`/playful-park-afternoon.png?height=32&width=32&query=child${index}`}
                            alt={`Student ${index}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>{student.name}</span>
                      </div>
                      <div className="col-span-2">{student.age}</div>
                      <div className="col-span-2">{student.program}</div>
                      <div className="col-span-2">
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                          {student.status}
                        </span>
                      </div>
                      <div className="col-span-2 flex space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/admin/students/${student.id}`}>View</a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/admin/students/${student.id}/edit`}>Edit</a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    1
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                    2
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                    3
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Management</CardTitle>
                <CardDescription>Track student check-ins and check-outs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Today's Attendance</h3>
                  <Dialog open={showCheckInDialog} onOpenChange={setShowCheckInDialog}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-1 h-4 w-4" /> Check In Student
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Student Check-In</DialogTitle>
                        <DialogDescription>Record a student's arrival.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="student">Select Student</Label>
                          <Select onValueChange={setSelectedStudent}>
                            <SelectTrigger id="student">
                              <SelectValue placeholder="Select student" />
                            </SelectTrigger>
                            <SelectContent>
                              {students
                                .filter((s) => !attendanceRecords.some((r) => r.studentId === s.id && !r.checkOut))
                                .map((student) => (
                                  <SelectItem key={student.id} value={student.id}>
                                    {student.name}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="attendanceType">Attendance Type</Label>
                          <Select onValueChange={(value: any) => setAttendanceType(value)}>
                            <SelectTrigger id="attendanceType">
                              <SelectValue placeholder="Select attendance type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time ($700/month)</SelectItem>
                              <SelectItem value="half-day">Half-day ($400/month)</SelectItem>
                              <SelectItem value="hourly">Hourly ($5/hour)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="checkInTime">Check-In Time</Label>
                          <Input id="checkInTime" type="time" defaultValue={new Date().toTimeString().slice(0, 5)} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Notes</Label>
                          <Input id="notes" placeholder="Any special notes for today" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setShowCheckInDialog(false)}>
                          Cancel
                        </Button>
                        <Button onClick={submitCheckIn}>Check In</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border rounded-lg">
                  <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium">
                    <div className="col-span-3">Student</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Check-In</div>
                    <div className="col-span-2">Check-Out</div>
                    <div className="col-span-1">Hours</div>
                    <div className="col-span-2">Actions</div>
                  </div>

                  {attendanceRecords.map((record) => {
                    const checkInTime = record.checkIn.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    const checkOutTime = record.checkOut
                      ? record.checkOut.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                      : "-"
                    const hours = record.checkOut
                      ? ((record.checkOut.getTime() - record.checkIn.getTime()) / (1000 * 60 * 60)).toFixed(1)
                      : "-"

                    return (
                      <div key={record.id} className="grid grid-cols-12 gap-2 p-4 border-b items-center">
                        <div className="col-span-3">{record.studentName}</div>
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
                        <div className="col-span-2">
                          {!record.checkOut ? (
                            <Button size="sm" onClick={() => handleCheckOut(record.id)}>
                              Check Out
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" asChild>
                              <a href={`/admin/attendance/${record.id}`}>Details</a>
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing Management</CardTitle>
                <CardDescription>Manage payments, invoices, and billing settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <div className="text-2xl font-bold">$48,500</div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs text-muted-foreground">Current month</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
                      <div className="text-2xl font-bold">$3,250</div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs text-muted-foreground">8 invoices pending</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                      <div className="text-2xl font-bold">$750</div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs text-muted-foreground">3 invoices overdue</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Paid</CardTitle>
                      <div className="text-2xl font-bold">$44,500</div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-xs text-muted-foreground">119 invoices paid</div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Rate Configuration</CardTitle>
                    <CardDescription>Configure billing rates for different programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-4 font-medium">Full-time Rate</div>
                        <div className="col-span-4">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                            <Input type="text" className="pl-7" defaultValue="700" />
                          </div>
                        </div>
                        <div className="col-span-4 text-sm text-muted-foreground">Per month, unlimited hours</div>
                      </div>
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-4 font-medium">Half-day Rate</div>
                        <div className="col-span-4">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                            <Input type="text" className="pl-7" defaultValue="400" />
                          </div>
                        </div>
                        <div className="col-span-4 text-sm text-muted-foreground">Per month, up to 4 hours per day</div>
                      </div>
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-4 font-medium">Hourly Rate</div>
                        <div className="col-span-4">
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                            <Input type="text" className="pl-7" defaultValue="5" />
                          </div>
                        </div>
                        <div className="col-span-4 text-sm text-muted-foreground">
                          Per hour, calculated based on attendance
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Rate Changes</Button>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
