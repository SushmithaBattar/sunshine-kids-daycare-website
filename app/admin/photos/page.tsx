"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Plus, Upload, Trash2, Edit, Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PhotosPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [showNewAlbumDialog, setShowNewAlbumDialog] = useState(false)
  const [newAlbumName, setNewAlbumName] = useState("")
  const [newAlbumDescription, setNewAlbumDescription] = useState("")

  // Mock photo albums
  const albums = [
    {
      id: "album1",
      name: "Summer Fun",
      date: "June 15, 2023",
      count: 15,
      thumbnail: "/summer-fun-album.png",
    },
    {
      id: "album2",
      name: "Animal Adventure Day",
      date: "May 20, 2023",
      count: 24,
      thumbnail: "/animal-adventure-album.png",
    },
    {
      id: "album3",
      name: "Art Projects",
      date: "April 10, 2023",
      count: 18,
      thumbnail: "/art-projects-album.png",
    },
    {
      id: "album4",
      name: "Spring Festival",
      date: "March 22, 2023",
      count: 32,
      thumbnail: "/spring-festival-album.png",
    },
  ]

  // Mock recent photos
  const recentPhotos = [
    { id: "photo1", src: "/recent-photo-1.png", date: "June 15, 2023", album: "Summer Fun" },
    { id: "photo2", src: "/recent-photo-2.png", date: "June 15, 2023", album: "Summer Fun" },
    { id: "photo3", src: "/recent-photo-3.png", date: "June 14, 2023", album: "Summer Fun" },
    { id: "photo4", src: "/recent-photo-4.png", date: "June 14, 2023", album: "Summer Fun" },
    { id: "photo5", src: "/recent-photo-5.png", date: "June 13, 2023", album: "Summer Fun" },
    { id: "photo6", src: "/recent-photo-6.png", date: "June 13, 2023", album: "Summer Fun" },
  ]

  // Filter albums based on search query
  const filteredAlbums = albums.filter((album) => album.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Photo Gallery</h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="all" className="w-[400px]" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Albums</TabsTrigger>
            <TabsTrigger value="recent">Recent Photos</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search albums..."
              className="w-[200px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Upload Photos
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Photos</DialogTitle>
                <DialogDescription>Upload photos to share with parents</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="album">Select Album</Label>
                  <Select>
                    <SelectTrigger id="album">
                      <SelectValue placeholder="Select album" />
                    </SelectTrigger>
                    <SelectContent>
                      {albums.map((album) => (
                        <SelectItem key={album.id} value={album.id}>
                          {album.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="new">Create New Album</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Upload Photos</Label>
                  <div className="border-2 border-dashed rounded-md p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop photos here, or click to select files
                    </p>
                    <Input type="file" multiple accept="image/*" className="hidden" id="file-upload" />
                    <Button variant="outline" className="mt-4" asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Select Files
                      </label>
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowUploadDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowUploadDialog(false)}>Upload</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={showNewAlbumDialog} onOpenChange={setShowNewAlbumDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                New Album
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Album</DialogTitle>
                <DialogDescription>Create a new photo album to organize your pictures</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="album-name">Album Name</Label>
                  <Input
                    id="album-name"
                    placeholder="Enter album name"
                    value={newAlbumName}
                    onChange={(e) => setNewAlbumName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="album-description">Description (Optional)</Label>
                  <Input
                    id="album-description"
                    placeholder="Enter album description"
                    value={newAlbumDescription}
                    onChange={(e) => setNewAlbumDescription(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowNewAlbumDialog(false)
                    setNewAlbumName("")
                    setNewAlbumDescription("")
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    // Handle album creation
                    console.log("Creating album:", newAlbumName, newAlbumDescription)
                    setShowNewAlbumDialog(false)
                    setNewAlbumName("")
                    setNewAlbumDescription("")
                  }}
                >
                  Create Album
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {activeTab === "all" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album) => (
            <Card key={album.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={album.thumbnail || "/placeholder.svg"} alt={album.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{album.name}</CardTitle>
                <CardDescription>
                  {album.date} • {album.count} photos
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/photos/${album.id}`}>View Album</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "recent" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recentPhotos.map((photo) => (
            <div key={photo.id} className="group relative rounded-md overflow-hidden">
              <div className="relative h-48">
                <Image src={photo.src || "/placeholder.svg"} alt="Photo" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <Button variant="secondary" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs">
                <p>{photo.date}</p>
                <p>{photo.album}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
