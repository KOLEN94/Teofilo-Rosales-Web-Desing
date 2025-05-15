"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import AnimatedSection from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import styles from "./testimonials-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function TestimonialsSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className={cn(styles.testimonialsSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Lo que dicen mis <span className="text-blue-600">Clientes</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Opiniones de quienes han confiado en mis servicios</p>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={cn(styles.testimonialCard, isDark && styles.darkMode)}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className={styles.avatarWrapper}>
                    <div className={styles.avatar}>
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={styles.quoteIcon}>
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={cn(styles.quoteText, "text-gray-600 dark:text-gray-300")}>
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className={styles.navButton}>
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Anterior</span>
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    styles.indicator,
                    index === currentIndex ? styles.activeIndicator : styles.inactiveIndicator,
                    isDark && styles.darkMode,
                  )}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className={styles.navButton}>
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
