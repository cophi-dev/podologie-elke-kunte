import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CtaRow } from "@/components/CtaRow";
import { featuredPrices } from "@/lib/prices";
import { asset, site, treatments } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} – ${site.titleSuffix}`,
  description: site.description,
};

const trust = [
  { label: "Seit 2009", text: "Praxis in der Lindenstraße 29, Hamburg" },
  { label: "Heilkunde Podologie", text: "Erlaubnis vom Landesprüfungsamt Hamburg, Nov. 2016" },
  { label: "Kein Rezept nötig", text: "Eigenständige Diagnosen und Behandlungskonzepte" },
  { label: "Zeit statt Takt", text: "Gründliche Behandlung statt 30-Minuten-Schema" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${asset("/images/hero-sand.jpg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/55" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.28em] uppercase text-gold">
              Hamburg · Lindenstraße 29
            </p>
            <h1 className="serif mt-4 text-4xl leading-[1.08] text-navy md:text-6xl lg:text-[4.1rem]">
              Fachpraxis für medizinische Fussbehandlungen
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Ich heiße Sie in der Fachpraxis für med. Fußbehandlungen Elke Kunte herzlich willkommen.
              Mein Podologen-Team und ich stehen Ihnen gern mit Rat und Tat zur Seite – wenn Sie Hilfe
              brauchen oder eine fachliche Orientierung für Ihre Fußgesundheit suchen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary">
                Termin: {site.phoneDisplay}
              </a>
              <Link href="/leistungen" className="btn-ghost">
                Leistungen & Preise
              </Link>
            </div>
            <p className="mt-5 text-sm text-ink-soft">
              E-Mail:{" "}
              <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/elke-kunte.jpg"
                alt="Podologin Elke Kunte"
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-navy px-5 py-4 text-[#f6f1e8] shadow-xl">
              <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold-soft">Ihre Podologin</p>
              <p className="serif text-2xl">Elke Kunte</p>
              <p className="mt-1 text-sm text-[#d8d0c4]">Heilpraktikerin für Podologie · Hamburg</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream-deep/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trust.map((item) => (
            <div key={item.label}>
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] tracking-[0.28em] uppercase text-gold">Willkommen</p>
            <h2 className="serif mt-3 text-4xl text-navy">Zeit, Hygiene und ein klares Konzept</h2>
            <div className="gold-rule mt-5" />
            <div className="prose-kunte mt-6">
              <p>
                <strong className="font-medium text-ink">Wenn Sie meine Praxis besuchen, benötigen Sie kein Rezept.</strong>
              </p>
              <p>
                Im November 2016 erhielt ich vom Landesprüfungsamt Hamburg die Erlaubnis, die Heilkunde auf
                dem Gebiet der Podologie berufsmäßig auszuüben. Aus diesem Grund behandle ich vorwiegend
                Patienten mit langwierigen Erkrankungen oder Folgeschäden anderer Krankheiten an den Füßen.
              </p>
              <p>
                Ich kann und darf eigenständige Diagnosen auf meinen Rezepten erstellen. Für Sie und mit Ihnen
                erstelle ich ein Behandlungskonzept im Interesse Ihrer Fußgesundheit, zur Verbesserung Ihrer
                Lebensqualität.
              </p>
            </div>
            <Link href="/ueber-mich" className="mt-4 inline-flex text-navy underline decoration-gold underline-offset-4">
              Mehr unter „Ich für Sie“
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/praxis-stuhl.jpg" alt="Behandlungsraum der Praxis" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/praxis-wartebereich.png" alt="Wartebereich der Praxis" fill className="object-cover" sizes="40vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-16 text-[#f6f1e8]">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[0.72rem] tracking-[0.28em] uppercase text-gold-soft">Leistungen</p>
              <h2 className="serif mt-3 text-4xl">Was wir für Ihre Füße tun</h2>
            </div>
            <Link href="/behandlungen" className="text-sm text-gold-soft underline underline-offset-4">
              Alle Behandlungen
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-3xl bg-navy ring-1 ring-white/10"
              >
                <div className="relative h-44">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-5">
                  <h3 className="serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#d8d0c4]">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[0.72rem] tracking-[0.28em] uppercase text-gold">Honorare</p>
            <h2 className="serif mt-3 text-4xl text-navy">Preise – klar und auf einen Blick</h2>
            <p className="mt-3 max-w-2xl text-ink-soft">
              Alle angegebenen Preise sind Richtwerte und werden mit jedem Patienten individuell nach
              Krankheitsbild besprochen.
            </p>
          </div>
          <Link href="/leistungen" className="text-navy underline decoration-gold underline-offset-4">
            Vollständige Preisliste
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredPrices.map((item) => (
            <article key={item.title} className="surface rounded-3xl p-6">
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold">{item.duration}</p>
              <h3 className="serif mt-2 text-2xl text-navy">{item.title}</h3>
              <p className="mt-4 serif text-4xl text-ink">{item.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-cream-deep/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
            <Image src="/images/nagelpilz-ergebnis.jpg" alt="Ergebnis nach vier Monaten Nagelpilzbehandlung" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <p className="text-[0.72rem] tracking-[0.28em] uppercase text-gold">Fallbeispiel</p>
            <h2 className="serif mt-3 text-4xl text-navy">Nagelpilz: Ergebnis nach vier Monaten</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Nagelpilz (Onychomykose) ist mehr als ein harmloser Schönheitsfehler – es ist eine lästige und
              ansteckende Infektion. Mit einer mehrtägigen Therapie in der Praxis und entsprechender Nachsorge
              durch den Patienten selbst kann eine Gesundung des erkrankten Fußnagels erreicht werden.
            </p>
            <Link href="/behandlungen/nagelpilz" className="btn-primary mt-6">
              Zur Nagelpilzbehandlung
            </Link>
          </div>
        </div>
      </section>

      <CtaRow />
    </>
  );
}
