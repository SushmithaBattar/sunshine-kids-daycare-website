"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, Upload, Trash2, Download, Share2, Edit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface AlbumPageProps {
  params: {
    albumId: string
  }
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const { toast } = useToast()
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)

  // Mock album data - in real app, fetch based on albumId
  const albumData = {
    album1: {
      name: "Summer Fun",
      date: "June 15, 2023",
      description: "Fun summer activities and outdoor play",
      photos: [
        { id: "1", src: "/summer-photo-1.png", caption: "Water play time", date: "June 15, 2023" },
        { id: "2", src: "/summer-photo-2.png", caption: "Sandbox adventures", date: "June 15, 2023" },
        { id: "3", src: "/summer-photo-3.png", caption: "Outdoor games", date: "June 14, 2023" },
        { id: "4", src: "/summer-photo-4.png", caption: "Picnic lunch", date: "June 14, 2023" },
        { id: "5", src: "/summer-photo-5.png", caption: "Nature walk", date: "June 13, 2023" },
        { id: "6", src: "/summer-photo-6.png", caption: "Garden exploration", date: "June 13, 2023" },
      ],
    },
    album2: {
      name: "Animal Adventure Day",
      date: "May 20, 2023",
      description: "Learning about animals through fun activities",
      photos: [
        { id: "7", src: "/animal-photo-1.png", caption: "Lion costume play", date: "May 20, 2023" },
        { id: "8", src: "/animal-photo-2.png", caption: "Elephant craft time", date: "May 20, 2023" },
        { id: "9", src: "/animal-photo-3.png", caption: "Animal sounds game", date: "May 20, 2023" },
        { id: "10", src: "/animal-photo-4.png", caption: "Zoo visit preparation", date: "May 19, 2023" },
      ],
    },
  }

  const album = albumData[params.albumId as keyof typeof albumData] || albumData.album1

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files)
  }

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one photo to upload.",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    // Simulate upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Photos uploaded successfully!",
      description: `${selectedFiles.length} photo(s) have been added to the album.`,
    })

    setUploading(false)
    setShowUploadDialog(false)
    setSelectedFiles(null)
  }

  const handleDeletePhoto = (photoId: string) => {
    toast({
      title: "Photo deleted",
      description: "The photo has been removed from the album.",
    })
  }

  const handleShareAlbum = () => {
    toast({
      title: "Album shared",
      description: "Parents have been notified about the new photos.",
    })
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/admin/photos">
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

        <div className="flex items-center gap-2">
          <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Add Photos
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Photos to {album.name}</DialogTitle>
                <DialogDescription>Upload new photos to share with parents</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Select Photos</Label>
                  <div className="border-2 border-dashed rounded-md p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop photos here, or click to select files
                    </p>
                    <Input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="photo-upload"
                    />
                    <Button variant="outline" asChild>
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        Select Files
                      </label>
                    </Button>
                    {selectedFiles && (
                      <p className="mt-2 text-sm text-green-600">{selectedFiles.length} file(s) selected</p>
                    )}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowUploadDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleUpload} disabled={uploading}>
                  {uploading ? "Uploading..." : "Upload Photos"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button variant="outline" onClick={handleShareAlbum}>
            <Share2 className="mr-2 h-4 w-4" />
            Share with Parents
          </Button>
        </div>
      </div>

      {album.description && (
        <Card className="mb-6">
          <CardContent className="p-4">
            <p className="text-amber-700">{album.description}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {album.photos.map((photo) => (
          <Card key={photo.id} className="group overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={photo.src || "/placeholder.svg?height=300&width=300"}
                alt={photo.caption}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button variant="secondary" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon" onClick={() => handleDeletePhoto(photo.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="text-sm font-medium text-amber-800">{photo.caption}</p>
              <p className="text-xs text-amber-600">{photo.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {album.photos.length === 0 && (
        <div className="text-center py-12">
          <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-amber-800 mb-2">No photos yet</h3>
          <p className="text-amber-600 mb-4">Start by uploading some photos to this album.</p>
          <Button onClick={() => setShowUploadDialog(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Upload First Photos
          </Button>
        </div>
      )}
    </div>
  )
}
