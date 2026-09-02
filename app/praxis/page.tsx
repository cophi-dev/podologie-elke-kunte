import type { Metadata } from "next";
import Image from "next/image";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Praxis",
  description:
    "Einblick in die Fachpraxis für medizinische Fußbehandlungen Elke Kunte, Lindenstraße 29, 20099 Hamburg.",
};

const gallery = [
  { src: "/images/praxis-aussen.jpg", alt: "Außenansicht der Praxis an der Lindenstraße" },
  { src: "/images/praxis-eingang.jpg", alt: "Eingangsbereich der Praxis" },
  { src: "/images/praxis-wartebereich.png", alt: "Wartebereich" },
  { src: "/images/praxis-behandlungsraum.png", alt: "Behandlungsraum" },
  { src: "/images/praxis-stuhl.jpg", alt: "Behandlungsstuhl" },
  { src: "/images/praxis-raum-2.jpg", alt: "Weiterer Behandlungsplatz" },
];

export default function PraxisPage() {
  return (
    <>
      <PageHero
        kicker="Lindenstraße 29"
        title="Die Praxis"
        text="Seit 2009 in Hamburg: ein ruhiger, hygienischer Ort für gründliche podologische Arbeit – ohne den üblichen Halbstundentakt."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-deep">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
            </div>
          ))}
        </div>
      </section>
      <CtaRow />
    </>
  );
}
