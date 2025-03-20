"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { motion, useReducedMotion } from "framer-motion"
import { Archive, Briefcase, Camera, Cloud, Globe, Mail, Menu as MenuIcon, Monitor, Phone, Server, Shield, ShoppingCart, PenTool, User, Users, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  PenTool,
}


// Define proper TypeScript interfaces
interface MenuItemProps {
  className?: string;
  title: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

interface ServiceItem {
  label: string;
  icon: string;
  items: Array<{ label: string; href: string; icon: string; }>;
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
      { label: "Virtual Desktop", href: "/business/vdi", icon: "Monitor" },
      { label: "IT Consulting", href: "/business/it-consulting", icon: "Users" },
      { label: "Hardware & Software", href: "/business/procurement", icon: "ShoppingCart" },
      { label: "Cybersecurity", href: "/business/cybersecurity", icon: "Shield" },
      { label: "Email Solutions", href: "/business/email-collaboration", icon: "Mail" },
      { label: "Security Systems", href: "/business/security-systems", icon: "Camera" },
      { label: "Business Repair", href: "/business/desktop-repair", icon: "PenTool" },
    ],
  },
  {
    label: "Personal",
    icon: "User",
    items: [
      { label: "Laptop Repair", href: "/services/laptop-repair", icon: "PenTool" },
      { label: "Desktop Repair", href: "/services/desktop-repair", icon: "PenTool" },
      { label: "Mac Repair", href: "/services/mac-repair", icon: "PenTool" },
      { label: "Mobile Repair", href: "/services/mobile-repair", icon: "PenTool" },
      { label: "Virus Removal", href: "/services/virus-removal", icon: "Shield" },
      { label: "Data Recovery", href: "/services/data-recovery", icon: "Archive" },
      { label: "Hardware Upgrades", href: "/services/hardware-upgrades", icon: "PenTool" },
      { label: "Software Troubleshooting", href: "/services/software-troubleshooting", icon: "PenTool" },
    ],
  },
]

// Desktop navigation menu item component
const ListItem = ({ className, title, href, icon, isActive = false }: MenuItemProps) => {
  const IconComponent = icon ? iconMap[icon] : null;
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center gap-2 select-none rounded-md px-3 py-2 text-sm leading-none text-blue-700 no-underline outline-none transition-all duration-200 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer",
            isActive && "bg-blue-50 text-blue-700",
            className
          )}>
          {IconComponent && <IconComponent className="h-4 w-4" />}
          <span>{title}</span>
          {isActive && <span className="sr-only">(current page)</span>}
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Group business menu items into categories for better organization
const groupBusinessItems = (items: Array<{ label: string; href: string; icon: string }>) => {
  return [
    {
      title: "Core IT Services",
      items: items.slice(0, 4) // Network, Managed IT, Backup, Cloud
    },
    {
      title: "Business Solutions",
      items: items.slice(4, 8) // VDI, Consulting, Hardware, Cybersecurity
    },
    {
      title: "Additional Services",
      items: items.slice(8) // Email, CCTV, Desktop Repair
    }
  ];
}

// Mobile menu component
const MobileNavigation = () => {
  const renderStartTime = useRef(performance.now());
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const sheetContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  // Handle sheet open/close
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Focus the first interactive element when opened
      setTimeout(() => {
        const firstLink = sheetContentRef.current?.querySelector('a');
        firstLink?.focus();
      }, 100);
      
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scrolling when menu is closed
      document.body.style.overflow = '';
    }
  };

  // Navigate using router.push for better performance
  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false); // Close the sheet immediately
    
    // Small delay before navigation to allow animation to start
    setTimeout(() => {
      router.push(href);
    }, 10);
  };
  
  // Add a resize event listener to handle switching between mobile and desktop views
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // If window width is greater than md breakpoint (768px), ensure scrolling is enabled
      if (window.innerWidth >= 768) {
        document.body.style.overflow = '';
      }
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to ensure body overflow is reset when component unmounts
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      {/* Fixed Call Button on Mobile */}
      <div className="md:hidden fixed bottom-5 right-5 z-[100]">
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          asChild
        >
          <a href="tel:416-300-1006" aria-label="Call us">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>
    
      <Sheet onOpenChange={handleOpenChange} open={isOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white" 
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          ref={sheetContentRef}
          side="right" 
          aria-label="Main Navigation"
          className="w-full max-w-xs sm:max-w-sm bg-white text-blue-800 p-0 border-none overflow-hidden"
          onInteractOutside={() => setIsOpen(false)}
          onEscapeKeyDown={() => setIsOpen(false)}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <Image
                  src="/images/logo.png"
                  alt="PC Mechanix"
                  width={120}
                  height={30}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5cZXg4QAAAABJRU5ErkJggg=="
                  className="h-8 w-auto object-contain"
                />
                <SheetClose className="p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <X className="h-5 w-5 text-blue-800" />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </div>
            </div>
            <div className="flex-grow overflow-hidden py-6 px-4">
              <nav className="grid gap-6 h-full max-h-[calc(100vh-180px)]">
                <a 
                  href="/"
                  className="text-lg font-medium text-blue-800 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
                  onClick={handleNavClick("/")}
                >
                  Home
                </a>
                {serviceItems.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.03 }}
                    className="space-y-3"
                  >
                    <h3 className="flex items-center gap-2 text-lg font-medium text-blue-900">
                      {category.icon && iconMap[category.icon] && React.createElement(iconMap[category.icon], { className: cn("h-5 w-5") })}
                      {category.label}
                    </h3>
                    <div className="grid gap-2 pl-3">
                      {category.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="flex items-center gap-2 text-blue-800 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
                          aria-current={false}
                          onClick={handleNavClick(item.href)}
                        >
                          {item.icon && iconMap[item.icon] && React.createElement(iconMap[item.icon], { className: "h-4 w-4" })}
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
                <a 
                  href="/about" 
                  className="text-lg font-medium text-blue-800 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
                  onClick={handleNavClick("/about")}
                >
                  About
                </a>
                <a 
                  href="/contact" 
                  className="text-lg font-medium text-blue-800 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1"
                  onClick={handleNavClick("/contact")}
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="border-t border-gray-200 p-4 mt-auto">
              <p className="text-sm text-blue-800 mb-3 text-center">Need assistance? Call us now</p>
              <Button 
                size="lg" 
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white" 
                asChild
              >
                <a href="tel:416-300-1006" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>416-300-1006</span>
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

// Hook to detect current path
const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState("");
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  
  return currentPath;
};

