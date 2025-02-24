import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Target, BarChart, Users, Zap } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "IT Consulting Services | PC Mechanix",
  description:
    "Expert IT consulting services to align your technology strategy with your business goals. Get insights on the latest trends and innovative solutions.",
}

const features = [
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "Develop a comprehensive IT strategy aligned with your business objectives",
  },
  {
    icon: TrendingUp,
    title: "Technology Roadmap",
    description: "Create a clear path for technology adoption and implementation",
  },
  {
    icon: Target,
    title: "Process Optimization",
    description: "Streamline your IT processes for improved efficiency and productivity",
  },
  {
    icon: BarChart,
    title: "Performance Analysis",
    description: "Evaluate and enhance your IT infrastructure's performance",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Guide your team through technological transitions smoothly",
  },
  {
    icon: Zap,
    title: "Innovation Consulting",
    description: "Identify and implement cutting-edge technologies to give you a competitive edge",
  },
]

export default function ITConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">IT Consulting Services</h1>
            <p className="text-xl mb-8">Strategic technology guidance to drive your business forward.</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                <Link href="#features">Explore Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                <Link href="#contact">Get a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our IT Consulting Services</h2>
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
          alt="IT Consulting Services"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our IT Consulting Services?</h2>
        <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto text-gray-700">
          <li>Experienced consultants with diverse industry expertise</li>
          <li>Tailored solutions that address your unique business challenges</li>
          <li>Proven methodologies for successful technology implementation</li>
          <li>Focus on ROI and measurable business outcomes</li>
          <li>Ongoing support and guidance throughout the transformation process</li>
          <li>Up-to-date knowledge of emerging technologies and trends</li>
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Consulting Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
          <li className="font-semibold">
            Discovery and Assessment
            <p className="font-normal ml-6 mt-2">
              We begin by thoroughly understanding your business, its goals, and current IT landscape.
            </p>
          </li>
          <li className="font-semibold">
            Strategy Development
            <p className="font-normal ml-6 mt-2">
              Based on our findings, we develop a comprehensive IT strategy aligned with your business objectives.
            </p>
          </li>
          <li className="font-semibold">
            Solution Design
            <p className="font-normal ml-6 mt-2">
              We design tailored solutions to address your specific challenges and opportunities.
            </p>
          </li>
          <li className="font-semibold">
            Implementation Planning
            <p className="font-normal ml-6 mt-2">
              We create a detailed roadmap for implementing the proposed solutions.
            </p>
          </li>
          <li className="font-semibold">
            Execution Support
            <p className="font-normal ml-6 mt-2">
              Our team provides guidance and support throughout the implementation process.
            </p>
          </li>
          <li className="font-semibold">
            Continuous Improvement
            <p className="font-normal ml-6 mt-2">
              We offer ongoing support and regularly review and refine the strategy to ensure long-term success.
            </p>
          </li>
        </ol>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How can IT consulting benefit my business?</AccordionTrigger>
            <AccordionContent>
              IT consulting can help your business optimize its technology investments, improve operational efficiency,
              reduce costs, and gain a competitive advantage. Our consultants work with you to align your IT strategy
              with your business goals, identify areas for improvement, and implement solutions that drive growth and
              innovation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What industries do you specialize in?</AccordionTrigger>
            <AccordionContent>
              Our IT consulting team has experience across a wide range of industries, including finance, healthcare,
              manufacturing, retail, and professional services. We tailor our approach to meet the specific needs and
              regulatory requirements of each industry, ensuring that our solutions are both effective and compliant.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does a typical IT consulting project take?</AccordionTrigger>
            <AccordionContent>
              The duration of an IT consulting project can vary greatly depending on its scope and complexity. Some
              projects may be completed in a few weeks, while others might span several months. During our initial
              consultation, we'll assess your needs and provide a detailed timeline for your specific project.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-primary text-white rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Client Success Story</h2>
        <blockquote className="text-center italic">
          "PC Mechanix's IT consulting services were instrumental in our digital transformation. Their strategic
          guidance helped us modernize our infrastructure, resulting in a 30% increase in productivity and significant
          cost savings. Their expertise has been invaluable to our business growth."
        </blockquote>
        <p className="text-center mt-4">- Mark Johnson, CTO of GrowFast Technologies</p>
      </div>
    </div>
  )
}

