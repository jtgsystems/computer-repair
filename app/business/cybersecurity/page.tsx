import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, AlertTriangle, FileCheck, Users } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | PC Mechanix",
  description:
    "Comprehensive cybersecurity solutions to protect your business from evolving digital threats. Expert threat detection, prevention, and response services.",
}

const services = [
  {
    icon: Shield,
    title: "Threat Protection",
    description:
      "Advanced security measures to defend against cyber attacks, including next-generation firewalls and intrusion prevention systems.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description:
      "24/7 surveillance of your network for potential threats, with real-time alerts and rapid response protocols.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Robust measures to secure sensitive business data, including encryption, access controls, and data loss prevention strategies.",
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessment",
    description:
      "Regular scans and assessments to identify and address potential vulnerabilities in your systems and applications.",
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description:
      "Ensure your cybersecurity measures meet industry standards and regulatory requirements (e.g., GDPR, HIPAA, PCI DSS).",
  },
  {
    icon: Users,
    title: "Security Awareness Training",
    description:
      "Comprehensive training programs to educate your staff on cybersecurity best practices and threat recognition.",
  },
]

export default function CybersecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Cybersecurity Solutions</h1>
            <p className="text-xl mb-8">
              Protect your business from evolving digital threats with our comprehensive cybersecurity services.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
                <Link href="#services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800"
              >
                <Link href="#contact">Get Protected</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cybersecurity Services</h2>
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
          alt="Cybersecurity Solutions"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Cybersecurity Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Proactive Defense</h3>
            <p className="text-gray-700 mb-4">
              We don't just react to threats—we anticipate them. Our proactive approach involves continuous monitoring,
              regular security assessments, and staying ahead of the latest cybersecurity trends and threats.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tailored Solutions</h3>
            <p className="text-gray-700 mb-4">
              We understand that every business is unique. That's why we create customized cybersecurity strategies that
              align with your specific industry, compliance requirements, and risk profile.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
            <p className="text-gray-700 mb-4">
              In the event of a security incident, our rapid response team is ready to act. We have established
              protocols to quickly contain threats, minimize damage, and restore normal operations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
            <p className="text-gray-700 mb-4">
              Cybersecurity is an ongoing process. We continuously refine and update our strategies based on the
              evolving threat landscape and your changing business needs.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How often should we conduct security assessments?</AccordionTrigger>
            <AccordionContent>
              We recommend conducting comprehensive security assessments at least annually, with more frequent
              vulnerability scans performed quarterly or monthly, depending on your risk profile and industry
              requirements. However, cybersecurity should be an ongoing process with continuous monitoring and updates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What should we do if we suspect a security breach?</AccordionTrigger>
            <AccordionContent>
              If you suspect a security breach, it's crucial to act quickly. Contact our incident response team
              immediately. In the meantime, isolate affected systems if possible, but do not turn them off as this can
              lead to loss of valuable forensic data. Document everything you observe, and avoid making changes to the
              system until our team arrives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can we train our employees in cybersecurity best practices?</AccordionTrigger>
            <AccordionContent>
              Employee training is a critical component of any cybersecurity strategy. We offer comprehensive security
              awareness training programs that can be tailored to your organization. These include online courses,
              simulated phishing exercises, in-person workshops, and regular updates on new threats. We recommend
              conducting training sessions at least annually, with more frequent updates for high-risk roles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-primary text-white rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Client Success Story</h2>
        <blockquote className="text-center italic">
          "After experiencing a ransomware attack, we turned to PC Mechanix for help. Not only did they assist in our
          recovery, but they also implemented a robust cybersecurity strategy that has protected us from numerous
          threats since. Their proactive approach and expert team have given us peace of mind in an increasingly
          dangerous digital world."
        </blockquote>
        <p className="text-center mt-4">- Michael Chen, CTO of SecureHealth Inc.</p>
      </div>
    </div>
  )
}

