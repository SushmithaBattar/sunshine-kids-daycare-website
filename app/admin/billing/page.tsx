"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Search, Download, Plus, FileText, Check, X } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BillingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [date, setDate] = useState<Date>()
  const [showNewInvoiceDialog, setShowNewInvoiceDialog] = useState(false)

  // Mock invoices
  const invoices = [
    {
      id: "inv1",
      student: "Emma Johnson",
      program: "Playful Pups",
      month: "June 2023",
      amount: 700,
      status: "Pending",
      dueDate: "June 1, 2023",
      paidDate: null,
    },
    {
      id: "inv2",
      student: "Noah Williams",
      program: "Wise Owls",
      month: "June 2023",
      amount: 700,
      status: "Paid",
      dueDate: "June 1, 2023",
      paidDate: "June 1, 2023",
    },
    {
      id: "inv3",
      student: "Olivia Brown",
      program: "Curious Kittens",
      month: "June 2023",
      amount: 400,
      status: "Pending",
      dueDate: "June 1, 2023",
      paidDate: null,
    },
    {
      id: "inv4",
      student: "Liam Davis",
      program: "Little Cubs",
      month: "June 2023",
      amount: 700,
      status: "Overdue",
      dueDate: "June 1, 2023",
      paidDate: null,
    },
    {
      id: "inv5",
      student: "Sophia Miller",
      program: "Wise Owls",
      month: "June 2023",
      amount: 700,
      status: "Paid",
      dueDate: "June 1, 2023",
      paidDate: "June 1, 2023",
    },
  ]

  // Filter invoices based on search query and active tab
  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.month.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "pending") return matchesSearch && invoice.status === "Pending"
    if (activeTab === "paid") return matchesSearch && invoice.status === "Paid"
    if (activeTab === "overdue") return matchesSearch && invoice.status === "Overdue"

    return matchesSearch
  })

  // Calculate totals
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const paidAmount = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const pendingAmount = invoices
    .filter((invoice) => invoice.status === "Pending")
    .reduce((sum, invoice) => sum + invoice.amount, 0)
  const overdueAmount = invoices
    .filter((invoice) => invoice.status === "Overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0)

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Billing Management</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="text-2xl font-bold">${totalAmount.toLocaleString()}</div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xs text-muted-foreground">Current month</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium">Paid</CardTitle>
            <div className="text-2xl font-bold">${paidAmount.toLocaleString()}</div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xs text-muted-foreground">
              {invoices.filter((invoice) => invoice.status === "Paid").length} invoices paid
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <div className="text-2xl font-bold">${pendingAmount.toLocaleString()}</div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xs text-muted-foreground">
              {invoices.filter((invoice) => invoice.status === "Pending").length} invoices pending
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <div className="text-2xl font-bold">${overdueAmount.toLocaleString()}</div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xs text-muted-foreground">
              {invoices.filter((invoice) => invoice.status === "Overdue").length} invoices overdue
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search invoices..."
              className="w-[200px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Dialog open={showNewInvoiceDialog} onOpenChange={setShowNewInvoiceDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>Create a new invoice for a student</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="student">Student</Label>
                  <Select>
                    <SelectTrigger id="student">
                      <SelectValue placeholder="Select student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Emma Johnson</SelectItem>
                      <SelectItem value="2">Noah Williams</SelectItem>
                      <SelectItem value="3">Olivia Brown</SelectItem>
                      <SelectItem value="4">Liam Davis</SelectItem>
                      <SelectItem value="5">Sophia Miller</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="month">Month</Label>
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="june-2023">June 2023</SelectItem>
                      <SelectItem value="july-2023">July 2023</SelectItem>
                      <SelectItem value="august-2023">August 2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                    <Input id="amount" className="pl-7" defaultValue="700" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewInvoiceDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowNewInvoiceDialog(false)}>Create Invoice</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="grid grid-cols-12 gap-2 p-4 border-b font-medium">
          <div className="col-span-1">ID</div>
          <div className="col-span-2">Student</div>
          <div className="col-span-2">Program</div>
          <div className="col-span-2">Month</div>
          <div className="col-span-1">Amount</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Due Date</div>
          <div className="col-span-2">Actions</div>
        </div>

        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="grid grid-cols-12 gap-2 p-4 border-b items-center">
            <div className="col-span-1">{invoice.id}</div>
            <div className="col-span-2">{invoice.student}</div>
            <div className="col-span-2">{invoice.program}</div>
            <div className="col-span-2">{invoice.month}</div>
            <div className="col-span-1">${invoice.amount}</div>
            <div className="col-span-1">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  invoice.status === "Paid"
                    ? "bg-green-100 text-green-800"
                    : invoice.status === "Pending"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {invoice.status}
              </span>
            </div>
            <div className="col-span-1">{invoice.dueDate}</div>
            <div className="col-span-2 flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/admin/billing/${invoice.id}`}>
                  <FileText className="h-4 w-4" />
                </Link>
              </Button>
              {invoice.status !== "Paid" && (
                <Button variant="ghost" size="sm" className="text-green-600">
                  <Check className="h-4 w-4" />
                </Button>
              )}
              <Button variant="ghost" size="sm" className="text-red-600">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
