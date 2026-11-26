/**
 * TOT conținutul site-ului se editează aici.
 * Orice valoare „[de completat]” apare vizibil pe site, ca să se vadă ce lipsește.
 */

export const TBD = "[de completat]";

export const site = {
  nume: "Restaurant & Cazare Ocaua lui Cuza",
  numeScurt: "Ocaua lui Cuza",
  slogan: "Restaurant și cazare în Tecuci, din 1992",
  descriere:
    "Restaurant & Cazare Ocaua lui Cuza din Tecuci: bucătărie românească, camere de cazare și evenimente (botezuri, aniversări, mese festive). Firmă locală din 1992.",
  anInfiintare: 1992,

  adresa: {
    strada: "Str. 1 Decembrie 1918 nr. 2",
    localitate: "Tecuci",
    judet: "jud. Galați",
    judetCod: "GL",
    codPostal: TBD,
    tara: "RO",
  },

  telefon: {
    afisat: "0766 577 307",
    tel: "+40766577307",
    // Număr WhatsApp (format internațional, fără +). Șterge-l („”) ca să ascunzi butoanele WhatsApp.
    whatsapp: "40766577307",
  },

  google: {
    rating: "4,0",
    recenzii: "peste 660 de recenzii",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ocaua+lui+Cuza+Str.+1+Decembrie+1918+nr.+2+Tecuci",
    embedUrl:
      "https://maps.google.com/maps?q=Ocaua%20lui%20Cuza%2C%20Str.%201%20Decembrie%201918%20nr.%202%2C%20Tecuci&z=16&output=embed",
  },

  facebook: {
    nume: "Ocaua Lui Cuza",
    url: TBD, // link-ul paginii de Facebook
  },

  email: TBD,

  // Program de funcționare
  program: [
    { zile: "Luni – Vineri", ore: TBD },
    { zile: "Sâmbătă", ore: TBD },
    { zile: "Duminică", ore: TBD },
  ],

  firma: {
    denumire: TBD, // denumirea juridică (SRL)
    cui: TBD,
    regCom: TBD,
  },

  // Endpoint Formspree (ex. "https://formspree.io/f/abcdwxyz"). Cât timp e gol, formularele oferă doar WhatsApp / telefon.
  formspreeEndpoint: "",

  // Bandă demo afișată pe toate paginile. Pune null pentru varianta finală.
  bandaDemo: "Demo realizat de Manotek — propunere pentru Ocaua lui Cuza",
} as const;

export const despre = {
  titlu: "Tradiție locală din 1992",
  paragrafe: [
    "Ocaua lui Cuza este o firmă locală din Tecuci, care din 1992 primește oaspeți la masă și la cazare, pe Str. 1 Decembrie 1918.",
    `Bucătărie românească: ${TBD} (specialitățile casei, povestea locului, cine gătește).`,
  ],
  repere: [
    { valoare: "1992", eticheta: "anul înființării" },
    { valoare: "4,0 ★", eticheta: "pe Google, din peste 660 de recenzii" },
    { valoare: "Restaurant + cazare", eticheta: "în centrul Tecuciului" },
  ],
};

export type Produs = { nume: string; descriere?: string; gramaj?: string; pret: string };
export type CategorieMeniu = { id: string; titlu: string; produse: Produs[] };

// Meniu: adaugă/șterge produse liber. Prețurile rămân „[de completat]” până le primim de la local.
export const meniu: CategorieMeniu[] = [
  {
    id: "ciorbe",
    titlu: "Ciorbe",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "feluri-principale",
    titlu: "Feluri principale",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "gratar",
    titlu: "Grătar",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "deserturi",
    titlu: "Deserturi",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "bauturi",
    titlu: "Băuturi",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
];

export type Camera = { tip: string; descriere: string; dotari: string[]; pret: string };

// Camere: tipurile, dotările și prețurile se confirmă cu localul. Numărul de camere nu e cunoscut.
export const camere: Camera[] = [
  { tip: `Cameră dublă ${TBD}`, descriere: TBD, dotari: [TBD], pret: TBD },
  { tip: `Cameră twin ${TBD}`, descriere: TBD, dotari: [TBD], pret: TBD },
  { tip: `Apartament / cameră familie ${TBD}`, descriere: TBD, dotari: [TBD], pret: TBD },
];

export const cazareInfo = {
  checkIn: TBD,
  checkOut: TBD,
  parcare: TBD,
  micDejun: TBD,
};

export const evenimente = {
  titlu: "Evenimente în familie",
  intro: `Organizăm botezuri, aniversări și mese festive. Capacitate sală: ${TBD}. Meniuri pentru evenimente: ${TBD}.`,
  tipuri: [
    { titlu: "Botezuri", text: `Meniu și aranjamente pentru botez — ${TBD}.` },
    { titlu: "Aniversări", text: `Zile de naștere și aniversări în familie — ${TBD}.` },
    { titlu: "Mese festive", text: `Mese de sărbători, întâlniri, mese de firmă — ${TBD}.` },
  ],
};

export const nav = [
  { href: "/#despre", label: "Despre" },
  { href: "/meniu/", label: "Meniu" },
  { href: "/cazare/", label: "Cazare" },
  { href: "/#evenimente", label: "Evenimente" },
  { href: "/#contact", label: "Contact" },
];
