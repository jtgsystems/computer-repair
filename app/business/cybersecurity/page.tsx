import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Cybersecurity Solutions Toronto | PC Mechanix",
  description:
    "Comprehensive cybersecurity solutions in Toronto. Protect your business with advanced threat detection, prevention, and response services.",
}

const features = [
  {
    icon: Shield,
    title: "Threat Protection",
    description: "Advanced security systems to protect against malware, ransomware, and other cyber threats",
  },
  {
    icon: Lock,
    title: "Network Security",
    description: "Robust network security measures including firewalls, encryption, and access controls",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Continuous monitoring of your systems for potential security threats and suspicious activities",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response protocols to address and mitigate security incidents quickly",
  },
  {
    icon: FileCheck,
    title: "Security Audits",
    description: "Regular security assessments and compliance audits to identify vulnerabilities",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Employee cybersecurity awareness training to prevent human-error security breaches",
  },
]

export default function CybersecurityPage() {
  return (
    <>
      <ServiceHero
        title="CYBERSECURITY SOLUTIONS"
        description="Protect your business with enterprise-grade security solutions"
        primaryCTA={{ text: "Schedule a Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Our Services", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Advanced Cybersecurity for Toronto Businesses</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            In today's digital landscape, cybersecurity is more critical than ever. Our comprehensive security
            solutions protect your business from evolving cyber threats while ensuring compliance with industry
            regulations. We provide multi-layered security strategies that safeguard your data, systems, and
            reputation.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Security Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Security FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What security measures do you implement?</AccordionTrigger>
              <AccordionContent>
                We implement a comprehensive security stack including next-generation firewalls, endpoint protection,
                intrusion detection systems, email security, web filtering, and data encryption. Our solutions are
                regularly updated to protect against the latest threats and vulnerabilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you handle security incidents?</AccordionTrigger>
              <AccordionContent>
                We have a robust incident response plan that includes immediate threat containment, thorough
                investigation, and rapid recovery procedures. Our 24/7 security team monitors your systems and responds
                quickly to any security alerts, minimizing potential damage from security incidents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you provide employee security training?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer comprehensive security awareness training programs. These include phishing simulations,
                security best practices, password management training, and regular updates on new threats. We believe
                educated employees are your first line of defense against cyber attacks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you ensure compliance with security regulations?</AccordionTrigger>
              <AccordionContent>
                We stay current with industry security standards and regulations. Our solutions help ensure compliance
                with PIPEDA, GDPR, PCI DSS, and other relevant standards. We conduct regular audits and provide
                detailed compliance reports for your records.
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
            >
              Schedule a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
