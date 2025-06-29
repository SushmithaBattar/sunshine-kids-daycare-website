"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1500)
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-700">Send Us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-medium text-amber-700 mb-2">Thank you for your message!</h3>
                  <p>We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-700">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Sunshine Day Care</p>
                  <p className="text-muted-foreground">123 Sunshine Avenue</p>
                  <p className="text-muted-foreground">Anytown, ST 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <p>(555) 123-4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <p>info@sunshinedaycare.com</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium">Hours of Operation</p>
                  <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Closed on Weekends & Major Holidays</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-700">Schedule a Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We'd love to show you around our facility and introduce you to our staff. Schedule a tour to see our
                animal-themed classrooms and learn more about our programs.
              </p>
              <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                <a href="/schedule-tour">Schedule a Tour</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
