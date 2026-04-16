"use client"

import { ExternalLink, Sparkles, Plus } from "lucide-react"
import { aiProjects } from "@/data/ai-projects"
import AnimatedSection from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import styles from "./ai-design-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function AIDesignSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="ai-design" className={cn(styles.aiDesignSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <div className={styles.badgeAI}>
            <Sparkles className="w-3.5 h-3.5" />
            Figma + Inteligencia Artificial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Diseño basado en{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #6366f1, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Proyectos de Figma potenciados con Inteligencia Artificial
          </p>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #2563eb)" }}
          />
        </AnimatedSection>

        <div className="grid grid-cols-4 gap-6">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.07 * index }}
              className={styles.projectCard}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay} />
              <div className={styles.projectContent}>
                {project.tool && (
                  <span className={styles.toolTag}>
                    <Sparkles className="w-3 h-3" />
                    {project.tool}
                  </span>
                )}
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewLink}
                >
                  Ver proyecto
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
