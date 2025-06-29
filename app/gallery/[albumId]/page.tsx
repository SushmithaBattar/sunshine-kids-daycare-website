import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

interface PublicAlbumPageProps {
  params: {
    albumId: string
  }
}

export default function PublicAlbumPage({ params }: PublicAlbumPageProps) {
  // Mock album data - in real app, fetch based on albumId
  const albumData = {
    album1: {
      name: "Summer Fun",
      date: "June 2023",
      description: "Fun summer activities and outdoor play",
      photos: [
        { id: "1", src: "/summer-photo-1.png", caption: "Water play time" },
        { id: "2", src: "/summer-photo-2.png", caption: "Sandbox adventures" },
        { id: "3", src: "/summer-photo-3.png", caption: "Outdoor games" },
        { id: "4", src: "/summer-photo-4.png", caption: "Picnic lunch" },
        { id: "5", src: "/summer-photo-5.png", caption: "Nature walk" },
        { id: "6", src: "/summer-photo-6.png", caption: "Garden exploration" },
      ],
    },
    album2: {
      name: "Animal Adventure Day",
      date: "May 2023",
      description: "Learning about animals through fun activities",
      photos: [
        { id: "7", src: "/animal-photo-1.png", caption: "Lion costume play" },
        { id: "8", src: "/animal-photo-2.png", caption: "Elephant craft time" },
        { id: "9", src: "/animal-photo-3.png", caption: "Animal sounds game" },
        { id: "10", src: "/animal-photo-4.png", caption: "Zoo visit preparation" },
      ],
    },
  }

  const album = albumData[params.albumId as keyof typeof albumData] || albumData.album1

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/gallery">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-amber-800">{album.name}</h1>
            <p className="text-amber-600">
              {album.date} • {album.photos.length} photos
            </p>
          </div>
        </div>

        {album.description && (
          <Card className="mb-6 border-amber-200">
            <CardContent className="p-4">
              <p className="text-amber-700">{album.description}</p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album.photos.map((photo) => (
            <Card
              key={photo.id}
              className="overflow-hidden border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.src || "/placeholder.svg?height=300&width=300"}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-3">
                <p className="text-sm font-medium text-amber-800">{photo.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white mt-auto">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Love What You See?</h2>
              <p className="max-w-[600px] md:text-xl/relaxed">
                Join our daycare family and be part of these wonderful memories every day.
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
