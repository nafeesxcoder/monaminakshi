"use client"

import { motion } from "framer-motion"
import { heroVariants, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animation"
import { MeetSection } from "@/components/shared/HeadingSection"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, MapPin, Bed, Bath, Square, Star } from "lucide-react"
import { useState } from "react"
import FeaturedPropertiesSection from "@/components/shared/FeaturedPropertiesSection"
import PropertyTypeSection from "@/components/shared/PropertyTypeSection"
import BuySellValueSection from "@/components/shared/BuySellValueSection"
import SupportBanner from "@/components/shared/SupportBanner"

export default function PropertyPage() {
    const [selectedPropertyType, setSelectedPropertyType] = useState("")
    const [selectedLocation, setSelectedLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    return (
        <>
            {/* Hero Section */}
            <motion.section
                className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={heroVariants}
            >
                {/* Background Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    variants={fadeInUp}
                >
                    <Image
                        src="/abouthero.png"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 xl:px-0 py-16">
                    <div className="text-center">
                        <motion.div variants={fadeInUp}>
                            <MeetSection
                                showParagraph={true}
                                alignment="center"
                                name="Discover Your Perfect Home"
                                title="Properties"
                                description="Explore our curated collection of premium properties in Fresno and surrounding areas. From cozy apartments to luxury homes, find your dream property with expert guidance."
                            />
                        </motion.div>

                        {/* Search Filters */}
                        <motion.div
                            className="mt-8 max-w-4xl mx-auto"
                            variants={fadeInUp}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {/* Property Type */}
                                    <Select value={selectedPropertyType} onValueChange={setSelectedPropertyType}>
                                        <SelectTrigger className="border-gray-300">
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="apartment">Apartment</SelectItem>
                                            <SelectItem value="house">House</SelectItem>
                                            <SelectItem value="condo">Condo</SelectItem>
                                            <SelectItem value="commercial">Commercial</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    {/* Location */}
                                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                        <SelectTrigger className="border-gray-300">
                                            <SelectValue placeholder="Location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fresno">Fresno</SelectItem>
                                            <SelectItem value="clovis">Clovis</SelectItem>
                                            <SelectItem value="madera">Madera</SelectItem>
                                            <SelectItem value="visalia">Visalia</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    {/* Price Range */}
                                    <Select value={priceRange} onValueChange={setPriceRange}>
                                        <SelectTrigger className="border-gray-300">
                                            <SelectValue placeholder="Price Range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-200000">$0 - $200,000</SelectItem>
                                            <SelectItem value="200000-400000">$200,000 - $400,000</SelectItem>
                                            <SelectItem value="400000-600000">$400,000 - $600,000</SelectItem>
                                            <SelectItem value="600000+">$600,000+</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    {/* Search Button */}
                                    <Button className="bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white hover:bg-gray-800">
                                        <Search className="w-4 h-4 mr-2" />
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Featured Properties Section */}
            <FeaturedPropertiesSection
                showHeader={true}
                showViewAllButton={false}
                className="py-16"
            />

            {/* Property Type Section */}
            <PropertyTypeSection />

            {/* Buy/Sell/Value Section */}
            <BuySellValueSection />

            <SupportBanner />
        </>
    )
}
