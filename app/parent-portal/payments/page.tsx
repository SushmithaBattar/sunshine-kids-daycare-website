"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, CreditCard, Download, Filter, Search } from "lucide-react"

// Mock payment data
const mockPayments = [
  {
    id: "PAY-001",
    date: "2023-05-01",
    amount: 700.0,
    method: "Credit Card",
    status: "completed",
    description: "Monthly tuition - May 2023",
  },
  {
    id: "PAY-002",
    date: "2023-04-01",
    amount: 700.0,
    method: "Bank Transfer",
    status: "completed",
    description: "Monthly tuition - April 2023",
  },
  {
    id: "PAY-003",
    date: "2023-03-01",
    amount: 700.0,
    method: "Credit Card",
    status: "completed",
    description: "Monthly tuition - March 2023",
  },
  {
    id: "PAY-004",
    date: "2023-02-01",
    amount: 700.0,
    method: "Credit Card",
    status: "completed",
    description: "Monthly tuition - February 2023",
  },
  {
    id: "PAY-005",
    date: "2023-01-01",
    amount: 700.0,
    method: "Bank Transfer",
    status: "completed",
    description: "Monthly tuition - January 2023",
  },
  {
    id: "PAY-006",
    date: "2023-04-15",
    amount: 50.0,
    method: "Credit Card",
    status: "completed",
    description: "Field trip fee",
  },
]

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Filter payments based on search term and status
  const filteredPayments = mockPayments.filter((payment) => {
    const matchesSearch =
      payment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || payment.status === filterStatus

    return matchesSearch && matchesStatus
  })

  // Calculate total payments
  const totalPaid = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0)

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/parent-portal/dashboard">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-amber-800">Payment History</h1>
        </div>
        <Button asChild>
          <Link href="/parent-portal/payments/make-payment">
            <CreditCard className="mr-2 h-4 w-4" />
            Make a Payment
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Total Paid (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalPaid.toFixed(2)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Monthly Tuition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$700.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Next Payment Due</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">June 1, 2023</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View all your past payments</CardDescription>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search payments..."
                  className="pl-8 w-full md:w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          payment.status === "completed"
                            ? "bg-green-500"
                            : payment.status === "pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                      >
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{payment.description}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No payments found matching your filters
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
