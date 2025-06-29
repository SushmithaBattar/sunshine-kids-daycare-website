"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, CreditCard, MessageSquare } from "lucide-react"
import type { AttendanceRecord } from "@/lib/types"
import { calculateHours } from "@/lib/attendance"

export default function ParentDashboardPage() {
  // Mock attendance records for the child
  const attendanceRecords: AttendanceRecord[] = [
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
  ]

  // Calculate total hours and cost
  const totalHours = attendanceRecords.reduce((sum, record) => {
    return sum + Number.parseFloat(calculateHours(record.checkIn, record.checkOut))
  }, 0)

  const totalCost = attendanceRecords.reduce((sum, record) => sum + record.cost, 0)

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: "evt1",
      title: "Parent-Teacher Conference",
      date: "2023-05-15",
      time: "3:00 PM - 4:00 PM",
    },
    {
      id: "evt2",
      title: "Spring Festival",
      date: "2023-05-20",
      time: "10:00 AM - 2:00 PM",
    },
    {
      id: "evt3",
      title: "Field Trip: Zoo",
      date: "2023-05-25",
      time: "9:00 AM - 3:00 PM",
    },
  ]

  // Mock announcements
  const announcements = [
    {
      id: "ann1",
      title: "Summer Program Registration Open",
      date: "2023-05-01",
      content: "Registration for our summer program is now open. Spaces are limited, so please register early.",
    },
    {
      id: "ann2",
      title: "New Menu Items",
      date: "2023-04-28",
      content: "We've updated our lunch menu with new healthy options. Check out the new menu in the parent portal.",
    },
    {
      id: "ann3",
      title: "Closed for Memorial Day",
      date: "2023-04-25",
      content: "Reminder: We will be closed on Monday, May 29th for Memorial Day.",
    },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-amber-800">Parent Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Children</CardTitle>
            <CardDescription>Your registered children</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-800 font-bold">SJ</span>
                </div>
                <div>
                  <h3 className="font-medium">Sophie Johnson</h3>
                  <p className="text-sm text-muted-foreground">Preschool - Room 3</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-bold">EJ</span>
                </div>
                <div>
                  <h3 className="font-medium">Ethan Johnson</h3>
                  <p className="text-sm text-muted-foreground">Toddler - Room 1</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Attendance</CardTitle>
            <CardDescription>This week's attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Total Days:</span>
                <span className="font-medium">{attendanceRecords.length} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Total Hours:</span>
                <span className="font-medium">{totalHours.toFixed(1)} hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Current Balance:</span>
                <span className="font-medium">${totalCost.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/parent-portal/attendance/report">View Full Report</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Billing</CardTitle>
            <CardDescription>Current billing status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Monthly Tuition:</span>
                <span className="font-medium">$700.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Last Payment:</span>
                <span className="font-medium">$700.00 (05/01/2023)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Next Due Date:</span>
                <span className="font-medium">06/01/2023</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/parent-portal/payments/make-payment">
                <CreditCard className="mr-2 h-4 w-4" />
                Make a Payment
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events in the next 30 days</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/parent-portal/calendar">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  View Full Calendar
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <div className="min-w-[60px] text-center">
                    <div className="text-sm font-medium">{event.date.split("-")[2]}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleString("default", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Recent communications</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/parent-portal/messages">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View All Messages
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Badge className="mt-1">New</Badge>
                <div>
                  <h3 className="font-medium">Field Trip Permission</h3>
                  <p className="text-sm text-muted-foreground">
                    We're planning a field trip to the local zoo on May 25th. Please sign and return the permission
                    slip.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">May 5, 2023</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[40px]"></div>
                <div>
                  <h3 className="font-medium">Weekly Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Please find attached our weekly newsletter with updates on activities and events.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">May 8, 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Announcements</CardTitle>
          <CardDescription>Important daycare announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="ann1">
            <TabsList className="mb-4">
              {announcements.map((ann) => (
                <TabsTrigger key={ann.id} value={ann.id}>
                  {ann.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {announcements.map((ann) => (
              <TabsContent key={ann.id} value={ann.id}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{ann.title}</h3>
                    <span className="text-sm text-muted-foreground">{ann.date}</span>
                  </div>
                  <p>{ann.content}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
