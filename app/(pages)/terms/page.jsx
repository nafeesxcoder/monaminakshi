"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import PageHeader from '@/components/shared/pageHeader'
import SupportBanner from '@/components/shared/SupportBanner'

function page() {
  return (
    <div>
      <PageHeader
        title="Terms of Service & Privacy Policy"
        subtitle="Terms & Policy"
        backgroundImage="/abouthero.png"
      />

      {/* Terms & Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 xl:px-0">
          <div className="space-y-12">
            
            {/* Terms of Service */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                Terms of Service
              </h2>
              
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Welcome to Monameenakshi Real Estate. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">1. Use of Website</h3>
                <p>
                  This website is provided for informational purposes only. The information contained on this website is not intended to constitute legal, financial, or real estate advice. You should consult with a qualified professional before making any real estate decisions.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">2. Property Information</h3>
                <p>
                  All property information provided on this website is subject to change without notice. While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or reliability of any property information.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">3. Intellectual Property</h3>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Monameenakshi Real Estate and is protected by copyright laws.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">4. Limitation of Liability</h3>
                <p>
                  Monameenakshi Real Estate shall not be liable for any damages arising from the use of this website, including but not limited to direct, indirect, incidental, or consequential damages.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                Privacy Policy
              </h2>
              
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">1. Information We Collect</h3>
                <p>
                  We may collect personal information such as your name, email address, phone number, and property preferences when you contact us or use our services.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">2. How We Use Your Information</h3>
                <p>
                  We use your information to provide real estate services, respond to your inquiries, and improve our website and services. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">3. Information Security</h3>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">4. Cookies and Tracking</h3>
                <p>
                  This website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
                </p>
                
                <h3 className="text-xl font-semibold text-black mt-6">5. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                Contact Information
              </h2>
              
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service or Privacy Policy, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Email:</strong> info@monameenakshirealestate.com</p>
                    <p><strong>Address:</strong> Fresno, California</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mt-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SupportBanner />
    </div>
  )
}

export default page 