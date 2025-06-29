"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Download, Printer, Send, Check } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function InvoiceDetailPage({ params }: { params: { id: string } }) {
  const invoiceId = params.id

  // Mock invoice data
  const invoice = {
    id: invoiceId,
    number: "INV-2023-001",
    student: "Emma Johnson",
    program: "Playful Pups",
    month: "June 2023",
    amount: 700,
    status: "Pending",
    dueDate: "June 1, 2023",
    paidDate: null,
    issuedDate: "May 15, 2023",
    items: [
      {
        description: "Monthly Tuition - Playful Pups (Preschool)",
        quantity: 1,
        rate: 700,
        amount: 700,
      },
    ],
    parent: {
      name: "John & Sarah Johnson",
      email: "johnson@example.com",
      address: "456 Oak Street, Anytown, ST 12345",
      phone: "(555) 987-6543",
    },
    daycare: {
      name: "Sunshine Day Care",
      address: "123 Sunshine Avenue, Anytown, ST 12345",
      phone: "(555) 123-4567",
      email: "info@sunshinedaycare.com",
    },
  }

  return (
    <div className="container py-10">
      <Link href="/admin/billing">
        <Button variant="ghost">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Invoices
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Invoice Details</CardTitle>
            <CardDescription>Information about invoice #{invoice.number}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Daycare Information</h3>
                <p>{invoice.daycare.name}</p>
                <p>{invoice.daycare.address}</p>
                <p>Phone: {invoice.daycare.phone}</p>
                <p>Email: {invoice.daycare.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Billing To</h3>
                <p>{invoice.parent.name}</p>
                <p>{invoice.parent.address}</p>
                <p>Phone: {invoice.parent.phone}</p>
                <p>Email: {invoice.parent.email}</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="text-lg font-semibold">Invoice Summary</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Rate
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.description}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.quantity}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${item.rate}</td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${item.amount}</td>
                      </tr>
                    ))}
                    <tr>
                      <td
                        colSpan={3}
                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right font-semibold"
                      >
                        Total:
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${invoice.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>
              <Send className="mr-2 h-4 w-4" />
              Send Invoice
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoice Actions</CardTitle>
            <CardDescription>Manage invoice options</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print Invoice
            </Button>
            <Button variant="secondary">
              {invoice.status === "Pending" ? (
                <>
                  Mark as Paid
                  <Check className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Paid"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
