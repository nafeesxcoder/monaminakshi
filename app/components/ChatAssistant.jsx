"use client";
import { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { agent } from "@/lib/data";

const replies = {
  "I want to buy": "Wonderful. Mona can help you define a budget, choose the right neighborhoods and arrange private tours. Would you like to message her on WhatsApp?",
  "I want to sell": "Mona can prepare a pricing and positioning plan for your property. Share your address privately with her on WhatsApp to begin.",
  "Show me listings": "You can open the Listings page for current featured opportunities. Availability changes, so Mona can confirm the latest status directly.",
};

export default function ChatAssistant(){
  const [open,setOpen]=useState(false); const [messages,setMessages]=useState([{from:"bot",text:"Hi, I’m Mona’s website assistant. How can I help with your Central Valley real estate plans?"}]); const [value,setValue]=useState("");
  const answer=(text)=>{if(!text.trim())return;const response=replies[text]||"Thanks for sharing. For a precise answer, Mona can respond personally by phone, email or WhatsApp.";setMessages(m=>[...m,{from:"user",text},{from:"bot",text:response}]);setValue("")};
  return <div className="chat-wrap"><button className="chat-launch" onClick={()=>setOpen(!open)} aria-label="Open Mona's website assistant"><span className="chat-pulse"/><MessageCircle/><b>Ask Mona</b></button>{open&&<section className="chat-panel" aria-label="Mona website assistant"><header><span><Bot/><span><b>Mona&apos;s Assistant</b><small>Typically replies instantly</small></span></span><button onClick={()=>setOpen(false)} aria-label="Close chat"><X/></button></header><div className="chat-messages">{messages.map((m,i)=><p key={i} className={m.from}>{m.text}</p>)}</div><div className="chat-chips">{Object.keys(replies).map(x=><button key={x} onClick={()=>answer(x)}>{x}</button>)}</div><form onSubmit={e=>{e.preventDefault();answer(value)}}><input value={value} onChange={e=>setValue(e.target.value)} placeholder="Type your question…" aria-label="Chat message"/><button aria-label="Send message"><Send/></button></form><a className="chat-whatsapp" href={`https://wa.me/${agent.phoneHref.replace("+","")}?text=Hi%20Mona%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20about%20real%20estate.`} target="_blank" rel="noreferrer">Continue on WhatsApp</a></section>}</div>
}
