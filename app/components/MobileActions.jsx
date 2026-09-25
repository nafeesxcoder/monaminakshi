import Link from "next/link";
import { Phone, MessageCircle, Home, CalendarDays } from "lucide-react";
import { agent } from "@/lib/data";
export default function MobileActions(){return <nav className="mobile-actions" aria-label="Quick contact actions"><a href={`tel:${agent.phoneHref}`}><Phone/><span>Call</span></a><a href={`https://wa.me/${agent.phoneHref.replace("+","")}`} target="_blank" rel="noreferrer"><MessageCircle/><span>WhatsApp</span></a><Link href="/property"><Home/><span>Listings</span></Link><Link href="/contactus"><CalendarDays/><span>Consult</span></Link></nav>}
