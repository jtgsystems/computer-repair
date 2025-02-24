import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Lock, Zap, RefreshCwIcon as Refresh, Users, DollarSign } from "lucide-react"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ServiceLayout from "@/components/ServiceLayout"

export const metadata: Metadata = {
  title: "Cloud Services for Toronto Businesses | PC Mechanix",
  description:
    "Scalable and secure cloud solutions tailored for Toronto businesses. Expert cloud migration, management, and optimization services to enhance your GTA IT infrastructure.",
}

const features = [
  {
    icon: Cloud,
    title: "Toronto-Optimized Cloud Migration",
    description:
      "Seamless transition of your systems and data to the cloud, leveraging Toronto's robust network infrastructure",
  },
  {
    icon: Lock,
    title: "GTA-Focused Cloud Security",
    description:
      "Advanced security measures to protect your cloud environment, tailored to Toronto's unique cybersecurity landscape",
  },
  {
    icon: Zap,
    title: "Toronto Business Performance Optimization",
    description:
      "Fine-tuning your cloud resources for maximum efficiency in Toronto's competitive business environment",
  },
  {
    icon: Refresh,
    title: "GTA-Ready Scalability",
    description: "Easily scale your cloud resources up or down based on demand, perfect for Toronto's dynamic market",
  },
  {
    icon: Users,
    title: "Toronto-Tailored Collaboration Tools",
    description: "Implement cloud-based tools for enhanced team collaboration across the Greater Toronto Area",
  },
  {
    icon: DollarSign,
    title: "Toronto-Specific Cost Management",
    description: "Optimize your cloud spending with cost-effective solutions tailored to Toronto business needs",
  },
]

export default function CloudServicesPage() {
  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Cloud Services for Toronto Businesses</h1>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
          Move your Toronto business to the cloud with confidence. We offer end-to-end cloud solutions, from migration
          to management, powered by platforms like Microsoft 365 and optimized for the GTA's business landscape. Store
          files securely, collaborate in real-time, and scale effortlessly—all tailored to your Toronto business needs.
          Our team ensures a smooth transition, tight security, and ongoing support, so your Toronto business stays
          agile and ahead of the curve in Canada's most competitive market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Cloud Services Process for Toronto Businesses</h2>
            <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto text-gray-700">
              <li className="font-semibold">
                Toronto-Specific Assessment
                <p className="font-normal ml-6 mt-2">
                  We evaluate your current infrastructure and business needs, considering Toronto's unique market
                  demands and regulatory environment.
                </p>
              </li>
              <li className="font-semibold">
                GTA-Optimized Planning
                <p className="font-normal ml-6 mt-2">
                  Our experts design a tailored cloud migration or implementation plan aligned with your goals and
                  Toronto's business landscape.
                </p>
              </li>
              <li className="font-semibold">
                Seamless Toronto Migration/Implementation
                <p className="font-normal ml-6 mt-2">
                  We execute the plan, ensuring minimal disruption to your Toronto business operations, with
                  consideration for local peak hours and traffic patterns.
                </p>
              </li>
              <li className="font-semibold">
                Toronto-Focused Optimization
                <p className="font-normal ml-6 mt-2">
                  Post-migration, we fine-tune your cloud environment for optimal performance and cost-efficiency in the
                  Toronto market.
                </p>
              </li>
              <li className="font-semibold">
                Ongoing GTA Management
                <p className="font-normal ml-6 mt-2">
                  We provide continuous monitoring, support, and optimization of your cloud infrastructure, with a local
                  Toronto touch.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">FAQs for Toronto Cloud Services</h2>
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is cloud migration right for my Toronto business?</AccordionTrigger>
                <AccordionContent>
                  Cloud migration can benefit businesses of all sizes in Toronto, offering increased flexibility,
                  scalability, and often cost savings. It's particularly beneficial for businesses looking to compete in
                  Toronto's fast-paced market. However, the suitability depends on your specific needs and
                  circumstances. Our team can assess your current infrastructure and business requirements to determine
                  if and how cloud migration could benefit your organization in the context of Toronto's unique business
                  environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How secure is cloud computing for Toronto businesses?</AccordionTrigger>
                <AccordionContent>
                  Cloud computing can be very secure when implemented correctly, especially for Toronto businesses
                  facing unique cybersecurity challenges. We use industry-leading security practices, including
                  encryption, access controls, and regular security audits. Many cloud providers offer security features
                  that surpass what most Toronto businesses can implement on-premises. However, security is a shared
                  responsibility, and we work with you to ensure your data and applications are protected in the cloud
                  environment, in compliance with Toronto and Ontario data protection regulations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How long does cloud migration typically take for a Toronto business?
                </AccordionTrigger>
                <AccordionContent>
                  The duration of cloud migration varies depending on the complexity of your current infrastructure, the
                  amount of data to be migrated, and your specific requirements. For a small Toronto business, migration
                  might be completed in a few weeks, while larger enterprises with complex systems in the GTA might take
                  several months. We provide a detailed timeline as part of our migration planning process, taking into
                  account Toronto-specific factors like local network infrastructure and business peak hours to minimize
                  disruption.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Toronto Business Success Story</h2>
          <blockquote className="text-center italic">
            "PC Mechanix guided us through our cloud migration seamlessly, with a deep understanding of Toronto's
            business landscape. Their expertise not only made the transition smooth but also helped us optimize our
            cloud usage for Toronto's market, resulting in significant cost savings and improved performance. Our team
            can now collaborate more effectively than ever before, giving us a real edge in Toronto's competitive tech
            scene."
          </blockquote>
          <p className="text-center mt-4">- Michael Chen, CTO of InnovateTech Solutions, Toronto</p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move Your Toronto Business to the Cloud?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our Toronto-tailored cloud solutions can transform your business and give you a
            competitive edge in the GTA.
          </p>
          <Button size="lg" className="text-lg px-8">
            Schedule Your Toronto Cloud Consultation
          </Button>
        </div>
      </div>
    </ServiceLayout>
  )
}

