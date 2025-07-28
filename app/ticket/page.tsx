"use client"
import ContactForm from "@/components/contact-form"

export default function TicketPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-xl w-full px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit a Support Ticket</h1>
        <ContactForm />
      </div>
    </div>
  )
}
