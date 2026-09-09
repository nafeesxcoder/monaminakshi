/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { pageHeaderVariants, backgroundImageVariants, overlayVariants, contentVariants, titleVariants, subtitleVariants } from "@/lib/animation"

export default function PageHeader({ title, subtitle, backgroundImage = "/house3pic.png" }) {
  return (
    <motion.section 
      className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={pageHeaderVariants}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        variants={backgroundImageVariants}
      >
        <img
          src={backgroundImage}
          alt="Page header background"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/40 sm:bg-black/30"
        variants={overlayVariants}
      ></motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex sm:items-center items-end justify-center pb-10 sm:pb-0"
        variants={contentVariants}
      >
        <div className="text-center text-white max-w-xl p-4 sm:p-6 rounded bg-black/20 sm:bg-black/10">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl font-medium"
            variants={subtitleVariants}
          >
            {subtitle || "About Us"}
          </motion.h2>
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2 leading-tight"
            variants={titleVariants}
          >
            {title || "Search Property Smarter, Quicker & Anywhere"}
          </motion.h1>
        </div>
      </motion.div>
    </motion.section>
  )
}