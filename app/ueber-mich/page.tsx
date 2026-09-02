import type { Metadata } from "next";
import Image from "next/image";
import { CaptionImage } from "@/components/CaptionImage";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ich für Sie",
  description:
    "Podologin Elke Kunte über Berufung, Behandlungskonzept und den Austausch mit der Praxis ihrer Tochter in Florida.",
};

export default function UeberMichPage() {
  return (
    <>
      <PageHero kicker="Berufung" title="Ich für Sie" text="Ich bin Elke Kunte. Mein Beruf ist meine Berufung." />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src="/images/elke-kunte.jpg" alt="Podologin Elke Kunte" fill className="object-cover object-[center_18%]" sizes="40vw" />
          </div>
          <div className="prose-kunte">
            <p>
              Mein Leben war Herausforderung und Spannung und immer wieder sehr viel Fleiß, ein ewiger Lernprozess. Wenn
              ich eine Tür zu neuen Erkenntnissen geöffnet hatte, wusste ich, welche Tür ich als Nächstes öffnen werde. Ich
              wollte Zusammenhänge unseres Lebens begreifen und veränderbare Gegebenheiten in eine positive Richtung
              bringen.
            </p>
            <p>
              Alle Veränderungen und deren Auswirkungen auf die Fußgesundheit haben mich schon immer fasziniert.
              Ich wollte wissen: „Warum ist das so und wo kommt das her?“ Einfach den Dingen auf den Grund gehen.
            </p>
            <p>
              Der menschliche Körper ist für mich ein großes Wunder der Natur. Entstandene Erkrankungen des Fußes lassen
              sich nur dann richtig behandeln, wenn man die Ursachen und deren Entstehung erklären kann. Hier liegt mein
              Behandlungsansatz. Mein beruflicher Werdegang hat die Voraussetzungen geschaffen, um mein Wissen und Können
              im Interesse Ihrer Fußgesundheit anzuwenden.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/mykose-befall.jpg" alt="Mykosebefall an drei Nägeln" caption="Mykosebefall an drei Nägeln, Mykose akribisch entfernt" />
          <CaptionImage src="/images/mykose-prothetik.jpg" alt="Prothetikversorgung" caption="Versorgung der vormals befallenen Nägel mit einer dauerhaften Prothetik, bis der gesunde Nagel nachgewachsen ist." />
          <CaptionImage src="/images/mykose-ergebnis.jpg" alt="Gesamtbild nach Behandlung" caption="Optisches Gesamtbild nach Mykosebehandlung und Prothetikversorgung" />
        </div>

        <div className="prose-kunte mx-auto mt-14 max-w-3xl">
          <h2>Zwei Kontinente, eine Arbeitsweise</h2>
          <p>
            In meiner Fuß-Praxis wird die Arbeitsweise der Podologie aus zwei Kontinenten umgesetzt. Meine Tochter legte
            2005 in Deutschland ihre Podologen-Prüfung ab. Sie und ich wurden von den gleichen Dozenten ausgebildet.
          </p>
          <p>
            Ihr Lebensweg führte sie zunächst nach Großbritannien, wo sie weitere zwei Jahre Podologie an der
            Universität Durham studierte. Seit 2010 lebt sie mit ihrer Familie in Florida/USA und betreibt eine Praxis für
            Fußgesundheit mit drei Mitarbeitern.
          </p>
          <p>
            Ihre Erfahrungen und ihr Können haben meine Tätigkeit sehr bereichert. Die neuesten Methoden auf dem Gebiet
            der Podologie konnte ich über den „Großen Teich“ mit nach Deutschland bringen. Diese Erfahrungen fließen in
            meine tägliche Arbeitsweise und die meiner Mitarbeiter ein.
          </p>
          <p>
            Jeder Besuch der Familie in Florida ist für mich gleichzeitig eine Bildungsreise zur Verbesserung meiner
            Arbeitsweise als Podologin, denn in Florida legt man das ganze Jahr großen Wert auf gesunde, gepflegte Füße.
          </p>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
