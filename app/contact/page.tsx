import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Contact Us | PC Mechanix",
  description: "Get in touch with PC Mechanix for all your computer repair and IT service needs in Toronto.",
  keywords: "contact PC Mechanix, Toronto IT support, computer repair contact, IT services Toronto, tech support contact, PC repair phone number, Toronto computer help, IT consultation, contact form, PC Mechanix location",
}

export default function ContactPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="Contact Us"
        description="Get in touch with our expert team for all your IT needs"
        primaryCTA={{ text: "Call Now", href: "tel:416-300-1006" }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <span>1140 Davenport Road, Toronto, ON M6G 2C3</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-2" />
                <span>416-300-1006</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-2" />
                <span>info@pcmechanix.ca</span>
              </div>
            </div>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8663199341295!2d-79.43046812348074!3d43.67402905218701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34641e0d5a17%3A0x3b0c9c9a8a6d4c0f!2s1140%20Davenport%20Rd%2C%20Toronto%2C%20ON%20M6G%202C3%2C%20Canada!5e0!3m2!1sen!2sus!4v1686848828387!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

