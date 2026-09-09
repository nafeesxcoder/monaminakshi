"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PageHeader from '@/components/shared/pageHeader'
import AboutMissionSection from '@/components/shared/AboutMissionSection'
import SupportBanner from '@/components/shared/SupportBanner'
import { motion } from "framer-motion"
import { trustedPartnersVariants, partnerLogoVariants, whoIAmVariants, textBlockVariants, houseImageVariants, statsBoxVariants } from "@/lib/animation"

function page() {
  // Partner logos data
  const partnerImages = [
    { src: "/icon/RealEstate.svg", alt: "Real Estate Partner Logo" },
    { src: "/icon/HexaHouse.svg", alt: "Hexa House Partner Logo" },
    { src: "/icon/TechHouse.svg", alt: "Tech House Partner Logo" }
  ]

  return (
    <div>
      <PageHeader
        title="Search Property Smarter, Quicker & Anywhere"
        subtitle="About Us"
        backgroundImage="/abouthero.png"
      />

      <AboutMissionSection />

      {/* Trusted Partners Section */}
      <motion.section 
        className="py-8 md:py-12 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={trustedPartnersVariants}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1.7fr] gap-6 md:gap-12 items-center">
            {/* Left Side - Text */}
            <motion.div 
              className="space-y-4"
              variants={textBlockVariants}
            >
              <h2 className="text-center sm:text-left text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
                Some Trusted
                Partners Working
                with me
              </h2>
            </motion.div>

            {/* Right Side - Partner Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partnerImages.map((image, index) => (
                <motion.div 
                  key={index} 
                  className={`flex justify-center ${index === partnerImages.length - 1 ? 'col-span-2 w-1/2 md:w-full mx-auto md:col-span-1' : ''}`}
                  variants={partnerLogoVariants}
                  whileHover="hover"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-auto h-28 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Who I Am Section */}
      <motion.section 
        className="py-8 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={whoIAmVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text Content */}
            <motion.div 
              className="space-y-8"
              variants={textBlockVariants}
            >
              {/* Who I Am */}
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">
                  Who I Am
                </h2>
                <p className="text-black leading-relaxed">
                  Hi, I&apos;m Monameenakshi, your local Fresno Realtor® with a passion for helping families, first-time buyers, and seasoned investors make confident property decisions. With several years of experience in the real estate industry, I bring a deep understanding of the Central Valley market from family neighborhoods and modern condos to profitable investment properties. I provide clients with personalized attention, fast communication, and expert negotiation to ensure they secure the best deals possible.
                </p>
              </div>

              {/* My Mission */}
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-black">
                  My Mission
                </h3>
                <p className="text-black leading-relaxed">
                  To help individuals and families achieve their real estate goals with trust, clarity, and dedication. Every client deserves honesty, transparency, and exceptional service – and that&apos;s what I deliver every step of the way.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Images and Stats */}
            <motion.div 
              className="relative h-full hidden lg:block"
              variants={houseImageVariants}
            >
              {/* House Images */}
              <div className="relative h-full flex items-center">
                {/* Top Image */}
                <motion.div 
                  className="absolute -top-4 right-0 w-auto h-44 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <img
                    src="/about/house1.png"
                    alt="Modern two-story house with garage"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Middle-Left Image */}
                <motion.div 
                  className="absolute z-10 left-0 w-auto h-48 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <img
                    src="/about/house2.png"
                    alt="Charming one-story house with porch"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom Image */}
                <motion.div 
                  className="absolute -bottom-4 right-0 w-auto h-44 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <img
                    src="/about/house3.png"
                    alt="Large two-story gray house"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Stats Box */}
                <motion.div 
                  className="absolute right-[3%] xl:right-[13%] z-10 border-4 border-white rounded-2xl px-12 py-4 shadow-lg"
                  variants={statsBoxVariants}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">50+</div>
                    <div className="text-white text-lg">Homes</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SupportBanner />
    </div>
  )
}

export default page
