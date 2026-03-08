import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

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

const footerLinks = {
  produtos: [
    { name: "Maquiagem", href: LINKS.shopee, external: true },
    { name: "Skincare", href: LINKS.shopee, external: true },
    { name: "Cabelos", href: LINKS.shopee, external: true },
    { name: "Promocoes", href: LINKS.shopee, external: true },
  ],
  suporte: [
    { name: "FAQ", href: LINKS.instagram, external: true },
    { name: "Trocas e Devolucoes", href: LINKS.shopee, external: true },
    { name: "Contato", href: LINKS.instagram, external: true },
  ],
  empresa: [
    { name: "Sobre Nos", href: LINKS.instagram, external: true },
    { name: "Trabalhe Conosco", href: "#", external: false },
    { name: "Termos de Uso", href: "#", external: false },
  ],
}

export function Footer() {
  return (
    <footer id="sobre" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/LogoSemFundo.png"
                alt="Cereja Gringa"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-serif font-bold text-primary">
                Cereja Gringa
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Realcando sua beleza natural com produtos de alta qualidade importados.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={LINKS.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Shopee"
              >
                <ShopeeIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Linktree"
              >
                <LinktreeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span className="text-sm text-background/50 cursor-default">
                      {link.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            2024 Cereja Gringa. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
