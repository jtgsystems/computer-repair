import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Users, Calendar, Cloud, Lock, Zap } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Email & Collaboration Solutions | PC Mechanix",
  description:
    "Enhance team productivity with our email and collaboration solutions. Expert setup and support for Microsoft 365, Google Workspace, and more.",
}

const services = [
  {
    icon: Mail,
    title: "Email Management",
    description: "Secure and efficient email solutions for your business",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Tools for seamless teamwork and file sharing",
  },
  {
    icon: Calendar,
    title: "Scheduling & Planning",
    description: "Integrated calendars and planning tools for better organization",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud storage for easy access to your files from anywhere",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Advanced security features to protect your communication and data",
  },
  {
    icon: Zap,
    title: "Productivity Tools",
    description: "Integrated apps and tools to boost your team's efficiency",
  },
]

export default function EmailCollaborationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Email & Collaboration Solutions</h1>
            <p className="text-xl mb-8">Empower your team with cutting-edge communication and collaboration tools.</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                <Link href="#services">Our Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Email & Collaboration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <service.icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-16">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Email & Collaboration"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Implementation Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
          <li className="font-semibold">
            Assessment
            <p className="font-normal ml-6 mt-2">
              We evaluate your current systems and collaboration needs to recommend the best solution.
            </p>
          </li>
          <li className="font-semibold">
            Planning
            <p className="font-normal ml-6 mt-2">
              We create a detailed migration and implementation plan tailored to your business.
            </p>
          </li>
          <li className="font-semibold">
            Setup and Migration
            <p className="font-normal ml-6 mt-2">
              We handle the technical setup and migrate your existing data to the new platform.
            </p>
          </li>
          <li className="font-semibold">
            Configuration
            <p className="font-normal ml-6 mt-2">
              We configure your new environment for optimal security and productivity.
            </p>
          </li>
          <li className="font-semibold">
            Training
            <p className="font-normal ml-6 mt-2">
              We provide comprehensive training to ensure your team can fully leverage the new tools.
            </p>
          </li>
          <li className="font-semibold">
            Ongoing Support
            <p className="font-normal ml-6 mt-2">
              We offer continuous support to address any issues and help you maximize your investment.
            </p>
          </li>
        </ol>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Which collaboration platform is best for my business?</AccordionTrigger>
            <AccordionContent>
              The best platform depends on your specific needs, existing infrastructure, and team preferences. Microsoft
              365 is often ideal for businesses heavily invested in the Microsoft ecosystem, while Google Workspace can
              be great for companies looking for a more web-centric approach. We'll assess your requirements and help
              you choose the best fit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does the migration process typically take?</AccordionTrigger>
            <AccordionContent>
              The duration of the migration process can vary depending on the size of your organization and the amount
              of data to be migrated. For small businesses, it can often be completed within a few days. Larger
              organizations with more complex setups might take a few weeks. We'll provide a detailed timeline during
              the planning phase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you ensure the security of our data during and after migration?</AccordionTrigger>
            <AccordionContent>
              We take data security very seriously. During migration, we use secure, encrypted transfer methods. After
              migration, we implement best practices for data protection, including multi-factor authentication,
              advanced threat protection, and regular security audits. We also ensure your new environment complies with
              relevant data protection regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-primary text-white rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Client Success Story</h2>
        <blockquote className="text-center italic">
          "PC Mechanix transformed our team's collaboration capabilities. The migration to Microsoft 365 was smooth, and
          their training ensured our team could take full advantage of the new tools. We've seen a significant boost in
          productivity and teamwork since the implementation."
        </blockquote>
        <p className="text-center mt-4">- Sarah Johnson, Operations Manager at TechInnovate Ltd.</p>
      </div>
    </div>
  )
}

