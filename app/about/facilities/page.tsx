import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FacilitiesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Our Facilities</h1>

      <p className="text-lg mb-8">
        Sunshine Day Care provides a safe, stimulating environment designed specifically for children's growth and
        development. Our facilities feature age-appropriate spaces that encourage exploration, creativity, and learning.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Indoor Spaces</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Bright, spacious classrooms organized by age group</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Dedicated art studio with washable surfaces and natural light</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Cozy reading nooks filled with age-appropriate books</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Multi-purpose room for music, movement, and group activities</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Child-sized restrooms to encourage independence</span>
            </li>
          </ul>

          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/storytime-activity.png" alt="Indoor classroom space" fill className="object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-amber-700 mb-4">Outdoor Spaces</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Secure, fenced playground with age-appropriate equipment</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Natural play areas with trees, gardens, and sensory elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Covered patio for outdoor activities in all weather</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Water play area for warm weather fun</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Child-friendly vegetable and flower gardens</span>
            </li>
          </ul>

          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src="/playful-park-afternoon.png" alt="Outdoor playground" fill className="object-cover" />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-amber-700 mb-6">Safety Features</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">Secure Access</h3>
            <p>
              Keypad entry system and check-in/check-out procedures ensure only authorized individuals can access our
              facility.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">Health Protocols</h3>
            <p>Regular sanitization, air purifiers, and strict health policies keep our environment clean and safe.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">Staff Training</h3>
            <p>All staff are certified in CPR, first aid, and emergency response procedures.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 mt-8">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/schedule-tour">Schedule a Tour</Link>
        </Button>
        <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
          <Link href="/about/team">Meet Our Team</Link>
        </Button>
      </div>
    </div>
  )
}
