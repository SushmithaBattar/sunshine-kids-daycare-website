import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Our Team</h1>

      <p className="text-lg mb-8">
        At Sunshine Day Care, our team of dedicated professionals is committed to providing the highest quality care and
        education for your children. Each member brings unique skills and a passion for early childhood development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/visionary-director.png" alt="Maria Johnson - Director" fill className="object-cover" />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-1">Maria Johnson</h3>
            <p className="text-sm text-gray-500 mb-3">Director & Founder</p>
            <p>
              With over 20 years of experience in early childhood education, Maria brings passion and expertise to every
              aspect of Sunshine Day Care.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image src="/compassionate-caregiver.png" alt="James Wilson - Lead Teacher" fill className="object-cover" />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-1">James Wilson</h3>
            <p className="text-sm text-gray-500 mb-3">Lead Teacher</p>
            <p>
              James specializes in creating engaging learning environments that spark curiosity and foster
              social-emotional development.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/diverse-classroom-teacher.png"
              alt="Sophia Lee - Curriculum Coordinator"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-amber-600 mb-1">Sophia Lee</h3>
            <p className="text-sm text-gray-500 mb-3">Curriculum Coordinator</p>
            <p>
              Sophia designs our innovative animal-themed curriculum that balances structured learning with creative
              play.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-amber-700 mb-6">Join Our Team</h2>
      <p className="text-lg mb-6">
        We're always looking for passionate educators to join our growing family. If you love working with children and
        want to make a difference, we'd love to hear from you.
      </p>

      <div className="flex gap-4 mt-8">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
          <Link href="/about/facilities">View Our Facilities</Link>
        </Button>
      </div>
    </div>
  )
}
