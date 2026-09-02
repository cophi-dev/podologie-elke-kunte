import type { Metadata } from "next";
import { CaptionImage } from "@/components/CaptionImage";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nagelkorrektur nach Unfall",
  description:
    "Nagelkorrektur nach Unfall: Druckschutz und begleitetes Nachwachsen in der Fachpraxis Elke Kunte, Hamburg.",
};

export default function UnfallPage() {
  return (
    <>
      <PageHero
        kicker="Nachsorge"
        title="Nagelkorrektur nach Unfall"
        text="Völlige Zerstörung des Nagels, kein Schutz auf dem Nagelbett. Dauer-Druckschutz für 6 Monate zur Schmerzlinderung."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <CaptionImage src="/images/unfall-2017.jpg" alt="Erstes Foto nach dem Unfall" caption="27.05.2017 erstes Foto nach dem Unfall" />
          <CaptionImage src="/images/unfall-2018.jpg" alt="Nagel wächst mit podologischer Hilfe" caption="28.11.2018 Nagel wächst nur mit podologischer Hilfe über den distalen Nagelwall." />
          <CaptionImage src="/images/unfall-2019.jpg" alt="Abschluss der Behandlung nach Unfall" caption="06.12.2019 Abschluss der Behandlung. Nagel wächst normal." />
        </div>
      </section>
      <CtaRow />
    </>
  );
}
