"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu as MenuIcon, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Menu items data structure
const serviceItems = [
  {
    label: "Business",
    items: [
      { label: "Network Solutions", href: "/business/network-solutions" },
      { label: "Managed IT Services", href: "/business/managed-it" },
      { label: "Backup & Recovery", href: "/business/backup-recovery" },
      { label: "Cloud Services", href: "/business/cloud-services" },
      { label: "Virtual Desktop Infrastructure", href: "/business/vdi" },
      { label: "IT Consulting", href: "/business/it-consulting" },
      { label: "Hardware & Software Procurement", href: "/business/procurement" },
      { label: "Cybersecurity Solutions", href: "/business/cybersecurity" },
      { label: "Email & Collaboration", href: "/business/email-collaboration" },
      { label: "CCTV & Alarm Systems", href: "/business/security-systems" },
      { label: "Business Desktop Repair", href: "/services/desktop-repair" },
    ],
  },
  {
    label: "Personal",
    items: [
      { label: "Laptop Repair", href: "/services/laptop-repair" },
      { label: "Desktop Repair", href: "/services/desktop-repair" },
      { label: "Mac Repair", href: "/services/mac-repair" },
      { label: "Tablet and Smartphone Repair", href: "/services/mobile-repair" },
      { label: "Virus Removal", href: "/services/virus-removal" },
      { label: "Data Recovery", href: "/services/data-recovery" },
      { label: "Hardware Upgrades", href: "/services/hardware-upgrades" },
      { label: "Software Troubleshooting", href: "/services/software-troubleshooting" },
    ],
  },
]

// Desktop navigation menu item component
const ListItem = ({ className, title, href, children }: any) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/50 hover:text-accent-foreground hover:translate-x-0.5 focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          {title}
          {children && <span className="text-xs text-muted-foreground ml-2">{children}</span>}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Mobile menu component
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm border-l border-gray-100 p-0">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-auto py-6">
            <nav className="grid gap-6">
              <Link
                href="/"
                className="group flex items-center gap-2 text-lg font-medium"
                onClick={() => (document as any).querySelector('[data-radix-collection-item]')?.click()}
              >
                Home
              </Link>

              {serviceItems.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-medium">{category.label}</h3>
                  <div className="grid gap-2 pl-3">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => (document as any).querySelector('[data-radix-collection-item]')?.click()}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                href="/about"
                className="group flex items-center gap-2 text-lg font-medium"
                onClick={() => (document as any).querySelector('[data-radix-collection-item]')?.click()}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-lg font-medium"
                onClick={() => (document as any).querySelector('[data-radix-collection-item]')?.click()}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="border-t pt-6">
            <Button size="lg" className="w-full" asChild>
              <a href="tel:416-300-1006" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>416-300-1006</span>
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

// Main menu component
export default function ModernMenu() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email-FsOiS0VHhSaGbkk2xFdAqUX2RxxvUG.png"
              alt="PC Mechanix"
              width={180}
              height={45}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex z-20">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {serviceItems.map((category, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-0.5 p-2 md:w-[400px] md:grid-cols-2 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-md shadow-sm animate-in fade-in-50 zoom-in-95 duration-200">
                      {category.items.map((item, itemIndex) => (
                        <ListItem
                          key={itemIndex}
                          title={item.label}
                          href={item.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Call Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button variant="default" size="lg" className="rounded-full" asChild>
              <a href="tel:416-300-1006" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>416-300-1006</span>
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}