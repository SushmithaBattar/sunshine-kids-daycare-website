"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Download, Filter, Plus, Search } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for payments
const mockPayments = [
  {
    id: "PAY-001",
    studentId: "STU-001",
    studentName: "Emma Johnson",
    parentName: "Sarah Johnson",
    amount: 250.0,
    date: "2023-04-15",
    status: "paid",
    method: "credit_card",
    description: "Weekly tuition payment",
  },
  {
    id: "PAY-002",
    studentId: "STU-002",
    studentName: "Noah Williams",
    parentName: "Michael Williams",
    amount: 500.0,
    date: "2023-04-14",
    status: "paid",
    method: "bank_transfer",
    description: "Monthly tuition payment",
  },
  {
    id: "PAY-003",
    studentId: "STU-003",
    studentName: "Olivia Brown",
    parentName: "Jessica Brown",
    amount: 125.0,
    date: "2023-04-16",
    status: "pending",
    method: "check",
    description: "Weekly tuition payment",
  },
  {
    id: "PAY-004",
    studentId: "STU-004",
    studentName: "Liam Davis",
    parentName: "Jennifer Davis",
    amount: 250.0,
    date: "2023-04-10",
    status: "overdue",
    method: "credit_card",
    description: "Weekly tuition payment",
  },
  {
    id: "PAY-005",
    studentId: "STU-005",
    studentName: "Sophia Miller",
    parentName: "David Miller",
    amount: 500.0,
    date: "2023-04-01",
    status: "paid",
    method: "bank_transfer",
    description: "Monthly tuition payment",
  },
  {
    id: "PAY-006",
    studentId: "STU-001",
    studentName: "Emma Johnson",
    parentName: "Sarah Johnson",
    amount: 75.0,
    date: "2023-04-05",
    status: "paid",
    method: "credit_card",
    description: "Field trip fee",
  },
  {
    id: "PAY-007",
    studentId: "STU-006",
    studentName: "Mason Wilson",
    parentName: "Robert Wilson",
    amount: 250.0,
    date: "2023-04-12",
    status: "pending",
    method: "check",
    description: "Weekly tuition payment",
  },
  {
    id: "PAY-008",
    studentId: "STU-007",
    studentName: "Isabella Moore",
    parentName: "Patricia Moore",
    amount: 500.0,
    date: "2023-04-02",
    status: "paid",
    method: "bank_transfer",
    description: "Monthly tuition payment",
  },
]

export default function PaymentsPage() {
  const [payments, setPayments] = useState(mockPayments)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterDate, setFilterDate] = useState<Date | undefined>(undefined)
  const [isAddPaymentOpen, setIsAddPaymentOpen] = useState(false)
  const [newPayment, setNewPayment] = useState({
    studentId: "",
    studentName: "",
    parentName: "",
    amount: "",
    date: new Date(),
    status: "paid",
    method: "credit_card",
    description: "",
  })

  // Filter payments based on search term, status, and date
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || payment.status === filterStatus

    const matchesDate = !filterDate || payment.date === format(filterDate, "yyyy-MM-dd")

    return matchesSearch && matchesStatus && matchesDate
  })

  // Handle adding a new payment
  const handleAddPayment = () => {
    const newPaymentObj = {
      id: `PAY-${String(payments.length + 1).padStart(3, "0")}`,
      studentId: newPayment.studentId,
      studentName: newPayment.studentName,
      parentName: newPayment.parentName,
      amount: Number.parseFloat(newPayment.amount),
      date: format(newPayment.date, "yyyy-MM-dd"),
      status: newPayment.status,
      method: newPayment.method,
      description: newPayment.description,
    }

    setPayments([...payments, newPaymentObj])
    setIsAddPaymentOpen(false)
    setNewPayment({
      studentId: "",
      studentName: "",
      parentName: "",
      amount: "",
      date: new Date(),
      status: "paid",
      method: "credit_card",
      description: "",
    })
  }

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-500">Paid</Badge>
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Overdue</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  // Format payment method for display
  const formatPaymentMethod = (method: string) => {
    switch (method) {
      case "credit_card":
        return "Credit Card"
      case "bank_transfer":
        return "Bank Transfer"
      case "check":
        return "Check"
      default:
        return method
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payment Tracking</h1>
        <AlertDialog open={isAddPaymentOpen} onOpenChange={setIsAddPaymentOpen}>
          <AlertDialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Payment
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[525px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Add New Payment</AlertDialogTitle>
              <AlertDialogDescription>Enter the payment details below.</AlertDialogDescription>
            </AlertDialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    value={newPayment.studentId}
                    onChange={(e) => setNewPayment({ ...newPayment, studentId: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    value={newPayment.studentName}
                    onChange={(e) => setNewPayment({ ...newPayment, studentName: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent Name</Label>
                <Input
                  id="parentName"
                  value={newPayment.parentName}
                  onChange={(e) => setNewPayment({ ...newPayment, parentName: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !newPayment.date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newPayment.date ? format(newPayment.date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newPayment.date}
                        onSelect={(date) => setNewPayment({ ...newPayment, date: date || new Date() })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newPayment.status}
                    onValueChange={(value) => setNewPayment({ ...newPayment, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="method">Payment Method</Label>
                  <Select
                    value={newPayment.method}
                    onValueChange={(value) => setNewPayment({ ...newPayment, method: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit_card">Credit Card</SelectItem>
                      <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newPayment.description}
                  onChange={(e) => setNewPayment({ ...newPayment, description: e.target.value })}
                />
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleAddPayment}>Add Payment</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by student, parent or payment ID..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[240px]">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filterDate ? format(filterDate, "PPP") : "Filter by date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={filterDate} onSelect={setFilterDate} initialFocus />
            </PopoverContent>
          </Popover>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>All Payments</CardTitle>
              <CardDescription>
                Showing {filteredPayments.length} of {payments.length} total payments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Parent</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.length > 0 ? (
                    filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.studentName}</TableCell>
                        <TableCell>{payment.parentName}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{formatPaymentMethod(payment.method)}</TableCell>
                        <TableCell>{payment.description}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-4">
                        No payments found matching your filters
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Payments</CardTitle>
              <CardDescription>Payments made on a weekly basis</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Parent</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments
                    .filter((payment) => payment.description.toLowerCase().includes("weekly"))
                    .map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.studentName}</TableCell>
                        <TableCell>{payment.parentName}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{formatPaymentMethod(payment.method)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Payments</CardTitle>
              <CardDescription>Payments made on a monthly basis</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Parent</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments
                    .filter((payment) => payment.description.toLowerCase().includes("monthly"))
                    .map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.studentName}</TableCell>
                        <TableCell>{payment.parentName}</TableCell>
                        <TableCell>${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell>{formatPaymentMethod(payment.method)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
