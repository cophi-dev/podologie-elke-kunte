import Link from "next/link";
import { site } from "@/lib/site";

export function CtaRow({
  title = "Termin vereinbaren",
  text = "Rufen Sie an – wir nehmen uns Zeit für Befund, Behandlung und Nachsorge.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy text-[#f6f1e8]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-gold-soft">Fachpraxis Hamburg</p>
          <h2 className="serif mt-2 text-3xl md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl text-[#d8d0c4]">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn-primary !bg-cream !text-navy hover:!bg-white">
            {site.phoneDisplay}
          </a>
          <Link href="/kontakt" className="btn-ghost !border-[#f6f1e8] !text-[#f6f1e8] hover:!bg-[#f6f1e8] hover:!text-navy">
            Kontakt & Zeiten
          </Link>
        </div>
      </div>
    </section>
  );
}
