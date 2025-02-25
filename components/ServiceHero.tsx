"use client"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/useMobile"

interface ServiceHeroProps {
  title: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export default function ServiceHero({ title, description, primaryCTA, secondaryCTA }: ServiceHeroProps) {
  const isMobile = useMobile()

  return (
    <section className={`
      relative w-full max-w-none overflow-hidden
      ${isMobile ? 'py-8' : 'py-12 sm:py-16 lg:py-24'}
      before:content-[''] before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80')] before:bg-cover before:bg-center before:opacity-15 before:scale-105
      after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#1D4D84] after:to-[#4B6E97] after:opacity-95
    `}>
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 z-[2]" />
      
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <div className="relative">
          <h1 className={`
            font-extrabold uppercase tracking-tight drop-shadow-lg
            ${isMobile ? 'text-3xl mb-4' : 'text-3xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6'}
          `}>
            {title}
          </h1>
          <p className={`
            max-w-3xl mx-auto drop-shadow-md
            ${isMobile ? 'text-base mb-6' : 'text-base sm:text-lg lg:text-xl mb-8 sm:mb-12'}
          `}>
            {description}
          </p>
          <div className={`
            flex gap-4 relative
            ${isMobile ? 'flex-col' : 'flex-col sm:flex-row justify-center'}
          `}>
            {primaryCTA && (
              <Button
                size={isMobile ? "default" : "lg"}
                className={`
                  bg-[#1D4D84] text-white hover:bg-[#4B6E97] shadow-lg transition-all duration-300 hover:scale-105
                  ${isMobile ? 'w-full text-base min-h-[40px]' : 'min-h-[44px] w-full sm:w-auto text-base sm:text-lg'}
                `}
                asChild
              >
                <a href={primaryCTA.href}>{primaryCTA.text}</a>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className={`
                  bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 hover:scale-105
                  ${isMobile ? 'w-full text-base min-h-[40px]' : 'min-h-[44px] w-full sm:w-auto text-base sm:text-lg'}
                `}
                asChild
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
