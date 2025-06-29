"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Settings</h1>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Center Information</CardTitle>
              <CardDescription>Update your daycare center's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="centerName">Center Name</Label>
                  <Input id="centerName" defaultValue="Sunshine Day Care" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="(555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Sunshine Avenue" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Anytown" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="ST" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" defaultValue="12345" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="info@sunshinedaycare.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
              <CardDescription>Set your center's operating hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Day</h3>
                  <div className="space-y-4">
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    <div>Sunday</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Open</h3>
                  <div className="space-y-4">
                    <div>
                      <Input type="time" defaultValue="07:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="07:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="07:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="07:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="07:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="Closed" disabled />
                    </div>
                    <div>
                      <Input type="time" defaultValue="Closed" disabled />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Close</h3>
                  <div className="space-y-4">
                    <div>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                    <div>
                      <Input type="time" defaultValue="Closed" disabled />
                    </div>
                    <div>
                      <Input type="time" defaultValue="Closed" disabled />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Configure your billing rates and payment options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Program Rates</h3>
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
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Payment Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Payment Due Date</Label>
                      <p className="text-sm text-muted-foreground">When monthly payments are due</p>
                    </div>
                    <Input type="number" className="w-20" defaultValue="1" min="1" max="28" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Late Fee</Label>
                      <p className="text-sm text-muted-foreground">Fee applied to late payments</p>
                    </div>
                    <div className="relative w-24">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">$</span>
                      <Input type="text" className="pl-7" defaultValue="25" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Grace Period</Label>
                      <p className="text-sm text-muted-foreground">Days before late fee applies</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="number" className="w-20" defaultValue="3" min="0" max="30" />
                      <span>days</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Payment Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="credit-card" defaultChecked />
                    <Label htmlFor="credit-card">Accept Credit Cards</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="bank-transfer" defaultChecked />
                    <Label htmlFor="bank-transfer">Accept Bank Transfers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-pay" defaultChecked />
                    <Label htmlFor="auto-pay">Enable Auto-Pay Option</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Payment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Send payment reminders to parents</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Late Payment Alerts</Label>
                      <p className="text-sm text-muted-foreground">Send alerts for overdue payments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Daily Reports</Label>
                      <p className="text-sm text-muted-foreground">Send daily activity reports to parents</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Announcements</Label>
                      <p className="text-sm text-muted-foreground">Send center-wide announcements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">SMS Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Emergency Alerts</Label>
                      <p className="text-sm text-muted-foreground">Send emergency notifications via SMS</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Check-in/Check-out</Label>
                      <p className="text-sm text-muted-foreground">Send SMS when child is checked in or out</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Enable Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Login Sessions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Started 2 hours ago • Chrome on Windows</p>
                    </div>
                    <Button variant="outline" size="sm">
                      This Device
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-medium">Other Session</p>
                      <p className="text-sm text-muted-foreground">Started 1 day ago • Safari on iPhone</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Log Out
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Log Out All Devices</Button>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
