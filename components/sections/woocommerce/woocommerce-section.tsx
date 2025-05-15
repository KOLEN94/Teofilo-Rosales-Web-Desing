"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import styles from "./woocommerce-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function WooCommerceSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const wooCommerceSkills = [
    "Instalación y configuración inicial de WooCommerce",
    "Creación y personalización de productos simples, variables y agrupados",
    "Configuración de métodos de pago: PayPal, Stripe, MercadoPago, transferencias",
    "Configuración de métodos de envío por tarifa, zona o peso",
    "Creación de cupones de descuento, promociones y campañas básicas",
    "Gestión de inventario y control de stock",
    "Configuración de correos automáticos para pedidos (confirmación, estado, entrega)",
    "Personalización del diseño de la tienda usando Elementor + widgets WooCommerce",
    "Configuración y optimización de páginas clave: carrito, checkout, cuenta del cliente",
    "Resolución de errores frecuentes: productos que no se visualizan, fallos en carrito o checkout",
  ]

  return (
    <section id="woocommerce" className={cn(styles.woocommerceSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Tiendas <span className="text-blue-600">WooCommerce</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Soluciones e-commerce profesionales con WordPress y Elementor
          </p>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.imageWrapper}
            >
              <img
                src="images/modern_and_elegant_ecommerce_background_fea_3.jpg"
                alt="WooCommerce Tienda Online"
                className="w-full h-auto"
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Cuento con experiencia profesional implementando tiendas online funcionales y personalizadas con
                WooCommerce + Elementor, incluyendo:
              </p>
            </AnimatedSection>

            <div className="space-y-3 mt-6">
              {wooCommerceSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={styles.skillItem}
                >
                  <Check className={styles.checkIcon} />
                  <p className="ml-3 text-gray-600 dark:text-gray-300">{skill}</p>
                </motion.div>
              ))}
            </div>

            <AnimatedSection delay={0.6}>
              <p className={cn(styles.quote, "text-gray-600 dark:text-gray-300")}>
                Mis tiendas online están diseñadas para ser usables, visualmente atractivas y funcionales, garantizando
                una experiencia fluida desde la navegación hasta la compra.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
