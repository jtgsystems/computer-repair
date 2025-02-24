import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, HeadphonesIcon, BarChart, Cloud, Shield, Cog, Clock, Laptop, Users } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import { ServiceLayout } from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Managed IT Services for Toronto Businesses | PC Mechanix",
  description:
    "Comprehensive Managed IT Services for Toronto businesses. 24/7 support, proactive monitoring, and strategic IT management to keep your technology running smoothly in the GTA.",
}

const services = [
  {
    icon: Monitor,
    title: "24/7 Toronto-Based Monitoring",
    description:
      "Continuous monitoring of your IT systems from our Toronto operations center, preventing issues before they impact your GTA business.",
  },
  {
    icon: HeadphonesIcon,
    title: "Local Help Desk Support",
    description:
      "Responsive support for all your IT-related queries, available round the clock with Toronto-specific expertise.",
  },
  {
    icon: BarChart,
    title: "Toronto Business Performance Optimization",
    description:
      "Regular updates and optimizations to keep your systems running at peak efficiency in Toronto's competitive business environment.",
  },
  {
    icon: Cloud,
    title: "GTA-Optimized Cloud Management",
    description:
      "Expert management of your cloud infrastructure, leveraging Toronto's robust connectivity for improved scalability and performance.",
  },
  {
    icon: Shield,
    title: "Toronto-Focused Security Management",
    description:
      "Comprehensive security measures to protect your business from cyber threats, tailored to the unique risks in the Toronto market.",
  },
  {
    icon: Cog,
    title: "Toronto IT Infrastructure Management",
    description:
      "Proactive management and maintenance of your entire IT infrastructure, optimized for Toronto's business landscape.",
  },
  {
    icon: Clock,
    title: "GTA-Ready Backup and Disaster Recovery",
    description:
      "Regular backups and robust disaster recovery plans to ensure business continuity in the face of Toronto's unique challenges.",
  },
  {
    icon: Laptop,
    title: "Toronto Remote Work Support",
    description:
      "Specialized support for remote and hybrid work environments, catering to the evolving work culture in Toronto and the GTA.",
  },
  {
    icon: Users,
    title: "Toronto Vendor Management",
    description:
      "Streamlined management of your technology vendors and licenses, leveraging our local Toronto connections and expertise.",
  },
]

export default function ManagedITPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="Managed IT Services for Toronto Businesses"
        description="Comprehensive IT support and management to keep your Toronto business running smoothly."
        primaryCTA={{ text: "Explore Toronto IT Services", href: "#services" }}
        secondaryCTA={{ text: "Get a Toronto-Specific Quote", href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Managed IT Services Tailored for Toronto Businesses</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Focus on your Toronto business—let us handle the tech. Our managed IT services take the hassle out of system
            maintenance, monitoring, and support. We proactively manage your servers, networks, and devices, catching
            issues before they disrupt your day in the bustling GTA. With 24/7 support and a dedicated Toronto team,
            we're here to minimize downtime, optimize performance, and save you money. Think of us as your in-house IT
            crew, without the overhead, perfectly attuned to Toronto's unique business environment.
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Toronto-Focused Managed IT Services</h2>
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
          alt="Managed IT Services in Toronto"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Toronto Managed IT Services?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Toronto-Centric Proactive Approach</h3>
            <p className="text-gray-700 mb-4">
              We don't just react to IT issues—we prevent them with a deep understanding of Toronto's business
              landscape. Our proactive monitoring and maintenance keep your systems running smoothly, minimizing
              downtime and disruptions in the fast-paced GTA environment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Cost-Effective for Toronto Businesses</h3>
            <p className="text-gray-700 mb-4">
              Our managed services model provides predictable monthly costs tailored to Toronto's market rates, reducing
              the need for expensive in-house IT staff or unexpected repair costs that can strain your GTA business
              budget.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Scalable Solutions for Growing Toronto Companies</h3>
            <p className="text-gray-700 mb-4">
              As your business grows in Toronto's dynamic economy, our services scale with you. We ensure your IT
              infrastructure can support your business at every stage of growth, from startup to enterprise, across the
              GTA.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Toronto-Based Expert Team</h3>
            <p className="text-gray-700 mb-4">
              Our team of certified IT professionals brings a wealth of experience across various technologies and
              industries, with specific expertise in Toronto's business sectors. You'll always have access to local,
              knowledgeable support.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions from Toronto Businesses</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does your 24/7 monitoring benefit my Toronto business specifically?</AccordionTrigger>
            <AccordionContent>
              Our 24/7 monitoring is tailored to the unique challenges of Toronto's business environment. We have
              advanced systems constantly watching your IT infrastructure for any signs of trouble, including
              Toronto-specific issues like power fluctuations or local network disruptions. This includes server health,
              network performance, security threats, and more. If an issue is detected, our local team is alerted
              immediately and can often resolve problems before you even notice them, ensuring your business stays
              operational in Toronto's competitive market.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How quickly can you respond to IT issues across the GTA?</AccordionTrigger>
            <AccordionContent>
              Our response times are optimized for the Greater Toronto Area. For critical issues that affect your core
              business operations, we typically respond within 15 minutes, leveraging our local presence to provide
              rapid support. For less urgent matters, we guarantee a response within 2 hours during business hours. Many
              issues can be resolved remotely, but if on-site support is needed, our strategically located technicians
              can quickly reach businesses across Toronto, from downtown to the suburbs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can you support our remote workers spread across Toronto and the GTA?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We have extensive experience supporting remote and hybrid work environments, which has become
              increasingly common in Toronto's evolving work culture. Our services include secure remote access
              solutions optimized for Toronto's infrastructure, cloud-based collaboration tools, virtual desktop
              infrastructures, and dedicated support for remote workers. We ensure your team can work efficiently and
              securely from anywhere in the GTA, whether they're in a downtown condo or a suburban home office.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-primary text-white rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Toronto Business Success Story</h2>
        <blockquote className="text-center italic">
          "Switching to PC Mechanix's Managed IT Services was a game-changer for our Toronto-based startup. Their
          proactive approach and deep understanding of the local tech scene have dramatically reduced our downtime and
          helped us scale rapidly in Toronto's competitive market. It's like having an enterprise-level IT department
          that truly gets the unique challenges of running a business in the GTA."
        </blockquote>
        <p className="text-center mt-4">- Emily Rodriguez, COO of GrowFast Startups, Toronto</p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Toronto Business's IT Management?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Don't let IT issues hold your Toronto business back. Our Managed IT Services provide the comprehensive support
          and strategic guidance you need to leverage technology for growth in the GTA's dynamic business environment.
          Let's discuss how we can tailor our services to your unique needs in Toronto.
        </p>
        <Button size="lg" className="text-lg px-8">
          Schedule Your Toronto IT Consultation
        </Button>
      </div>
    </ServiceLayout>
  )
}

