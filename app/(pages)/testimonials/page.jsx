"use client"
import React from 'react'
import { motion } from "framer-motion"
import SupportBanner from '@/components/shared/SupportBanner'
import TestimonialsGrid from '@/components/shared/TestimonialsGrid'
import PageHeader from '@/components/shared/pageHeader'
import { testimonialsCallToActionVariants, testimonialsCallToActionContentVariants, testimonialsCallToActionTitleVariants, testimonialsCallToActionTextVariants } from '@/lib/animation'

function page() {
  return (
    <div>
      <PageHeader
        title="What Our Clients Are Saying"
        subtitle="Testimonials"
        backgroundImage="/clienthero.png"
      />
      <div className='px-4 sm:px-8 xl:px-0'>
        {/* Call to Action Section */}
        <motion.section 
          className="py-6 md:py-8"
          variants={testimonialsCallToActionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div 
              className=""
              variants={testimonialsCallToActionContentVariants}
            >
              {/* Main Heading */}
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                variants={testimonialsCallToActionTitleVariants}
              >
                Your Success, Our Pride
              </motion.h2>

              {/* Sub-text */}
              <motion.p 
                className="text-white/90 md:text-lg"
                variants={testimonialsCallToActionTextVariants}
              >
                Real stories from happy homeowners, investors, and families who trusted Monameenakshi for their real estate journey in Fresno and beyond.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
        <TestimonialsGrid />
      </div>
      <SupportBanner />
    </div>
  )
}

export default page
