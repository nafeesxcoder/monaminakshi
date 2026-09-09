// Property Type data array
export const propertyTypes = [
    { id: 1, name: "Apartments", listings: 4, icon: "/icon/Property1.svg" },
    { id: 2, name: "Commercial", listings: 3, icon: "/icon/Property2.svg" },
    { id: 3, name: "Office", listings: 1, icon: "/icon/Property3.svg" },
    { id: 4, name: "Restaurant", listings: 2, icon: "/icon/Property4.svg" },
    { id: 5, name: "Studio Home", listings: 4, icon: "/icon/Property5.svg" }
]

// Testimonials data array
export const testimonials = [
    {
        image: "/gallery/1.png",
        name: "Fresno, CA",
        subtitle: "First-Time Home Buyer",
        text: "From browsing listings to closing the deal, everything felt easy and transparent. I finally own a home I love, and I couldn't be happier with the service!",
    },
    {
        image: "/gallery/2.png",
        name: "Clovis, CA",
        subtitle: "Dream Home Achieved",
        text: "We purchased our first home with Monameenakshi and couldn't be happier. Her negotiation skills saved us thousands!",
    },
    {
        image: "/gallery/3.png",
        name: "Fresno, CA",
        subtitle: "Stress-Free Buying Experience",
        text: "As first-time buyers, we were nervous. Monameenakshi answered every question and made it easy to find our perfect home.",
    },
    {
        image: "/gallery/4.png",
        name: "Madera, CA",
        subtitle: "Smooth Downsizing",
        text: "Selling and buying at the same time was overwhelming, but Monameenakshi handled everything professionally. Highly recommend!",
    },
    {
        image: "/gallery/5.png",
        name: "Panesar Family – Fresno, CA",
        subtitle: "Investment Property Secured",
        text: "As an investor, I rely on agents who understand numbers. Monameenakshi delivered exactly what I needed for a profitable deal.",
    },
    {
        image: "/gallery/6.png",
        name: "Ranjeet Family – Fresno, CA",
        subtitle: "Relocation Made Simple",
        text: "Moving from out of state was stressful, but Monameenakshi managed every detail and made the process effortless.",
    },
];

