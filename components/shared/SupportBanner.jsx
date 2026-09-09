"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { supportBannerVariants, bannerBackgroundVariants, bannerContentVariants, bannerTitleVariants, bannerButtonVariants } from "@/lib/animation";

const SupportBanner = () => {
  return (
    <motion.section 
      className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-2xl my-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={supportBannerVariants}
    >
      {/* Blurred Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        variants={bannerBackgroundVariants}
      >
        <Image
          src="/banner-flag.png" // Place your flag image in public/banner-flag.jpg
          alt="Support Banner Background"
          fill
          className="object-cover w-full h-full blur-sm brightness-75"
          priority
        />
      </motion.div>
      
      {/* Overlay Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4"
        variants={bannerContentVariants}
      >
        <motion.h2 
          className="text-white text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg"
          variants={bannerTitleVariants}
        >
          24/7 customer support any time<br className="hidden md:block" />
          of the day or night
        </motion.h2>
        <motion.a
          href="/contactus"
          className="rounded-[4px] bg-[linear-gradient(270deg,_#000_0%,_#656162_100%)] text-white text-lg md:text-xl font-medium px-8 py-3 shadow-lg hover:scale-105 transition-transform"
          variants={bannerButtonVariants}
          whileHover="hover"
        >
          GET IN TOUCH
        </motion.a>
      </motion.div>
      {/* White border effect */}
      {/* <div className="absolute inset-0 border-2 border-white/60 rounded-2xl pointer-events-none" /> */}
    </motion.section>
  );
};

export default SupportBanner; 