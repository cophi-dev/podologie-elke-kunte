import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-[0.72rem] tracking-[0.28em] uppercase text-gold">404</p>
      <h1 className="serif mt-3 text-5xl text-navy">Seite nicht gefunden</h1>
      <p className="mt-4 text-ink-soft">Die gewünschte Adresse gibt es auf dieser Website nicht.</p>
      <Link href="/" className="btn-primary mt-8">
        Zur Startseite
      </Link>
    </section>
  );
}
