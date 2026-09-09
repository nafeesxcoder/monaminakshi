"use client";

export function MeetSection({
    showParagraph = true,
    alignment = "left",
    name = "Monameenakshi",
    title = "Meet",
    description = "Your trusted guide in the dynamic world of real estate. Ranked among the top 1.5% nationwide, Monameenakshi's expertise shines as she navigates the intricate Northern California Real Estate Market. Recognized as one of America's Top 100 Agents, Monameenakshi brings an unmatched level of dedication and expertise to every transaction.",
}) {
    const alignmentClass = alignment === "center" ? "text-center" : "text-left"

    return (
        <div className={`md:space-y-4 space-y-1 ${alignmentClass}`}>
            <h3 className="text-xl text-white/80 font-medium">{title}</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{name}</h2>
            {showParagraph && <p className="text-white text-lg leading-relaxed">{description}</p>}
        </div>
    )
}
