# Podologie Elke Kunte

Neue Website der Fachpraxis für medizinische Fussbehandlungen Elke Kunte, Hamburg.
Next.js (App Router) + Tailwind CSS.

## Lokal starten

```bash
pnpm install
pnpm dev
```

Build:

```bash
pnpm build
pnpm start
```

## Inhalte anpassen

- Kontaktdaten, Öffnungszeiten, Navigation: `lib/site.ts`
- Preise und Leistungen: `lib/prices.ts`
- Bilder: `public/images/` (nur vorhandenes Praxis-Material)

## Deployment

Vercel-Projekt auf dieses Repository zeigen. Optionale Umgebungsvariable:

```
NEXT_PUBLIC_SITE_URL=https://ihre-domain.vercel.app
```
