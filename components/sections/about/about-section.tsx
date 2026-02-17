"use client"

import { CheckCircle } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import { skills } from "@/data/skills"
import { motion } from "framer-motion"
import styles from "./about-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function AboutSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="about" className={cn(styles.aboutSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={styles.sectionTitle}>
            Sobre <span className={styles.titleHighlight}>Mí</span>
          </h2>
          <div className={styles.divider}></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.imageWrapper}
              >
                <img src="images/Foto-Teofilo.webp" alt="Foto profesional" className="w-full h-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={styles.imageBackground}
              ></motion.div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Diseñador Web WordPress + Elementor</h3>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <p className="text-gray-600 dark:text-gray-300">
               Soy diseñador web especializado en WordPress y Elementor con más de 5 años de experiencia combinando trabajo freelance y en agencia. He desarrollado más de 50 sitios web para negocios y empresas, principalmente orientados al mercado internacional.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="text-gray-600 dark:text-gray-300">
                Entre septiembre de 2025 y febrero de 2026 formé parte del equipo de Midrocket como diseñador web, participando en la creación de páginas corporativas, landing pages y soluciones digitales enfocadas en rendimiento, estructura estratégica y conversión. Durante esta etapa trabajé en entornos colaborativos remotos utilizando herramientas como Slack y ClickUp para la gestión de proyectos y coordinación de equipos.
              </p>
            </AnimatedSection>
             <AnimatedSection delay={0.45}>
              <p className="text-gray-600 dark:text-gray-300">
                Cuento con experiencia trabajando de forma remota con clientes en Estados Unidos, Colombia y España, adaptándome a diferentes mercados y necesidades comerciales.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <p className="text-gray-600 dark:text-gray-300">
                A nivel técnico, trabajo con WordPress y Elementor (Pro), utilizando herramientas avanzadas como JetElements, JetSmartFilters y el ecosistema completo de Crocoblock para desarrollar sitios dinámicos y personalizados. Tengo experiencia en la creación y gestión de Custom Post Types (CPT), estructuras dinámicas, filtros avanzados y desarrollo de funcionalidades a medida.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.55}>
              <p className="text-gray-600 dark:text-gray-300">
                Además, implemento optimización de rendimiento (WPO), conversión de imágenes a WebP, configuración de caché y CDN, integración con herramientas externas (Mailgun, WhatsApp, Google Maps), sitios multilenguaje y diseño UX/UI orientado a resultados.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Habilidades Técnicas</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Idiomas</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-blue-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">Español (Nativo)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "66.666667%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-blue-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">Inglés (Intermedio)</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
