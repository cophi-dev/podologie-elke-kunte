import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fußreflexzonenmassage",
  description:
    "Fußreflexzonenmassage nach Hanne Marquardt und Hedi Mesafret. 60 Minuten, 90,00 € in der Fachpraxis Elke Kunte, Hamburg.",
};

const einsatz = [
  "Bewegungseinschränkungen und Schmerzzustände in Gelenken und Muskulatur",
  "Erkrankungen der Verdauungsorgane, Harnwege, Atemorgane, Haut",
  "Migräne und andere Arten von Kopfschmerzen",
  "Seelische Spannungszustände",
  "Menstruationsbeschwerden, Schlafstörungen",
  "Unruhezustände und Vitalitätsmangel",
  "Unterstützende Begleitung in allen schwierigen und schmerzlichen Lebensumständen",
];

const wirkung = [
  "Verbesserung der Durchblutung",
  "Verstärkung des Lymphflusses",
  "Verbesserung des Gewebestoffwechsels",
  "Abtransport von Schlackestoffen",
  "Lösen von Muskelverspannungen",
];

export default function MassagenPage() {
  return (
    <>
      <PageHero
        kicker="Wohlgefühl"
        title="Massagen"
        text="Für das Wohlgefühl Ihrer Beine und Füße: Fußreflexzonenmassage nach Hanne Marquardt und Hedi Mesafret. Behandlungspreis 90,00 €, Dauer 60 Minuten."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <div className="surface mb-10 rounded-3xl p-6">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">60 Minuten</p>
          <p className="serif mt-1 text-3xl text-navy">90,00 €</p>
          <p className="mt-2 text-sm text-ink-soft">Fußreflexzonenmassage, schmerzlos</p>
        </div>
        <div className="prose-kunte">
          <p>
            Die Fußreflexzonentherapie am Fuß wirkt ganzheitlich. Sie regt die Selbstheilungsimpulse des Menschen an und
            unterstützt seine Lebenskraft auf allen Ebenen. Wie auf einer Landkarte im Kleinformat lassen sich alle Organe
            und Systeme des Menschen exakt bestimmen und therapieren. Nach dieser Therapie wissen Sie, was es heißt,
            äußerlich und innerlich „guten Boden“ unter den Füßen zu haben.
          </p>
          <h2>Einsatzgebiete</h2>
          <ul>
            {einsatz.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Wirkungsweise</h2>
          <ul>
            {wirkung.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
