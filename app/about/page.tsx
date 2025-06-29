import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">About Sunshine Day Care</h1>
      <p className="text-lg mb-6">
        Welcome to Sunshine Day Care, where we provide a nurturing, animal-themed environment for children to learn,
        play, and grow. Our dedicated team of early childhood educators is committed to providing the highest quality
        care for your little ones.
      </p>
      <div className="flex gap-4 mt-8">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/about/team">Meet Our Team</Link>
        </Button>
        <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
          <Link href="/about/facilities">View Our Facilities</Link>
        </Button>
        <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
          <Link href="/about/story">Our Story</Link>
        </Button>
      </div>
    </div>
  )
}
