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
  MailIcon,
  Camera,
} from "lucide-react"
import ServiceHero from "@/components/ServiceHero"

export default function BusinessPage() {
  return (
    <>
      <ServiceHero
        title="Business IT Solutions in Toronto"
        description="Empowering Toronto businesses with cutting-edge technology and expert support"
        primaryCTA={{ text: "Explore Our Services", href: "#services" }}
        secondaryCTA={{ text: "Get a Free Consultation", href: "/contact" }}
      />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tailored IT Solutions for Toronto Businesses</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Running a business in Toronto or the GTA? Your tech needs to keep up. At PC Mechanix, we deliver tailored IT
            solutions that help businesses thrive—whether you're a startup or an established firm. From network setups
            to cybersecurity, repairs, and beyond, our certified team ensures your technology works as hard as you do.
            We're your local partner for seamless, reliable, and affordable IT support. Explore our services and see how
            we can power your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-[#E4EDEF] to-[#4B6E97]/10"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <Button variant="outline" className="mt-4 self-start" asChild>
                    <Link href={`/business/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PC Mechanix for Your Toronto Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-[#E4EDEF] to-[#4B6E97]/10"
              >
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
          <p className="text-xl mb-8">
            Let's discuss how we can tailor our services to meet your specific needs in the GTA.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}

const businessServices = [
  {
    title: "Network Solutions",
    description:
      "Robust network infrastructure tailored for Toronto businesses, ensuring seamless connectivity and productivity.",
    icon: Network,
    slug: "network-solutions",
  },
  {
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support, designed to keep your Toronto business running smoothly 24/7.",
    icon: Monitor,
    slug: "managed-it",
  },
  {
    title: "Backup & Recovery",
    description: "Secure data backup and swift recovery solutions to protect your business continuity in the GTA.",
    icon: HardDrive,
    slug: "backup-recovery",
  },
  {
    title: "Cloud Services",
    description:
      "Seamless cloud migration and management, empowering your Toronto business with scalable, flexible solutions.",
    icon: Cloud,
    slug: "cloud-services",
  },
  {
    title: "Virtual Desktop Infrastructure",
    description: "Efficient VDI solutions enabling secure remote work for businesses across Toronto and the GTA.",
    icon: Layout,
    slug: "vdi",
  },
  {
    title: "IT Consulting",
    description:
      "Expert IT guidance to align your technology strategy with your Toronto business goals and drive growth.",
    icon: BrainCircuit,
    slug: "it-consulting",
  },
  {
    title: "Hardware & Software Procurement",
    description:
      "Streamlined tech procurement services, leveraging our Toronto market expertise for competitive pricing.",
    icon: ShoppingCart,
    slug: "procurement",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Robust cybersecurity measures to protect your Toronto business from evolving digital threats.",
    icon: Shield,
    slug: "cybersecurity",
  },
  {
    title: "Email & Collaboration",
    description: "Optimized email and collaboration tools to enhance productivity for Toronto businesses.",
    icon: MailIcon,
    slug: "email-collaboration",
  },
  {
    title: "CCTV & Alarm Systems",
    description: "State-of-the-art security systems to safeguard your Toronto business premises and assets.",
    icon: Camera,
    slug: "security-systems",
  },
]

const businessBenefits = [
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
