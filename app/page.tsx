import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProductsSection } from "@/components/products-section"
import { SocialSection } from "@/components/social-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <SocialSection />
      <CTASection />
      <Footer />
      <WhatsAppChatbot />
    </main>
  )
}
