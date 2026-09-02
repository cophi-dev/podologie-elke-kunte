import type { Metadata } from "next";
import Image from "next/image";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Was ist Podologie?",
  description:
    "Podologie ist medizinische Fußpflege, Vorsorge und Behandlung. In der Fachpraxis Elke Kunte benötigen Sie kein Rezept.",
};

const methoden = [
  "Nagelbehandlungen",
  "Fachgerechtes Schneiden der Nägel",
  "Entfernung von Clavi (Hühneraugen)",
  "Hyperkeratosebehandlungen (übermäßige Hornhaut oder Schwielen)",
  "Behandlungen von Unguis incarnatus (eingewachsene Nägel)",
  "Onychauxis (verdickte Nägel)",
  "Nagelmykose (Nagelpilz)",
  "Orthonyxie (Spezial-Spangentechnik bei eingewachsenen Nägeln)",
  "Orthosentechnik (Druckentlastung aus Silikon)",
  "Nagelprothetik (künstlicher Nagelersatz)",
  "Pflege und Behandlung von Störungen der Epidermis (oberste Hautschicht)",
];

export default function PodologiePage() {
  return (
    <>
      <PageHero
        kicker="Medizinal-Fachberuf"
        title="Was ist Podologie?"
        text="Schöne Füße … sind nur selten ein Geschenk der Natur."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/images/praxis-stuhl.jpg" alt="Behandlungsraum der Fachpraxis" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="prose-kunte">
            <p>
              Für eine Behandlung in meiner Praxis benötigen Sie kein Rezept, da ich eigenständig Diagnosen und Rezepte
              erstellen darf.
            </p>
            <p>
              Die Behandlungskosten werden durch Sie in der Praxis entrichtet und können durch meine Rechnungslegung bei
              den Krankenkassen an Sie erstattet werden.
            </p>
            <p>
              Die Podologie befasst sich mit der medizinischen Fußpflege, Vorsorge und Behandlung und zählt zu den
              Medizinal-Fachberufen. Den Titel „Podologe“ darf nur führen, wer eine zweijährige oder als gleichwertig
              anerkannte Ausbildung mit anschließender staatlicher Prüfung nachweisen kann.
            </p>
            <p>
              Der ausgebildete Podologe ist in der Lage, Risikopatienten wie Diabetiker, Bluter und Rheumatiker
              fachgerecht zu behandeln. Der Podologe führt selbstständig fußpflegerische Behandlungsmaßnahmen durch und
              erkennt eigenständig krankhafte Veränderungen am Fuß, die ärztliche Behandlung erfordern. Er gilt als
              Mittler zwischen Patient, Arzt, Orthopädieschuhmacher und Krankengymnast.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="serif text-3xl text-navy">Behandlungsmethoden</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {methoden.map((item) => (
              <li key={item} className="surface rounded-2xl px-4 py-3 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
