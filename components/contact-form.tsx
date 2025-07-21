"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [serviceInterest, setServiceInterest] = useState("")
  const [projectBudget, setProjectBudget] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", {
      firstName,
      lastName,
      email,
      company,
      serviceInterest,
      projectBudget,
      message,
    })
    // Reset form
    setFirstName("")
    setLastName("")
    setEmail("")
    setCompany("")
    setServiceInterest("")
    setProjectBudget("")
    setMessage("")
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
      <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-slate-700 font-medium">
              First Name
            </Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-slate-700 font-medium">
              Last Name
            </Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-slate-700 font-medium">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company" className="text-slate-700 font-medium">
            Company
          </Label>
          <Input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1"
          />
        </div>

        {/* Service Interest */}
        <div>
          <Label htmlFor="serviceInterest" className="text-slate-700 font-medium">
            Service Interest
          </Label>
          <Select value={serviceInterest} onValueChange={setServiceInterest}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="saas-products">SaaS Products</SelectItem>
              <SelectItem value="custom-development">Custom Development</SelectItem>
              <SelectItem value="web-applications">Web Applications</SelectItem>
              <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
              <SelectItem value="enterprise-systems">Enterprise Systems</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Budget */}
        <div>
          <Label htmlFor="projectBudget" className="text-slate-700 font-medium">
            Project Budget
          </Label>
          <Select value={projectBudget} onValueChange={setProjectBudget}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-10k">Under $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-plus">$100,000+</SelectItem>
              <SelectItem value="discuss">Let's discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="text-slate-700 font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project requirements..."
            rows={5}
            required
            className="mt-1 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-medium"
          >
            Send Message
          </Button>
        </div>

        {/* Privacy Policy */}
        <p className="text-sm text-slate-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}

