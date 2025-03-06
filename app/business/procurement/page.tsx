import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Package, DollarSign, Truck, FileCheck, Users } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "IT Procurement Services Toronto | PC Mechanix",
  description:
    "Professional IT procurement services in Toronto. Get the best hardware and software solutions for your business at competitive prices.",
}

const features = [
  {
    icon: ShoppingCart,
    title: "Strategic Sourcing",
    description: "Expert procurement strategies to get the best technology solutions for your needs",
  },
  {
    icon: Package,
    title: "Hardware Procurement",
    description: "Access to a wide range of quality hardware from trusted manufacturers",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Competitive pricing and volume discounts for better value",
  },
  {
    icon: Truck,
    title: "Vendor Management",
    description: "Efficient management of supplier relationships and deliveries",
  },
  {
    icon: FileCheck,
    title: "License Management",
    description: "Software license tracking and compliance management",
  },
  {
    icon: Users,
    title: "Support Services",
    description: "Ongoing support for all procured hardware and software",
  },
]

export default function ProcurementPage() {
  return (
    <>
      <ServiceHero
        title="IT PROCUREMENT SERVICES"
        description="Get the right technology solutions for your business"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Solutions", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Strategic IT Procurement</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Streamline your technology acquisitions with our professional IT procurement services. We help Toronto
            businesses source and implement the right hardware and software solutions at competitive prices. Our
            procurement experts handle everything from vendor selection to delivery and setup, ensuring you get the
            best value for your investment.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Procurement Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Procurement FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What brands and products do you offer?</AccordionTrigger>
              <AccordionContent>
                We work with all major technology manufacturers and suppliers including Dell, HP, Lenovo, Apple,
                Microsoft, and many others. Our vendor-neutral approach ensures you get the best solutions for your
                specific needs, not just what's available from a single brand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you ensure competitive pricing?</AccordionTrigger>
              <AccordionContent>
                We leverage our strong vendor relationships and bulk purchasing power to secure competitive prices.
                We regularly compare prices across suppliers and negotiate volume discounts. We also help you time
                purchases to take advantage of promotional offers and product cycles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about warranty and support?</AccordionTrigger>
              <AccordionContent>
                All hardware comes with manufacturer warranties, and we can arrange extended warranty coverage as
                needed. We also provide ongoing support for all procured equipment, including setup, maintenance,
                and troubleshooting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you handle software licensing?</AccordionTrigger>
              <AccordionContent>
                We manage the entire software licensing process, from initial purchase to renewal management. We
                help you choose the right licensing models, track compliance, and optimize costs. We also provide
                regular license audits to ensure you're not over or under-licensed.
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
