"use client";

import { useState } from "react";
import { ArrowUpRight, Building2, Home, MapPinned, Search } from "lucide-react";

const views = [
  { key: "featured", label: "Mona's Listings", icon: Building2 },
  { key: "propertySearch", label: "Search All Homes", icon: Search },
  { key: "openHouses", label: "Open Houses", icon: Home },
  { key: "myListings", label: "Agent Listings", icon: MapPinned },
];

export default function MlsPortal({ links }) {
  const [active, setActive] = useState("featured");
  const current = links[active];

  return <section className="mls-portal" aria-labelledby="mls-heading">
    <div className="mls-portal-head">
      <div>
        <p className="eyebrow">OFFICIAL FRESNO MLS</p>
        <h2 id="mls-heading">Live listings.<br/><em>Always current.</em></h2>
        <p>Search Mona&apos;s active inventory, property photos, current prices and open houses directly from the authorized Fresno MLS. Updates made in MLS appear here automatically.</p>
      </div>
      <div className="mls-verified"><span/><b>MLS connection active</b><small>Live data supplied by Rapattoni MLS</small></div>
    </div>
    <div className="mls-tabs" role="tablist" aria-label="MLS listing views">
      {views.map(({ key, label, icon: Icon }) => <button key={key} type="button" role="tab" aria-selected={active === key} className={active === key ? "active" : ""} onClick={() => setActive(key)}><Icon size={17}/>{label}</button>)}
    </div>
    <div className="mls-frame-shell">
      <div className="mls-frame-top"><div><span className="live-dot active"/><b>{views.find((view) => view.key === active)?.label}</b></div><a href={current} target="_blank" rel="noreferrer">Open full-screen <ArrowUpRight size={16}/></a></div>
      <iframe key={active} className="mls-frame" src={current} title={`Official Fresno MLS — ${views.find((view) => view.key === active)?.label}`} loading="eager" referrerPolicy="strict-origin-when-cross-origin"/>
      <noscript><a href={current}>Open the official Fresno MLS search</a></noscript>
    </div>
    <p className="mls-disclaimer">Information is deemed reliable but not guaranteed and is subject to change. Listing data is displayed through Mona Meenakshi&apos;s authorized Fresno MLS public access service.</p>
  </section>;
}
