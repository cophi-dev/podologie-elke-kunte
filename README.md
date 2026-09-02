# Podologie Elke Kunte

Neue Website der Fachpraxis für medizinische Fußbehandlungen Elke Kunte, Hamburg.
Next.js (App Router) + Tailwind CSS.

Live: https://podologie-kunte.vercel.app
GitHub: https://github.com/cophi-dev/podologie-elke-kunte
Vercel: https://vercel.com/cophidevs-projects/temporary-fleet-orbit-y75ba6z

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

Ein GitHub-Merge aktualisiert Vercel nur, wenn dieses Repository an das Vercel-Projekt
`cophidevs-projects/temporary-fleet-orbit-y75ba6z` angebunden ist
(Production-Domain: https://podologie-kunte.vercel.app).

Production Branch: `main`

Optionale Umgebungsvariable:

```
NEXT_PUBLIC_SITE_URL=https://podologie-kunte.vercel.app
```
