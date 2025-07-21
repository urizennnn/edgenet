"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { CONTACT_EMAIL } from "@/lib/constants"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    const firstName = data.get("firstName") || ""
    const lastName = data.get("lastName") || ""
    const email = data.get("email") || ""
    const company = data.get("company") || ""
    const service = data.get("service") || ""
    const budget = data.get("budget") || ""
    const message = data.get("message") || ""

    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nService Interest: ${service}\nBudget: ${budget}\n\n${message}`
    )

    toast({
      title: "Opening email client...",
    })

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Website%20Contact&body=${body}`

    setIsSubmitting(false)
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select name="service">
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="saas">SaaS Products</SelectItem>
                <SelectItem value="custom">Custom Development</SelectItem>
                <SelectItem value="web">Web Applications</SelectItem>
                <SelectItem value="mobile">Mobile Apps</SelectItem>
                <SelectItem value="consultation">Free Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Project Budget</Label>
            <Select name="budget">
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="over-100k">Over $100,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project requirements..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
