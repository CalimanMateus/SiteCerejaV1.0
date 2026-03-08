import { Truck, ShieldCheck, Award, Heart } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Envio Rápido",
    description: "Entrega em todo Brasil",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Pagamento protegido",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Produtos importados",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "Não testamos em animais",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
