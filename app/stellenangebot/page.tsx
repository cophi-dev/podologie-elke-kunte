import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stellenangebot",
  description: "Podologe/in per sofort in der Fachpraxis Elke Kunte, Hamburg, gesucht.",
};

export default function StellenangebotPage() {
  return (
    <>
      <PageHero
        kicker="Team"
        title="Podologe/in per sofort dringend gesucht!"
        text="Ohne den typischen Zeit- und Arbeitsdruck – dafür mit gründlicher Behandlungszeit."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <div className="prose-kunte">
          <p>
            Sie oder er sollte entsprechende Berufserfahrung vorweisen können und einen qualifizierten und zugleich
            sensiblen Umgang am Patienten für selbstverständlich halten. Wichtig ist ein solides berufliches Grundwissen.
          </p>
          <p>
            Bei der Einarbeitung in spezielle Behandlungsmethoden bin ich gern behilflich. Diese Ergänzung zu Ihren
            bereits vorhandenen Fähigkeiten wird durch eine interne Praxisschulung in verständlicher und lockerer Weise
            vermittelt.
          </p>
          <p>
            Die Tätigkeit am Patienten erfolgt ohne den typischen Zeit- und Arbeitsdruck, da der in podologischen Praxen
            maximal übliche Halbstundentakt hier nicht zur Anwendung kommt. Für meine Patienten halte ich eine längere und
            somit gründlichere Behandlungszeit für angemessen. Sowohl das Bedürfnis der Patienten nach fachgerechter
            Behandlung als auch die physische Belastbarkeit des ausführenden Podologen stehen dabei im Einklang.
          </p>
          <p>
            Durch Ihre fachlich kompetente Arbeit wird eine entsprechende Vergütungshöhe erreicht, welche Sie
            zufriedenstellen wird.
          </p>
          <p>
            Telefon: {site.phoneDisplay}
            <br />
            Telefax: {site.faxDisplay}
            <br />
            E-Mail: {site.email}
          </p>
        </div>
      </section>
      <CtaRow title="Bewerbung direkt per Anruf oder Mail" />
    </>
  );
}
