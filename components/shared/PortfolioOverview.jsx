import { ArrowUpRight, Building2, Home, Map, ShieldCheck } from "lucide-react";
import Link from "next/link";

const numericPrice = (price) => Number(String(price).replace(/[^0-9]/g, "")) || 0;
const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2, style: "currency", currency: "USD" });

export default function PortfolioOverview({ listings }) {
  const residential = listings.filter((item) => !/land/i.test(item.type)).length;
  const land = listings.length - residential;
  const prices = listings.map((item) => numericPrice(item.price)).filter(Boolean);
  const low = prices.length ? Math.min(...prices) : 0;
  const high = prices.length ? Math.max(...prices) : 0;
  const cities = [...new Set(listings.map((item) => item.address.split(",")[1]?.trim()).filter(Boolean))];
  return <section className="portfolio-overview">
    <div className="overview-intro"><p className="eyebrow">INVENTORY OVERVIEW</p><h2>A clearer view of<br/><em>what&apos;s available.</em></h2><p>From family homes to development land, Mona&apos;s portfolio spans distinct opportunities across the Central Valley. Every property is reviewed against its live source before you take the next step.</p><Link href="/property" className="text-link">Explore full inventory <ArrowUpRight/></Link></div>
    <div className="overview-metrics">
      <article><span><Building2/></span><small>ACTIVE OPPORTUNITIES</small><b>{String(listings.length).padStart(2,"0")}</b><p>Current unique listings shown</p></article>
      <article><span><Home/></span><small>PORTFOLIO MIX</small><b>{residential} / {land}</b><p>Residential / land</p></article>
      <article><span><Map/></span><small>PRICE RANGE</small><b>{low ? compact.format(low) : "—"}–{high ? compact.format(high) : "—"}</b><p>Across listed opportunities</p></article>
      <article><span><ShieldCheck/></span><small>MARKET COVERAGE</small><b>{String(cities.length).padStart(2,"0")}</b><p>{cities.slice(0,3).join(" · ") || "Central Valley"}</p></article>
    </div>
  </section>;
}
