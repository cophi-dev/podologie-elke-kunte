import type { Metadata } from "next";
import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";
import { priceDisclaimer, priceGroups } from "@/lib/prices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Preisliste der Fachpraxis für medizinische Fußbehandlungen Elke Kunte in Hamburg: Erstbehandlung, Komplexbehandlung, Mykose, Spangen, Prothetik und Massagen.",
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        kicker="Honorare"
        title="Leistungen & Preise"
        text="Alle Honorare stehen direkt auf dieser Seite. Die Preise sind Richtwerte und werden mit jedem Patienten individuell nach Krankheitsbild besprochen. Eine aktuelle Preisliste liegt zusätzlich in der Praxis aus."
      />

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="surface rounded-3xl p-6 md:p-8">
          <p className="text-sm leading-relaxed text-ink-soft">
            Aufgrund erhöhter Hygieneanforderungen wurden die Preise ab 2020/21 angepasst. Auf Grund der
            Qualifikation als Heilpraktikerin für Podologie gelten Abrechnungsvergütungen nach der Gebührenordnung
            für Ärzte (GOÄ) sowie dem Gebührenverzeichnis für Heilpraktiker (GebüH). Zur Behandlung benötigen Sie
            keine ärztliche Verordnung. Private Krankenkassen können Behandlungskosten erstatten.
          </p>
          <p className="mt-3 text-sm font-medium text-navy">{priceDisclaimer}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {priceGroups.map((group) => (
            <article key={group.id} id={group.id} className="surface rounded-3xl p-6 md:p-7">
              <h2 className="serif text-2xl text-navy">{group.title}</h2>
              {group.intro ? <p className="mt-2 text-sm leading-relaxed text-ink-soft">{group.intro}</p> : null}
              <ul className="mt-5 divide-y divide-line">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div>
                      <p className="font-medium text-ink">{item.name}</p>
                      {item.detail ? <p className="mt-1 text-sm text-ink-soft">{item.detail}</p> : null}
                      {item.duration ? (
                        <p className="mt-1 text-[0.7rem] tracking-[0.16em] uppercase text-gold">{item.duration}</p>
                      ) : null}
                    </div>
                    <p className="shrink-0 serif text-xl text-navy">{item.price}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-ink-soft">
          Sie wünschen eine individuelle Beratung? Rufen Sie einfach an unter{" "}
          <a className="text-navy underline decoration-gold underline-offset-4" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-4 text-center">
          <Link href="/konzept" className="text-sm text-navy underline underline-offset-4">
            Warum dieses Behandlungskonzept?
          </Link>
        </p>
      </section>
      <CtaRow title="Preis und Aufwand persönlich klären" />
    </>
  );
}
