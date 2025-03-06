import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Lock, Zap, Users, ArrowUpDown, BarChart } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Cloud Services Toronto | PC Mechanix",
  description:
    "Professional cloud computing services in Toronto. Transform your business with secure, scalable cloud solutions tailored to your needs.",
}

const features = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless transition of your business applications and data to the cloud with minimal disruption",
  },
  {
    icon: Lock,
    title: "Cloud Security",
    description: "Advanced security measures to protect your cloud infrastructure and data from threats",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Cloud infrastructure optimization for maximum speed, reliability, and cost-effectiveness",
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Implementation of cloud-based collaboration solutions to enhance team productivity",
  },
  {
    icon: ArrowUpDown,
    title: "Scalable Solutions",
    description: "Flexible cloud infrastructure that grows with your business needs",
  },
  {
    icon: BarChart,
    title: "Cloud Analytics",
    description: "Advanced monitoring and analytics to optimize your cloud resource usage",
  },
]

export default function CloudServicesPage() {
  return (
    <>
      <ServiceHero
        title="CLOUD SERVICES FOR TORONTO BUSINESSES"
        description="Transform your business with secure and scalable cloud solutions"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Enterprise-Grade Cloud Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Move your business to the cloud with confidence. Our comprehensive cloud services help Toronto businesses
            leverage the power of cloud computing for enhanced flexibility, security, and scalability. Whether you're
            looking to migrate existing systems or build new cloud-native solutions, we provide expert guidance and
            support every step of the way.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <feature.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Cloud Services FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does cloud migration typically take?</AccordionTrigger>
              <AccordionContent>
                The duration of cloud migration varies depending on the complexity and size of your systems. A basic
                migration can be completed in a few weeks, while more complex enterprise migrations might take several
                months. We provide detailed timelines and ensure minimal disruption to your operations during the
                process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is cloud computing secure for business data?</AccordionTrigger>
              <AccordionContent>
                Yes, modern cloud solutions offer robust security features. We implement multiple layers of security,
                including encryption, access controls, and regular security audits. Our cloud solutions comply with
                industry standards and regulations, ensuring your data remains protected.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can cloud services benefit my business?</AccordionTrigger>
              <AccordionContent>
                Cloud services offer numerous benefits including reduced IT costs, improved scalability, enhanced
                collaboration, automatic updates, and disaster recovery capabilities. They also provide flexibility for
                remote work and access to enterprise-grade technology without significant upfront investment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What cloud platforms do you support?</AccordionTrigger>
              <AccordionContent>
                We have expertise across major cloud platforms including Microsoft Azure, Amazon Web Services (AWS),
                and Google Cloud Platform. We help you choose and implement the best platform or multi-cloud solution
                based on your specific business needs and objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            PARTNER WITH PC MECHANIX FOR YOUR BUSINESS SUCCESS
          </h2>
          <p className="text-xl mb-8">
            Discover how PC Mechanix can transform your business's IT infrastructure into a powerful driver of growth
            and success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/business">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
