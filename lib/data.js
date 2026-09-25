export const agent = {
  name: "Mona Meenakshi", title: "REALTOR® · Central California", license: "DRE #02097374",
  brokerage: "Realty ONE Group Action", brokerageUrl: "https://joinrogaction.com/",
  phone: "(209) 817-7693", phoneHref: "+12098177693", email: "homes@realtorMona.com",
  office: "7498 N Remington Ave, Suite 101, Fresno, CA 93711",
  instagram: "https://www.instagram.com/realtor_monameenakshi",
  tiktok: "https://www.tiktok.com/@monameenakshi",
  crmLogin: "https://crm.realtormona.com",
  realtorProfile: "https://www.realtor.com/realestateagents/629683683f488df5cf3ce430",
  googleBusiness: "https://www.google.com/maps/search/?api=1&query=Realty+One+Group+Action+Mona+Meenakshi+Realtor+7498+N+Remington+Ave+Fresno+CA+93711",
  mls: {
    myListings: "https://fresnomls.rapmls.com/scripts/mgrqispi.dll?APPNAME=Fresno&PRGNAME=MLSLogin&ARGUMENT=oryUCHn8fAev2G3cFrCrYpbpb8LQRTBMy1aSe%2BTQ7qk%3D&KeyRid=1&MLS_Origin=FRES",
    propertySearch: "https://fresnomls.rapmls.com/scripts/mgrqispi.dll?APPNAME=Fresno&PRGNAME=MLSLogin&ARGUMENT=ZAUIHjxP%2BHkH3TVrZX9H9CgF8deLYe%2BFbxfmG57WK2w%3D&KeyRid=1&MLS_Origin=FRES&HM=Y",
    openHouses: "https://fresnomls.rapmls.com/scripts/mgrqispi.dll?APPNAME=Fresno&PRGNAME=MLSLogin&ARGUMENT=DxViItduBnryzM5Gc42uc7dQXi0gB9WapQXhVEoU3g0%3D&KeyRid=1&MLS_Origin=FRES&HM=Y",
    featured: "https://fresnomls.rapmls.com/scripts/mgrqispi.dll?APPNAME=Fresno&PRGNAME=MLSLogin&ARGUMENT=uN%2FQ2joIS2GlNU3SUMju0i%2B%2FBC4uWTlvdrS5YEF6GHY%3D&KeyRid=1&MLS_Origin=FRES&isFeaturedListings=Y&HM=Y",
  },
};

// Verified against Mona's public Realtor.com inventory on Sep 24, 2026.
// Duplicate syndication entries are intentionally de-duplicated.
const realtorProfile = "https://www.realtor.com/realestateagents/629683683f488df5cf3ce430";
export const listings = [
  { id: 1, status: "Active · MLS #643656", price: "$2,950,000", title: "Bryan Avenue Development Land", address: "3600 N Bryan Ave, Fresno, CA 93723", beds: "17.54 acres", baths: "Land", sqft: "764,042 sq ft lot", type: "Land", image: "https://ap.rdcpix.com/7f9de55e1ee92527c7b5c54e1673ad01l-m551793392rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/3600-N-Bryan-Ave_Fresno_CA_93723_M91510-07030" },
  { id: 2, status: "Active listing", price: "$610,000", title: "Riverstone Residence", address: "411 S Atlantica Dr, Madera, CA 93636", beds: "4 beds", baths: "3.5 baths", sqft: "3,036 sq ft", type: "Residential", image: "https://ap.rdcpix.com/dfbd418f13bd370c49ddf5ee90b36f3dl-m1580103537rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/411-Atlantica-Dr-S_Madera_CA_93636_M95466-27652" },
  { id: 3, status: "Active listing", price: "$405,000", title: "Northhill Street Home", address: "3004 Northhill St, Selma, CA 93662", beds: "3 beds", baths: "2 baths", sqft: "1,132 sq ft", type: "Residential", sourceUrl: realtorProfile },
  { id: 4, status: "Active listing", price: "$515,000", title: "Celeste Avenue Home", address: "4712 W Celeste Ave, Fresno, CA 93722", beds: "4 beds", baths: "3 baths", sqft: "2,468 sq ft", type: "Residential", image: "https://ap.rdcpix.com/18babefa29c51f5c1739767eefb87952l-m3698330031rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/4712-W-Celeste-Ave_Fresno_CA_93722_M19324-64200" },
  { id: 5, status: "Active listing", price: "$640,000", title: "Boulder Drive Residence", address: "153 S Boulder Dr, Madera, CA 93636", beds: "5 beds", baths: "3 baths", sqft: "3,240 sq ft", type: "Residential", image: "https://ap.rdcpix.com/13ec8345e0b481b8c3161ec3c4f55da4l-m2436351653rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/153-Boulder-Dr-S_Madera_CA_93636_M92391-46721" },
  { id: 6, status: "Active listing", price: "$480,000", title: "Huffman Avenue Home", address: "6552 E Huffman Ave, Fresno, CA 93727", beds: "3 beds", baths: "2 baths", sqft: "1,793 sq ft", type: "Residential", image: "https://ap.rdcpix.com/d16b5f8603d12df43b0905923d480874l-m3765100677rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/6552-E-Huffman-Ave_Fresno_CA_93727_M99346-14867" },
  { id: 7, status: "Active listing", price: "$625,000", title: "Northdale Avenue Residence", address: "6294 W Northdale Ave, Fresno, CA 93723", beds: "4 beds", baths: "3 baths", sqft: "2,664 sq ft", type: "Residential", image: "https://ap.rdcpix.com/2925382c63af579b2e129bc709f17dacl-m2538191342rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/6294-W-Northdale-Ave_Fresno_CA_93723_M94695-40781" },
  { id: 8, status: "Active listing", price: "$1,550,000", title: "Clinton Avenue Development Parcel", address: "3256 W Clinton Ave, Fresno, CA 93722", beds: "7.83 acres", baths: "Land", sqft: "Development opportunity", type: "Land", image: "https://ap.rdcpix.com/f6f7ada3c51a49e054ce8ea9687f9238l-m2709449379rd-w960_h720.webp", sourceUrl: "https://www.realtor.com/realestateandhomes-detail/3256-W-Clinton-Ave_Fresno_CA_93722_M24262-64504" },
  { id: 9, status: "Active listing", price: "$945,000", title: "Clinton Avenue Land", address: "3228 W Clinton Ave, Fresno, CA 93722", beds: "4.77 acres", baths: "Land", sqft: "Development opportunity", type: "Land", sourceUrl: realtorProfile },
];
export const serviceAreas = ["Fresno", "Clovis", "Madera", "Kerman", "Chowchilla", "Oakhurst"];
