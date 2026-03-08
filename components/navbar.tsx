"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const LINKS = {
  shopee: "https://shopee.com.br/cereja.gringa",
  instagram: "https://www.instagram.com/cereja.gringa?igsh=NzR2MWpoY2JncjJo",
  tiktok: "https://www.tiktok.com/@cereja.gringa",
  linktree: "https://linktr.ee/cereja.gringa?utm_source=linktree_profile_share&ltsid=c4083f6f-9659-430d-a689-af365cf582b0",
}

function ShopeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.69 2 6 4.69 6 8v1H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-2V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v1H8V8c0-2.21 1.79-4 4-4zm0 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function LinktreeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.92 1.93L12 5.5l3.08-3.57 1.84 1.54-3.14 3.53h4.72v2.5h-4.88l3.38 3.55-1.84 1.54L12 10.93l-3.16 4.16-1.84-1.54 3.38-3.55H5.5V7.5h4.72L7.08 3.47l1.84-1.54zM10.5 14.5h3v7.5h-3v-7.5z"/>
    </svg>
  )
}

const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Produtos", href: "#produtos" },
  { name: "Sobre", href: "#sobre" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LogoSemFundo.png"
              alt="Cereja Gringa"
              width={48}
              height={48}
              className="h-10 md:h-12 w-auto object-contain rounded-lg"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1">
              <a
                href={LINKS.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary"
                aria-label="Shopee"
              >
                <ShopeeIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary"
                aria-label="Linktree"
              >
                <LinktreeIcon className="w-5 h-5" />
              </a>
            </div>
            <ThemeToggle />
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 ml-2"
            >
              <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4" />
                Comprar
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer" aria-label="Shopee">
                <ShopeeIcon className="w-5 h-5 text-foreground/70" />
              </a>
              <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon className="w-5 h-5 text-foreground/70" />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5 text-foreground/70" />
              </a>
              <a href={LINKS.linktree} target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                <LinktreeIcon className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
            <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4" />
                Comprar na Shopee
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
