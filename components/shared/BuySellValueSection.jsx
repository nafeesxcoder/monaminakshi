/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { heroVariants, fadeInUp } from "@/lib/animation"
import { buySellValueCards } from "@/lib/data"

export default function BuySellValueSection({ 
  className = "py-16 lg:py-24 bg-[#B3C1C8] relative overflow-hidden"
}) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={heroVariants}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0"
        variants={fadeInUp}
      >
        <img
          src="/SectionBG.png"
          alt="Section Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-8 items-start"
          variants={heroVariants}
        >
          {buySellValueCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col h-full"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
            >
              <motion.div
                className={`relative bg-[#B6C7CF] shadow-2xl transform w-full ${index === 1 ? 'lg:mt-20' : ''
                  }`}
                style={{
                  boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.25)',
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Overlay inside the card only */}
                <motion.div
                  className="absolute inset-0 left-3 top-3 bg-gray w-full h-full z-0"
                  variants={fadeInUp}
                ></motion.div>

                {/* Content on top of overlay */}
                <motion.div
                  className="relative z-10 flex flex-col justify-center items-center text-center bg-[#B6C7CF] px-8 py-12"
                  variants={fadeInUp}
                >
                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    variants={fadeInUp}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-white text-lg font-light leading-relaxed"
                    variants={fadeInUp}
                  >
                    {card.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
