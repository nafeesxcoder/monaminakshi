import { NextResponse } from "next/server";
import { getListings, isMlsConfigured } from "@/lib/mls";

export const dynamic = "force-dynamic";

export async function GET() {
  const listings = await getListings();
  return NextResponse.json({
    source: isMlsConfigured() ? "reso-mls" : "verified-fallback",
    refreshSeconds: 900,
    count: listings.length,
    listings,
  });
}
