import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Camera, Lock, Bell, Fingerprint, Wifi, ArrowRight } from "lucide-react"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata = {
  title: "Business Security Systems | PC Mechanix",
  description:
    "Comprehensive security solutions for businesses. CCTV, access control, alarm systems, and more to protect your assets and ensure peace of mind.",
}

const securitySystems = [
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "High-definition surveillance cameras with advanced analytics for comprehensive monitoring.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Secure entry systems using keycards, biometrics, or mobile credentials for authorized access.",
  },
  {
    icon: Bell,
    title: "Alarm Systems",
    description: "24/7 monitored intrusion detection systems to safeguard your premises.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Cutting-edge biometric authentication for high-security areas.",
  },
  {
    icon: Wifi,
    title: "Network Security",
    description: "Robust cybersecurity measures to protect your digital assets and data.",
  },
  {
    icon: Shield,
    title: "Integrated Security Solutions",
    description: "Comprehensive security management systems that combine multiple security technologies.",
  },
]

export default function SecuritySystemsPage() {
  return (
    <ServiceLayout>
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24">
        <Image
          src="/placeholder.svg?height=400&width=1600"
          alt="Business Security Systems"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-6">Business Security Systems</h1>
            <p className="text-xl mb-8">
              Protect your business with state-of-the-art security solutions tailored to your needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Get a Security Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySystems.map((system, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <system.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{system.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose PC Mechanix for Your Security Needs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expert Installation and Support</h3>
              <p className="text-gray-700 mb-4">
                Our team of certified security professionals ensures that your systems are installed correctly and
                optimized for your specific business environment. We provide ongoing support and maintenance to keep
                your security measures up-to-date and functioning at peak performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Customized Solutions</h3>
              <p className="text-gray-700 mb-4">
                We understand that every business has unique security requirements. That's why we offer tailored
                security solutions that address your specific needs, whether you're a small retail shop or a large
                corporate office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Security System Process</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg text-gray-700">
                  <span className="font-semibold">Initial Consultation:</span> We assess your security needs and
                  understand your business operations.
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-semibold">Custom Design:</span> Our experts create a tailored security plan for
                  your business.
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-semibold">Professional Installation:</span> We install your security systems
                  with minimal disruption to your business.
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-semibold">Staff Training:</span> We provide comprehensive training on how to use
                  and manage your new security systems.
                </li>
                <li className="text-lg text-gray-700">
                  <span className="font-semibold">Ongoing Support:</span> Our team is always available for maintenance,
                  upgrades, and support.
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Security System Installation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Retail",
              "Healthcare",
              "Finance",
              "Education",
              "Manufacturing",
              "Hospitality",
              "Government",
              "Technology",
            ].map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and take the first step towards comprehensive business security.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get Your Free Security Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </ServiceLayout>
  )
}

