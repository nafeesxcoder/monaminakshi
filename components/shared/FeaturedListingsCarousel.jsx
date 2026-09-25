"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import ListingCard from "@/components/shared/ListingCard";

export default function FeaturedListingsCarousel({ listings }) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxIndex = Math.max(0, listings.length - visible);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 720 ? 1 : window.innerWidth < 1060 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => setIndex((current) => Math.min(current, maxIndex)), [maxIndex]);
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = window.setInterval(() => setIndex((current) => current >= maxIndex ? 0 : current + 1), 10000);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const pages = useMemo(() => Array.from({ length: maxIndex + 1 }), [maxIndex]);
  const move = (direction) => setIndex((current) => direction === "next" ? (current >= maxIndex ? 0 : current + 1) : (current <= 0 ? maxIndex : current - 1));

  return <div className="featured-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
    <div className="carousel-topline">
      <span><MapPin size={15}/> Mona&apos;s current Central Valley opportunities</span>
      <div className="carousel-controls">
        <button type="button" onClick={() => move("prev")} aria-label="Previous listings"><ArrowLeft/></button>
        <button type="button" onClick={() => move("next")} aria-label="Next listings"><ArrowRight/></button>
      </div>
    </div>
    <div className="carousel-viewport">
      <div className="carousel-track" style={{ "--slide-index": index, "--visible-cards": visible }}>
        {listings.map((listing) => <div className="carousel-slide" key={listing.id}><ListingCard listing={listing}/></div>)}
      </div>
    </div>
    <div className="carousel-footer">
      <div className="carousel-dots" aria-label="Carousel position">{pages.map((_, dot) => <button key={dot} className={dot === index ? "active" : ""} onClick={() => setIndex(dot)} aria-label={`Show listing group ${dot + 1}`}/>)}</div>
      <span>{String(index + 1).padStart(2,"0")} <i/> {String(maxIndex + 1).padStart(2,"0")} · AUTO 10S</span>
    </div>
  </div>;
}
