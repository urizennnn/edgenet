"use client"
import ContactForm from "@/components/contact-form"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"

export default function TicketPage() {
  return (
    <>
      <SiteNav />
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-xl w-full px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Submit a Support Ticket</h1>
          <ContactForm />
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
