"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#B3C1C8] to-[#656162]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center px-6 text-center">
        <motion.h1
          className="font-alex text-white text-6xl sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Monameenakshi
        </motion.h1>

        <motion.div
          className="h-[2px] bg-white/80 mt-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        />

        <motion.p
          className="text-white/90 text-xs sm:text-sm tracking-[0.3em] uppercase mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Real Estate
        </motion.p>
      </div>
    </motion.div>
  );
}
