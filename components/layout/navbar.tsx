"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { siteConfig } from "@/config/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          {siteConfig.name}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-black"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:block">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium"
              >
                {link.title}
              </a>
            ))}

            <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}


