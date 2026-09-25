import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { agent } from "@/lib/data";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return <><section className="page-hero privacy-hero"><p className="eyebrow">YOUR PRIVACY</p><h1>Privacy,<br/><em>clearly explained.</em></h1><p>How information submitted through Mona Meenakshi&apos;s real estate website is collected, used and protected.</p></section><article className="privacy-content"><Link href="/" className="back"><ArrowLeft size={17}/> Back home</Link><p className="privacy-updated">Last updated: September 24, 2026</p>
    <section><h2>Information we collect</h2><p>We may collect information you voluntarily provide, including your name, email address, phone number, property interests and messages submitted through contact forms, email, phone or WhatsApp.</p></section>
    <section><h2>How information is used</h2><p>Your information is used to respond to inquiries, provide requested real estate services, arrange consultations or property tours, and communicate about opportunities relevant to your request. We do not sell your personal information.</p></section>
    <section><h2>Listings and third-party services</h2><p>Property information may be provided through authorized MLS/IDX services and linked third-party listing platforms. External websites, WhatsApp, social networks, email providers and brokerage systems operate under their own privacy policies.</p></section>
    <section><h2>Cookies and analytics</h2><p>This website may use essential browser storage and privacy-conscious analytics to understand site performance. Additional tracking services, if introduced, should be disclosed and configured according to applicable requirements.</p></section>
    <section><h2>Data choices</h2><p>You may request access, correction or deletion of personal information submitted directly through this website, subject to applicable legal and transaction-record obligations.</p></section>
    <section><h2>Contact</h2><p>For privacy questions, contact <a href={`mailto:${agent.email}`}>{agent.email}</a> or call <a href={`tel:${agent.phoneHref}`}>{agent.phone}</a>.</p></section>
    <p className="privacy-note">This policy describes the website&apos;s general data practices and does not replace brokerage, MLS, transaction or service-specific disclosures that may also apply.</p>
  </article></>;
}
