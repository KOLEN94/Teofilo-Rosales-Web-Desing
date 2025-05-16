"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer } from "lucide-react"
import { motion } from "framer-motion"

import styles from "./hero-section.module.css"

export default function HeroSection() {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Imagen de fondo */}
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: "url('images/banner-teofilowp.webp')",
        }}
      >
        {/* Overlay para mejorar la legibilidad del texto */}
        <div className={styles.heroOverlay}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
          >
            Diseño sitios web WordPress que <span className="text-blue-400">realmente funcionan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Sitios rápidos, modernos y adaptados a tu marca. Especialista en WordPress y Elementor con más de 5 años de
            experiencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Button asChild size="lg" className="text-md">
              <a href="#portfolio">
                Ver Portafolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-md bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            >
              <a href="https://drive.google.com/file/d/168Iu3PXyC_JTequxhxqMR5jc64f8sLB3/view?usp=sharing" target="_blank">Ver Cv</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex items-center text-gray-300 justify-center mt-12"
          >
            <MousePointer className="mr-2 h-4 w-4 animate-bounce" />
            <span>Desplázate para descubrir más</span>
          </motion.div>

          {/* Tarjeta de estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-16 flex justify-center"
          >
            <div className={styles.statsCard}>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">+50</p>
                <p className="text-sm text-gray-300">Proyectos completados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-300">Satisfacción garantizada</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-sm text-gray-300">Años de experiencia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
