import { site } from "@/lib/site";
import { priceGroups } from "@/lib/prices";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    image: "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2486117932.jpg?t=1585685551",
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "18:00" },
    ],
    priceRange: "€€",
    medicalSpecialty: "Podiatry",
    founder: { "@type": "Person", name: site.owner },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Podologische Leistungen",
      itemListElement: priceGroups.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.name },
          priceCurrency: "EUR",
          description: [item.duration, item.detail, item.price].filter(Boolean).join(" · "),
        })),
      ),
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
