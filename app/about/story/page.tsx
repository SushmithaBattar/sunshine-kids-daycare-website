import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StoryPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Our Story</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-6">
            Sunshine Day Care was founded in 2010 by Maria Johnson, a passionate early childhood educator with a vision
            to create a nurturing environment where children could learn through play and exploration.
          </p>
          <p className="text-lg mb-6">
            What started as a small home-based daycare with just 5 children has grown into a beloved community
            institution serving over 100 families, while maintaining the same core values of compassion, creativity, and
            child-centered care.
          </p>
          <p className="text-lg mb-6">
            Our animal-themed approach to learning was inspired by Maria's own childhood experiences growing up on a
            farm, where she discovered that children naturally connect with and learn from animals and the natural
            world.
          </p>
        </div>
        <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
          <Image src="/visionary-director.png" alt="Sunshine Day Care Founder" fill className="object-cover" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-amber-700 mb-6">Our Milestones</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">2010</h3>
            <p>Sunshine Day Care opens its doors in a small residential home with 5 children.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">2015</h3>
            <p>We move to our current location and expand our programs to include infants through pre-K.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-2">2020</h3>
            <p>Celebrating 10 years of excellence in early childhood education with over 100 families.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 mt-8">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/about/team">Meet Our Team</Link>
        </Button>
        <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
          <Link href="/about/facilities">View Our Facilities</Link>
        </Button>
      </div>
    </div>
  )
}
