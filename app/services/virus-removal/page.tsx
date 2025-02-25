import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, CheckCircle, Clock, Search, Lock } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"
import ServiceLayout from "@/components/ServiceLayout"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Virus Removal Services Toronto | PC Mechanix",
  description:
    "Professional virus and malware removal services in Toronto. Protect your devices and data with our expert technicians.",
}

const features = [
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Cutting-edge tools to remove stubborn viruses",
  },
  {
    icon: Search,
    title: "Deep Scanning",
    description: "Thorough system analysis and threat detection",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Protect your sensitive information from threats",
  },
  {
    icon: Zap,
    title: "Quick Service",
    description: "Fast turnaround to minimize your downtime",
  },
  {
    icon: CheckCircle,
    title: "Complete Cleanup",
    description: "Comprehensive system optimization after removal",
  },
  {
    icon: Clock,
    title: "Prevention",
    description: "Ongoing protection against future threats",
  },
]

export default function VirusRemovalPage() {
  return (
    <ServiceLayout>
      <ServiceHero
        title="VIRUS REMOVAL SERVICES"
        description="Professional virus and malware removal solutions"
        primaryCTA={{ text: "Get Protected", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Expert Virus Removal Solutions</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            In today's digital landscape, cybersecurity is more critical than ever. Our expert technicians
            use advanced tools and techniques to thoroughly clean and protect your systems from viruses,
            malware, and other cyber threats. We not only remove existing threats but also implement robust
            prevention strategies to keep your devices secure.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">System Scan</h3>
                    <p className="text-gray-600">Comprehensive threat detection analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Threat Removal</h3>
                    <p className="text-gray-600">Eliminate viruses, malware, and other threats</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">System Cleanup</h3>
                    <p className="text-gray-600">Optimize performance and remove residual issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Protection Setup</h3>
                    <p className="text-gray-600">Install and configure security software</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Prevention</h3>
                    <p className="text-gray-600">Implement measures against future threats</p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Virus Removal Process"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Common Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I know if my device has a virus?</AccordionTrigger>
              <AccordionContent>
                Common signs include slow performance, unexpected pop-ups, strange browser behavior,
                unfamiliar programs running, and system crashes. If you notice any of these symptoms,
                it's best to have your device checked by our professionals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does virus removal take?</AccordionTrigger>
              <AccordionContent>
                The duration depends on the severity of the infection and the number of affected files.
                Most basic virus removals can be completed within 2-4 hours. For more complex cases,
                it might take longer. We'll provide an estimated timeline after initial diagnosis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What about my personal data?</AccordionTrigger>
              <AccordionContent>
                We prioritize the safety of your personal data during the virus removal process. Our
                technicians take precautions to protect your files, and if needed, we can help back up
                your important data before beginning the removal process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I prevent future infections?</AccordionTrigger>
              <AccordionContent>
                We provide comprehensive protection strategies including installing reliable antivirus
                software, setting up automatic updates, configuring firewalls, and educating you about
                safe browsing practices. We'll help you implement multiple layers of security.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1D4D84] to-[#4B6E97] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">
            Protect Your Device Today
          </h2>
          <p className="text-xl mb-8">
            Don't let viruses compromise your data. Contact us now for professional removal services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/contact">Get Protected</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
