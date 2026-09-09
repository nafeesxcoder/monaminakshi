"use client"
import React from "react";
import { motion } from "framer-motion"
import { MapPin, Navigation } from "lucide-react";
import { contactMapVariants, mapHeaderVariants, mapTitleVariants, mapTextVariants, mapContainerVariants, mapInfoCardVariants } from "@/lib/animation";

const ContactMap = () => (
  <motion.section 
    className="py-6 md:py-8"
    variants={contactMapVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
      <motion.div 
        className="text-center mb-12"
        variants={mapHeaderVariants}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4"
          variants={mapTitleVariants}
        >
          Find Us
        </motion.h2>
        <motion.p 
          className="md:text-lg text-gray-600 max-w-2xl mx-auto"
          variants={mapTextVariants}
        >
          Visit our office or explore the area around our location. We&apos;re here to help you with all your real estate needs.
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Map */}
        <motion.div 
          className="lg:col-span-2"
          variants={mapContainerVariants}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
              <iframe
                src="https://www.google.com/maps?q=123+Main+Street+Suite+100,+Fresno,+CA+93710,+USA&output=embed"
                title="123 Main Street, Suite 100, Fresno, CA 93710, USA"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Location Info */}
        <div className="space-y-4 md:space-y-6">
          <motion.div 
            className="bg-white rounded-xl p-4 md:p-6 shadow-lg"
            variants={mapInfoCardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-2 md:mb-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B3C1C8] mr-2 md:mr-3" />
              <h3 className="text-xl font-bold text-black">Office Location</h3>
            </div>
            <p className="leading-relaxed">
              123 Main Street, Suite 100<br />
              Fresno, CA 93710<br />
              United States
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl p-4 md:p-6 shadow-lg"
            variants={mapInfoCardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-2 md:mb-4">
              <Navigation className="w-5 h-5 md:w-6 md:h-6 text-[#B3C1C8] mr-2 md:mr-3" />
              <h3 className="text-xl font-bold text-black">Get Directions</h3>
            </div>
            <p className="mb-4">
              Easy to find and accessible from major highways and local roads.
            </p>
            <a 
              href="https://maps.google.com?q=123+Main+Street+Suite+100,+Fresno,+CA+93710,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#B3C1C8] text-white px-4 py-2 rounded-lg hover:bg-[#656162] transition-colors duration-300"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Open in Maps
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default ContactMap; 