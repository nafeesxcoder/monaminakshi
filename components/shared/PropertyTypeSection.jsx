/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { heroVariants, fadeInUp } from "@/lib/animation"
import { MeetSection } from "@/components/shared/HeadingSection"
import { propertyTypes } from "@/lib/data"

export default function PropertyTypeSection({ 
  showHeader = true,
  className = "py-8 bg-[#B3C1C8]"
}) {
  return (
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
          <motion.div
            className="text-center mb-8 md:mb-12 relative"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 -left-8 -top-8">
              <img
                src="/icon/categoriestext.svg"
                alt="Categories"
                className="w-auto h-full"
              />
            </div>

            <div className="relative z-10">
              <MeetSection showParagraph={false} alignment="left" name="What I Can Help You With" title="Property Type" />
            </div>
          </motion.div>
        )}

        {/* Property Type Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-2"
          variants={heroVariants}
        >
          {propertyTypes.map((propertyType, index) => (
            <motion.div
              key={propertyType.id}
              className={`bg-white rounded-lg p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 ${index === propertyTypes.length - 1 ? 'col-span-2 sm:col-span-2 lg:col-span-1' : ''
                }`}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img src={propertyType.icon} alt="icon" className="w-full h-full" />
              </motion.div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{propertyType.name}</h4>
              <p className="text-sm text-gray-500">{propertyType.listings} Listings</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
