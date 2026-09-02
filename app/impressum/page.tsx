import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero kicker="Rechtliches" title="Impressum" />
      <section className="legal mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <p>
          {site.legalName}
          <br />
          {site.owner}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: {site.phoneDisplay}
          <br />
          Telefax: {site.faxDisplay}
          <br />
          E-Mail: {site.email}
          <br />
          Internet: www.podologie-elke-kunte.de
        </p>
        <h2>Zuständige Aufsichtsbehörde</h2>
        <p>Landesamt für Gesundheit Hamburg</p>
        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>Podologie ist als Medizinal-Fachberuf von der Umsatzsteuer befreit.</p>
      </section>
    </>
  );
}
