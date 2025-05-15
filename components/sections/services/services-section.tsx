"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/ui/animated-section"
import { services } from "@/data/services"
import { icons } from "@/data/services" 
import { motion } from "framer-motion"
import styles from "./services-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function ServicesSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="services" className={cn(styles.servicesSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Mis <span className="text-blue-600">Servicios</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Soluciones web profesionales adaptadas a tus necesidades
          </p>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon] // <- CLAVE: obtiene el componente real
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className={cn(styles.serviceCard, isDark && styles.darkMode)}>
                  <CardHeader className="pb-2">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                      className="mb-4"
                    >
                      <Icon className="h-10 w-10 text-blue-600" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
