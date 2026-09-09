"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./PreLoader";
import Footer from "@/components/shared/footer";
import Navbar from './navbar'

function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show the preloader the very first time this browser tab
    // opens the site in this session. Once shown, it won't show again
    // for the rest of the session, even after navigating between pages
    // or a full page refresh.
    const alreadyVisited = sessionStorage.getItem("siteVisited");

    if (alreadyVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("siteVisited", "true");
      setLoading(false);
    }, 3000); // Preloader display duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default ClientLayout;
