import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreKPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/programs" className="text-amber-600 hover:text-amber-800">
          Programs
        </Link>
        <span className="text-muted-foreground">/</span>
        <span>Wise Owls (Pre-K)</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Wise Owls Program</h1>
          <p className="text-lg mb-6">Ages: 4 - 5 years</p>

          <div className="prose max-w-none">
            <p>
              Our Wise Owls Pre-K program prepares children for a successful transition to kindergarten. We focus on
              developing academic, social, and emotional skills through engaging, play-based learning experiences.
            </p>

            <h3 className="text-amber-700 mt-6">Program Features:</h3>
            <ul>
              <li>Comprehensive kindergarten readiness curriculum</li>
              <li>Early literacy and phonics awareness</li>
              <li>Math concepts and problem-solving</li>
              <li>Science experiments and exploration</li>
              <li>Social studies and community awareness</li>
              <li>Advanced art and creative expression</li>
              <li>Self-regulation and independence skills</li>
            </ul>

            <h3 className="text-amber-700 mt-6">Daily Schedule:</h3>
            <p>Our Pre-K schedule is designed to prepare children for the kindergarten routine:</p>
            <ul>
              <li>7:00 - 8:30 AM: Arrival and learning centers</li>
              <li>8:30 - 9:00 AM: Breakfast</li>
              <li>9:00 - 9:30 AM: Morning meeting and calendar</li>
              <li>9:30 - 10:30 AM: Literacy activities</li>
              <li>10:30 - 11:15 AM: Outdoor play</li>
              <li>11:15 - 12:00 PM: Math activities</li>
              <li>12:00 - 12:45 PM: Lunch and cleanup</li>
              <li>12:45 - 2:00 PM: Rest time</li>
              <li>2:00 - 2:30 PM: Snack</li>
              <li>2:30 - 3:30 PM: Science and social studies</li>
              <li>3:30 - 4:30 PM: Outdoor play</li>
              <li>4:30 - 6:00 PM: Learning centers and pickup</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600" asChild>
              <Link href="/schedule-tour">Schedule a Tour</Link>
            </Button>
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/prek-program-main.png" alt="Wise Owls Program" fill className="object-cover" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Ages:</span>
                <span>4 - 5 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ratio:</span>
                <span>1:10 (teacher to children)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Hours:</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Full-time Rate:</span>
                <span>$265/week</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Part-time Rate:</span>
                <span>$185/week (3 days)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Kindergarten Readiness Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Letter and sound recognition</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Number recognition and counting to 20</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Writing first name</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Following multi-step directions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Scissor skills and fine motor control</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
