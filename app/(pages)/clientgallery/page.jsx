"use client"
import React from 'react'
import { motion } from "framer-motion"
import ClientGalleryGrid from '@/components/shared/ClientGalleryGrid'
import SupportBanner from '@/components/shared/SupportBanner'
import PageHeader from '@/components/shared/pageHeader'
import { Button } from '@/components/ui/button'
import { callToActionVariants, callToActionContentVariants, callToActionTitleVariants, callToActionTextVariants, callToActionButtonVariants } from '@/lib/animation'
import Link from 'next/link'

function page() {
  return (
    <div>
      <PageHeader
        title="Real People. Real Properties. Real Results."
        subtitle="Client Gallery"
        backgroundImage="/clienthero.png"
      />

      {/* Call to Action Section */}
      <motion.section 
        className="py-6 md:py-8"
        variants={callToActionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 text-center">
          <motion.div 
            className=""
            variants={callToActionContentVariants}
          >
            {/* Main Heading */}
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
              variants={callToActionTitleVariants}
            >
              Helping families, buyers, and investors achieve their real estate goals in Fresno and beyond.
            </motion.h2>

            {/* Sub-text */}
            <motion.p 
              className="text-white/90 md:text-lg"
              variants={callToActionTextVariants}
            >
              See the homes we&apos;ve closed together — and the stories behind them.
            </motion.p>

            {/* Call to Action Prompt */}
            <motion.p 
              className="text-white/90 md:text-lg"
              variants={callToActionTextVariants}
            >
              Ready to start yours? Let&apos;s talk.
            </motion.p>

            {/* Button */}
            <motion.div 
              className="mt-8 flex justify-center"
              variants={callToActionButtonVariants}
              whileHover="hover"
            >
              <Link 
                href="/contactus" 
                prefetch={true}
                aria-label="Contact us to start your real estate journey"
              >
                <Button className="rounded-[4px] bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white px-6 py-7 text-xl font-light">
                  GET IN TOUCH
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <ClientGalleryGrid />
      <SupportBanner />
    </div>
  )
}

export default page
