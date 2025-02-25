import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Network,
  Monitor,
  HardDrive,
  Cloud,
  Layout,
  BrainCircuit,
  ShoppingCart,
  Shield,
  Mail,
  Camera,
} from "lucide-react"
import ServiceHero from "@/components/ServiceHero"
import type { LucideIcon } from "lucide-react"

interface BusinessService {
  title: string
  description: string
  icon: LucideIcon
  slug: string
}

interface BusinessBenefit {
  title: string
  description: string
}

export default function BusinessPage() {
  return (
    <>
      <ServiceHero
        title="Business IT Solutions in Toronto"
        description="Empowering Toronto businesses with cutting-edge technology and expert support"
        primaryCTA={{ text: "Explore Our Services", href: "#services" }}
        secondaryCTA={{ text: "Get a Free Consultation", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-lg mb-6">
              At PC Mechanix, we're your go-to IT partner in Toronto, dedicated to keeping businesses of all sizes running at their best. Our comprehensive services are built to tackle your toughest tech challenges, from network hiccups to cybersecurity threats, so you can focus on what matters—growing your business.
            </p>
            <p className="text-lg">
              With a team of skilled professionals, we bring personalized solutions right to your doorstep, ensuring your systems are reliable, secure, and ready for anything. Whether you need a one-time fix or ongoing support, we're here to simplify your IT and keep your operations humming smoothly.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Business Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <Link href={`/business/${service.slug}`} key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose PC Mechanix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1D4D84] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Toronto Business's IT Infrastructure?</h2>
          <p className="text-xl mb-8">Let's discuss how we can tailor our services to meet your specific needs in the GTA.</p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-[#1D4D84] hover:bg-[#E4EDEF] min-h-[44px]"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

const businessServices: BusinessService[] = [
  {
    title: "Network Solutions",
    description:
      "A strong network is the backbone of any successful business. We design and maintain systems that keep you connected, from fast Wi-Fi to complex wired networks.",
    icon: Network,
    slug: "network-solutions",
  },
  {
    title: "Managed IT Services",
    description:
      "Let us handle your IT while you focus on growth. 24/7 monitoring, maintenance, and support tailored to your business needs.",
    icon: Monitor,
    slug: "managed-it",
  },
  {
    title: "Backup & Recovery",
    description: 
      "Protect your data with secure, automated backups and swift recovery solutions. Don't let data loss disrupt your business.",
    icon: HardDrive,
    slug: "backup-recovery",
  },
  {
    title: "Cloud Services",
    description:
      "Take your business to the cloud with seamless migration, secure storage, and scalable solutions that grow with you.",
    icon: Cloud,
    slug: "cloud-services",
  },
  {
    title: "Virtual Desktop Infrastructure",
    description: 
      "Work from anywhere with secure virtual desktops. Access your tools and data on any device, boosting productivity.",
    icon: Layout,
    slug: "vdi",
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance for your tech decisions. We assess, plan, and implement solutions that align with your goals.",
    icon: BrainCircuit,
    slug: "it-consulting",
  },
  {
    title: "Hardware & Software Procurement",
    description:
      "Get the right tech for your needs. We source, purchase, and set up quality equipment that fits your budget.",
    icon: ShoppingCart,
    slug: "procurement",
  },
  {
    title: "Cybersecurity Solutions",
    description: 
      "Protect your business with advanced security measures. Firewalls, encryption, and monitoring keep threats at bay.",
    icon: Shield,
    slug: "cybersecurity",
  },
  {
    title: "Email & Collaboration",
    description: 
      "Stay connected with secure email and collaboration tools. We set up and maintain the systems your team needs.",
    icon: Mail,
    slug: "email-collaboration",
  },
  {
    title: "CCTV & Alarm Systems",
    description: 
      "Secure your workplace with advanced surveillance and alarm systems. Remote monitoring for peace of mind.",
    icon: Camera,
    slug: "security-systems",
  },
]

const businessBenefits: BusinessBenefit[] = [
  {
    title: "Local Toronto Expertise",
    description: "Our team understands the unique IT challenges and opportunities in the Toronto business landscape.",
  },
  {
    title: "Proactive IT Management",
    description: "We prevent issues before they impact your Toronto business, ensuring minimal downtime.",
  },
  {
    title: "Scalable GTA Solutions",
    description: "Our services grow with your business, adapting to your changing needs in the Greater Toronto Area.",
  },
  {
    title: "Cost-Effective IT Support",
    description: "Reduce overhead with our efficient, Toronto-based IT support, tailored to your budget.",
  },
  {
    title: "24/7 GTA Support",
    description: "Round-the-clock support ensures your Toronto business's IT systems are always operational.",
  },
  {
    title: "Toronto-Tailored Strategies",
    description: "We develop IT strategies that align with your business objectives and the local Toronto market.",
  },
]
