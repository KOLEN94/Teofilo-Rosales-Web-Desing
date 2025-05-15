"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import styles from "./contact-section.module.css"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function ContactSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const socialIcons = [
    {
      name: "Facebook",
      path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
      url: "https://web.facebook.com/teofilo.rosales.1",
    },
    {
      name: "LinkedIn",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      url: "https://www.linkedin.com/in/teofilo-rosales-gama",
    },
  ]

  return (
    <section id="contact" className={cn(styles.contactSection, isDark && styles.darkMode)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span className="text-blue-600">Contáctame</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">¿Tienes un proyecto en mente? ¡Hablemos!</p>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={styles.contactItem}
                >
                  <div className={cn(styles.iconWrapper, isDark && styles.darkMode)}>
                    <Mail className={styles.icon} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a
                      href="mailto:breaknius@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      breaknius@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={styles.contactItem}
                >
                  <div className={cn(styles.iconWrapper, isDark && styles.darkMode)}>
                    <Phone className={styles.icon} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h4>
                    <a
                      href="tel:+51979827956"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      +51 979 827 956
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={styles.contactItem}
                >
                  <div className={cn(styles.iconWrapper, isDark && styles.darkMode)}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</h4>
                    <p className="text-gray-600 dark:text-gray-300">Lima, Peru</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sígueme en redes sociales</h4>
                <div className="flex space-x-4">
                  {socialIcons.map((icon, index) => (
                    <motion.a
                      key={icon.name}
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(styles.socialIcon, isDark && styles.darkMode)}
                      aria-label={icon.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={icon.path} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={cn(styles.contactCard, isDark && styles.darkMode)}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex justify-center items-center p-4 bg-blue-100 dark:bg-blue-800/50 rounded-full"
                  >
                    <MessageCircle className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    ¿Listo para comenzar tu proyecto?
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300">
                    Contáctame directamente por WhatsApp para una respuesta rápida y personalizada. Estoy disponible
                    para discutir tu proyecto y ofrecerte las mejores soluciones.
                  </p>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button asChild size="lg" className={styles.whatsappButton}>
                      <a
                        href="https://api.whatsapp.com/send?phone=+51979827956&text=Hola%20soy%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Contáctame por WhatsApp
                      </a>
                    </Button>
                  </motion.div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">Respuesta garantizada en menos de 24 horas</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