// Main menu component
export default function ModernMenu({ 
  variant = 'fixed', 
  className 
}: { 
  variant?: 'fixed' | 'inline';
  className?: string; 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = useCurrentPath();
  const lastScrollTime = useRef(0);

  const handleScroll = useCallback(() => {
    // Only track scrolling if we're using the fixed variant
    if (variant !== 'fixed') return;
    
    // Throttle scroll events
    const now = performance.now();
    if (now - lastScrollTime.current < 100) { // Increased throttle time for better performance
      return;
    }
    lastScrollTime.current = now;
    setIsScrolled(window.scrollY > 10);
  }, [variant])

  useEffect(() => {
    if (variant === 'fixed') {
      window.addEventListener("scroll", handleScroll);
    }
    
    // Add custom styles to override any unwanted NavigationMenu styles
    const style = document.createElement('style');
    style.textContent = `
      .navigation-menu-content {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
      
      .navigation-menu-viewport-position {
        z-index: 999 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (variant === 'fixed') {
        window.removeEventListener("scroll", handleScroll);
      }
      document.head.removeChild(style);
    }
  }, [handleScroll, variant]);

  // Helper function to check if a path is active
  const isActivePath = useCallback((path: string) => {
    if (!currentPath) return false;
    return currentPath === path || currentPath.startsWith(`${path}/`);
  }, [currentPath]);

  return (
    <header
      role="banner"
      className={cn(
        "w-full transition-all duration-300",
        variant === 'fixed' ? "fixed top-0 left-0 right-0 z-50" : "relative z-10",
        variant === 'fixed' && (
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-md py-2"
            : "bg-gray-900/90 backdrop-blur-md py-4"
        ),
        !variant || variant === 'inline' ? "bg-gray-900 py-4" : "",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              priority={true}
              src="/images/logo.png"
              alt="PC Mechanix"
              width={180}
              height={45}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJ5cZXg4QAAAABJRU5ErkJggg=="
              className="h-10 w-auto object-contain filter brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex z-20 max-w-full">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent text-white hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActivePath('/') && "bg-blue-50 text-blue-700"
                    )}
                    aria-current={isActivePath('/') ? "page" : undefined}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {serviceItems.map((category, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer active:scale-95"
                  >
                    {category.icon && iconMap[category.icon] && React.createElement(iconMap[category.icon], { className: "h-4 w-4 mr-1" })}
                    {category.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[999]">
                    {category.label === "Business" ? (
                      <div className="w-[90vw] max-w-[800px] p-4 bg-white border border-gray-200 rounded-lg shadow-md animate-in fade-in-50 duration-100 overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-6">
                          {groupBusinessItems(category.items).map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-3">
                              <h3 className="font-medium text-sm text-blue-900">{group.title}</h3>
                              <ul className="grid gap-1">
                                {group.items.map((item, itemIndex) => (
                                  <ListItem
                                    key={`${category.label}-${groupIndex}-${itemIndex}`}
                                    title={item.label}
                                    href={item.href}
                                    icon={item.icon}
                                    isActive={isActivePath(item.href)}
                                  />
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <ul className="grid w-[90vw] max-w-[400px] gap-1 p-3 md:grid-cols-2 bg-white border border-gray-200 rounded-lg shadow-md animate-in fade-in-50 duration-100 overflow-hidden">
                        {category.items.map((item, itemIndex) => (
                          <ListItem
                            key={`${category.label}-${itemIndex}`}
                            title={item.label}
                            href={item.href}
                            icon={item.icon}
                            isActive={isActivePath(item.href)}
                          />
                        ))}
                      </ul>
                    )}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent text-white hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActivePath('/about') && "bg-blue-50 text-blue-700"
                    )}
                    aria-current={isActivePath('/about') ? "page" : undefined}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent text-white hover:bg-gray-800 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500",
                      isActivePath('/contact') && "bg-blue-50 text-blue-700"
                    )}
                    aria-current={isActivePath('/contact') ? "page" : undefined}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Call Button (Desktop) */}
          <div className="hidden md:flex items-center ml-4">
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" 
              asChild
            >
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
