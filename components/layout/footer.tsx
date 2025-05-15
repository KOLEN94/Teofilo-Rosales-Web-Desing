"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-gray-400">
              Diseño sitios web WordPress que realmente funcionan. Sitios rápidos, modernos y adaptados a tu marca.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#woocommerce" className="text-gray-400 hover:text-blue-500 transition-colors">
                  WooCommerce
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:breaknius@gmail.com" className="text-blue-500 hover:text-blue-400">
                  breaknius@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Teléfono:</span>
                <a href="tel:+51979827956" className="text-blue-500 hover:text-blue-400">
                  +51 979 827 956
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Ubicación:</span>
                <span>Lima, Peru</span>
              </li>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex space-x-4"
            >
              <a
                href="https://web.facebook.com/teofilo.rosales.1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/teofilo-rosales-gama"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Teofilo Rosales. Todos los derechos reservados.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -5 }}
            href="#hero"
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
