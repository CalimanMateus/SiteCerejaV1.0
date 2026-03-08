import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const LINKS = {
  shopee: "https://shopee.com.br/cereja.gringa",
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl text-primary font-medium tracking-wide">
                Beauty & Cosmetics
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mt-2">
                Cereja
                <span className="block text-primary">Gringa</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              Produtos de alta qualidade para realcar sua beleza natural. 
              Cosmeticos importados com os melhores precos do Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base px-8"
              >
                <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5" />
                  Comprar na Shopee
                </a>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 text-base px-8"
              >
                <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                  Ver Catalogo
                </a>
              </Button>
            </div>

            {/* 
              ESTATISTICAS DA LOJA - Preparado para integracao com API Shopee
              Descomente e conecte com a API quando disponivel:
              
              const shopeeStats = await fetchShopeeStats();
              // shopeeStats.happyCustomers
              // shopeeStats.totalProducts  
              // shopeeStats.averageRating
            */}
            <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">Clientes Felizes</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Produtos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Avaliacao</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
              <Image
                src="/images/hero-beauty.jpg"
                alt="Mulher com maquiagem elegante"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/cosmetics-collection.jpg"
                      alt="Colecao de cosmeticos"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Nova Colecao</p>
                    <p className="text-xs text-muted-foreground">Chegou!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
