/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MeetSection } from "@/components/shared/HeadingSection"
import { motion } from "framer-motion"
import { heroVariants, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animation"
import { propertyTypes, testimonials, featuredProperties, buySellValueCards } from "@/lib/data"
import FeaturedPropertiesSection from "@/components/shared/FeaturedPropertiesSection"
import PropertyTypeSection from "@/components/shared/PropertyTypeSection"
import BuySellValueSection from "@/components/shared/BuySellValueSection"

import { ChevronLeft, ChevronRight, Share, Star, MapPin, Users, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { HeroTypewriter } from "@/components/ui/hero-typewriter"



export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        {/* hero section */}
        <motion.section
          className="container mx-auto relative md:min-h-[510px] xl:min-h-[638px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroVariants}
        >

          {/* Absolute positioned images on right side */}
          <motion.div
            className="absolute z-10 right-0 top-0 h-[536px] w-[602px] xl:h-[659px] xl:w-[752px] hidden lg:block"
            variants={fadeInRight}
          >
            <div className="w-full h-full">
              <Image
                src="/HeroSection.png"
                alt="Happy family"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="relative z-10">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-8 xl:px-0 grid grid-cols-1 lg:grid-cols-[60%_40%]">
              <div className="flex flex-col justify-center py-16 mt-12 md:mt-14 lg:mt-16 2xl:mt-32">
                {/* Left Side content area */}
                <motion.div className="space-y-4" variants={fadeInUp}>
                  <motion.div className="space-y-2" variants={fadeInUp}>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                      Your Local Fresno Realtor®
                      <br />
                      Helping You
                      <HeroTypewriter />
                      <br />
                      with Confidence
                    </h1>

                    <p className="text-white/80 text-lg lg:text-xl font-light max-w-lg leading-relaxed">
                      From family homes to investment properties I help you find the perfect fit with expert advice and
                      personal attention.
                    </p>
                  </motion.div>

                  {/* Search Form */}
                  <motion.div className="max-w-xl" variants={fadeInUp}>
                    {/* Tabs */}
                    <div className="flex gap-2 text-xs">
                      <motion.button
                        className="px-5 py-2 text-white font-medium rounded-[2px] bg-[#B3C1C8]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Sell
                      </motion.button>
                      <motion.button
                        className="px-5 py-2 text-white font-medium rounded-[2px] bg-[#B3C1C8]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Buy
                      </motion.button>
                      <motion.button
                        className="px-5 py-2 text-white font-medium rounded-[2px] bg-[#B3C1C8]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Rent
                      </motion.button>
                    </div>

                    {/* Input Fields */}
                    <div className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-2">
                        <Input
                          placeholder="Enter Keyword here ..."
                          className="border-0 border-r border-gray-600 rounded-none shadow-none !focus:ring-0 !focus:border-none !active:border-none !focus:outline-none py-4 px-6 text-gray-600 placeholder:text-gray-400"
                        />
                        <Select>
                          <SelectTrigger className="border-0 border-r border-gray-600 shadow-none rounded-none focus:ring-0 py-4 px-6 text-gray-600">
                            <SelectValue placeholder="Select Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fresno">Fresno</SelectItem>
                            <SelectItem value="clovis">Clovis</SelectItem>
                            <SelectItem value="madera">Madera</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex justify-end">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button className="bg-[linear-gradient(270deg,_#B3C1C8_0%,_#656162_100%)] text-white py-4 px-8 rounded-sm font-medium">
                              Search
                            </Button>
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom Text */}
                      <div className="py-2">
                        <p className="text-white text-sm sm:text-base">I have more than 40+ apartments, place & plot.</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="hidden md:block">
                {/* right side ye side only space create karna ka lya ha right side pa content wala section phir left side pa hu ga */}
              </div>
            </div>
          </div>

          {/* yeha pa bottom pa two images add karni ha left side pa and right side pa */}
          <motion.div
            className="absolute -bottom-[120px] left-0 w-[300px] h-[200px] sm:w-[403px] sm:h-[288px] xl:w-[504px] xl:h-[360px] overflow-hidden"
            variants={fadeInLeft}
          >
            <Image
              src="/HeroBuildingLeftBottom.png"
              alt="Agent photo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-20 xl:-bottom-28 right-0 w-[320px] h-[264px] xl:w-[400px] xl:h-[330px] hidden sm:block overflow-hidden"
            variants={fadeInRight}
          >
            <Image
              src="/HeroDots.png"
              alt="Company logo"
              width={128}
              height={80}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.section>

        {/* About Us Section */}
        <motion.section
          className="py-6 md:py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroVariants}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image Collage */}
            <motion.div className="relative w-full" variants={fadeInLeft}>
              {/* Twitter Icon */}
              <motion.div
                className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {/* Top Left - Family Photo */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/gallery/1.png"
                    alt="Happy family with realtor"
                    width={200}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Top Right - Living Room */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/gallery/2.png"
                    alt="Modern living room interior"
                    width={200}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom Left - House Exterior */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/gallery/3.png"
                    alt="Beautiful brick house exterior"
                    width={200}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom Right - Reviews Card */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-2">
                    <Star className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">80+</div>
                    <div className="text-sm text-gray-600">Positive Reviews</div>
                  </div>
                  <div className="flex -space-x-2 mt-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-white"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div className="space-y-8 w-full" variants={fadeInRight}>
              <motion.div variants={fadeInUp}>
                <MeetSection showParagraph={true} alignment="left" name="Monameenakshi" title="Meet" description="Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, Monameenakshi's expertise shines as she navigates the intricate Northern California Real Estate Market. Recognized as one of America's Top 100 Agents, Monameenakshi brings an unmatched level of dedication and expertise to every transaction." />
              </motion.div>

              {/* Statistics */}
              <motion.div className="flex flex-col sm:flex-row gap-6" variants={fadeInUp}>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center border-4 border-teal-500">
                    <Users className="w-10 h-10 text-teal-500" />
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-4xl font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      27+
                    </motion.div>
                    <div className="text-white text-xl">Satisfied People</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center border-4 border-teal-500">
                    <CheckCircle className="w-10 h-10 text-teal-500" />
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-4xl font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      120+
                    </motion.div>
                    <div className="text-white text-xl">Verified Property</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <div
                className="flex"
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contactus"
                    prefetch={true}
                    aria-label="Contact us for real estate services"
                  >
                    <Button className="rounded-[4px] bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white px-6 py-7 text-lg">
                      GET IN TOUCH
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Properties Section */}
        <FeaturedPropertiesSection />

        {/* Property Type Section */}
        <PropertyTypeSection />

        {/* Buy/Sell/Value Section */}
        <BuySellValueSection />

        {/* Agent Profile Section */}
        <motion.section
          className="py-8 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroVariants}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute bottom-10 -left-10 w-[403px] h-[288px] xl:w-[504px] xl:h-[360px] overflow-hidden"
            variants={fadeInLeft}
          >
            <Image
              src="/HeroBuildingLeftBottom.png"
              alt="Agent photo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-10 -right-10 w-[403px] h-[288px] xl:w-[504px] xl:h-[360px] overflow-hidden"
            variants={fadeInRight}
          >
            <Image
              src="/HeroBuildingLeftBottom.png"
              alt="Agent photo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
            {/* Header */}
            <motion.div
              className="text-center md:mb-12 mb-8 relative"
              variants={fadeInUp}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={fadeInUp}
              >
                <img
                  src="/icon/OurAgentstext.svg"
                  alt="Categories"
                  className="w-auto h-full"
                />
              </motion.div>
              <div className="relative z-10">
                {/* <p className="text-lg text-gray-600 mb-2">Expertise Is Here</p> */}
                {/* <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Buy or Sell in Fresno?</h2> */}
                <MeetSection showParagraph={false} alignment="center" name="Ready to Buy or Sell in Fresno?" title="Expertise Is Here" />
              </div>
            </motion.div>

            {/* Agent Profile Card */}
            <motion.div
              className="bg-[#B3C1C8] rounded-xl sm:p-12 px-4 py-8 shadow-2xl max-w-4xl mx-auto relative"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Share Button */}
              <motion.button
                className="absolute top-6 right-6 w-12 h-12 bg-lightGray rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors duration-300"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="/icon/share.svg"
                  alt="Share"
                  className="w-10 h-10 fill-current"
                />
              </motion.button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                {/* Profile Image */}
                <motion.div
                  className="w-32 h-32 md:w-72 md:h-72 rounded-3xl overflow-hidden flex-shrink-0"
                  variants={fadeInLeft}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src="/agent-profile.png"
                    alt="Monameenakshi"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Agent Info */}
                <motion.div
                  className="flex-1 text-center md:text-left"
                  variants={fadeInRight}
                >
                  <motion.h3
                    className="text-3xl font-extrabold text-black sm:mb-2"
                    variants={fadeInUp}
                  >
                    Monameenakshi
                  </motion.h3>
                  <motion.p
                    className="text-2xl font-semibold text-gray sm:mb-12 mb-6"
                    variants={fadeInUp}
                  >
                    Realtor
                  </motion.p>

                  <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-6">
                    {/* Listings Button */}
                    <motion.button
                      className="w-fit bg-gradient-to-l from-black to-gray text-white text-xl px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      23 Listing
                    </motion.button>

                    {/* Call Button */}
                    <motion.a
                      href="tel:+15551234567"
                      className="w-fit bg-transparent border-2 border-white text-white text-xl px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300 inline-block text-center"
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      Call: +1 (555) 123-4567
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Buy/Sell Banner Section - Matching the attached image */}
        <motion.section
          className="py-12 bg-[#B3C1C8] relative overflow-hidden"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="absolute bottom-0 right-0 w-auto h-3/5 hidden sm:block"
            variants={fadeInRight}
          >
            <img
              src="/HeroDots.png"
              alt="House"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Top Property Image */}
          <motion.div
            className="absolute top-0 right-0 w-auto h-full hidden lg:block"
            variants={fadeInRight}
          >
            <img
              src="/house3pic.png"
              alt="House"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute z-10 left-0 bottom-0 w-auto h-5/6 hidden sm:block"
            variants={fadeInLeft}
          >
            <img
              src="/female-person.png"
              alt="House"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute z-0 left-0 bottom-0 w-auto h-2/4"
            variants={fadeInLeft}
          >
            <img
              src="/icon/Building.svg"
              alt="House"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] xl:grid-cols-[65%_35%] gap-12 items-start">
              {/* Left Side Content */}
              <motion.div
                className="relative"
                variants={fadeInUp}
              >
                {/* Main content area */}
                <div className="ml-0 sm:ml-40 lg:ml-32 xl:ml-40 sm:space-y-8 space-y-6">
                  {/* Main heading with curved layout */}
                  <motion.div
                    className="relative"
                    variants={fadeInUp}
                  >
                    <div className="flex flex-col items-start space-y-2">
                      {/* Top curved text */}
                      <motion.div
                        className="flex items-center justify-center space-x-0 w-full"
                        variants={fadeInUp}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <span className="text-base sm:text-3xl font-bold text-white transform rotate-12">Looking to Buy?</span>
                        <span className="text-sm sm:text-2xl font-bold text-white transform translate-y-[-5px]">OR</span>
                        <span className="text-base sm:text-3xl font-bold text-white transform -rotate-12">Looking to Sell?</span>
                      </motion.div>
                    </div>
                    {/* Subtitle */}
                    <motion.p
                      className="text-white text-center mt-2 sm:mt-8 sm:text-left text-base px-4 sm:px-0 sm:text-xl font-light sm:leading-relaxed"
                      variants={fadeInUp}
                    >
                      We can help you navigate the journey with our free Guide
                    </motion.p>
                  </motion.div>


                  {/* Contact Information */}
                  <motion.div
                    className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0"
                    variants={fadeInUp}
                  >
                    <motion.div
                      className="flex flex-col items-center sm:items-start text-center sm:text-left"
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <h4 className="text-gray sm:text-lg font-bold sm:w-40 w-full">Our Hot Line:</h4>
                      <Link
                        href="tel:+15551234567"
                        className="text-white sm:text-lg font-light hover:text-gray transition-colors duration-300 cursor-pointer"
                      >
                        +1 (555) 123-4567
                      </Link>
                    </motion.div>
                    <motion.div
                      className="flex flex-col items-center sm:items-start text-center sm:text-left"
                      variants={fadeInUp}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <h4 className="text-gray sm:text-lg font-bold sm:w-40 w-full">Mail Us:</h4>
                      <Link
                        href="mailto:info@monameenakshirealestate.com"
                        className="text-white sm:text-lg font-light hover:text-gray transition-colors duration-300 cursor-pointer"
                      >
                        info@monameenakshirealestate.com
                      </Link>
                    </motion.div>
                  </motion.div>


                  {/* CTA Button */}
                  <motion.div
                    className="pt-4 flex justify-center sm:justify-start"
                    variants={fadeInUp}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Link
                        href="/contactus"
                        prefetch={true}
                        aria-label="Get in touch for real estate consultation"
                      >
                        <Button
                          className="text-white px-6 py-7 text-lg rounded shadow-md"
                          style={{
                            background: 'linear-gradient(270deg, #000 0%, #656162 100%)'
                          }}
                        >
                          GET IN TOUCH
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-8 md:py-16 relative overflow-hidden"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="/HeroBuildingLeftBottom.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-12 relative"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/icon/DesireHomestext.svg"
                  alt="Categories"
                  className="w-auto h-full"
                />
              </div>
              <div className="relative z-10">
                <MeetSection showParagraph={false} alignment="center" name="Clients Are Saying" title="What Our" />
              </div>
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative">
              {/* Navigation Arrows */}
              <motion.button
                onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="absolute sm:left-4 left-0 top-1/2 -translate-y-1/2 sm:w-16 sm:h-16 w-8 h-8 rounded-full bg-[#D9D9D9] shadow-[0_0_20px_0_#FFF] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 z-20"
                variants={fadeInLeft}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <svg className="sm:w-6 sm:h-6 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute sm:right-4 right-0 top-1/2 -translate-y-1/2 sm:w-16 sm:h-16 w-8 h-8 rounded-full bg-[#D9D9D9] shadow-[0_0_20px_0_#FFF] flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 z-20"
                variants={fadeInRight}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <svg className="sm:w-6 sm:h-6 w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Testimonial Card */}
              <motion.div
                className="max-w-4xl mx-auto text-center"
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Picture */}
                <div className="sm:w-40 w-32 sm:h-40 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-white p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Client Info */}
                <div className="mb-4 sm:mb-6 px-8 sm:px-0">
                  <h3 className="sm:text-2xl text-xl font-bold text-white mb-0">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray sm:text-lg">
                    {testimonials[currentTestimonial].subtitle}
                  </p>
                </div>

                {/* Quote */}
                <div className="mb-4 sm:mb-8">
                  <p className="text-white sm:text-xl leading-relaxed max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-16"
              variants={fadeInUp}
            >
              <div className="text-center mb-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/icon/DesireHomestext.svg"
                    alt="Categories"
                    className="w-auto h-full"
                  />
                </div>
                <div className="relative z-10">
                  <h2 className="sm:text-4xl text-2xl lg:text-5xl font-bold text-white">
                    Find Your Desire Dream <br /> Home Today!
                  </h2>
                </div>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Button
                  className="text-white px-7 py-6 text-lg font-normal rounded shadow-md"
                  style={{
                    background: 'linear-gradient(270deg, #000 0%, #656162 100%)'
                  }}
                >
                  GET IN TOUCH
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