// Services/Properties data array with multiple images per property
export const featuredProperties = [
    {
        id: 1,
        type: "For Sale",
        popular: true,
        images: ["/property/1/1.png", "/property/1/2.png", "/property/1/3.png", "/property/1/4.png", "/property/1/5.png", "/property/1/6.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Brand New Clovis Beauty",
        location: "Clovis, CA",
        specs: [
            { key: "beds", label: "Beds", value: 4, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 3, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "2400+", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    },
    {
        id: 2,
        type: "For Sale",
        popular: true,
        images: ["/property/2/sunnyside1.png", "/property/2/sunnyside2.png", "/property/2/sunnyside3.png", "/property/2/sunnyside4.png", "/property/2/sunnyside5.png", "/property/2/sunnyside6.png","/property/2/sunnyside7.png","/property/2/sunnyside8.png","/property/2/sunnyside9.png"],
        price: "$609,000",
        priceType: "",
        category: "Home",
        title: "Sunnyside Home with Pool",
        location: "5986 E Pitt Ave, Fresno, CA",
        specs: [
            { key: "beds", label: "Beds", value: 4, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 3.5, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "2798", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    },
    {
        id: 3,
        type: "For Sale",
        popular: true,
        images: ["/property/3/1.png", "/property/3/2.png", "/property/3/3.png", "/property/3/4.png", "/property/3/5.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Modern Family Home",
        location: "Fresno, CA",
        specs: [
            { key: "beds", label: "Beds", value: 3, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 2, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "1800+", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    },
    {
        id: 4,
        type: "For Sale",
        popular: true,
        images: ["/property/4/1.png", "/property/4/2.png", "/property/4/3.png", "/property/4/4.png", "/property/4/5.png", "/property/4/6.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Northwest Fresno Beauty",
        location: "7118 N Lodi Ave, Fresno, CA 93722",
        specs: [
            { key: "beds", label: "Beds", value: 5, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 3, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "2686", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    },
    {
        id: 5,
        type: "For Sale",
        popular: true,
        images: ["/property/5/1.png", "/property/5/2.png", "/property/5/3.png", "/property/5/4.png", "/property/5/5.png", "/property/5/6.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Dream Home in Cul-de-Sac",
        location: "3017 W Oleander Ave, Fresno, CA 93706",
        specs: [
            { key: "beds", label: "Beds", value: 4, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 3, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "2268", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    },
    {
        id: 6,
        type: "For Sale",
        popular: true,
        images: ["/property/6/1.png", "/property/6/2.png", "/property/6/3.png", "/property/6/4.png", "/property/6/5.png", "/property/6/6.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "North Fresno Spacious Home",
        location: "4959 W Fir Ave, Fresno, CA",
        specs: [
            { key: "beds", label: "Beds", value: 4, icon: "/icon/beg.svg" },
            { key: "baths", label: "Baths", value: 2, icon: "/icon/bath.svg" },
            { key: "sqft", label: "Sqft", value: "2587", icon: "/icon/square.svg" }
        ],
        actionText: "Book Now",
    }
]

// Buy/Sell/Value Section data array
export const buySellValueCards = [
    {
        title: 'Ready to Buy a New Home?',
        description: 'Download our Free Buyer’s Guide to start your journey today.',
    },
    {
        title: 'Thinking of Selling Soon?',
        description: 'Get our Free Seller’s Guide to help you plan every step ahead.',
    },
    {
        title: 'Curious About Your Home’s Value?',
        description: 'Get a Free Home Valuation Report with accurate insights today.',
    },
];

// Detailed Property Data for individual property pages
export const detailedPropertyData = [
    {
        id: 1,
        type: "For Sale",
        popular: true,
        images: ["/property/1/1.png", "/property/1/2.png", "/property/1/3.png", "/property/1/4.png", "/property/1/5.png", "/property/1/6.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Brand New Clovis Beauty",
        location: "Clovis, CA",
        views: "1,542",
        timeAgo: "3 months ago",
        rating: 5,
        reviews: 2,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '17304' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '4' },
            { icon: 'baths.svg', label: 'Baths', value: '3' },
            { icon: 'sqft.svg', label: 'Sqft', value: '2400+' },
            { icon: 'buildyear.svg', label: 'Build Year', value: '2023' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'All Appliances Included',
            'Builder Covering Closing Costs',
            'Central AC',
            'Balcony',
            'Garden',
            'Security System',
            'Pet Friendly',
            'Parking'
        ],
        description: "This stunning 4-bedroom home in Quail Lake offers modern amenities and spacious living areas. Perfect for families looking for comfort and style.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    },
    {
        id: 2,
        type: "For Sale",
        popular: true,
        images: ["/property/2/sunnyside1.png", "/property/2/sunnyside2.png", "/property/2/sunnyside3.png", "/property/2/sunnyside4.png", "/property/2/sunnyside5.png", "/property/2/sunnyside6.png","/property/2/sunnyside7.png","/property/2/sunnyside8.png","/property/2/sunnyside9.png"],
        price: "$609,000",
        priceType: "",
        category: "Home",
        title: "Sunnyside Home with Pool",
        location: "5986 E Pitt Ave, Fresno, CA",
        views: "2,735",
        timeAgo: "2 months ago",
        rating: 5,
        reviews: 3,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '2' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '4' },
            { icon: 'baths.svg', label: 'Baths', value: '3.5' },
            { icon: 'sqft.svg', label: 'Sqft', value: '2798' },
            { icon: 'buildyear.svg', label: 'Build Year', value: '2022' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'Next Gen Suite',
            'Swimming Pool',
            'RV Parking Potential',
            'Tandem Garage',
            'Central AC',
            'Garden',
            'Security System',
            'Pet Friendly',
            'Parking'
        ],
        description: "A house that has it all! This beautiful Sunnyside home features a Next Gen Suite, sparkling pool, RV parking potential with tandem garage, and modern amenities. Perfect for families seeking luxury and comfort.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    },
    {
        id: 3,
        type: "For Sale",
        popular: true,
        images: ["/property/3/1.png", "/property/3/2.png", "/property/3/3.png", "/property/3/4.png", "/property/3/5.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Modern Family Home",
        location: "Fresno, CA",
        views: "1,890",
        timeAgo: "1 month ago",
        rating: 4,
        reviews: 2,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '17306' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '3' },
            { icon: 'baths.svg', label: 'Baths', value: '2' },
            { icon: 'sqft.svg', label: 'Sqft', value: '1800+' },
            { icon: 'buildyear.svg', label: 'Build Year', value: '2023' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'Modern Kitchen',
            'Open Floor Plan',
            'Central AC',
            'Garden',
            'Security System',
            'Furnished',
            'Pet Friendly',
            'Parking'
        ],
        description: "Modern family home with contemporary design and excellent amenities. Perfect for growing families seeking comfort and style in a great neighborhood.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    },
    {
        id: 4,
        type: "For Sale",
        popular: true,
        images: ["/property/4/1.png", "/property/4/2.png", "/property/4/3.png", "/property/4/4.png", "/property/4/5.png", "/property/4/6.png", "/property/4/7.png", "/property/4/8.png", "/property/4/9.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Northwest Fresno Beauty",
        location: "7118 N Lodi Ave, Fresno, CA 93722",
        views: "1,234",
        timeAgo: "Just Listed",
        rating: 5,
        reviews: 0,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '17307' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '5' },
            { icon: 'baths.svg', label: 'Baths', value: '3' },
            { icon: 'sqft.svg', label: 'Sqft', value: '2686' },
            { icon: 'buildyear.svg', label: 'Lot Size', value: '9020' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'Remodeled Kitchen',
            'Spacious Loft',
            'Game Room',
            'Office Space',
            'Media Room',
            'Extra Light Fixtures',
            'Open-Concept Living',
            'Upgraded Patio',
            'Central AC',
            'Garden',
            'Security System',
            'Pet Friendly',
            'Parking'
        ],
        description: "🚨 Just Listed – Northwest Fresno Beauty! Located in a peaceful, sought-after neighborhood close to shopping, dining, golf courses, and quick Highway 99 access. Inside, you'll love the remodeled kitchen with modern finishes, spacious loft perfect for a game room, office, or media room, extra light fixtures throughout for bright, inviting spaces, open-concept living & dining, and upgraded patio areas ideal for entertaining. A perfect blend of style, comfort, and location — plenty of space for the whole family.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    },
    {
        id: 5,
        type: "For Sale",
        popular: true,
        images: ["/property/5/1.png", "/property/5/2.png", "/property/5/3.png", "/property/5/4.png", "/property/5/5.png", "/property/5/6.png", "/property/5/7.png", "/property/5/8.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "Dream Home in Cul-de-Sac",
        location: "3017 W Oleander Ave, Fresno, CA 93706",
        views: "1,567",
        timeAgo: "Just Listed",
        rating: 5,
        reviews: 0,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '17308' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '4' },
            { icon: 'baths.svg', label: 'Baths', value: '3' },
            { icon: 'sqft.svg', label: 'Sqft', value: '2268' },
            { icon: 'buildyear.svg', label: 'Lot Size', value: '13000+' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'Fully Remodeled',
            'Move-in Ready',
            '2-Story Layout',
            'Oversized Lot',
            'RV Parking Potential',
            '3-Car Garage',
            'Plenty of Storage',
            'Stylish Interior',
            'Upgraded Finishes',
            'Central AC',
            'Garden',
            'Security System',
            'Pet Friendly',
            'Parking'
        ],
        description: "🏡 Just Listed! Welcome to your dream home tucked in a peaceful cul-de-sac — fully remodeled and move-in ready! This beautiful property features 4 spacious bedrooms, 3 full bathrooms, 2-story layout with 2,268 sqft of living space, oversized 13,000+ sqft lot with potential RV parking, and 3-car garage with plenty of space for storage and more. The stylish, upgraded interior finishes throughout make this home perfect for hosting or relaxing. Whether you're hosting or relaxing, this home has the space, charm, and upgrades you've been looking for. Contact me for a private showing! Let's make this beautiful home yours.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    },
    {
        id: 6,
        type: "For Sale",
        popular: true,
        images: ["/property/6/1.png", "/property/6/2.png", "/property/6/3.png", "/property/6/4.png", "/property/6/5.png", "/property/6/6.png", "/property/6/7.png", "/property/6/8.png"],
        price: "$Contact",
        priceType: "",
        category: "Home",
        title: "North Fresno Spacious Home",
        location: "4959 W Fir Ave, Fresno, CA",
        views: "1,890",
        timeAgo: "Just Listed",
        rating: 5,
        reviews: 0,
        propertyDetails: [
            { icon: 'id.svg', label: 'ID', value: '17309' },
            { icon: 'type.svg', label: 'Type', value: 'Home' },
            { icon: 'parking.svg', label: 'Parking', value: 'Yes' },
            { icon: 'beds.svg', label: 'Beds', value: '4' },
            { icon: 'baths.svg', label: 'Baths', value: '2' },
            { icon: 'sqft.svg', label: 'Sqft', value: '2587' },
            { icon: 'buildyear.svg', label: 'Lot Size', value: '10538' },
            { icon: 'purpose.svg', label: 'Purpose', value: 'For Sale' }
        ],
        featuresAndAmenities: [
            'Brand New Carpet',
            'Updated Light Fixtures',
            'Spacious Layout',
            'Perfect for Comfort',
            'Perfect for Entertaining',
            'Large Lot',
            'Prime Location',
            'Move-in Ready',
            'Beautifully Maintained',
            'Central AC',
            'Garden',
            'Security System',
            'Pet Friendly',
            'Parking'
        ],
        description: "Just Listed! Located in the heart of North Fresno, this spacious and beautifully maintained home features brand new carpet, updated light fixtures, and a layout perfect for comfort and entertaining. With a large lot and prime location, this one is move-in ready and waiting for you! This 4-bedroom, 2-bathroom home offers 2,587 sqft of living space on a generous 10,538 sqft lot, making it ideal for families who love to entertain and enjoy outdoor living.",
        agent: {
            name: "Monameenakshi",
            phone: "+1 (555) 123-4567",
            whatsapp: "+1 (555) 123-4567",
            image: "/agent-profile.png"
        }
    }
];