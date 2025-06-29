import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreschoolPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/programs" className="text-amber-600 hover:text-amber-800">
          Programs
        </Link>
        <span className="text-muted-foreground">/</span>
        <span>Curious Kittens (Preschool)</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Curious Kittens Program</h1>
          <p className="text-lg mb-6">Ages: 3 - 4 years</p>

          <div className="prose max-w-none">
            <p>
              Our Curious Kittens program is designed for preschoolers who are developing their independence and
              expanding their knowledge. We focus on building a strong foundation for future academic success while
              nurturing creativity and social skills.
            </p>

            <h3 className="text-amber-700 mt-6">Program Features:</h3>
            <ul>
              <li>Introduction to letters, numbers, and early literacy</li>
              <li>Science exploration and discovery</li>
              <li>Art and creative expression</li>
              <li>Social skills development</li>
              <li>Physical development and outdoor play</li>
              <li>Music and movement activities</li>
              <li>Dramatic play and imagination</li>
            </ul>

            <h3 className="text-amber-700 mt-6">Daily Schedule:</h3>
            <p>Our preschool schedule provides structure while allowing for exploration and discovery:</p>
            <ul>
              <li>7:00 - 8:30 AM: Arrival and learning centers</li>
              <li>8:30 - 9:00 AM: Breakfast</li>
              <li>9:00 - 9:30 AM: Morning circle time</li>
              <li>9:30 - 10:30 AM: Learning centers and small group activities</li>
              <li>10:30 - 11:15 AM: Outdoor play</li>
              <li>11:15 - 11:45 AM: Story time and music</li>
              <li>11:45 - 12:30 PM: Lunch and cleanup</li>
              <li>12:30 - 2:30 PM: Rest time</li>
              <li>2:30 - 3:00 PM: Snack</li>
              <li>3:00 - 4:00 PM: Art and science activities</li>
              <li>4:00 - 5:00 PM: Outdoor play</li>
              <li>5:00 - 6:00 PM: Free play and pickup</li>
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
            <Image src="/preschool-program-main.png" alt="Curious Kittens Program" fill className="object-cover" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Ages:</span>
                <span>3 - 4 years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ratio:</span>
                <span>1:8 (teacher to children)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Hours:</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Full-time Rate:</span>
                <span>$275/week</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Part-time Rate:</span>
                <span>$195/week (3 days)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Recognize and name letters and numbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Develop fine motor skills for writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Follow multi-step directions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Engage in cooperative play</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Express feelings and needs verbally</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
