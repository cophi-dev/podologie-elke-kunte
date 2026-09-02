export type PriceItem = {
  name: string;
  detail?: string;
  price: string;
  duration?: string;
  note?: string;
};

export type PriceGroup = {
  id: string;
  title: string;
  intro?: string;
  items: PriceItem[];
};

export const priceDisclaimer =
  "Alle angegebenen Preise sind Richtwerte und werden mit jedem Patienten individuell nach Krankheitsbild besprochen.";

export const priceGroups: PriceGroup[] = [
  {
    id: "erstbehandlung",
    title: "Befundaufnahme mit Behandlung",
    items: [
      {
        name: "Erst-Behandlung mit Befunderstellung",
        duration: "90 Minuten",
        price: "90,00 €",
      },
    ],
  },
  {
    id: "komplex",
    title: "Podologische Komplexbehandlung",
    items: [
      {
        name: "Grundpreis",
        duration: "60 Minuten",
        price: "80,00 €",
      },
    ],
  },
  {
    id: "mykose",
    title: "Mykosebehandlung",
    items: [
      {
        name: "Mykosebehandlung",
        duration: "60 Minuten",
        price: "95,00 € – 110,00 €",
      },
    ],
  },
  {
    id: "massagen",
    title: "Massagen",
    items: [
      {
        name: "Fußreflexzonenmassage nach Hanne Marquardt und Hedi Mesafret",
        duration: "60 Minuten",
        price: "90,00 €",
      },
    ],
  },
  {
    id: "fussbehandlung",
    title: "Medizinische Fußbehandlungen",
    intro:
      "Für den podologischen Heilberuf gelten neue Vergütungen. Eine aktuelle Preisliste liegt zusätzlich in der Praxis aus.",
    items: [
      {
        name: "Schmerzloses Entfernen eingewachsener Nägel",
        detail: "bei Bedarf Oberflächenbetäubung",
        price: "90,00 €",
      },
      {
        name: "Starke Verhornungen, Schwielen",
        detail: "nach Aufwand",
        price: "75,00 €",
      },
      {
        name: "Rhagadenbehandlung (Schrunden)",
        detail: "schmerzhafte Risse an der Ferse, Honorar je nach Krankheitsbild, nach Aufwand",
        price: "ab 75,00 €",
      },
      {
        name: "Hühneraugenentfernung",
        detail: "bei Bedarf Oberflächenbetäubung, nach Aufwand",
        price: "ab 30,00 €",
      },
      {
        name: "Hühneraugenentfernung subungual",
        detail: "Öffnen der Nagelplatte, nach Aufwand",
        price: "ab 90,00 €",
      },
    ],
  },
  {
    id: "mykotisch",
    title: "Mykotische Nagelbehandlung",
    intro:
      "Nagel auffräsen, Entfernen der befallenen mykotischen Nagelsubstanz, Nagelprothetik mit dauerhaftem Ersatz der Nagelplatte, Einzelanfertigung mittels UV-Lichthärtung.",
    items: [
      {
        name: "Mykotische Nagelbehandlung inkl. Prothetik",
        detail: "nach Aufwand",
        price: "ab 95,00 € – 110,00 €",
      },
    ],
  },
  {
    id: "prothetik",
    title: "Nagelprothetik",
    items: [
      {
        name: "Dauerhafter Ersatz der Nagelplatte mittels UV-Lichthärtung",
        detail: "je Nagel",
        price: "80,00 €",
      },
    ],
  },
  {
    id: "warzen",
    title: "Warzenbehandlung",
    items: [
      {
        name: "Warzenverband",
        detail: "nach Aufwand, Größe und Anzahl",
        price: "ab 70,00 €",
      },
    ],
  },
  {
    id: "spange",
    title: "Spangentechnik zur Regulierung des Nagelbettes",
    items: [
      {
        name: "Orthonyxie-Spange nach Ross-Fraser",
        detail: "mit 2 Wochen Garantie",
        price: "120,00 €",
      },
      {
        name: "Goldstadt-Spange",
        detail: "Versiegelung mit UV-Gel, mit 2 Wochen Garantie",
        price: "157,00 €",
      },
      {
        name: "Onyclip-Spange (BS-Spange)",
        detail: "Klebetechnik (Metallspange, Flachstahl), Versiegelung mit UV-Gel, mit 2 Wochen Garantie",
        price: "120,00 €",
      },
    ],
  },
];

export const featuredPrices = [
  {
    title: "Erstbehandlung",
    duration: "90 Minuten",
    price: "90,00 €",
    text: "Befunderstellung und Behandlung – der Einstieg in Ihr individuelles Konzept.",
  },
  {
    title: "Komplexbehandlung",
    duration: "60 Minuten",
    price: "80,00 €",
    text: "Podologische Grundbehandlung. Richtwert, angepasst an das Krankheitsbild.",
  },
  {
    title: "Fußreflexzonenmassage",
    duration: "60 Minuten",
    price: "90,00 €",
    text: "Nach Hanne Marquardt und Hedi Mesafret – für Beine, Füße und Wohlgefühl.",
  },
];
