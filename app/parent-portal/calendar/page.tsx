"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Download, Filter, Printer } from "lucide-react"

// Mock events data
const events = [
  {
    id: "evt1",
    title: "Parent-Teacher Conference",
    date: "2023-05-15",
    time: "3:00 PM - 4:00 PM",
    location: "Classroom 3",
    type: "meeting",
  },
  {
    id: "evt2",
    title: "Spring Festival",
    date: "2023-05-20",
    time: "10:00 AM - 2:00 PM",
    location: "Playground",
    type: "event",
  },
  {
    id: "evt3",
    title: "Field Trip: Zoo",
    date: "2023-05-25",
    time: "9:00 AM - 3:00 PM",
    location: "City Zoo",
    type: "field-trip",
  },
  {
    id: "evt4",
    title: "Daycare Closed - Memorial Day",
    date: "2023-05-29",
    time: "All Day",
    location: "-",
    type: "closure",
  },
  {
    id: "evt5",
    title: "Summer Program Registration Deadline",
    date: "2023-05-31",
    time: "5:00 PM",
    location: "Online",
    type: "deadline",
  },
  {
    id: "evt6",
    title: "Art Exhibition",
    date: "2023-06-05",
    time: "4:00 PM - 6:00 PM",
    location: "Main Hall",
    type: "event",
  },
  {
    id: "evt7",
    title: "Vaccination Clinic",
    date: "2023-06-10",
    time: "9:00 AM - 12:00 PM",
    location: "Health Room",
    type: "health",
  },
  {
    id: "evt8",
    title: "End of Year Celebration",
    date: "2023-06-15",
    time: "1:00 PM - 3:00 PM",
    location: "Playground",
    type: "event",
  },
]

// Generate calendar days
const generateCalendarDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ day: null, events: [] })
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    const dateString = date.toISOString().split("T")[0]
    const dayEvents = events.filter((event) => event.date === dateString)
    days.push({ day, events: dayEvents })
  }

  return days
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState("month")
  const [filter, setFilter] = useState("all")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const calendarDays = generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth())

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "event":
        return "bg-green-100 text-green-800 border-green-200"
      case "field-trip":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "closure":
        return "bg-red-100 text-red-800 border-red-200"
      case "deadline":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "health":
        return "bg-teal-100 text-teal-800 border-teal-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/parent-portal/dashboard">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-amber-800">Calendar</h1>
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

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={previousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-xl font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="list">List</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter events" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="meeting">Meetings</SelectItem>
                    <SelectItem value="event">Events</SelectItem>
                    <SelectItem value="field-trip">Field Trips</SelectItem>
                    <SelectItem value="closure">Closures</SelectItem>
                    <SelectItem value="deadline">Deadlines</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Day headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="p-2 text-center font-medium text-sm">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`min-h-[120px] border rounded-md p-1 ${day.day ? "bg-white" : "bg-gray-50"} ${
                  day.day === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear()
                    ? "ring-2 ring-amber-500"
                    : ""
                }`}
              >
                {day.day && (
                  <>
                    <div className="text-right text-sm font-medium p-1">{day.day}</div>
                    <div className="space-y-1">
                      {day.events
                        .filter((event) => filter === "all" || event.type === filter)
                        .slice(0, 3)
                        .map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded border ${getEventTypeColor(event.type)} truncate`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                      {day.events.length > 3 && (
                        <div className="text-xs text-center text-muted-foreground">+{day.events.length - 3} more</div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Events for the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .filter((event) => filter === "all" || event.type === filter)
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-3 border rounded-lg hover:bg-muted/20">
                  <div
                    className={`w-2 h-full self-stretch rounded ${getEventTypeColor(event.type).split(" ")[0]}`}
                  ></div>
                  <div className="flex-1">
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()} • {event.time}
                    </div>
                    <div className="text-sm mt-1">{event.location}</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
