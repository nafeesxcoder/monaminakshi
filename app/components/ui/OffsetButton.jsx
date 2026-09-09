'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function OffsetButton({
  href,
  buttonText = 'Contact Us',
  width = 'w-28',
  height = 'h-16',
}) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setIsClicked(false)
    }, 1000)
  }

  const buttonContent = (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        {/* Second Layer (Background/Shadow Layer) */}
        <motion.div
          className={`absolute ${width} ${height} bg-gradient-to-r from-SecondaryRed/80 to-PrimaryBlue/80 rounded-full shadow-lg`}
          animate={{
            x: isClicked ? 0 : 0,
            y: isClicked ? 0 : 0,
            scale: isClicked ? 1.02 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration: 0.6,
          }}
        />

        {/* First Layer (Main Button) */}
        <motion.button
          className={`relative ${width} ${height} bg-gradient-to-r from-SecondaryRed to-PrimaryBlue text-white font-semibold text-md rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
          onClick={handleClick}
          animate={{
            x: isClicked ? 0 : -8,
            y: isClicked ? 0 : -8,
            scale: isClicked ? 1.02 : 1,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
            duration: 0.6,
          }}
        >
          {/* Animated background effect during merge */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-PrimaryBlue/80 to-SecondaryRed/80'
            initial={{ opacity: 0 }}
            animate={{
              opacity: isClicked ? [0, 1, 0] : 0,
            }}
            transition={{
              duration: 3,
              times: [0, 0.5, 1],
            }}
          />

          {/* Shimmer effect during animation */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12'
            animate={{
              x: isClicked ? ['-100%', '200%'] : '-100%',
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: isClicked ? 0.3 : 0,
            }}
          />

          {/* Button Text */}
          <motion.span
            className='relative z-10 flex items-center justify-center h-full font-sans tracking-wide'
            animate={{
              scale: isClicked ? [1, 1.1, 1] : 1,
              color: isClicked ? ['#ffffff', '#fbbf24', '#ffffff'] : '#ffffff',
            }}
            transition={{
              duration: 3,
              times: [0, 0.5, 1],
            }}
          >
            {buttonText}
          </motion.span>

          {/* Pulse effect during merge */}
          <motion.div
            className='absolute inset-0 border-2 border-white/50 rounded-full'
            animate={{
              scale: isClicked ? [1, 1.2, 1] : 1,
              opacity: isClicked ? [0, 0.8, 0] : 0,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
              delay: isClicked ? 0.2 : 0,
            }}
          />
        </motion.button>

        {/* Merge completion indicator */}
        <motion.div
          className='absolute inset-0 flex items-center justify-center pointer-events-none'
          animate={{
            opacity: isClicked ? [0, 0, 1, 0] : 0,
            scale: isClicked ? [0.8, 0.8, 1.2, 0.8] : 0.8,
          }}
          transition={{
            duration: 3,
            times: [0, 0.6, 0.8, 1],
          }}
        >
          <div className='w-4 h-4 bg-DarkRed rounded-full shadow-lg' />
        </motion.div>

        {/* Particle effects during merge */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-PrimaryBlue rounded-full'
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: isClicked ? [0, -20, 0] : 0,
              opacity: isClicked ? [0, 1, 0] : 0,
              scale: isClicked ? [0, 1, 0] : 0,
            }}
            transition={{
              duration: 2,
              delay: isClicked ? i * 0.1 : 0,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Status indicator */}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className='inline-block'>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}
