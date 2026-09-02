#!/usr/bin/env node
/**
 * Lädt die Originalbilder der bestehenden Praxis-Website nach public/images.
 * Wird in CI genutzt, wenn die Dateien nicht im Repository liegen.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outDir = path.join(__dirname, "..", "public", "images");
const publicDir = path.join(__dirname, "..", "public");
const extras = {
  [path.join(publicDir, "favicon.ico")]: "https://www.podologie-elke-kunte.de/s/misc/favicon.ico?1335431200",
};
const files = {
  "hero-sand.jpg": "https://www.podologie-elke-kunte.de/s/img/emotionheader.jpg",
  "elke-kunte.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2486117932.jpg?t=1585685551",
  "praxis-stuhl.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2427792729.jpg?t=1511099647",
  "praxis-aussen.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2427794209.jpg?t=1349093784",
  "praxis-behandlungsraum.png": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533421.png?t=1278621192",
  "praxis-wartebereich.png": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533422.png?t=1278621228",
  "praxis-eingang.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533423.jpg?t=1278622998",
  "praxis-raum-2.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533428.jpg?t=1285606980",
  "mykose-befall.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2476500962.jpg?t=1511098852",
  "mykose-prothetik.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2476500966.jpg?t=1511098670",
  "mykose-ergebnis.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2476500964.jpg?t=1511099053",
  "prothetik-fuenf-zehen.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533427.jpg?t=1279541479",
  "prothetik-dysplasie.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533426.jpg?t=1279540957",
  "prothetik-vorher.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2414533425.jpg?t=1279540838",
  "unfall-2017.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485837509.jpeg?t=1583656473",
  "unfall-2018.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485837511.jpeg?t=1583656573",
  "unfall-2019.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485837519.jpeg?t=1583656796",
  "spange-onyclip.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433241585.jpg?t=1361893648",
  "spange-ross-fraser.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2433241593.jpg?t=1562312770",
  "spange-goldstadt.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433241603.jpg?t=1361893713",
  "mykose-vorher.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203149.jpg?t=1361810526",
  "mykose-nach-prothetik.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203196.jpg?t=1361810593",
  "mykose-aesthetik.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203264.jpg?t=1361810651",
  "orthonyxie-rechts.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203350.jpg?t=1361810852",
  "orthonyxie-links.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203302.jpg?t=1361810774",
  "orthonyxie-vorher-markiert.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203382.jpg?t=1361810936",
  "rollnagel-vorher.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433264606.jpg?t=1361976561",
  "rollnagel-waehrend.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203406.jpg?t=1361811005",
  "rollnagel-drittel.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/cache_2433203427.jpg?t=1361811042",
  "rollnagel-2017.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485832227.jpeg?t=1583584907",
  "rollnagel-2018.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485832300.jpeg?t=1583585133",
  "rollnagel-2019.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2485832374.jpeg?t=1583585339",
  "nagelpilz-befund.png": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2497262602.png?t=1733323014",
  "nagelpilz-ergebnis.jpg": "https://www.podologie-elke-kunte.de/s/cc_images/teaserbox_2497262611.jpg?t=1733322957",
};

async function download(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn("skip", url, res.status);
      return null;
    }
    return Buffer.from(await res.arrayBuffer());
  } catch (err) {
    console.warn("skip", url, err.message);
    return null;
  }
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, url] of Object.entries(files)) {
    const dest = path.join(outDir, name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      continue;
    }
    const buf = await download(url);
    if (!buf) continue;
    fs.writeFileSync(dest, buf);
    console.log("fetched", name, buf.length);
  }
  for (const [dest, url] of Object.entries(extras)) {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100) continue;
    const buf = await download(url);
    if (!buf) continue;
    fs.writeFileSync(dest, buf);
    console.log("fetched", path.basename(dest), buf.length);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
