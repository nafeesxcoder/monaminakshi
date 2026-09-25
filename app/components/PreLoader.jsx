"use client";
import { useEffect, useState } from "react";

export default function Preloader(){
  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    const seen=sessionStorage.getItem("mona-intro-seen");
    if(seen){setVisible(false);return;}
    const timer=setTimeout(()=>{sessionStorage.setItem("mona-intro-seen","1");setVisible(false)},1350);
    return()=>clearTimeout(timer);
  },[]);
  if(!visible)return null;
  return <div className="site-preloader" role="status" aria-label="Loading Mona Meenakshi Real Estate"><div className="preloader-mark"><span>MM</span></div><div className="preloader-copy"><b>Mona Meenakshi</b><small>REAL ESTATE · CENTRAL VALLEY</small><i/></div></div>;
}
