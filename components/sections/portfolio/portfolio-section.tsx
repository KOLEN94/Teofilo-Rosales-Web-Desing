"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import AnimatedSection from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import styles from "./portfolio-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function PortfolioSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const [visibleCount, setVisibleCount] = useState(8)

  const visibleProjects = projects.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, projects.length))
  }

  return (
    <section id="portfolio" className={cn(styles.portfolioSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Mi <span className="text-blue-600">Portafolio</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Explora algunos de mis trabajos más recientes</p>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className={styles.projectCard}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
              <div className={cn(styles.projectOverlay, styles.projectOverlayVisible)}></div>
              <div className={cn(styles.projectContent, styles.projectContentVisible)}>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-200 mt-2">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Ver proyecto
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Button onClick={loadMore} variant="outline" size="lg" className={styles.loadMoreButton}>
              Cargar más proyectos
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
