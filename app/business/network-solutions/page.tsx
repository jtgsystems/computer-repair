import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Shield, Zap, Users, Cloud, Cog } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceHero from "@/components/ServiceHero"

export const metadata: Metadata = {
  title: "Network Solutions for Toronto Businesses | PC Mechanix",
  description:
    "Comprehensive network solutions designed to keep your Toronto business connected, secure, and efficient. Expert network design, installation, and management services.",
}

const features = [
  {
    icon: Network,
    title: "Toronto-Optimized Network Design",
    description: "Custom network architecture tailored to your Toronto business needs and local infrastructure",
  },
  {
    icon: Shield,
    title: "GTA-Focused Security",
    description: "Robust security measures to protect your network from threats specific to the Greater Toronto Area",
  },
  {
    icon: Zap,
    title: "High-Speed Performance",
    description: "Optimized network performance for maximum productivity in Toronto's fast-paced business environment",
  },
  {
    icon: Users,
    title: "Scalability for Growing Toronto Businesses",
    description: "Flexible solutions that grow with your business in the dynamic Toronto market",
  },
  {
    icon: Cloud,
    title: "Toronto-Based Cloud Integration",
    description: "Seamless integration with cloud services, leveraging Toronto's advanced connectivity",
  },
  {
    icon: Cog,
    title: "Local Maintenance & Support",
    description: "Proactive monitoring and maintenance by our Toronto-based team to ensure network reliability",
  },
]

export default function NetworkSolutionsPage() {
  return (
    <>
      <ServiceHero
        title="Network Solutions for Toronto Businesses"
        description="Empower your Toronto business with robust, secure, and scalable network infrastructure."
        primaryCTA={{ text: "Explore Toronto-Tailored Solutions", href: "#features" }}
        secondaryCTA={{ text: "Get a Toronto-Specific Quote", href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Network Solutions for Toronto's Business Landscape</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            A strong network is the backbone of any Toronto business. We design, install, and optimize wireless and
            wired networks that keep your Toronto office connected—no dead zones, no slowdowns. Our technicians
            troubleshoot issues, boost performance, and ensure your network scales with your growth in the GTA. Whether
            it's Wi-Fi for a small shop in Kensington Market or a complex system for a multi-floor office in the
            Financial District, we've got the expertise to keep you online and efficient.
          </p>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Toronto-Focused Network Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-center">FAQs for Toronto Businesses</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do you ensure network reliability in Toronto's diverse business districts?
              </AccordionTrigger>
              <AccordionContent>
                We conduct thorough site surveys and consider factors like building materials, local interference, and
                neighborhood-specific challenges to design networks that perform optimally in any Toronto location, from
                the dense downtown core to suburban business parks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can you support our multi-location business across the GTA?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We specialize in creating unified network solutions for businesses with multiple locations
                across Toronto and the GTA. Our team ensures seamless connectivity and consistent performance whether
                you're in Toronto, Mississauga, Markham, or anywhere in between.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do you address cybersecurity concerns specific to Toronto businesses?
              </AccordionTrigger>
              <AccordionContent>
                We stay informed about Toronto-specific cyber threats and implement robust security measures tailored to
                local risks. This includes advanced firewalls, intrusion detection systems, and regular security audits
                designed to protect against threats targeting Toronto businesses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can you help with network solutions for Toronto's events and conferences?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer temporary network solutions perfect for Toronto's vibrant event scene. Whether you're
                hosting at the Metro Toronto Convention Centre or a pop-up venue, we can set up robust, high-capacity
                networks to support your event's connectivity needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Toronto Business Network?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to discuss your network needs and discover how our Toronto-tailored solutions can transform
            your business connectivity.
          </p>
          <Button size="lg" variant="secondary">
            Get a Free Toronto Network Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
