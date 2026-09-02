# Podologie Elke Kunte

Neue Website der Fachpraxis für medizinische Fußbehandlungen Elke Kunte, Hamburg.
Next.js (App Router) + Tailwind CSS.

Live: https://podologie-kunte.vercel.app
GitHub: https://github.com/cophi-dev/podologie-elke-kunte

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

Das Vercel-Projekt `podologie-kunte` ist **nicht** automatisch mit diesem GitHub-Repo verbunden.
Ein Merge auf `main` ändert die Live-URL deshalb nicht von allein.

Damit https://podologie-kunte.vercel.app den aktuellen Stand zeigt:

1. In Vercel das Projekt `podologie-kunte` öffnen
2. **Settings → Git → Connect Git Repository**
3. `cophi-dev/podologie-elke-kunte` wählen, Production Branch `main`

Danach deployed jeder Push auf `main` die Seite neu.

Optionale Umgebungsvariable:

```
NEXT_PUBLIC_SITE_URL=https://podologie-kunte.vercel.app
```
