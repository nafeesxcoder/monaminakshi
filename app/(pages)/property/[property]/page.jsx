/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { detailedPropertyData } from '@/lib/data'

export default function PropertyPage() {
    const params = useParams()
    const propertyId = parseInt(params.property)

    // Find the property data based on the ID, or use default data if not found
    const propertyData = detailedPropertyData.find(p => p.id === propertyId) || detailedPropertyData[0]

    const images = propertyData.images

    const propertyDetails = propertyData.propertyDetails

    const featuresAndAmenities = propertyData.featuresAndAmenities

    // Latest Listings Data Array
    const latestListings = [
        {
            id: 1,
            image: '/gallery/1.png',
            type: 'For Rent',
            category: 'Studio Home',
            title: 'Double Story House for Rent',
            location: 'New Jersey',
            price: '$13,500',
            priceType: '/yr(Fixed)'
        },
        {
            id: 2,
            image: '/property/feature1.png',
            type: 'For Sale',
            category: 'Commercial',
            title: 'Gorgeous Apartment Building',
            location: 'Claremont,',
            price: '$13,500',
            priceType: '/yr(Fixed)'
        },
        {
            id: 3,
            image: '/property/feature2.png',
            type: 'For Sale',
            category: 'Commercial',
            title: 'Brand New Shopping Mall for buy',
            location: 'New Jersey',
            price: '$1,000,000',
            priceType: '/total(Fixed)'
        },
        {
            id: 4,
            image: '/property/feature3.png',
            type: 'For Rent',
            category: 'House',
            title: 'Double Story House for Rent',
            location: 'New Jersey',
            price: 'On Call',
            priceType: ''
        },
        {
            id: 5,
            image: '/property/feature4.png',
            type: 'For Rent',
            category: 'Villa',
            title: 'Affordable Green Villa House for Rent',
            location: 'New Jersey',
            price: '$30,000',
            priceType: '/total(Negotiable)'
        },
        {
            id: 6,
            image: '/property/feature5.png',
            type: 'For Sale',
            category: 'Villa',
            title: 'Sky Pool Villa House for Sale',
            location: 'Louisiana',
            price: '$1,500',
            priceType: '(Fixed)'
        },
        {
            id: 7,
            image: '/property/feature6.png',
            type: 'For Rent',
            category: 'House',
            title: 'Double Story House for Rent',
            location: 'New Jersey',
            price: '$13,500',
            priceType: '/yr(Fixed)'
        }
    ]

    return (
        <div className="min-h-screen bg-[#F3F6F8]">
            {/* Navigation Breadcrumbs */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 py-8 sm:py-12 mt-16 md:mt-20 lg:mt-24 2xl:mt-32">
                <nav className="text-gray text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold mb-6 sm:mb-12 border-b border-gray pb-4">
                    <span>Home</span>
                    <span className="mx-2">›</span>
                    <span>{propertyData.category}</span>
                    <span className="mx-2">›</span>
                    <span className="text-white">{propertyData.title}</span>
                </nav>

                {/* Property Tags */}
                <div className="flex gap-2 mb-4">
                    <span className="bg-gradient-to-l from-[#B3C1C8] to-[#656162] text-gray-700 px-5 py-2 rounded text-sm font-medium">
                        {propertyData.type}
                    </span>
                    {propertyData.popular && (
                        <span className="bg-gradient-to-l from-black to-[#656162] text-white px-5 py-2 rounded text-sm font-medium">
                            Popular
                        </span>
                    )}
                </div>

                {/* Property Title */}
                <h1 className="text-3xl font-bold text-black mb-2">
                    {propertyData.title}
                </h1>

                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4'>
                    <div className="w-full sm:w-auto">
                        {/* Property Details */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 mb-2 text-gray">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm sm:text-base">{propertyData.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm sm:text-base">{propertyData.timeAgo}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm sm:text-base">Views: {propertyData.views}</span>
                            </div>
                        </div>

                        {/* Reviews on next line */}
                        <div className="flex items-center gap-2 text-gray">
                            <div className="flex">
                                {[...Array(propertyData.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm sm:text-base">({propertyData.reviews}) Reviews</span>
                        </div>
                    </div>
                    <div className='w-full sm:w-auto'>
                        <div className="text-center sm:text-right">
                            <h3 className='text-xl sm:text-2xl font-bold text-black'>{propertyData.price} {propertyData.priceType}</h3>
                        </div>
                    </div>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                    {/* First Column - One Large Image */}
                    <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                        <Image
                            src={images[0]}
                            alt="Sky Pool Villa"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Second Column - Two Rows */}
                    <div className="flex flex-col gap-4">
                        {/* First Row - Full Width Image */}
                        {/* <div className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                                src={images[1]}
                                alt="Bedroom Interior"
                                fill
                                className="object-cover"
                            />
                        </div> */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={images[1]}
                                    alt="Living Room 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={images[2]}
                                    alt="Living Room 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Second Row - Two Columns */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={images[3]}
                                    alt="Living Room 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <Image
                                    src={images[4]}
                                    alt="Living Room 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overview and Contact Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.4fr] gap-6">
                    {/* Overview Section */}
                    <div className="bg-[#B3C1C8] rounded-lg shadow-sm p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Overview</h2>

                        {/* Property Details Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-gray/50 pb-8">
                            {propertyDetails.map((detail, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="bg-white rounded-[4px] w-12 h-12 flex items-center justify-center">
                                        <img
                                            src={`/icon/${detail.icon}`}
                                            alt={detail.label}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-black font-semibold">{detail.label}</p>
                                        <p className="text-gray text-xs">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* About This Listing */}
                        <div className='border-b border-gray/50 py-6 sm:py-8'>
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">About This Listing</h3>
                            <p className="text-gray mb-1 text-sm sm:text-base">
                                {propertyData.description}
                            </p>
                            <p className="text-gray mb-2 text-sm sm:text-base">
                                <strong>Hot Water Gas Appliances:</strong> Quartz, Range Hood, Stainless Steel Appliance(s), Tile, Dishwasher, Disposal, Free-Standing Gas Range, Free-Standing Range, Free-Standing Refrigerator, Gas Appliances.
                            </p>

                            <div className="mb-2">
                                <h4 className="text-base sm:text-lg font-medium text-black mb-1">Interior Qualities</h4>
                                <ul className="list-disc list-inside text-gray space-y-1 text-sm sm:text-base">
                                    <li>Total Main Level Area: 1,339</li>
                                    <li>Total Upper Level Area: 410</li>
                                    <li>Heating/Cooling</li>
                                    <li>Heat Pump and Forced Air</li>
                                    <li>Refrigerant: Heat Pump</li>
                                </ul>
                            </div>

                            <p className="text-gray text-sm sm:text-base">
                                Awaiting your swift move-in! Please get in touch if you have any more inquiries! Additionally, videos are available upon request!
                            </p>
                        </div>

                        {/* Features & Amenities Section */}
                        <div className="border-b border-gray/50 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Features & Amenities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {featuresAndAmenities.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className='w-6 h-6 bg-[#00C194] border-2 border-white rounded-full flex items-center justify-center'>
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Location Section */}
                        <div className="border-b border-gray/50 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Map Location</h3>
                            <div className="relative bg-gray-200 rounded-lg h-48 sm:h-64 mb-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.6040610939907!2d-119.78784668469271!3d36.73206197996271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e26d4f58091%3A0xf082a9e226a9a51!2s2540%20W%20Shaw%20Ln%20Ste%20109%2C%20Fresno%2C%20CA%2092711%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>

                        {/* Property Video Section */}
                        <div className="border-b border-gray/50 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Property Video</h3>
                            <div className="relative bg-gray-200 rounded-lg h-56 sm:h-72 overflow-hidden">
                                <Image
                                    src="/property/house5.png"
                                    alt="Property Video Thumbnail"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-colors">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Walk Score Section */}
                        <div className="border-b border-gray/50 py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Walk Score</h3>
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Score Card */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <div className="text-center">
                                        <h4 className="text-3xl font-bold text-black mb-2">{propertyData.rating} / 5</h4>
                                        <div className="flex justify-center mb-2">
                                            {[...Array(propertyData.rating)].map((_, i) => (
                                                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray">Based on {propertyData.reviews} rating</p>
                                    </div>
                                </div>

                                {/* Rating Breakdown Card */}
                                <div className="bg-white rounded-lg p-6 shadow-sm">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-black font-medium">Quality</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-green-500"></div>
                                                </div>
                                                <span className="text-black font-medium">100%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-black font-medium">Price</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-green-500"></div>
                                                </div>
                                                <span className="text-black font-medium">100%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-black font-medium">Service</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-green-500"></div>
                                                </div>
                                                <span className="text-black font-medium">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Leave Feedback Section */}
                        <div className="py-6 sm:py-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Leave feedback about this</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Write your review *"
                                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Rating Input */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-black font-medium">Quality</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 cursor-pointer hover:text-yellow-500 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-black font-medium">Price</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 cursor-pointer hover:text-yellow-500 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-black font-medium">Service</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 cursor-pointer hover:text-yellow-500 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-start'>
                                    <Link
                                        href="/contactus"
                                        prefetch={true}
                                        aria-label="Contact us for property inquiries"
                                    >
                                        <button type="submit" className="w-fit bg-gradient-to-l from-[#656162] to-[#000000] text-white py-3 px-6 rounded-[4px] transition-colors font-medium">
                                            GET IN TOUCH
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6 h-full'>
                        {/* Contact Listing Owner Section */}
                        <div className="bg-[#B3C1C8] rounded-lg shadow-sm p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-bold text-black mb-6">Contact Listing Owner</h2>

                            {/* Owner Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-24 h-24 border-2 border-light rounded-full flex items-center justify-center">
                                    <img src={propertyData.agent.image} alt={propertyData.agent.name} className="w-full h-full rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black">{propertyData.agent.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="text-sm text-gray">{propertyData.agent.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray">{propertyData.agent.whatsapp}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="flex">
                                            {[...Array(propertyData.rating)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray">({propertyData.reviews}) Reviews</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                                    <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Latest Listings section */}
                        <div className="bg-[#B3C1C8] rounded-lg shadow-sm p-4 sm:p-6 h-full flex flex-col">
                            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Latest Listings</h2>

                            {/* Single Featured Property Card */}
                            <div className="overflow-hidden mb-6">
                                <div className="relative">
                                    <Image
                                        src="/property/house5.png"
                                        alt="Property Video Thumbnail"
                                        width={400}
                                        height={250}
                                        className="w-full h-72 rounded-2xl object-cover"
                                    />
                                    <div className="absolute top-6 left-4">
                                        <span className="bg-gradient-to-l from-[#656162] to-[#000000] text-white py-3 px-6 rounded-[4px] text-sm font-medium">
                                            {latestListings[0].type}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-gray mb-1">{latestListings[0].category}</p>
                                    <h3 className="text-lg font-bold text-black mb-2">{latestListings[0].title}</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-4 h-4 text-gray" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm text-gray">{latestListings[0].location}</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-black">{latestListings[0].price}</span>
                                        <span className="text-sm text-gray">{latestListings[0].priceType}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Vertical List of Properties */}
                            <div className="flex-1 flex flex-col justify-around mb-12">
                                {latestListings.slice(1).map((listing) => (
                                    <div key={listing.id} className="flex flex-col sm:flex-row gap-4">
                                        <div className="relative w-full sm:w-52 h-32 flex-shrink-0">
                                            <Image
                                                src={listing.image}
                                                alt={listing.title}
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg sm:text-xl text-black mb-1">{listing.title}</h4>
                                            <div className="flex items-center gap-2 mb-1">
                                                <svg className="w-3 h-3 text-gray" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm text-gray">{listing.location}</span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-bold text-black">{listing.price}</span>
                                                <span className="text-sm text-gray">{listing.priceType}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
