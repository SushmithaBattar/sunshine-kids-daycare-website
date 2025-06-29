import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfantsPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/programs" className="text-amber-600 hover:text-amber-800">
          Programs
        </Link>
        <span className="text-muted-foreground">/</span>
        <span>Baby Elephants (Infants)</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Baby Elephants Program</h1>
          <p className="text-lg mb-6">Ages: 6 weeks - 18 months</p>

          <div className="prose max-w-none">
            <p>
              Our Baby Elephants program provides a nurturing, safe environment where infants can explore and develop at
              their own pace. Our specialized caregivers maintain a low child-to-teacher ratio to ensure each baby
              receives the individual attention they need.
            </p>

            <h3 className="text-amber-700 mt-6">Program Features:</h3>
            <ul>
              <li>Personalized care plans developed with parents</li>
              <li>Daily sensory activities to stimulate development</li>
              <li>Tummy time and motor skill development</li>
              <li>Introduction to baby sign language</li>
              <li>Soothing music and storytime</li>
              <li>Regular updates and photos sent to parents</li>
            </ul>

            <h3 className="text-amber-700 mt-6">Daily Schedule:</h3>
            <p>
              While we adapt to each infant's individual needs and schedule, here's a general overview of our daily
              routine:
            </p>
            <ul>
              <li>Arrival and morning cuddles</li>
              <li>Breakfast time (for older infants)</li>
              <li>Morning sensory activities</li>
              <li>Nap time (individualized)</li>
              <li>Lunch and bottle feeding</li>
              <li>Outdoor time (weather permitting)</li>
              <li>Afternoon activities and development play</li>
              <li>Afternoon nap</li>
              <li>Snack time</li>
              <li>Quiet activities until pickup</li>
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
            <Image src="/infant-program-main.png" alt="Baby Elephants Program" fill className="object-cover" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">Program Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Ages:</span>
                <span>6 weeks - 18 months</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ratio:</span>
                <span>1:3 (teacher to children)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Hours:</span>
                <span>7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Full-time Rate:</span>
                <span>$325/week</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Part-time Rate:</span>
                <span>$225/week (3 days)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-amber-700">What to Bring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Diapers and wipes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Formula or breast milk</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Extra clothes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Comfort items (pacifier, blanket)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span>Family photo</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
