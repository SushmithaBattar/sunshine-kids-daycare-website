"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Plus, Search, Edit, Trash2, Send } from "lucide-react"
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnnouncementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewDialog, setShowNewDialog] = useState(false)

  // Mock announcements
  const announcements = [
    {
      id: "ann1",
      title: "Parent Night Announcement",
      date: "June 10, 2023",
      recipients: "All Parents",
      status: "Sent",
      content:
        "Join us for Parent Night on June 15th at 7:00 PM. We'll be discussing our summer program and activities.",
    },
    {
      id: "ann2",
      title: "Summer Program Registration",
      date: "June 5, 2023",
      recipients: "All Parents",
      status: "Sent",
      content:
        "Registration for our summer program is now open. Please register by June 20th to secure your child's spot.",
    },
    {
      id: "ann3",
      title: "Center Closed - Staff Development",
      date: "May 25, 2023",
      recipients: "All Parents",
      status: "Sent",
      content:
        "The center will be closed on June 26th for staff professional development. We apologize for any inconvenience.",
    },
    {
      id: "ann4",
      title: "Health Check Reminder",
      date: "May 15, 2023",
      recipients: "All Parents",
      status: "Sent",
      content: "Please remember to complete your child's health check form before drop-off each morning.",
    },
    {
      id: "ann5",
      title: "Fourth of July Celebration",
      date: "June 15, 2023",
      recipients: "Draft",
      status: "Draft",
      content:
        "Join us for our Fourth of July celebration on July 3rd. We'll have special activities and a picnic lunch.",
    },
  ]

  // Filter announcements based on search query
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Announcements</h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search announcements..."
              className="w-[250px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Announcement</DialogTitle>
                <DialogDescription>Create and send an announcement to parents</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Announcement Title</Label>
                  <Input id="title" placeholder="Enter announcement title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipients">Recipients</Label>
                  <Select>
                    <SelectTrigger id="recipients">
                      <SelectValue placeholder="Select recipients" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Parents</SelectItem>
                      <SelectItem value="infants">Infants Parents</SelectItem>
                      <SelectItem value="toddlers">Toddlers Parents</SelectItem>
                      <SelectItem value="preschool">Preschool Parents</SelectItem>
                      <SelectItem value="prek">Pre-K Parents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Announcement Content</Label>
                  <Textarea id="content" placeholder="Enter announcement content" className="min-h-[200px]" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewDialog(false)}>
                  Save as Draft
                </Button>
                <Button onClick={() => setShowNewDialog(false)}>
                  <Send className="mr-2 h-4 w-4" />
                  Send Announcement
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{announcement.title}</CardTitle>
                  <CardDescription>
                    {announcement.date} • {announcement.recipients}
                  </CardDescription>
                </div>
                <div className="flex items-center">
                  {announcement.status === "Draft" ? (
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                      Draft
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Sent
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/admin/announcements/${announcement.id}`}>View Details</Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="mr-1 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="mr-1 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
