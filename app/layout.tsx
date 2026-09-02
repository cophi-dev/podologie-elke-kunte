import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://podologie-elke-kunte.vercel.app"),
  title: {
    default: `${site.name} – ${site.titleSuffix}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Podologie Hamburg",
    "medizinische Fußbehandlung",
    "Podologin Elke Kunte",
    "Nagelpilz Hamburg",
    "eingewachsene Nägel",
    "Nagelspange",
    "Fußpflege medizinisch",
    "Heilpraktikerin Podologie",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} – ${site.titleSuffix}`,
    description: site.description,
    images: [
      {
        url: "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2486117932.jpg?t=1585685551",
        alt: "Podologin Elke Kunte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.titleSuffix}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink pb-16 md:pb-0">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
