"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Archive, Briefcase, Camera, Cloud, Globe, Mail, Menu as MenuIcon, Monitor, Phone, Server, Shield, ShoppingCart, Tool, User, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useState, useRef } from "react"

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  User,
  Globe,
  Server,
  Archive,
  Cloud,
  Monitor,
  Users,
  ShoppingCart,
  Shield,
  Mail,
  Camera,
  Tool,
}


// Menu items data structure with icons
const serviceItems = [
  {
    label: "Business",
    icon: "Briefcase",
    items: [
      { label: "Network Solutions", href: "/business/network-solutions", icon: "Globe" },
      { label: "Managed IT Services", href: "/business/managed-it", icon: "Server" },
      { label: "Backup & Recovery", href: "/business/backup-recovery", icon: "Archive" },
      { label: "Cloud Services", href: "/business/cloud-services", icon: "Cloud" },
      { label: "Virtual Desktop Infrastructure", href: "/business/vdi", icon: "Monitor" },
      { label: "IT Consulting", href: "/business/it-consulting", icon: "Users" },
      { label: "Hardware & Software Procurement", href: "/business/procurement", icon: "ShoppingCart" },
      { label: "Cybersecurity Solutions", href: "/business/cybersecurity", icon: "Shield" },
      { label: "Email & Collaboration", href: "/business/email-collaboration", icon: "Mail" },
      { label: "CCTV & Alarm Systems", href: "/business/security-systems", icon: "Camera" },
      { label: "Business Desktop Repair", href: "/services/desktop-repair", icon: "Tool" },
    ],
  },
  {
    label: "Personal",
    icon: "User",
    items: [
      { label: "Laptop Repair", href: "/services/laptop-repair", icon: "Tool" },
      { label: "Desktop Repair", href: "/services/desktop-repair", icon: "Tool" },
      { label: "Mac Repair", href: "/services/mac-repair", icon: "Tool" },
      { label: "Tablet and Smartphone Repair", href: "/services/mobile-repair", icon: "Tool" },
      { label: "Virus Removal", href: "/services/virus-removal", icon: "Shield" },
      { label: "Data Recovery", href: "/services/data-recovery", icon: "Archive" },
      { label: "Hardware Upgrades", href: "/services/hardware-upgrades", icon: "Tool" },
      { label: "Software Troubleshooting", href: "/services/software-troubleshooting", icon: "Tool" },
    ],
  },
]

// Desktop navigation menu item component
const ListItem = ({ className, title, href, icon }: any) => {
  const IconComponent = icon ? iconMap[icon] : null;
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-2 block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-all duration-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white",
            className
          )}
        >
          {IconComponent && <IconComponent className="h-4 w-4" />}
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Mobile menu component
const MobileNavigation = () => {
  const renderStartTime = useRef(performance.now());
  const [isOpen, setIsOpen] = useState(false);
  
  // Log performance when sheet content is shown
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      const renderTime = performance.now() - renderStartTime.current;
      console.log(`ModernMenu mobile navigation render time: ${renderTime.toFixed(2)}ms`);
    }
  };
  
  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-gray-900 text-white p-0 border-none">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-800">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email-FsOiS0VHhSaGbkk2xFdAqUX2RxxvUG.png"
              alt="PC Mechanix"
              width={120}
              height={30}
              className="h-8 w-auto object-contain filter brightness-0 invert"
            />
          </div>
          <div className="flex-1 overflow-auto py-6 px-4">
            <nav className="grid gap-6">
              <Link href="/" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Home
              </Link>
              {serviceItems.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="flex items-center gap-2 text-lg font-medium">
                    {category.icon && iconMap[category.icon] && React.createElement(iconMap[category.icon], { className: cn("h-5 w-5") })}
                    {category.label}
                  </h3>
                  <div className="grid gap-2 pl-3">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {item.icon && iconMap[item.icon] && React.createElement(iconMap[item.icon], { className: "h-4 w-4" })}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              <Link href="/about" className="text-lg font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 p-4">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
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

  const lastScrollTime = useRef(0);
  const [debugInfo, setDebugInfo] = useState({
    viewportWidth: 0,
    headerWidth: 0,
    containerWidth: 0,
    hasHorizontalScroll: false
  })

  const handleScroll = useCallback(() => {
    // Throttle scroll events
    const now = performance.now();
    if (now - lastScrollTime.current < 50) { // Only process every 50ms
      return;
    }
    lastScrollTime.current = now;
    setIsScrolled(window.scrollY > 10)
  }, [])

  // Debug function to check for horizontal scrolling issues
  const checkForOverflow = useCallback(() => {
    if (typeof window !== 'undefined') {
      const viewportWidth = window.innerWidth;
      const startTime = performance.now();
      const headerEl = document.querySelector('header');
      const containerEl = document.querySelector('.container');

      const headerWidth = headerEl?.getBoundingClientRect().width || 0;
      const containerWidth = containerEl?.getBoundingClientRect().width || 0;
      const hasHorizontalScroll = document.body.scrollWidth > viewportWidth;

      console.log('Debug - Viewport width:', viewportWidth);
      console.log(`Debug - Layout check time: ${(performance.now() - startTime).toFixed(2)}ms`);
      
      setDebugInfo({
        viewportWidth,
        headerWidth,
        containerWidth,
        hasHorizontalScroll
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    // Add global style to prevent horizontal scrolling - moved from top level to useEffect
    if (typeof document !== 'undefined') {
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
    }

    // Check for overflow issues on load and resize
    checkForOverflow();
    window.addEventListener("resize", checkForOverflow);

    return () => {
      window.removeEventListener("scroll", handleScroll)
;
      window.removeEventListener("resize", checkForOverflow);
    }
  }, [handleScroll, checkForOverflow])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-md py-2"
          : "bg-gray-900/90 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email-FsOiS0VHhSaGbkk2xFdAqUX2RxxvUG.png"
              alt="PC Mechanix"
              width={180}
              height={45}
              className="h-10 w-auto object-contain filter brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex z-20 max-w-[calc(100%-200px)]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-gray-800")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {serviceItems.map((category, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800 focus:bg-gray-800">
                    {category.icon && iconMap[category.icon] && React.createElement(iconMap[category.icon], { className: "h-4 w-4 mr-1" })}
                    {category.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[95vw] max-w-[400px] gap-1 p-3 md:max-w-[500px] md:grid-cols-2 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg animate-in fade-in-50 duration-200 overflow-hidden">
                      {category.items.map((item, itemIndex) => (
                        <ListItem
                          key={itemIndex}
                          title={item.label}
                          href={item.href}
                          icon={item.icon}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-gray-800")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-gray-800")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Call Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button variant="default" size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="tel:416-300-1006" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>416-300-1006</span>
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />

          {/* Debug overlay - remove after debugging */}
        </div>
      </div>
    </header>
  )
}
