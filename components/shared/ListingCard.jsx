import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";

export default function ListingCard({ listing }) {
  return <article className={`listing-card ${listing.image ? "has-mls-photo" : ""}`}>
    <Link href={`/property/${encodeURIComponent(listing.id)}`} className="listing-image verified-listing-visual">
      {listing.image && <Image src={listing.image} alt={`${listing.address} listing`} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />}
      <span className="listing-status">{listing.status}</span>
      <span className="listing-arrow" aria-hidden="true"><ArrowUpRight size={18}/></span>
      {!listing.image && <>
        <div className="listing-monogram"><Building2/><small>{listing.type}</small><b>{String(listing.id).slice(-2).padStart(2,"0")}</b></div>
        <div className="listing-address-art">{listing.address.split(",")[0]}</div>
      </>}
      <div className="image-shade"/>
    </Link>
    <div className="listing-body">
      <div className="listing-topline"><p className="listing-price">{listing.price}</p><small>{listing.image ? "MLS MEDIA" : "VERIFIED SOURCE"}</small></div>
      <h3>{listing.title}</h3>
      <p className="listing-address"><MapPin size={15}/>{listing.address}</p>
      <div className="listing-meta"><span>{listing.beds}</span><span>{listing.baths}</span><span>{listing.sqft}</span></div>
      <div className="listing-links">
        <Link href={`/property/${encodeURIComponent(listing.id)}`} className="text-link">Details <ArrowUpRight size={16}/></Link>
        {listing.sourceUrl && <a href={listing.sourceUrl} target="_blank" rel="noreferrer" className="source-link">Live MLS source ↗</a>}
      </div>
    </div>
  </article>;
}
