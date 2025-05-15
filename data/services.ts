import { Laptop, Rocket, Settings, RefreshCw, ServerCog , Server, Shield, Book, ShoppingCart } from "lucide-react"
import type { ReactNode } from "react"

export type Service = {
  icon: keyof typeof icons
  title: string
  description: string
}
export const icons = {
  Laptop,
  Rocket,
  Settings,
  RefreshCw,
  ServerCog ,
  Server,
  Shield,
  Book,
  ShoppingCart,
}


export const services: Service[] = [
  {
    icon: "Laptop",
    title: "Diseño Web WordPress",
    description:
      "Sitios web profesionales con WordPress, Elementor, WPBakery, Divi, Bricks y Oxygen, optimizados para todos los dispositivos.",
  },
  {
    icon: "Rocket",
    title: "Landing Pages",
    description: "Páginas de aterrizaje de alto impacto diseñadas para convertir visitantes en clientes.",
  },
  {
    icon: "RefreshCw" ,
    title: "Rediseño Web",
    description: "Actualización de sitios web antiguos con diseños modernos y tecnologías actuales.",
  },
  {
    icon: "Server" ,
    title: "Migración de Sitios",
    description: "Migración segura de sitios web entre servidores, con staging environments y backups automatizados.",
  },
  {
    icon: "ShoppingCart",
    title: "Tiendas Online",
    description: "Implementación de tiendas online con WooCommerce, configuración de productos, pagos y envíos.",
  },
  {
    icon: "Settings" ,
    title: "Integraciones",
    description: "Integración con Mailgun, WhatsApp, Google Maps, redes sociales y otras herramientas necesarias.",
  },
  {
    icon: "Shield",
    title: "Cumplimiento Legal",
    description: "Implementación de cookies, políticas de privacidad y cumplimiento GDPR.",
  },
  {
    icon: "Book",
    title: "Documentación y Soporte",
    description: "Guías detalladas para gestionar tu sitio y soporte post-lanzamiento.",
  },
  {
    icon: "ServerCog",
    title: "Hosting y Dominios",
    description: "Configuración de hosting (Hostinger, cPanel) y gestión de dominios para tu proyecto.",
  },
]
