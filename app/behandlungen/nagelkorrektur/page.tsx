import type { Metadata } from "next";
import { CaptionImage } from "@/components/CaptionImage";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nagelkorrektur / Spangentechnik",
  description:
    "Orthonyxie-Spangen bei eingewachsenen und eingerollten Nägeln: Ross-Fraser, Goldstadt und Onyclip in der Fachpraxis Elke Kunte.",
};

export default function NagelkorrekturPage() {
  return (
    <>
      <PageHero
        kicker="Orthonyxie"
        title="Nagelkorrektur / Spangentechnik"
        text="Die Orthonyxiespange kommt zum Einsatz, wenn der Großzehennagel eingewachsen oder eingerollt ist. Bei den anderen Zehen ist diese Korrektur eher selten."
      />
      <section className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        <div className="prose-kunte">
          <h2>Wirkungsweise</h2>
          <p>
            Das Ziel der Behandlung ist, die seitlichen Nagelränder anzuheben, bis der Nagel seine flache, breite Form
            erreicht hat.
          </p>
          <h2>Behandlungszeit</h2>
          <p>
            Je nach Nagelverformung wird die Spange etwa ein Jahr getragen. Dabei muss diese alle vier bis sechs Wochen
            abgenommen, nachgespannt und wieder aufgesetzt werden, da sie mit dem Nagel nach vorn „mitwächst“. Die Spange
            wird so auf dem Nagel befestigt, dass ein Verlieren oder Verrutschen nicht möglich ist.
          </p>
          <h2>Anmerkung</h2>
          <p>
            Sie behindert oder schmerzt nicht. Selbst Sportarten wie Fußball, Handball oder Leichtathletik können trotz
            der Spange ausgeübt werden. Neben der hier geschilderten Methode gibt es weitere Möglichkeiten der
            Nagelkorrektur und verschiedene Techniken und Arten von Spangen. Welche Spange letztendlich bei Ihnen
            Anwendung findet, hängt von der Beschaffenheit des Nagels ab.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
        <h2 className="serif text-3xl text-navy">Spangenarten</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/spange-onyclip.jpg" alt="Onyclip-Spange" caption="Onyclip-Spange zur Korrektur des Nagelbettes" />
          <CaptionImage src="/images/spange-ross-fraser.jpg" alt="Ross-Fraser-Spange" caption="Ross-Fraser-Spange zur dauerhaften Korrektur des Nagelbettes (bei Kassengenehmigung)" />
          <CaptionImage src="/images/spange-goldstadt.jpg" alt="Goldstadt-Spange" caption="Goldstadt-Spange zur sanften Korrektur des Nagelbettes" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <h2 className="serif text-3xl text-navy">Mykosebehandlung</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/mykose-vorher.jpg" alt="Vor der Mykosebehandlung" caption="Vorher …" />
          <CaptionImage src="/images/mykose-nach-prothetik.jpg" alt="Nach Entfernung von Nagelpilzsporen und Prothetik" caption="Nach Entfernung von Nagelpilzsporen und Versorgung mit Nagelprothetik …" />
          <CaptionImage src="/images/mykose-aesthetik.jpg" alt="Ästhetik beider Füße nach Behandlung" caption="Ansprechende Ästhetik beider Füße …" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <h2 className="serif text-3xl text-navy">Orthonyxie-Spangenbehandlung</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/orthonyxie-rechts.jpg" alt="Nach Behandlungsabschluss rechts" caption="Nach Behandlungsabschluss rechts …" />
          <CaptionImage src="/images/orthonyxie-links.jpg" alt="Nach Behandlungsabschluss links" caption="Nach Behandlungsabschluss links …" />
          <CaptionImage src="/images/orthonyxie-vorher-markiert.jpg" alt="Nägel vor Behandlungsbeginn" caption="Der rote Kunststoff zeigt beide Nägel vor Behandlungsbeginn …" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <h2 className="serif text-3xl text-navy">Orthonyxie bei Rollnagel</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/rollnagel-vorher.jpg" alt="Rollnagel vor der Behandlung" caption="Vorher …" />
          <CaptionImage src="/images/rollnagel-waehrend.jpg" alt="Während der Spangenbehandlung" caption="Während der Behandlung …" />
          <CaptionImage src="/images/rollnagel-drittel.jpg" alt="Letztes Drittel der Behandlung" caption="Letztes Drittel der Behandlung …" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/rollnagel-2017.jpg" alt="Extremer Rollnagel 2017" caption="09.08.2017 Befund extremer Rollnagel mit Eigen-Tamponade durch Watte" />
          <CaptionImage src="/images/rollnagel-2018.jpg" alt="Orthonyxie-Spange 2018" caption="18.04.2018 konsequente Orthonyxie-Spangen-Behandlung (Metall)" />
          <CaptionImage src="/images/rollnagel-2019.jpg" alt="Ausgerollte Nägel 2019" caption="18.12.2019 Nägel ausgerollt, Patient beschwerdefrei" />
        </div>
      </section>
      <CtaRow />
    </>
  );
}
