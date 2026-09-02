"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const when = String(data.get("when") ?? "");
    const comment = String(data.get("comment") ?? "");
    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone}`,
      `Wunschzeitraum: ${when}`,
      "",
      comment,
    ].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Terminanfrage über die Website")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="surface rounded-3xl p-6">
        <p className="serif text-2xl text-navy">Vielen Dank</p>
        <p className="mt-3 text-ink-soft">
          Ihr E-Mail-Programm öffnet sich mit der Anfrage. Alternativ rufen Sie uns direkt an unter{" "}
          <a className="text-navy underline underline-offset-4" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface rounded-3xl p-6 md:p-8">
      <p className="serif text-2xl text-navy">Terminanfrage</p>
      <p className="mt-2 text-sm text-ink-soft">Felder mit * sind Pflichtfelder.</p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm">
          Name *
          <input required name="name" className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none focus:border-gold" />
        </label>
        <label className="grid gap-1 text-sm">
          E-Mail-Adresse *
          <input required type="email" name="email" className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none focus:border-gold" />
        </label>
        <label className="grid gap-1 text-sm">
          Telefon
          <input name="phone" type="tel" className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none focus:border-gold" />
        </label>
        <label className="grid gap-1 text-sm">
          In welchem Zeitraum möchten Sie einen Termin? *
          <input required name="when" className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none focus:border-gold" />
        </label>
        <label className="grid gap-1 text-sm">
          Kommentar
          <textarea name="comment" rows={4} className="rounded-xl border border-line bg-white px-3 py-2.5 outline-none focus:border-gold" />
        </label>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        Die Nachricht wird über Ihr E-Mail-Programm an {site.email} gesendet. Es werden keine Daten auf diesem Server gespeichert.
      </p>
      <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
        Anfrage vorbereiten
      </button>
    </form>
  );
}
