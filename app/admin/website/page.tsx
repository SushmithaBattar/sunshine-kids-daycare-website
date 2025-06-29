"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Save, Eye, Globe, Home, Info, BookOpen, DollarSign, Phone } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WebsitePage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/admin">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-amber-800">Website Content</h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">Edit your website content and pages</p>

        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <a href="/" target="_blank" rel="noreferrer">
              <Eye className="mr-2 h-4 w-4" />
              Preview Website
            </a>
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="home" className="space-y-4">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="home" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span className="hidden sm:inline">About</span>
          </TabsTrigger>
          <TabsTrigger value="programs" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Programs</span>
          </TabsTrigger>
          <TabsTrigger value="tuition" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span className="hidden sm:inline">Tuition</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Contact</span>
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">SEO</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Edit the main hero section of your homepage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Hero Title</Label>
                    <Input id="hero-title" defaultValue="Welcome to Sunshine Day Care" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                    <Input
                      id="hero-subtitle"
                      defaultValue="Where little animals learn, play, and grow in a magical world of adventure and discovery."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cta-primary">Primary Button Text</Label>
                    <Input id="cta-primary" defaultValue="Register Now" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cta-secondary">Secondary Button Text</Label>
                    <Input id="cta-secondary" defaultValue="Schedule a Tour" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Hero Background Image</Label>
                  <div className="relative h-48 rounded-md overflow-hidden border">
                    <Image src="/daycare-hero-background.png" alt="Hero Background" fill className="object-cover" />
                  </div>
                  <Button variant="outline" size="sm">
                    Change Image
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features Section</CardTitle>
              <CardDescription>Edit the features section of your homepage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="features-title">Section Title</Label>
                  <Input id="features-title" defaultValue="Where Learning Meets Play" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features-description">Section Description</Label>
                  <Textarea
                    id="features-description"
                    defaultValue="Our animal-themed environment creates a magical world where children develop essential skills through guided play and exploration."
                  />
                </div>

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">Feature 1</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="feature1-title">Title</Label>
                      <Input id="feature1-title" defaultValue="Nurturing Environment" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feature1-description">Description</Label>
                      <Input
                        id="feature1-description"
                        defaultValue="A safe, loving space where every child feels valued and supported."
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">Feature 2</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="feature2-title">Title</Label>
                      <Input id="feature2-title" defaultValue="Safety First" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feature2-description">Description</Label>
                      <Input
                        id="feature2-description"
                        defaultValue="Comprehensive security measures and health protocols to protect your child."
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4 space-y-4">
                  <h3 className="font-medium">Feature 3</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="feature3-title">Title</Label>
                      <Input id="feature3-title" defaultValue="Expert Educators" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feature3-description">Description</Label>
                      <Input
                        id="feature3-description"
                        defaultValue="Qualified teachers passionate about early childhood development."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Page Content</CardTitle>
              <CardDescription>Edit your About page content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="about-title">Page Title</Label>
                <Input id="about-title" defaultValue="About Sunshine Day Care" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about-content">Main Content</Label>
                <Textarea
                  id="about-content"
                  className="min-h-[200px]"
                  defaultValue="Welcome to Sunshine Day Care, where we provide a nurturing, animal-themed environment for children to learn, play, and grow. Our dedicated team of early childhood educators is committed to providing the highest quality care for your little ones."
                />
              </div>

              <div className="space-y-2">
                <Label>Featured Image</Label>
                <div className="relative h-48 rounded-md overflow-hidden border">
                  <Image src="/about-featured-image.png" alt="About Featured Image" fill className="object-cover" />
                </div>
                <Button variant="outline" size="sm">
                  Change Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Programs Page Content</CardTitle>
              <CardDescription>Edit your Programs page content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="programs-title">Page Title</Label>
                <Input id="programs-title" defaultValue="Our Programs" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="programs-intro">Introduction</Label>
                <Textarea
                  id="programs-intro"
                  defaultValue="At Sunshine Day Care, we offer age-appropriate programs designed to nurture your child's development through play-based learning and exploration."
                />
              </div>

              <div className="border rounded-md p-4 space-y-4">
                <h3 className="font-medium">Program 1</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program1-title">Title</Label>
                    <Input id="program1-title" defaultValue="Baby Elephants (Infants)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program1-ages">Ages</Label>
                    <Input id="program1-ages" defaultValue="6 weeks - 18 months" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program1-description">Description</Label>
                  <Textarea
                    id="program1-description"
                    defaultValue="Our infant program provides a nurturing environment with personalized care and sensory-rich activities."
                  />
                </div>
              </div>

              <div className="border rounded-md p-4 space-y-4">
                <h3 className="font-medium">Program 2</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program2-title">Title</Label>
                    <Input id="program2-title" defaultValue="Playful Cubs (Toddlers)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program2-ages">Ages</Label>
                    <Input id="program2-ages" defaultValue="18 months - 3 years" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program2-description">Description</Label>
                  <Textarea
                    id="program2-description"
                    defaultValue="Our toddler program focuses on exploration, language development, and beginning social skills."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tuition Page Content</CardTitle>
              <CardDescription>Edit your Tuition page content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tuition-title">Page Title</Label>
                <Input id="tuition-title" defaultValue="Tuition & Fees" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tuition-intro">Introduction</Label>
                <Textarea
                  id="tuition-intro"
                  defaultValue="We offer flexible enrollment options to meet your family's needs. Our tuition rates are competitive and include all daily activities, meals, and supplies."
                />
              </div>

              <div className="border rounded-md p-4">
                <h3 className="font-medium mb-4">Tuition Rates</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-medium">Program</div>
                    <div className="font-medium">Full-Time (Weekly)</div>
                    <div className="font-medium">Part-Time (Weekly)</div>
                    <div className="font-medium">Daily Rate</div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Input defaultValue="Baby Elephants (Infants)" />
                    </div>
                    <div>
                      <Input defaultValue="$325" />
                    </div>
                    <div>
                      <Input defaultValue="$225 (3 days)" />
                    </div>
                    <div>
                      <Input defaultValue="$85" />
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Input defaultValue="Playful Cubs (Toddlers)" />
                    </div>
                    <div>
                      <Input defaultValue="$295" />
                    </div>
                    <div>
                      <Input defaultValue="$205 (3 days)" />
                    </div>
                    <div>
                      <Input defaultValue="$75" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Page Content</CardTitle>
              <CardDescription>Edit your Contact page content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-title">Page Title</Label>
                <Input id="contact-title" defaultValue="Contact Us" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-address">Address</Label>
                    <Input id="contact-address" defaultValue="123 Sunshine Avenue" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-city">City, State, ZIP</Label>
                    <Input id="contact-city" defaultValue="Anytown, ST 12345" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" defaultValue="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" defaultValue="info@sunshinedaycare.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hours-title">Hours Title</Label>
                    <Input id="hours-title" defaultValue="Hours of Operation" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hours-weekday">Weekday Hours</Label>
                    <Input id="hours-weekday" defaultValue="Monday - Friday: 7:00 AM - 6:00 PM" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hours-weekend">Weekend Hours</Label>
                    <Input id="hours-weekend" defaultValue="Closed on Weekends & Major Holidays" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-title">Website Title</Label>
                <Input id="site-title" defaultValue="Sunshine Day Care - Where Little Animals Learn & Play" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Meta Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="A premium animal-themed day care center for your little explorers"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-keywords">Keywords</Label>
                <Input
                  id="site-keywords"
                  defaultValue="daycare, childcare, preschool, early education, animal-themed, children"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
