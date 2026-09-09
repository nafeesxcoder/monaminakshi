"use client"

/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { Mail, Instagram, Phone, MapPin } from "lucide-react"
import { IconBrandTiktok } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { footerVariants, sectionVariants, itemVariants, logoVariants, socialIconVariants, linkVariants } from "@/lib/animation"

export default function Footer() {
  // Social Media Data
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/realtor_monameenakshi",
    },
    {
      name: "TikTok",
      icon: IconBrandTiktok,
      url: "https://www.tiktok.com/@monameenakshi",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:info@monameenakshirealestate.com",
    }
  ]

  // Quick Links Data
  const quickLinks = [
    { name: "About Us", url: "/about" },
    { name: "Client Gallery", url: "/clientgallery" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact Us", url: "/contactus" },
    { name: "Terms & Policy", url: "/terms" }
  ]

  // Services Data
  const services = [
    { name: "Apartments", url: "/services/apartments" },
    { name: "Commercial", url: "/services/commercial" },
    { name: "Office", url: "/services/office" },
    { name: "Restaurant", url: "/services/restaurant" },
    { name: "Studio Home", url: "/services/studio-home" }
  ]

  // Contact Information Data
  const contactInfo = [
    {
      icon: Phone,
      text: "(555) 123-4567",
      url: "tel:5551234567"
    },
    {
      icon: Mail,
      text: "info@monameenakshirealestate.com",
      url: "mailto:info@monameenakshirealestate.com"
    },
    {
      icon: MapPin,
      text: "123 Main Street, Suite 100, Fresno, CA 93710",
      url: "https://maps.app.goo.gl/99erTxgpXHDvSfCM8"
    }
  ]

  return (
    <motion.footer 
      className="bg-[#B6C7CF] pt-12 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Information */}
          <motion.div 
            className="space-y-4 col-span-2"
            variants={sectionVariants}
          >
            {/* Logo and Company Name */}
            <motion.div 
              className="flex items-center space-x-3"
              variants={logoVariants}
            >
              <img
                src="/logo.png"
                alt="Monameenakshi Logo"
                className="w-auto h-16 md:h-20 lg:h-24"
              />
            </motion.div>

            {/* Company Description */}
            <motion.p 
              className="text-white text-sm leading-relaxed"
              variants={itemVariants}
            >
              Helping families and investors discover the perfect property in Fresno and surrounding areas. With personalized guidance and local expertise, I make your real estate journey smooth and stress-free.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div 
              className="flex space-x-3"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300`}
                  variants={socialIconVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <motion.h4 
              className="text-lg font-bold text-white"
              variants={itemVariants}
            >
              Quick links
            </motion.h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href={link.url}
                    className="text-white text-sm hover:text-white transition-colors flex items-center"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <span className="text-white mr-2">›</span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <motion.h4 
              className="text-lg font-bold text-white"
              variants={itemVariants}
            >
              Our Services
            </motion.h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <motion.a
                    href={service.url}
                    className="text-white text-sm hover:text-white transition-colors flex items-center"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <span className="text-white mr-2">›</span>
                    {service.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={sectionVariants}
          >
            <motion.h4 
              className="text-lg font-bold text-white"
              variants={itemVariants}
            >
              Contact
            </motion.h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.url}
                  className="flex items-start space-x-3 text-white hover:text-white transition-colors"
                  variants={itemVariants}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separator Line */}
        <motion.div 
          className="border-t-[1.5px] border-gray mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-white text-sm">
            © Copyright 2025. All rights reserved. Properties Realtor. Designed by{" "}
            <a 
              href="https://timexsolutioninc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:text-gray transition-colors duration-200 underline"
            >
              Timex Solution Inc.
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
