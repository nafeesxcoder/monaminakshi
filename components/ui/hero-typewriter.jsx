"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroTypewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Buy", "Sell", "Invest"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="inline-flex items-center">
      {/* <span className="text-white/90">Helping You </span> */}
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-gray font-bold mx-3 text-3xl lg:text-4xl xl:text-5xl"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
      {/* <span className="text-white/90"> with Confidence</span> */}
    </div>
  );
};
