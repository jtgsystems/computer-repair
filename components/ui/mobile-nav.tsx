"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-blue-900 text-white">
        <nav className="flex flex-col space-y-4 mt-8">
          <Link href="/" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/business" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            Business
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

