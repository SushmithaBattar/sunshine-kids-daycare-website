import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PublicGalleryPage() {
  // This would typically fetch from your database
  const publicAlbums = [
    {
      id: "album1",
      name: "Summer Fun",
      date: "June 2023",
      count: 15,
      thumbnail: "/summer-fun-album.png",
      description: "Fun summer activities and outdoor play",
      featured: true,
    },
    {
      id: "album2",
      name: "Animal Adventure Day",
      date: "May 2023",
      count: 24,
      thumbnail: "/animal-adventure-album.png",
      description: "Learning about animals through fun activities",
      featured: true,
    },
    {
      id: "album3",
      name: "Art Projects",
      date: "April 2023",
      count: 18,
      thumbnail: "/art-projects-album.png",
      description: "Creative art and craft activities",
      featured: false,
    },
    {
      id: "album4",
      name: "Spring Festival",
      date: "March 2023",
      count: 32,
      thumbnail: "/spring-festival-album.png",
      description: "Celebrating spring with fun activities",
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Photo Gallery</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-800">Memories in the Making</h1>
              <p className="max-w-[900px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a peek into our daily adventures, special events, and the joy-filled moments that make Sunshine Day
                Care a magical place for children to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Featured</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-800">Recent Adventures</h2>
              <p className="max-w-[600px] text-amber-700">
                Our latest photo collections showcasing the fun and learning happening every day.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {publicAlbums
              .filter((album) => album.featured)
              .map((album) => (
                <Card
                  key={album.id}
                  className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={album.thumbnail || "/placeholder.svg?height=300&width=400"}
                      alt={album.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-500">Featured</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-700">{album.name}</CardTitle>
                    <CardDescription>
                      {album.description} • {album.date} • {album.count} photos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
                      <Link href={`/gallery/${album.id}`}>View Album</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Albums */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-800">All Albums</h2>
            <p className="max-w-[600px] text-amber-700">
              Browse through all our photo collections to see the wonderful moments we've captured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicAlbums.map((album) => (
              <Card
                key={album.id}
                className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={album.thumbnail || "/placeholder.svg?height=200&width=300"}
                    alt={album.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-700">{album.name}</CardTitle>
                  <CardDescription>
                    {album.date} • {album.count} photos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" asChild>
                    <Link href={`/gallery/${album.id}`}>View Album</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want to See More?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Join our daycare family to get access to daily photo updates and see your child's adventures unfold.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg" className="bg-white text-amber-600 hover:bg-amber-100" asChild>
                <Link href="/register">Enroll Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-amber-600" asChild>
                <Link href="/parent-portal">Parent Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
