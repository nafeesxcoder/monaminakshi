"use client"
/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { aboutMissionVariants, imageVariants, propertyImageVariants, contentBlockVariants, featureVariants, buttonVariants } from "@/lib/animation"
import Link from "next/link"

export default function AboutMissionSection() {
  // Property images data
  const propertyImages = [
    { src: "/about/about1.png", alt: "Modern white house with pool" },
    { src: "/about/about2.png", alt: "Traditional gray house with garage" },
    { src: "/about/about3.png", alt: "Modern white house" },
    { src: "/about/about4.png", alt: "Modern white house" }
  ]

  // Feature blocks data
  const features = [
    {
      icon: "/icon/ModernVilla.svg",
      title: "Modern Villa",
      description: "Stylish, secure, and built for comfort in every detail."
    },
    {
      icon: "/icon/SecurePayment.svg",
      title: "Secure Payment",
      description: "Simple, safe, and encrypted for worry-free service."
    }
  ]

  return (
    <motion.section 
      className="py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={aboutMissionVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center mb-8 sm:mb-16">
          {/* Left Side */}
          <motion.div 
            className="hidden md:block"
            variants={imageVariants}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/about/aboutleft.png"
                alt="Business consultation meeting"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Property Images */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
              {propertyImages.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="overflow-hidden"
                  variants={propertyImageVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            className="space-y-8"
            variants={contentBlockVariants}
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-black leading-tight"
                variants={featureVariants}
              >
                I&apos;m on a Mission to Redefine the Real Estate Experience in Fresno.
              </motion.h2>
              <motion.p 
                className="text-black leading-relaxed"
                variants={featureVariants}
              >
                At Monameenakshi Real Estate, we&apos;re committed to helping you make confident and informed property decisions. With years of experience in the Central Valley market, we specialize in helping families, first-time buyers, and investors find the perfect home or opportunity. From modern villas to profitable investments, we combine local expertise, clear communication, and smart strategy to deliver results you can trust.
              </motion.p>
            </div>

            <div className="max-w-md mx-auto">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    variants={featureVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={feature.icon} alt={feature.title} className="w-full h-full" />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-bold text-black mb-1">{feature.title}</h3>
                      <p className="text-black text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.div 
                className="flex justify-center mt-8"
                variants={buttonVariants}
              >
                <motion.div
                  whileHover="hover"
                  variants={buttonVariants}
                >
                  <Link 
                    href="/contactus" 
                    prefetch={true}
                    aria-label="Contact us for real estate services"
                  >
                  <Button className="bg-gradient-to-r from-[#C2D3DB] to-[#656162] text-white px-7 py-6 rounded-full font-medium transition-colors duration-300">
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 ml-0 -rotate-45" />
                  </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 