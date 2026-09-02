import type { Metadata } from "next";
import { CaptionImage } from "@/components/CaptionImage";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nagelersatz / Prothetik",
  description:
    "Nagelprothetik mit UV-Lichthärtung nach Pilzbehandlung oder Dysplasie in der Fachpraxis Elke Kunte, Hamburg.",
};

export default function NagelersatzPage() {
  return (
    <>
      <PageHero
        kicker="Prothetik"
        title="Nagelersatz / Prothetik"
        text="Dauerhafter Ersatz der Nagelplatte mittels UV-Lichthärtung – je Nagel 80,00 €, als Richtwert."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <CaptionImage
            src="/images/prothetik-fuenf-zehen.jpg"
            alt="Nagelprothetik auf fünf Zehen"
            caption="Eine in meiner Praxis ausgeführte Nagelprothetik auf fünf Zehen nach erfolgter Pilzbehandlung."
          />
          <CaptionImage
            src="/images/prothetik-dysplasie.jpg"
            alt="Nagelprothetik nach Dysplasie"
            caption="Nagelprothetik nach sogenannter Dysplasie (Fehlbildung)."
          />
          <CaptionImage src="/images/prothetik-vorher.jpg" alt="Ausgangsbefund vor Nagelprothetik" caption="… vorher" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/mykose-befall.jpg" alt="Mykosebefall an drei Nägeln" caption="Mykosebefall an drei Nägeln, Mykose akribisch entfernt" />
          <CaptionImage src="/images/mykose-prothetik.jpg" alt="Prothetikversorgung nach Mykose" caption="Versorgung der vormals befallenen Nägel mit einer dauerhaften Prothetik, bis der gesunde Nagel nachgewachsen ist." />
          <CaptionImage src="/images/mykose-ergebnis.jpg" alt="Gesamtbild nach Mykosebehandlung" caption="Optisches Gesamtbild nach Mykosebehandlung und Prothetikversorgung" />
        </div>
      </section>
      <CtaRow />
    </>
  );
}
