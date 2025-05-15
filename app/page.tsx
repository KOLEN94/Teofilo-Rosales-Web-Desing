import HeroSection from "@/components/sections/hero/hero-section"
import AboutSection from "@/components/sections/about/about-section"
import ServicesSection from "@/components/sections/services/services-section"
import WooCommerceSection from "@/components/sections/woocommerce/woocommerce-section"
import PortfolioSection from "@/components/sections/portfolio/portfolio-section"
import TestimonialsSection from "@/components/sections/testimonials/testimonials-section"
import ContactSection from "@/components/sections/contact/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WooCommerceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
