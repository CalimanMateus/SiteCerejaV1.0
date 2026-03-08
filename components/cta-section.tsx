import { Button } from "@/components/ui/button"
import { ShoppingBag, Shield, CreditCard } from "lucide-react"

const LINKS = {
  shopee: "https://shopee.com.br/cereja.gringa",
}

function ShopeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.69 2 6 4.69 6 8v1H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-2V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v1H8V8c0-2.21 1.79-4 4-4zm0 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  )
}

const trustBadges = [
  { icon: Shield, text: "Compra Segura" },
  { icon: CreditCard, text: "Parcelamos em 12x" },
]

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-balance">
            Pronta para Realcar sua{" "}
            <span className="text-primary">Beleza Natural</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Acesse nossa loja oficial na Shopee e descubra produtos incriveis 
            com os melhores precos e ofertas exclusivas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#EE4D2D] hover:bg-[#D73211] text-white gap-2 text-base px-8"
            >
              <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                <ShopeeIcon className="w-5 h-5" />
                Comprar na Shopee
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 gap-2 text-base px-8"
            >
              <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-5 h-5" />
                Ver Catalogo Completo
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
