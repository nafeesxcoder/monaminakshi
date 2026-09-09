"use client"

import React, { useState } from "react";
import { motion } from "framer-motion"
import { MapPin, Phone, Share2, Mail, Instagram, Send } from "lucide-react";
import { IconBrandTiktok } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { contactSectionVariants, contactContentVariants, contactTitleVariants, contactTextVariants, contactCardVariants, contactFormVariants, formFieldVariants, submitButtonVariants } from "@/lib/animation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comments: ''
  });

  // Contact info cards data
  const contactCards = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Main Street, Suite 100, Fresno, CA 93710",
      url: "https://maps.app.goo.gl/99erTxgpXHDvSfCM8"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      url: "tel:5551234567"
    }
  ];

  // Social media links data
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/realtor_monameenakshi", hoverColor: "hover:text-pink-600" },
    { icon: IconBrandTiktok, href: "https://www.tiktok.com/@monameenakshi", hoverColor: "hover:text-red-600" },
    { icon: Mail, href: "mailto:info@monameenakshirealestate.com", hoverColor: "hover:text-blue-600" }
  ];

  // Form fields data
  const formFields = [
    { name: "name", type: "text", label: "Name *", placeholder: "Your name" },
    { name: "phone", type: "tel", label: "Phone *", placeholder: "Your phone number" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', comments: '' });
  };

  return (
    <motion.section 
      className="py-6 md:py-8"
      variants={contactSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          {/* Left: Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={contactContentVariants}
          >
            <motion.div 
              className="space-y-4"
              variants={contactContentVariants}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black"
                variants={contactTitleVariants}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-xl text-black"
                variants={contactTextVariants}
              >
                Ready to find your perfect home? Let&apos;s connect and make your real estate dreams a reality.
              </motion.p>
            </motion.div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.a
                    key={index}
                    href={card.url}
                    target={card.title === "Location" ? "_blank" : "_self"}
                    rel={card.title === "Location" ? "noopener noreferrer" : ""}
                    className="flex items-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    variants={contactCardVariants}
                    whileHover="hover"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#B3C1C8] mr-6">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-gray" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs md:text-sm font-semibold text-gray mb-1">{card.title}</div>
                      <div className="md:text-lg font-bold text-gray">{card.content}</div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Media Card */}
              <motion.div 
                className="flex items-center bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={contactCardVariants}
                whileHover="hover"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#B3C1C8] mr-6">
                  <Share2 className="w-6 h-6 md:w-8 md:h-8 text-gray" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray mb-3">Follow Us On</div>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`text-gray ${social.hoverColor} transition-colors duration-300`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            className="bg-white rounded-xl p-4 md:p-8 shadow-lg"
            variants={contactFormVariants}
          >
            <motion.div 
              className="space-y-2 md:space-y-4 mb-4 md:mb-8"
              variants={contactContentVariants}
            >
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-black"
                variants={contactTitleVariants}
              >
                Quick Contact
              </motion.h2>
              <motion.p 
                className="md:text-lg text-gray"
                variants={contactTextVariants}
              >
                Send us a message and we&apos;ll get back to you as soon as possible.
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.map((field, index) => (
                  <motion.div 
                    key={index}
                    variants={formFieldVariants}
                  >
                    <label className="block text-gray font-semibold mb-1 md:mb-2" htmlFor={field.name}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-light/40 rounded-lg border border-gray p-2 md:p-3 md:text-lg focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Comments Field */}
              <motion.div
                variants={formFieldVariants}
              >
                <label className="block text-gray font-semibold mb-2" htmlFor="comments">
                  Comments *
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={6}
                  value={formData.comments}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-light/40 rounded-lg border border-gray p-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#B3C1C8] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                className="flex justify-center"
                variants={submitButtonVariants}
                whileHover="hover"
              >
                <Button
                  type="submit"
                  className="bg-[#0000003D] text-white px-7 py-6 text-lg font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection; 