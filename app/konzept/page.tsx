import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Warum ein neues Konzept?",
  description:
    "Warum Podologin Elke Kunte 2017 die Kassenzulassung zurückgab und auf Zeit, Hygiene und Qualität setzt.",
};

export default function KonzeptPage() {
  return (
    <>
      <PageHero
        kicker="Qualität vor Pauschale"
        title="Warum ein neues Konzept?"
        text="Mir ist wichtig, dass meine Patienten verstehen, warum ich mein Behandlungskonzept neu ausgerichtet habe."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <div className="prose-kunte">
          <p>
            Seit 2009 betreibe ich meine Praxis für Podologie in der Lindenstraße 29 in Hamburg. Bis Februar 2017 hatte
            ich, wie alle Podologen, eine Kassenzulassung. Diese habe ich im März 2017 zurückgegeben.
          </p>
          <p>
            Seit 2009 behandelte ich sukzessive Patienten mit extremen Fußproblemen, die einer besonderen Behandlung
            bedurften, da sie schon jahrelang Schmerzen oder Komplikationen an den Füßen hatten. Hier ist die übliche
            Behandlungszeit von 30 bis 40 Minuten absolut nicht ausreichend.
          </p>
          <p>
            Mein Anspruch besteht darin, dass ich mir für diese Patienten die Zeit und den Behandlungsplatz nehme, die es
            braucht, um alle Patienten akribisch und intensiv zu behandeln. Dafür ist auch eine exzellente Hygiene
            notwendig. Denn ohne Zeit, Akribie und die erforderliche Hygiene lassen sich Behandlungserfolge nicht wie
            gewünscht erzielen. Darum ist es keine Seltenheit, dass eine Erstbehandlung über zwei Stunden dauern kann.
          </p>
          <p>
            Leider würdigen die Verbände der Krankenkassen mein Engagement nicht mit der entsprechenden Vergütung meiner
            Leistungen im Interesse meiner Patienten. Eine ordentliche Hygiene und Behandlung ist gemäß meinem Anspruch so
            nicht aufrechtzuerhalten.
          </p>
          <p>
            In der Vergangenheit habe ich Kassenpatienten und Privatpatienten quersubventioniert. Dieses Verfahren hat im
            Endeffekt dazu geführt, dass ich für mein Engagement für Sie als Patient einen unternehmerischen Verlust
            hinnehmen musste, obwohl ich 12 Stunden täglich am Patienten gearbeitet habe.
          </p>
          <p>
            Leider vergüten die Krankenkassen keine Arbeitsqualität. Der Einsatz wird lediglich pauschal vergütet, egal
            wie hoch der Behandlungsaufwand ist. Aus diesem Grunde habe ich mich schweren Herzens und meiner
            Professionalität folgend entschlossen, meine Kassenzulassung zurückzugeben. Seitdem beschäftige ich
            ausschließlich von mir ausgebildete Podologen, die mit mir gemeinsam für das Wohl der Patientenfüße das
            Richtige tun.
          </p>
          <p>
            Als letzter Hinweis sei mir gestattet, auch auf die soziale Arbeitsweise meiner Praxis zu verweisen. Ein
            kleiner Patientenstamm wird durch mich und meine Mitarbeiter aufgrund der jahrelangen Praxisbindung oder
            wegen schwerwiegender Fußprobleme und eines geringen Einkommens kostenfrei behandelt. Ich hoffe auf Ihr
            Verständnis dafür, dass alle Veränderungen in der Praxistätigkeit eine Anpassung der Behandlungspreise
            erforderlich gemacht haben.
          </p>
          <p>
            Die angegebenen Behandlungspreise sind nur Richtwerte, denn jeder Patient wird bei uns individuell behandelt,
            dementsprechend wird auch der Behandlungspreis gestaltet. Es gibt kein Problem, über das man nicht bei
            gegenseitigem Verständnis reden kann.
          </p>
        </div>
      </section>
      <CtaRow />
    </>
  );
}
