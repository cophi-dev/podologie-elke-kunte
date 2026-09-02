import type { Metadata } from "next";
import { CaptionImage } from "@/components/CaptionImage";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nagelpilzentfernung",
  description:
    "Behandlung von Nagelpilz (Onychomykose) in der Fachpraxis Elke Kunte, Hamburg – Therapie in der Praxis und Nachsorge durch den Patienten.",
};

export default function NagelpilzPage() {
  return (
    <>
      <PageHero
        kicker="Onychomykose"
        title="Nagelpilzentfernung"
        text="Nagelpilz ist mehr als nur ein harmloser Schönheitsfehler. Es ist eine lästige und ansteckende Infektion."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="prose-kunte max-w-2xl">
            <p>
              An diesem Gesundheitsproblem leiden mehr als 20 % der Erwachsenen. Ursache dafür sind meist Fadenpilze,
              aber auch Hefe- oder Schimmelpilze. Diese Infektionen können ebenfalls Ursache für weitere Erkrankungen
              sein.
            </p>
            <p>
              Die mit den Pilzsporen befallenen Patienten können Jahre daran leiden. Des Weiteren wird die Nagelsubstanz
              der jeweils anliegenden Zehen infiziert, das Keratin löst sich auf.
            </p>
            <p>
              Mit einer mehrtägigen Therapie in meiner Praxis und entsprechender Nachsorge durch den Patienten selbst
              kann eine Gesundung des erkrankten Fußnagels erreicht werden.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <CaptionImage src="/images/nagelpilz-befund.png" alt="Nagelpilz bei Befundaufnahme" caption="Nagelpilz bei Befundaufnahme" />
            <CaptionImage src="/images/nagelpilz-ergebnis.jpg" alt="Ergebnis nach vier Monaten Behandlung" caption="Ergebnis nach vier Monaten Behandlung" />
          </div>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
