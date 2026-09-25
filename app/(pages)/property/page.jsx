import MlsPortal from "@/components/shared/MlsPortal";
import { agent } from "@/lib/data";
export const metadata={title:"Central Valley Property Listings",description:"Explore current homes, land and investment opportunities represented by Mona Meenakshi across Fresno, Madera and the Central Valley.",alternates:{canonical:"/property"}};
export default function Properties(){return <><section className="page-hero"><p className="eyebrow">LIVE MLS INVENTORY</p><h1>Properties across<br/><em>the Central Valley.</em></h1><p>Explore current prices, property photos and availability through Mona&apos;s authorized Fresno MLS connection.</p></section><MlsPortal links={agent.mls}/></>}
