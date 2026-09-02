import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://podologie-elke-kunte.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/leistungen",
    "/behandlungen",
    "/behandlungen/medizinische-fussbehandlung",
    "/behandlungen/nagelpilz",
    "/behandlungen/nagelkorrektur",
    "/behandlungen/nagelersatz",
    "/behandlungen/unfall",
    "/behandlungen/massagen",
    "/ueber-mich",
    "/podologie",
    "/praxis",
    "/konzept",
    "/kontakt",
    "/stellenangebot",
    "/impressum",
    "/datenschutz",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
