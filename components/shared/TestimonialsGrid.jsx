"use client"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
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
  // {
  //   image: "/testimonials/7.png",
  //   name: "Anna Martinez – Clovis, CA",
  //   subtitle: "Closed in Just 2 Weeks!",
  //   text: "I was on a tight timeline and Monameenakshi worked tirelessly to make it happen. Amazing dedication!",
  // },
  // {
  //   image: "/testimonials/8.png",
  //   name: "David Kim – Fresno, CA",
  //   subtitle: "Trusted Advisor for Life",
  //   text: "Monameenakshi is more than a Realtor—she's a true partner who cares about her clients' goals. I wouldn't work with anyone else.",
  // },
];

const TestimonialsGrid = () => (
  <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-10">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
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
        <TestimonialCard {...t} />
      </motion.div>
    ))}
  </div>
);

export default TestimonialsGrid; 