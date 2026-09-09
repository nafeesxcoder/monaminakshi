"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { galleryGridVariants, galleryItemVariants, galleryImageVariants } from "@/lib/animation"

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  // "/gallery/7.png",
  // "/gallery/8.png",
  // "/gallery/9.png",
  // "/gallery/10.png",
  // "/gallery/11.png",
  // "/gallery/12.png",
];

const ClientGalleryGrid = () => (
  <div className="w-full max-w-5xl mx-auto px-2 md:px-0 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
    {images.map((src, i) => (
      <motion.div 
        key={i} 
        className="rounded-2xl overflow-hidden bg-[#bcc7cc]"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.05,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ 
          scale: 1.02, 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <Image
          src={src}
          alt={`Client gallery ${i + 1}`}
          width={800}
          height={500}
          className="object-cover w-full h-[300px] md:h-[400px]"
        />
      </motion.div>
    ))}
  </div>
);

export default ClientGalleryGrid; 