import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt / Termine",
  description:
    "Terminvereinbarung bei Podologie Elke Kunte, Lindenstraße 29, 20099 Hamburg. Telefon 040 380 760 77.",
};

export default function KontaktPage() {
  const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${site.geo.lng - 0.006}%2C${site.geo.lat - 0.003}%2C${site.geo.lng + 0.006}%2C${site.geo.lat + 0.003}&layer=mapnik&marker=${site.geo.lat}%2C${site.geo.lng}`;

  return (
    <>
      <PageHero
        kicker="Lindenstraße 29 · 20099 Hamburg"
        title="Kontakt / Termine"
        text="Telefonische Terminvereinbarung: Montag bis Donnerstag, 10:00 bis 14:00 Uhr. Außerhalb dieser Zeit bitten wir um etwas Geduld. In dringenden Fällen steht der Anrufbeantworter bereit. Wir rufen Sie gern zurück."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="surface rounded-3xl p-6 md:p-8">
            <p className="serif text-3xl text-navy">{site.legalName}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Inhaberin: {site.owner}
              <br />
              {site.street}
              <br />
              {site.zip} {site.city}
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between gap-4 border-b border-line py-2">
                <dt>Telefon</dt>
                <dd>
                  <a className="text-navy" href={site.phoneHref}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-2">
                <dt>Telefax</dt>
                <dd>{site.faxDisplay}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line py-2">
                <dt>Mobil</dt>
                <dd>
                  <a className="text-navy" href={site.mobileHref}>
                    {site.mobileDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-2">
                <dt>E-Mail</dt>
                <dd>
                  <a className="text-navy" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm font-medium text-navy">Bitte die Telefonnummer nicht vergessen. Vielen Dank!</p>
          </div>

          <div className="surface mt-6 rounded-3xl p-6 md:p-8">
            <h2 className="serif text-2xl text-navy">Öffnungszeiten</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-line py-2">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Terminvergabe {site.appointmentHours}. Außerhalb dieser Zeiten steht Ihnen ein Anrufbeantworter zur
              Verfügung. Wir rufen Sie am nächsten Arbeitstag zurück.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8">
        <h2 className="serif text-3xl text-navy">Ihr Weg zur Praxis</h2>
        <div className="mt-5 overflow-hidden rounded-3xl border border-line">
          <iframe
            title="Karte zur Praxis Elke Kunte"
            src={osmSrc}
            className="h-[380px] w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-sm text-ink-soft">
          <a
            className="underline underline-offset-4"
            href={`https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=17/${site.geo.lat}/${site.geo.lng}`}
            target="_blank"
            rel="noreferrer"
          >
            Größere Karte auf OpenStreetMap
          </a>
          {" · "}
          <a
            className="underline underline-offset-4"
            href={`https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`}
            target="_blank"
            rel="noreferrer"
          >
            In Google Maps öffnen
          </a>
        </p>
      </section>
    </>
  );
}
