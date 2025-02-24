import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Truck, BarChart, Shield, Zap, Users } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hardware & Software Procurement | PC Mechanix",
  description:
    "Streamlined hardware and software procurement services for businesses. Get the right IT equipment and software at competitive prices with expert guidance.",
}

const features = [
  {
    icon: ShoppingCart,
    title: "Tailored Solutions",
    description: "Customized procurement strategies to meet your specific needs",
  },
  {
    icon: Truck,
    title: "Efficient Delivery",
    description: "Streamlined procurement process for timely delivery",
  },
  {
    icon: BarChart,
    title: "Cost Optimization",
    description: "Strategic sourcing to maximize value and minimize costs",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality checks to ensure reliable products",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Quick setup and integration of new hardware and software",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Simplified management of multiple technology vendors",
  },
]

export default function ProcurementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Hardware & Software Procurement</h1>
            <p className="text-xl mb-8">Get the right technology for your business, at the right price.</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                <Link href="#features">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                <Link href="#contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Procurement Services</h2>
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

      <div className="mb-16">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Hardware & Software Procurement"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Procurement Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
          <li className="font-semibold">
            Needs Assessment
            <p className="font-normal ml-6 mt-2">
              We work closely with you to understand your specific technology requirements and business goals.
            </p>
          </li>
          <li className="font-semibold">
            Market Research
            <p className="font-normal ml-6 mt-2">
              Our team researches the best available options that meet your needs and budget.
            </p>
          </li>
          <li className="font-semibold">
            Vendor Negotiation
            <p className="font-normal ml-6 mt-2">
              We leverage our industry relationships to secure the best prices and terms for your procurement.
            </p>
          </li>
          <li className="font-semibold">
            Order Management
            <p className="font-normal ml-6 mt-2">
              We handle the entire ordering process, ensuring accuracy and timeliness.
            </p>
          </li>
          <li className="font-semibold">
            Delivery and Setup
            <p className="font-normal ml-6 mt-2">
              We coordinate delivery and provide setup services to get your new technology up and running quickly.
            </p>
          </li>
          <li className="font-semibold">
            Ongoing Support
            <p className="font-normal ml-6 mt-2">
              We offer continued support and management for your procured hardware and software.
            </p>
          </li>
        </ol>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you ensure we're getting the best prices?</AccordionTrigger>
            <AccordionContent>
              We have established relationships with a wide network of vendors and manufacturers, allowing us to
              negotiate competitive prices. We also continuously monitor market trends and conduct regular price
              comparisons to ensure you're getting the best value for your investment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can you help with software licensing?</AccordionTrigger>
            <AccordionContent>
              We have extensive experience in managing software licensing for businesses of all sizes. We can help you
              navigate complex licensing agreements, ensure compliance, and optimize your software costs. Our team stays
              up-to-date with the latest licensing models and can recommend the most cost-effective solutions for your
              needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer leasing options for hardware?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer flexible leasing options for hardware procurement. Leasing can be an excellent way to manage
              your cash flow and ensure you always have access to the latest technology. We can help you evaluate
              whether leasing or purchasing is the best option for your business based on your financial situation and
              technology needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-primary text-white rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Client Success Story</h2>
        <blockquote className="text-center italic">
          "PC Mechanix's procurement services have been a game-changer for our business. They've consistently sourced
          high-quality equipment at great prices, and their expertise in software licensing has saved us thousands.
          Their efficient process means we always have the technology we need, when we need it."
        </blockquote>
        <p className="text-center mt-4">- Lisa Thompson, COO of InnovateNow Inc.</p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your IT Procurement?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's streamline your hardware and software acquisition process. Our team is ready to help you source the
          right technology solutions to drive your business forward.
        </p>
        <Button size="lg" className="text-lg px-8">
          Start Your Procurement
        </Button>
      </div>
    </div>
  )
}

