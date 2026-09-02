import type { Metadata } from "next";
import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medizinische Fußbehandlung",
  description:
    "Medizinische Fußbehandlung ohne Rezept: Hornhaut, Schwielen, Hühneraugen, eingewachsene Nägel und Nagelkorrektur in Hamburg.",
};

const items = [
  "Anamnese / Aufnahme der patientenspezifischen Daten",
  "Schneiden und Feilen der Nägel",
  "Schmerzfreies Entfernen von eingewachsenen Nägeln",
  "Bei Erfordernis Oberflächenbetäubung",
  "Schonende Entfernung der Nagelhaut",
  "Entfernen der Hornhaut per Fräsertechnik",
  "Entfernen von Schwielen",
  "Beseitigung von Hühneraugen",
  "Nagelkorrektur",
  "Nagelkorrektur mit Spange",
  "Kräuterfußbad",
];

export default function MedizinischeFussbehandlungPage() {
  return (
    <>
      <PageHero
        kicker="Podologie"
        title="Medizinische Fußbehandlung"
        text="Bei strapazierten oder erkrankten Füßen ist eine rechtzeitige Behandlung wichtig, um eine schnelle Gesundung des Fußes zu erzielen."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <div className="prose-kunte">
          <p>
            Auf Grund meiner erworbenen Qualifikation als Heilpraktikerin für Podologie gelten ab dem 1. März 2017
            die Abrechnungsvergütungen nach der Gebührenordnung für Ärzte (GOÄ) sowie deren Gebührenverzeichnis
            für Heilpraktiker (GebüH). Zur Behandlung benötigen Sie keine ärztliche Verordnung, da die Diagnosestellung
            eigenständig vorgenommen wird. Es besteht die Möglichkeit der Erstattung von Behandlungskosten durch
            private Krankenkassen.
          </p>
          <p>
            Die aktuelle Preisliste für podologische Behandlungen finden Sie unter{" "}
            <Link href="/leistungen" className="text-navy underline decoration-gold underline-offset-4">
              Leistungen
            </Link>
            . Sie liegt ebenfalls in der Praxis aus.
          </p>
          <h2>Behandlungen</h2>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Sie wünschen eine individuelle Beratung? Rufen Sie einfach an unter{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
