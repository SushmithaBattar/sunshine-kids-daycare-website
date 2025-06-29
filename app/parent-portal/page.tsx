import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, CreditCard, MessageSquare, Camera, Clock } from "lucide-react"

export default function ParentPortalPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Parent Portal</h1>
      <p className="text-lg mb-6">
        Our secure parent portal keeps you connected to your child's day and simplifies administrative tasks.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-semibold text-amber-700 mb-4">Portal Features</h2>
          <div className="space-y-4">
            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Daily Photos & Updates</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Receive real-time updates and photos of your child's activities throughout the day.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Secure Messaging</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Communicate directly with your child's teachers and center administrators.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Calendar & Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Stay informed about upcoming events, closures, and important dates.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Billing & Payments</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>View statements, make payments, and manage your billing information securely online.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Attendance Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Track your child's attendance and receive automated billing based on their schedule.</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg text-amber-700">Notifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Receive important alerts about your child, billing, and center announcements.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative h-[300px] rounded-xl overflow-hidden border-4 border-amber-300 shadow-lg mb-6">
            <Image src="/parent-portal-preview.png" alt="Parent Portal Preview" fill className="object-cover" />
          </div>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-700">Access the Portal</CardTitle>
              <CardDescription>Log in to view your child's activities and manage your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Already registered? Log in to access your parent portal account and stay connected with your child's
                day.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 flex-1">
                  <Link href="/parent-portal/login">Log In</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100 flex-1">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
