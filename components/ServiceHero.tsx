import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function ServiceHero({ title, description, primaryCTA, secondaryCTA }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#1D4D84] to-[#4B6E97] text-white py-24">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-shadow-lg uppercase tracking-tight">{title}</h1>
          <p className="text-xl mb-8 text-shadow">{description}</p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg" className="bg-white text-[#1D4D84] hover:bg-[#E4EDEF]">
              <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1D4D84]"
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

