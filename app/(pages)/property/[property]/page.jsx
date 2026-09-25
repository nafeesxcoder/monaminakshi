import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, ExternalLink, MapPin, Phone } from "lucide-react";
import { agent } from "@/lib/data";
import { getListing } from "@/lib/mls";

export default async function Property({ params }) {
  const item = await getListing(decodeURIComponent(params.property));
  if (!item) notFound();
  return <section className="detail">
    <Link href="/property" className="back"><ArrowLeft size={17}/> All listings</Link>
    <div className="detail-grid">
      <div className={`detail-image ${item.image ? "mls-detail-photo" : "verified-detail-visual"}`}>
        {item.image ? <Image src={item.image} alt={`${item.address} listing`} fill priority sizes="(max-width: 900px) 100vw, 62vw" /> : <><Building2/><small>{item.type} · CENTRAL CALIFORNIA</small><b>{item.address.split(",")[0]}</b><span>Approved property media will appear here automatically after the authorized MLS connection is enabled.</span></>}
      </div>
      <div className="detail-copy">
        <p className="eyebrow dark">{item.status}</p><h1>{item.title}</h1><p className="detail-price">{item.price}</p>
        <p className="listing-address"><MapPin size={17}/>{item.address}</p>
        <div className="listing-meta"><span>{item.beds}</span><span>{item.baths}</span><span>{item.sqft}</span></div>
        {item.sourceUrl && <a className="button source-button" href={item.sourceUrl} target="_blank" rel="noreferrer"><ExternalLink size={17}/> Verify live price &amp; status</a>}
        <hr/><h2>Interested in this property?</h2><p>Connect directly with Mona for current availability, complete listing details and a private showing.</p>
        <a className="button black" href={`tel:${agent.phoneHref}`}><Phone size={18}/> Call {agent.phone}</a>
        <p className="data-note">Information is deemed reliable but not guaranteed; buyer to verify all details.</p>
      </div>
    </div>
  </section>;
}
