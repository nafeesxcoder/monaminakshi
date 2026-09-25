const site=process.env.NEXT_PUBLIC_SITE_URL || "https://monaminakshi.vercel.app";
export default function sitemap(){return ["","/property","/about","/testimonials","/contactus","/privacy","/terms","/accessibility","/fair-housing"].map((path,i)=>({url:`${site}${path}`,lastModified:new Date(),changeFrequency:i<2?"daily":"monthly",priority:i===0?1:i===1?.9:.7}))}
