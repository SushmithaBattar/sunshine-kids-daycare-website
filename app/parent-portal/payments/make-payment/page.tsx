"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, CreditCard, LucideCheck } from "lucide-react"

export default function MakePaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [amount, setAmount] = useState("250")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="container py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto my-4 bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <LucideCheck className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Payment Successful!</CardTitle>
              <CardDescription>Your payment of ${amount} has been processed successfully.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/30">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="font-medium">TXN-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span className="font-medium">
                    {paymentMethod === "credit-card"
                      ? "Credit Card"
                      : paymentMethod === "bank-transfer"
                        ? "Bank Transfer"
                        : "PayPal"}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <Link href="/parent-portal/payments">View Payment History</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/parent-portal/dashboard">Return to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/parent-portal/dashboard">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Make a Payment</h1>
      </div>

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Make a secure payment for your child's tuition and fees.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="student">Student</Label>
                <Select defaultValue="sophie">
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sophie">Sophie Johnson</SelectItem>
                    <SelectItem value="ethan">Ethan Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment-type">Payment Type</Label>
                <Select defaultValue="tuition">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tuition">Monthly Tuition</SelectItem>
                    <SelectItem value="weekly">Weekly Tuition</SelectItem>
                    <SelectItem value="activity">Activity Fee</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  step="0.01"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="bank-transfer">Bank Transfer</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>
                  <TabsContent value="credit-card" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                  </TabsContent>
                  <TabsContent value="bank-transfer" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="account-name">Account Name</Label>
                      <Input id="account-name" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input id="account-number" placeholder="123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routing-number">Routing Number</Label>
                      <Input id="routing-number" placeholder="123456789" />
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="paypal-email">PayPal Email</Label>
                      <Input id="paypal-email" type="email" placeholder="email@example.com" />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" required />
                  <span>I agree to the terms and conditions</span>
                </Label>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSubmit} disabled={isProcessing}>
              {isProcessing ? (
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
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ${amount}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
