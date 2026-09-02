import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-deep text-[#f4efe6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold-soft">Podologie</p>
          <p className="serif mt-1 text-3xl">Elke Kunte</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d8d0c4]">
            {site.legalName}. Heilkunde auf dem Gebiet der Podologie – eigenständige Diagnosen,
            individuelle Behandlungskonzepte, ohne Rezept.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium tracking-wide">Praxis</p>
          <p className="mt-3 text-sm leading-relaxed text-[#d8d0c4]">
            {site.owner}
            <br />
            {site.street}
            <br />
            {site.zip} {site.city}
          </p>
          <p className="mt-3 text-sm text-[#d8d0c4]">
            Tel.{" "}
            <a className="underline decoration-gold/50 underline-offset-4" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            Fax {site.faxDisplay}
            <br />
            <a className="underline decoration-gold/50 underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-medium tracking-wide">Öffnungszeiten</p>
          <ul className="mt-3 space-y-1 text-sm text-[#d8d0c4]">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[#c4b9a8]">
            Terminvergabe {site.appointmentHours}. Außerhalb: Anrufbeantworter, Rückruf am nächsten Arbeitstag.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-[#c4b9a8] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Podologie-Fachpraxis Elke Kunte</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/konzept">Behandlungskonzept</Link>
            <Link href="/podologie">Was ist Podologie?</Link>
            <Link href="/stellenangebot">Stellenangebot</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
