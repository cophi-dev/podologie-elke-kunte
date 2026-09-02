import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaRow } from "@/components/CtaRow";
import { PageHero } from "@/components/PageHero";
import { treatments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Behandlungen",
  description:
    "Medizinische Fußbehandlung, Nagelpilz, Spangentechnik, Nagelprothetik, Unfallnachsorge und Fußreflexzonenmassage in der Fachpraxis Elke Kunte, Hamburg.",
};

export default function BehandlungenPage() {
  return (
    <>
      <PageHero
        kicker="Therapie"
        title="Behandlungen"
        text="Von der medizinischen Fußbehandlung bis zur Nagelprothetik: jede Therapie mit Zeit, Hygiene und nachvollziehbarem Vorgehen."
      />
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((item) => (
            <Link key={item.href} href={item.href} className="surface group overflow-hidden rounded-3xl">
              <div className="relative h-56">
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="50vw" />
              </div>
              <div className="p-6">
                <h2 className="serif text-3xl text-navy">{item.title}</h2>
                <p className="mt-2 text-ink-soft">{item.text}</p>
                <p className="mt-4 text-sm text-gold">Mehr erfahren</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaRow />
    </>
  );
}
