"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle, LogIn } from "lucide-react";
import { agent } from "@/lib/data";
const links = [["Home","/"],["Listings","/property"],["About","/about"],["Reviews","/testimonials"],["Contact","/contactus"]];
export default function Navbar() { const [open,setOpen]=useState(false); return <header className="site-header"><div className="nav-wrap">
  <Link href="/" className="brand" aria-label="Mona Meenakshi home"><span className="brand-photo"><Image src="/agent-profile.png" alt="Mona Meenakshi" width={46} height={46}/></span><span><b>Mona Meenakshi</b><small>REAL ESTATE</small></span></Link>
  <nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<a className="mobile-crm" href={agent.crmLogin} target="_blank" rel="noreferrer"><LogIn size={18}/> Agent CRM Login</a><a className="mobile-call" href={`tel:${agent.phoneHref}`}>Call {agent.phone}</a><a className="mobile-call" href={`mailto:${agent.email}`}>{agent.email}</a></nav>
  <div className="nav-actions"><a href={agent.crmLogin} target="_blank" rel="noreferrer" className="nav-crm"><LogIn size={15}/><span>CRM Login</span></a><a href={`mailto:${agent.email}`} className="nav-icon" aria-label={`Email ${agent.name}`}><Mail size={17}/></a><a href={`https://wa.me/${agent.phoneHref.replace("+","")}`} target="_blank" rel="noreferrer" className="nav-icon whatsapp" aria-label={`WhatsApp ${agent.name}`}><MessageCircle size={17}/></a><a href={`tel:${agent.phoneHref}`} className="nav-cta"><Phone size={16}/><span><small>CALL MONA</small>{agent.phone}</span></a></div><button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
</div></header>; }
