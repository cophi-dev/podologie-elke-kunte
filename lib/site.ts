export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${basePath}${path}`;
}

export const site = {
  name: "Podologie Elke Kunte",
  legalName: "Fachpraxis für medizinische Fussbehandlungen",
  owner: "Podologin Elke Kunte",
  titleSuffix: "Fachpraxis für medizinische Fussbehandlungen",
  description:
    "Fachpraxis für medizinische Fußbehandlungen in Hamburg. Podologin Elke Kunte und Team – Heilkunde auf dem Gebiet der Podologie, ohne Rezept. Lindenstraße 29, 20099 Hamburg.",
  street: "Lindenstraße 29",
  zip: "20099",
  city: "Hamburg",
  phoneDisplay: "040 380 760 77",
  phoneHref: "tel:+494038076077",
  faxDisplay: "040 380 760 78",
  mobileDisplay: "0172 395 3818",
  mobileHref: "tel:+491723953818",
  email: "info@podologie-elke-kunte.de",
  url: "https://www.podologie-elke-kunte.de",
  geo: { lat: 53.554294, lng: 10.017848 },
  mapsQuery: "Lindenstraße+29,+20099+Hamburg",
  hours: [
    { day: "Montag", time: "10:00 – 17:00 Uhr" },
    { day: "Dienstag", time: "10:00 – 18:00 Uhr" },
    { day: "Mittwoch", time: "10:00 – 18:00 Uhr" },
    { day: "Donnerstag", time: "10:00 – 18:00 Uhr" },
    { day: "Freitag", time: "10:00 – 18:00 Uhr" },
  ],
  appointmentHours: "Montag bis Donnerstag, 10:00 – 14:00 Uhr",
} as const;

export const nav = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen & Preise" },
  {
    href: "/behandlungen",
    label: "Behandlungen",
    children: [
      { href: "/behandlungen/medizinische-fussbehandlung", label: "Medizinische Fußbehandlung" },
      { href: "/behandlungen/nagelpilz", label: "Nagelpilzentfernung" },
      { href: "/behandlungen/nagelkorrektur", label: "Nagelkorrektur / Spange" },
      { href: "/behandlungen/nagelersatz", label: "Nagelersatz / Prothetik" },
      { href: "/behandlungen/unfall", label: "Nagelkorrektur nach Unfall" },
      { href: "/behandlungen/massagen", label: "Massagen" },
    ],
  },
  { href: "/ueber-mich", label: "Ich für Sie" },
  { href: "/praxis", label: "Praxis" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const treatments = [
  {
    href: "/behandlungen/medizinische-fussbehandlung",
    title: "Medizinische Fußbehandlung",
    text: "Hornhaut, Schwielen, Hühneraugen, eingewachsene Nägel – gründlich, schmerzarm und ohne Rezept.",
    image: "/images/praxis-stuhl.jpg",
    imageAlt: "Behandlungsstuhl der Fachpraxis Elke Kunte",
  },
  {
    href: "/behandlungen/nagelpilz",
    title: "Nagelpilzentfernung",
    text: "Onychomykose ist ansteckend. Mit Therapie in der Praxis und Nachsorge kann der Nagel gesunden.",
    image: "/images/nagelpilz-ergebnis.jpg",
    imageAlt: "Ergebnis nach Nagelpilzbehandlung",
  },
  {
    href: "/behandlungen/nagelkorrektur",
    title: "Nagelkorrektur / Spange",
    text: "Orthonyxie bei eingewachsenen oder eingerollten Nägeln – unter anderem Ross-Fraser, Goldstadt und Onyclip.",
    image: "/images/spange-ross-fraser.jpg",
    imageAlt: "Ross-Fraser-Spange zur Nagelbettkorrektur",
  },
  {
    href: "/behandlungen/nagelersatz",
    title: "Nagelersatz / Prothetik",
    text: "Dauerhafter Ersatz der Nagelplatte mittels UV-Lichthärtung – auch nach Pilzbehandlung oder Dysplasie.",
    image: "/images/prothetik-fuenf-zehen.jpg",
    imageAlt: "Nagelprothetik auf fünf Zehen",
  },
  {
    href: "/behandlungen/unfall",
    title: "Nagelkorrektur nach Unfall",
    text: "Druckschutz und begleitendes Nachwachsen, wenn der Nagel zerstört ist und das Nagelbett ungeschützt bleibt.",
    image: "/images/unfall-2019.jpg",
    imageAlt: "Abschluss einer Nagelbehandlung nach Unfall",
  },
  {
    href: "/behandlungen/massagen",
    title: "Fußreflexzonenmassage",
    text: "Nach Hanne Marquardt und Hedi Mesafret. 60 Minuten, 90,00 € – ganzheitlich für Beine und Füße.",
    image: "/images/praxis-wartebereich.png",
    imageAlt: "Wartebereich der Praxis",
  },
] as const;
