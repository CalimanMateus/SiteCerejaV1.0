import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

const LINKS = {
  shopee: "https://shopee.com.br/cereja.gringa",
}

/*
  PRODUTOS DA LOJA - Preparado para integracao com API Shopee
  Descomente e conecte com a API quando disponivel:
  
  const shopeeProducts = await fetchShopeeProducts();
  // Use shopeeProducts em vez do array products abaixo
*/

const products = [
  {
    id: 1,
    name: "Batom Velvet Rose",
    price: 49.90,
    originalPrice: 69.90,
    image: "/images/product-lipstick.jpg",
    rating: 4.9,
    reviews: 128,
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Paleta de Sombras Nude",
    price: 89.90,
    originalPrice: 129.90,
    image: "/images/product-palette.jpg",
    rating: 4.8,
    reviews: 96,
    badge: "Novidade",
  },
  {
    id: 3,
    name: "Serum Vitamina C",
    price: 79.90,
    originalPrice: 99.90,
    image: "/images/product-serum.jpg",
    rating: 4.9,
    reviews: 215,
    badge: null,
  },
  {
    id: 4,
    name: "Blush Pessego Glow",
    price: 39.90,
    originalPrice: 59.90,
    image: "/images/product-blush.jpg",
    rating: 4.7,
    reviews: 74,
    badge: "Promocao",
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Produtos em Destaque
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance">
            Nossos Best Sellers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubra os produtos mais amados pelas nossas clientes. 
            Qualidade premium com precos que cabem no seu bolso.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-shadow"
            >
              <a 
                href={LINKS.shopee} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary/30">
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-foreground">
                    {product.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <Button
                  asChild
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  size="sm"
                >
                  <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-4 h-4" />
                    Comprar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            <a href={LINKS.shopee} target="_blank" rel="noopener noreferrer">
              Ver Todos os Produtos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
