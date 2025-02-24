import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ServiceLayout from "@/components/ServiceLayout"
import { CheckCircle, Users, Award, ThumbsUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About PC Mechanix | Toronto's Premier IT Solutions Provider",
  description:
    "Learn about PC Mechanix, our history, mission, and commitment to providing top-quality computer repair and IT services in Toronto.",
}

export default function AboutPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">About PC Mechanix</h1>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="PC Mechanix Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, PC Mechanix has grown from a small computer repair shop to Toronto's leading IT
                solutions provider. Our journey began with a simple mission: to provide reliable, honest, and expert
                tech support to individuals and businesses in our community.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've expanded our services to meet the evolving needs of our clients, embracing new
                technologies and staying ahead of the curve in the fast-paced world of IT.
              </p>
              <p className="text-gray-700">
                Today, we're proud to offer a comprehensive range of services, from basic computer repairs to advanced
                enterprise-level IT solutions, all delivered with the same commitment to quality and customer
                satisfaction that has been our hallmark since day one.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
            <p className="text-xl text-center">
              At PC Mechanix, our mission is to empower individuals and businesses through technology. We strive to
              provide top-quality IT services and solutions that enhance productivity, ensure security, and drive
              success for our clients.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose PC Mechanix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <reason.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-6 py-2">
                <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} width={40} height={40} className="mr-3" />
                <span className="font-semibold">{cert.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the PC Mechanix Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you need personal tech support or comprehensive IT solutions for your business, we're here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}

const reasons = [
  {
    icon: CheckCircle,
    title: "Expertise",
    description: "Our team of certified professionals brings years of experience to every job.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "We prioritize your needs and provide personalized solutions.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We use only high-quality parts and stand behind our work with warranties.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Reputation",
    description: "We've built a strong reputation in Toronto for reliable and honest service.",
  },
]

const values = [
  {
    title: "Integrity",
    description:
      "We believe in honest, transparent service. We'll always give you straightforward advice and fair pricing.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to technical solutions.",
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of technology, constantly learning and adapting to serve you better.",
  },
]

const certifications = [
  {
    name: "Microsoft Certified",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Apple Certified",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "CompTIA A+",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Cisco Certified",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

