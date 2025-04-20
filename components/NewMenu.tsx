"use client"

import { useState, useCallback, useEffect, useRef, useMemo, memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronDown, Menu as MenuIcon, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceItems = [
  {
    label: "Business",
    items: [
      { label: "Network Solutions", href: "/business/network-solutions" },
      { label: "Managed IT Services", href: "/business/managed-it" },
      { label: "Data Solutions", href: "/business/backup-recovery" },
      { label: "Cloud Services", href: "/business/cloud-services" },
      { label: "Virtual Desktop Infrastructure", href: "/business/vdi" },
      { label: "IT Consulting", href: "/business/it-consulting" },
      { label: "Hardware & Software Procurement", href: "/business/procurement" },
      { label: "Cybersecurity Solutions", href: "/business/cybersecurity" },
      { label: "Email & Collaboration", href: "/business/email-collaboration" },
      { label: "Loss Prevention & Asset Protection", href: "/business/security-systems" },
      { label: "Business Repair Services", href: "/services/desktop-repair" },
    ],
  },
  {
    label: "Personal",
    items: [
      { label: "Sales", href: "/services/sales" },
      { label: "Computer Repair", href: "/services/desktop-repair" },
      { label: "Virus Removal", href: "/services/virus-removal" },
      { label: "Data Recovery", href: "/services/data-recovery" },
      { label: "Hardware Upgrades", href: "/services/hardware-upgrades" },
      { label: "Software Troubleshooting", href: "/services/software-troubleshooting" },
    ],
  },
]

// Memoize the dropdown menu to prevent unnecessary re-renders
const DropdownMenu = memo(({ category, isOpen, onToggle }: { category: any; isOpen: boolean; onToggle: () => void }) => {
  // Performance measurement
  const renderStartTime = useRef(performance.now());
  
  const prefersReducedMotion = useReducedMotion();

  // Memoize dropdown items to prevent re-renders
  const dropdownItems = useMemo(() => {
    return category.items.map((item: any, index: number) => (
      <Link
        key={index}
        href={item.href}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
      >
        {item.label}
      </Link>
    ));
  }, [category.items]);

  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center justify-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200"
      >
        <span className="font-medium text-center">{category.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Use simpler animations if user prefers reduced motion
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { 
              opacity: 1, y: 0, scale: 1,
              transition: { duration: 0.1, type: "tween" } // Further reduced duration
            }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="py-2">
              {dropdownItems}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
});

DropdownMenu.displayName = 'DropdownMenu';

// Memoize the mobile menu to prevent unnecessary re-renders
const MobileMenu = memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // Performance measurement
  const renderStartTime = useRef(performance.now());
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    if (isOpen) {
      const renderTime = performance.now() - renderStartTime.current;
      console.log(`Mobile menu render time: ${renderTime.toFixed(2)}ms`);
    }
  }, [isOpen]);

  // Add logging to track menu closing
  const handleLinkClick = useCallback((label: string) => {
    console.log(`Mobile menu link clicked: ${label}`);
    onClose();
  }, [onClose]);

  // Precompute category items to avoid recalculation on each render
  const categoryItems = useMemo(() => {
    return serviceItems.map((category, index) => (
      <div key={index} className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">{category.label}</h3>
        <div className="space-y-2 pl-4">
          {category.items.map((item, itemIndex) => (
            <Link 
              key={itemIndex} 
              href={item.href} 
              className="block text-gray-700 hover:text-primary transition-colors duration-200"
              onClick={() => handleLinkClick(item.label)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    ));
  }, [handleLinkClick]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: prefersReducedMotion ? 0.1 : 0.15 }}
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-6">
              <Link
                href="/"
                className="block text-xl font-medium text-gray-900 hover:text-primary transition-colors duration-200"
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </Link>

              {categoryItems}              <Link
                href="/about"
                className="block text-xl font-medium text-gray-900 hover:text-primary transition-colors duration-200"
                onClick={() => handleLinkClick('About')}
              >
                About
              </Link>
              
              <Link
                href="/contact"
                className="block text-xl font-medium text-gray-900 hover:text-primary transition-colors duration-200"
                onClick={() => handleLinkClick('Contact')}
              >
                Contact
              </Link>
              
              <div className="pt-6 border-t">
                <Button size="lg" className="w-full" asChild>
                  <a 
                    href="tel:416-300-1006" 
                    className="flex items-center justify-center space-x-2"
                    onClick={() => console.log('Phone button clicked')}
                  >
                    <Phone className="w-5 h-5" />
                    <span>416-300-1006</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default function NewMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastToggleTime = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollThrottleTimeout = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    // Improved throttling with requestAnimationFrame for better performance
    if (scrollThrottleTimeout.current) {
      return;
    }
    
    scrollThrottleTimeout.current = setTimeout(() => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        scrollThrottleTimeout.current = null;
      });
    }, 100); // Increased throttle time for better performance
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollThrottleTimeout.current) {
        clearTimeout(scrollThrottleTimeout.current);
      }
    };
  }, [handleScroll]);

  const toggleDropdown = (label: string) => {
    // Performance logging
    const startTime = performance.now();
    
    setOpenDropdown(openDropdown === label ? null : label);
    
    // Log performance after state update
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`Dropdown toggle time for ${label}: ${(endTime - startTime).toFixed(2)}ms`);
    }, 10);
  };
  
  // Handle mobile menu open/close with logging
  const handleMobileMenuOpen = useCallback(() => {
    console.log('Opening mobile menu');
    setIsMobileMenuOpen(true);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    console.log('Closing mobile menu');
    setIsMobileMenuOpen(false);
  }, []);
  
  // Memoize the navigation items to prevent re-renders
  const navigationItems = useMemo(() => {
    return serviceItems.map((category, index) => (
      <DropdownMenu
        key={index}
        category={category}
        isOpen={openDropdown === category.label}
        onToggle={() => toggleDropdown(category.label)}
      />
    ));
  }, [openDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col items-center">
              <div className="text-primary text-xl font-bold">PCMECHANIX</div>
              <div className="text-gray-600 text-xs">Your Exclusive IT Service Provider!</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-center"
            >
              Home
            </Link>

            {navigationItems}

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-center"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-center"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button size="lg" variant="outline" asChild>
              <a href="tel:416-300-1006" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>416-300-1006</span>
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={handleMobileMenuOpen}
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </header>
  );
}