"use client"

import { motion } from "framer-motion"
import { heroVariants, fadeInUp } from "@/lib/animation"
import { MeetSection } from "@/components/shared/HeadingSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { featuredProperties } from "@/lib/data"
import { ChevronLeft, ChevronRight, MapPin, X, Phone, Mail, Send } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// Contact Modal Component
function ContactModal({ isOpen, onClose, property }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Property Inquiry:', { property, formData })
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', phone: '', email: '', message: '' })
    onClose()
  }

  const handleDirectContact = (type) => {
    switch (type) {
      case 'phone':
        window.open('tel:+15551234567', '_self')
        break
      case 'whatsapp':
        window.open('https://wa.me/15551234567', '_blank')
        break
      case 'email':
        window.open('mailto:info@monameenakshirealestate.com', '_self')
        break
      default:
        break
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 max-h-[85vh] overflow-hidden"
        style={{
          width: 'min(90vw, 500px)',
          maxHeight: '90vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#B3C1C8] to-[#656162]">
          <h2 className="text-xl font-bold text-white">Inquire About This Property</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Property Info */}
        <div className="px-6 py-4 border-b border-gray bg-lightGray">
          <h3 className="font-semibold text-black text-lg">{property.title}</h3>
          <p className="text-sm text-gray-600 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </p>
          <p className="text-xl font-bold text-black">{property.price}</p>
        </div>

        {/* Quick Contact Buttons */}
        {/* <div className="p-6 border-b border-gray-200">
          <h4 className="font-semibold text-black mb-4 text-center">Quick Contact</h4>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleDirectContact('phone')}
              className="flex flex-col items-center p-4 bg-gradient-to-b from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300"
            >
              <Phone className="w-6 h-6 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-700">Call</span>
            </button>
            <button
              onClick={() => handleDirectContact('whatsapp')}
              className="flex flex-col items-center p-4 bg-gradient-to-b from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-300 border border-green-200 hover:border-green-300"
            >
              <Send className="w-6 h-6 text-green-600 mb-2" />
              <span className="text-sm font-medium text-green-700">WhatsApp</span>
            </button>
            <button
              onClick={() => handleDirectContact('email')}
              className="flex flex-col items-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-300 border border-blue-200 hover:border-blue-300"
            >
              <Mail className="w-6 h-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-blue-700">Email</span>
            </button>
          </div>
        </div> */}

        {/* Contact Form */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-light/40 rounded-lg border border-gray focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-light/40 rounded-lg border border-gray focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-light/40 rounded-lg border border-gray focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-light/40 rounded-lg border border-gray focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="I'm interested in this property..."
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#656162] to-[#000000] text-white py-6 px-5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Optimized Property Card Component
function PropertyCard({ property, onBookNowClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const totalImages = property.images.length

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Property Image Slider */}
      <div className="relative h-48 xl:h-[280px] group">
        <Image
          src={property.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${property.title} - Image ${currentImageIndex + 1}`}
          width={300}
          height={200}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Image Navigation - Only show if multiple images */}
        {totalImages > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-lightGray hover:bg-lightGray/90 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 stroke-[3px] text-gray" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-lightGray hover:bg-lightGray/90 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronRight className="w-5 h-5 stroke-[3px] text-gray" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {property.images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </>
        )}

        {/* Property Tags */}
        <div className="absolute top-4 xl:top-8 left-4 xl:left-8">
          <span className="rounded-[4px] bg-[linear-gradient(270deg,_#B3C1C8_0%,_#656162_100%)] text-white px-4 py-2 md:px-4 xl:px-6 md:py-2 xl:py-3 text-sm font-medium">
            {property.type}
          </span>
        </div>

        {property.popular && (
          <div className="absolute top-4 xl:top-8 right-4 xl:right-8">
            <span className="rounded-[4px] bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white px-4 py-2 md:px-4 xl:px-6 md:py-2 xl:py-3 text-sm font-medium">
              Popular
            </span>
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-4 xl:bottom-8 left-4 xl:left-8">
          <span className="text-white text-lg xl:text-2xl font-bold">
            {property.price}
            <span className="text-sm font-normal">{property.priceType}</span>
          </span>
        </div>

        {/* Action Button */}
        <div className="absolute bottom-4 xl:bottom-8 right-4 xl:right-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onBookNowClick(property)}
              className="border-2 border-white bg-transparent hover:bg-white hover:text-black text-white px-4 py-2 text-sm"
            >
              {property.actionText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4 md:p-6 relative">
        {/* View Button */}
        <Link
          href={`/property/${property.id}`}
          className="absolute top-4 right-4"
          prefetch={true}
          aria-label={`View ${property.title} details`}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-[4px] bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white px-3 py-1.5 text-xs font-medium hover:bg-gray-800 transition-all duration-300">
              View
            </Button>
          </motion.div>
        </Link>

        {/* Property Info */}
        <div className="mb-4">
          <h4 className="md:text-lg font-bold text-gray mb-0">{property.category}</h4>
          <h3 className="text-base md:text-xl font-bold text-black mb-0 sm:mb-1">{property.title}</h3>
          <p className="text-black text-xs md:text-sm flex items-center">
            <MapPin className="w-3 h-3 mr-1" />
            {property.location}
          </p>
        </div>

        {/* Property Specs */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {property.specs.map((spec) => (
              <motion.div
                key={spec.key}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 bg-lightGray rounded-full flex items-center justify-center mr-2">
                  <img src={spec.icon} alt={spec.label} className="w-4 h-4" />
                </div>
                <span className="text-[10px] md:text-xs text-gray">
                  {spec.label}: {spec.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedPropertiesSection({
  showHeader = true,
  showViewAllButton = true,
  maxProperties = null,
  className = "py-6 md:py-8"
}) {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const displayProperties = maxProperties
    ? featuredProperties.slice(0, maxProperties)
    : featuredProperties

  const handleBookNowClick = (property) => {
    setSelectedProperty(property)
    setIsContactModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsContactModalOpen(false)
    setSelectedProperty(null)
  }

  return (
    <>
      <motion.section
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={heroVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
          {/* Section Header */}
          {showHeader && (
            <motion.div className="mb-6 md:mb-12" variants={fadeInUp}>
              <MeetSection
                showParagraph={false}
                alignment="center"
                name="Let's Find the Right Property for You"
                title="Featured Properties"
              />
            </motion.div>
          )}

          {/* Properties Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={heroVariants}
          >
            {displayProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
              >
                <PropertyCard
                  property={property}
                  onBookNowClick={handleBookNowClick}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Properties Button */}
          {showViewAllButton && (
            <motion.div
              className="text-center mt-6 md:mt-12"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/property"
                prefetch={true}
                aria-label="Browse all available properties"
              >
                <Button className="rounded-[4px] border-[3px] border-white bg-transparent text-white px-5 py-6 md:px-6 md:py-7 text-xl font-light hover:bg-white hover:text-black transition-all duration-300">
                  View All Properties
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Single Contact Modal for all properties */}
      {selectedProperty && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={handleCloseModal}
          property={selectedProperty}
        />
      )}
    </>
  )
}
