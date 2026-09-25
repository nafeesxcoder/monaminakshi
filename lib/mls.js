import { listings as fallbackListings } from "@/lib/data";

const fields = [
  "ListingKey", "ListingId", "StandardStatus", "ListPrice", "PropertyType",
  "PropertySubType", "UnparsedAddress", "City", "StateOrProvince", "PostalCode",
  "BedroomsTotal", "BathroomsTotalInteger", "LivingArea", "LotSizeAcres",
  "ModificationTimestamp", "ListAgentMlsId",
].join(",");

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const text = (value, fallback = "—") => value === null || value === undefined || value === "" ? fallback : String(value);

function normalizeProperty(property, index) {
  const media = Array.isArray(property.Media) ? property.Media : [];
  const primary = media.find((item) => item.Order === 0 || item.PreferredPhotoYN) || media[0];
  const address = [property.UnparsedAddress, property.City, property.StateOrProvince, property.PostalCode].filter(Boolean).join(", ");
  const isLand = /land/i.test(`${property.PropertyType || ""} ${property.PropertySubType || ""}`);
  const acres = property.LotSizeAcres ? `${property.LotSizeAcres} acres` : null;
  return {
    id: text(property.ListingKey || property.ListingId, `mls-${index + 1}`),
    mlsId: text(property.ListingId, "MLS listing"),
    status: `${text(property.StandardStatus, "Active")} · MLS #${text(property.ListingId, "—")}`,
    price: property.ListPrice ? money.format(property.ListPrice) : "Contact Mona",
    title: text(property.PropertySubType || property.PropertyType, isLand ? "Land opportunity" : "Central Valley property"),
    address: text(address, "Central California"),
    beds: isLand ? (acres || "Land") : `${text(property.BedroomsTotal, "—")} beds`,
    baths: isLand ? "Land" : `${text(property.BathroomsTotalInteger, "—")} baths`,
    sqft: property.LivingArea ? `${Number(property.LivingArea).toLocaleString()} sq ft` : (acres || "See live listing"),
    type: text(property.PropertyType, isLand ? "Land" : "Residential"),
    image: primary?.MediaURL || primary?.Uri300 || primary?.UriThumb || null,
    sourceUrl: process.env.MLS_PUBLIC_LISTING_URL
      ? `${process.env.MLS_PUBLIC_LISTING_URL}${encodeURIComponent(property.ListingId || property.ListingKey)}`
      : null,
    updatedAt: property.ModificationTimestamp || null,
  };
}

export async function getListings() {
  const endpoint = process.env.MLS_API_URL;
  const token = process.env.MLS_API_TOKEN;
  const agentId = process.env.MLS_AGENT_ID;
  if (!endpoint || !token || !agentId) return fallbackListings;

  const base = endpoint.replace(/\/$/, "");
  const filter = `ListAgentMlsId eq '${agentId.replace(/'/g, "''")}' and StandardStatus eq 'Active'`;
  const query = new URLSearchParams({
    "$filter": filter,
    "$select": fields,
    "$expand": "Media($select=MediaURL,Uri300,UriThumb,Order,PreferredPhotoYN)",
    "$orderby": "ModificationTimestamp desc",
  });

  try {
    const response = await fetch(`${base}/Property?${query}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
      next: { revalidate: 900, tags: ["mls-listings"] },
    });
    if (!response.ok) throw new Error(`MLS request failed: ${response.status}`);
    const payload = await response.json();
    const rows = Array.isArray(payload.value) ? payload.value : [];
    return rows.length ? rows.map(normalizeProperty) : fallbackListings;
  } catch {
    return fallbackListings;
  }
}

export async function getListing(id) {
  const all = await getListings();
  return all.find((item) => String(item.id) === String(id));
}

export function isMlsConfigured() {
  return Boolean(process.env.MLS_API_URL && process.env.MLS_API_TOKEN && process.env.MLS_AGENT_ID);
}
