import React from 'react'
import ContactSection from '@/components/shared/ContactSection'
import ContactMap from '@/components/shared/ContactMap'
import PageHeader from '@/components/shared/pageHeader'

function page() {
  return (
    <div>
      <PageHeader
        title="Reliable. Responsive. Ready 24/7."
        subtitle="Contact Us"
        backgroundImage="/contacthero.png"
      />
      <ContactSection />
      <ContactMap />
    </div>
  )
}

export default page
