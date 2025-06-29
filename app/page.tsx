import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ShieldCheck, Users, Music, Palette, Book } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AnimalMascots from "@/components/animal-mascots"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sunshine Day Care - Premier Child Care & Early Education in [Your City]",
  description:
    "Discover exceptional child care at Sunshine Day Care. Licensed daycare offering infant care, toddler programs, preschool, and pre-K education in a safe, nurturing animal-themed environment.",
  keywords:
    "daycare [your city], child care, preschool, infant care, toddler care, pre-k, early childhood education, licensed daycare",
  openGraph: {
    title: "Sunshine Day Care - Where Little Animals Learn & Play",
    description: "Premium animal-themed day care center providing exceptional early childhood education and care.",
    images: ["/daycare-hero-background.png"],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-800">
                Where Learning Meets Play
              </h2>
              <p className="max-w-[900px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our animal-themed environment creates a magical world where children develop essential skills through
                guided play and exploration.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Heart className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Nurturing Environment</CardTitle>
                <CardDescription>A safe, loving space where every child feels valued and supported.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Safety First</CardTitle>
                <CardDescription>
                  Comprehensive security measures and health protocols to protect your child.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-10 w-10 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Expert Educators</CardTitle>
                <CardDescription>Qualified teachers passionate about early childhood development.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Daily Activities</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-800">Fun Learning Programs</h2>
              <p className="max-w-[900px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our engaging daily activities designed for each developmental stage.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image src="/storytime-activity.png" alt="Story Time" fill className="object-cover" />
              </div>
              <CardHeader>
                <Book className="h-6 w-6 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Animal Story Time</CardTitle>
                <CardDescription>
                  Daily reading sessions featuring animal adventures that spark imagination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image src="/music-activity.png" alt="Music & Movement" fill className="object-cover" />
              </div>
              <CardHeader>
                <Music className="h-6 w-6 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Music & Movement</CardTitle>
                <CardDescription>
                  Fun-filled sessions where children dance and sing like their favorite animals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image src="/art-activity.png" alt="Creative Arts" fill className="object-cover" />
              </div>
              <CardHeader>
                <Palette className="h-6 w-6 text-amber-500 mb-2" />
                <CardTitle className="text-amber-700">Creative Arts</CardTitle>
                <CardDescription>
                  Hands-on art projects that develop fine motor skills and self-expression.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Age Groups</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-800">Programs For Every Age</h2>
              <p className="max-w-[900px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized care and education for children from infancy through pre-kindergarten.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image src="/infants-program.png" alt="Infants Program" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-700">Baby Elephants (6 weeks - 18 months)</CardTitle>
                <CardDescription>
                  Nurturing care with sensory-rich activities to support early development.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
                  <Link href="/programs/infants">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image src="/toddlers-program.png" alt="Toddlers Program" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-amber-700">Playful Cubs (18 months - 3 years)</CardTitle>
                <CardDescription>Guided exploration and play to foster independence and social skills.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
                  <Link href="/programs/toddlers">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Animal Mascots Section */}
      <AnimalMascots />

      {/* Parent Portal Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">For Parents</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-800">
                Stay Connected Every Step of the Way
              </h2>
              <p className="text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive parent portal keeps you involved in your child's day, from real-time updates to easy
                payment management.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-amber-500 hover:bg-amber-600" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
                  <Link href="/parent-portal">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden border-4 border-amber-300 shadow-lg">
              <Image src="/parent-portal-preview.png" alt="Parent Portal Preview" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join Our Sunshine Family?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Schedule a tour, meet our team, and see why families choose Sunshine Day Care for their little ones.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg" className="bg-white text-amber-600 hover:bg-amber-100" asChild>
                <Link href="/schedule-tour">Schedule a Tour</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-amber-600" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
