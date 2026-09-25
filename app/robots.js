const site=process.env.NEXT_PUBLIC_SITE_URL || "https://monaminakshi.vercel.app";
export default function robots(){return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${site}/sitemap.xml`,host:site}}
