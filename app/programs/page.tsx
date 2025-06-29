import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Our Programs</h1>
      <p className="text-lg mb-6">
        At Sunshine Day Care, we offer age-appropriate programs designed to nurture your child's development through
        play-based learning and exploration.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-700">Baby Elephants (Infants)</CardTitle>
            <CardDescription>Ages: 6 weeks - 18 months</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our infant program provides a nurturing environment with personalized care and sensory-rich activities.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
              <Link href="/programs/infants">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-700">Playful Cubs (Toddlers)</CardTitle>
            <CardDescription>Ages: 18 months - 3 years</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our toddler program focuses on exploration, language development, and beginning social skills.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
              <Link href="/programs/toddlers">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
