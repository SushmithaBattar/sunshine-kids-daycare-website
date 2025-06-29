"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, PlaneIcon as PaperPlaneIcon, Search, Send } from "lucide-react"

// Mock messages data
const mockMessages = [
  {
    id: "msg1",
    from: "Sarah Johnson",
    to: "Sunshine Daycare",
    subject: "Pickup Time Change",
    message: "Hello, I'll be picking up Sophie 30 minutes early tomorrow for a doctor's appointment. Thank you!",
    date: "2023-05-10T14:30:00",
    read: true,
  },
  {
    id: "msg2",
    from: "Sunshine Daycare",
    to: "Sarah Johnson",
    subject: "Weekly Newsletter",
    message:
      "Dear Parents, Please find attached our weekly newsletter with updates on activities, upcoming events, and important announcements.",
    date: "2023-05-08T09:15:00",
    read: true,
  },
  {
    id: "msg3",
    from: "Sunshine Daycare",
    to: "Sarah Johnson",
    subject: "Field Trip Permission",
    message:
      "Dear Parents, We're planning a field trip to the local zoo on May 25th. Please sign and return the attached permission slip by May 20th.",
    date: "2023-05-05T11:45:00",
    read: false,
  },
  {
    id: "msg4",
    from: "Sarah Johnson",
    to: "Sunshine Daycare",
    subject: "Allergy Information Update",
    message:
      "Hello, I wanted to update Sophie's allergy information. She has recently been diagnosed with a mild allergy to strawberries. Please make a note of this in her file.",
    date: "2023-05-03T16:20:00",
    read: true,
  },
  {
    id: "msg5",
    from: "Sunshine Daycare",
    to: "Sarah Johnson",
    subject: "Parent-Teacher Conference",
    message:
      "Dear Ms. Johnson, We would like to schedule a parent-teacher conference to discuss Sophie's progress. Please let us know your availability next week.",
    date: "2023-05-01T10:00:00",
    read: true,
  },
]

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("inbox")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState({
    to: "",
    subject: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)

  // Filter messages based on search term and active tab
  const filteredMessages = mockMessages.filter((message) => {
    const matchesSearch =
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "inbox") {
      return matchesSearch && message.from === "Sunshine Daycare"
    } else if (activeTab === "sent") {
      return matchesSearch && message.from === "Sarah Johnson"
    }
    return matchesSearch
  })

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    // Simulate sending message
    setTimeout(() => {
      setIsSending(false)
      setSentSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setSentSuccess(false)
        setNewMessage({
          to: "",
          subject: "",
          message: "",
        })
        setActiveTab("sent")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/parent-portal/dashboard">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Messages</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-muted/20 ${
                        selectedMessage === message.id ? "bg-muted/30" : ""
                      } ${!message.read ? "bg-amber-50" : ""}`}
                      onClick={() => setSelectedMessage(message.id === selectedMessage ? null : message.id)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-medium ${!message.read ? "font-semibold" : ""}`}>{message.subject}</h3>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">From: {message.from}</div>
                      <p className="text-sm line-clamp-2">{message.message}</p>
                      {selectedMessage === message.id && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Reply
                            </Button>
                            <Button variant="outline" size="sm">
                              Forward
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-muted-foreground">No messages found</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sent messages..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-muted/20 ${
                        selectedMessage === message.id ? "bg-muted/30" : ""
                      }`}
                      onClick={() => setSelectedMessage(message.id === selectedMessage ? null : message.id)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium">{message.subject}</h3>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">To: {message.to}</div>
                      <p className="text-sm line-clamp-2">{message.message}</p>
                      {selectedMessage === message.id && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-muted-foreground">No sent messages found</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle>New Message</CardTitle>
              <CardDescription>Send a message to the daycare staff</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Daycare Administration</SelectItem>
                      <SelectItem value="teacher">Sophie's Teacher</SelectItem>
                      <SelectItem value="director">Daycare Director</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={newMessage.subject}
                    onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={newMessage.message}
                    onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button
                onClick={handleSendMessage}
                disabled={isSending || sentSuccess || !newMessage.subject || !newMessage.message}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : sentSuccess ? (
                  <>
                    <PaperPlaneIcon className="mr-2 h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
