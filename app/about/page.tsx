import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceLayout from "@/components/ServiceLayout"
import { CheckCircle, Users, Award, ThumbsUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About PC Mechanix | Toronto's Premier IT Solutions Provider",
  description:
    "Learn about PC Mechanix, our history, mission, and commitment to providing top-quality computer repair and IT services in Toronto.",
  keywords: "PC Mechanix, about us, Toronto IT company, computer repair history, IT solutions provider, tech support Toronto, PC repair company, IT services mission, computer repair experts, Toronto tech support",
}

export default function AboutPage() {
  return (
    <ServiceLayout>
      {/* Hero Section with gradient background */}
      <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className="text-6xl font-extrabold mb-6 text-shadow-lg uppercase tracking-tight"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
            >
              ABOUT PC MECHANIX
            </h1>
            <p className="text-xl mb-12 text-shadow">
              Toronto's leading provider of comprehensive IT solutions and services since 2005.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="PC Mechanix Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary h-20 w-20 rounded-full hidden md:flex items-center justify-center">
                <span className="text-white font-bold">Since 2005</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Founded in 2005, PC Mechanix has grown from a small computer repair shop to Toronto's leading IT
                solutions provider. Our journey began with a simple mission: to provide reliable, honest, and expert
                tech support to individuals and businesses in our community.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Over the years, we've expanded our services to meet the evolving needs of our clients, embracing new
                technologies and staying ahead of the curve in the fast-paced world of IT.
              </p>
              <p className="text-gray-700 text-lg">
                Today, we're proud to offer a comprehensive range of services, from basic computer repairs to advanced
                enterprise-level IT solutions, all delivered with the same commitment to quality and customer
                satisfaction that has been our hallmark since day one.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary uppercase tracking-wide">OUR MISSION</h2>
          <div className="bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white p-10 rounded-lg shadow-xl">
            <p className="text-2xl text-center font-light leading-relaxed">
              At PC Mechanix, our mission is to empower individuals and businesses through technology. We strive to
              provide top-quality IT services and solutions that enhance productivity, ensure security, and drive
              success for our clients.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary uppercase tracking-wide">WHY CHOOSE PC MECHANIX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((reason, index) => (
              <Card 
                key={index} 
                className="flex flex-col items-center text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50"
              >
                <div className="p-4 rounded-full bg-primary/10 mb-6">
                  <reason.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] rounded-xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-white uppercase tracking-wide">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-6">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-8 border-none shadow-xl bg-white/10 backdrop-blur-sm rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-100">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary uppercase tracking-wide">OUR CERTIFICATIONS</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-gray-100 rounded-full px-8 py-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} width={50} height={50} className="mr-4" />
                <span className="font-bold text-gray-800">{cert.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 bg-gray-50 rounded-xl shadow-inner">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Experience the PC Mechanix Difference?</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Whether you need personal tech support or comprehensive IT solutions for your business, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300" 
              asChild
            >
              <Link href="/contact" className="flex items-center">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-primary hover:bg-primary/10 border-primary shadow-lg transition-colors duration-300" 
              asChild
            >
              <Link href="/services" className="flex items-center">Explore Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
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

