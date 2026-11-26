/**
 * TOT conținutul site-ului se editează aici.
 * Orice valoare „[de completat]” apare vizibil pe site, ca să se vadă ce lipsește.
 */

export const TBD = "[de completat]";

/** true = arată „[de completat]” evidențiat (lucru intern). false = ascunde câmpurile lipsă (aspect final). */
export const arataLipsuri = true;

/** Are valoare reală (nu e gol și nu e placeholder). */
export const are = (v?: string) => !!v && !v.includes(TBD);

/*
 * POZE REALE DE LA LOCAL: pune fișierele în public/poze/ și scrie numele aici (ex. sala: "sala.jpg").
 * Cât timp un câmp e gol, se folosește fotografia ilustrativă din content/images.ts (marcată „Foto ilustrativă”)
 * sau, unde nu există una potrivită (ex. fațada), un placeholder elegant.
 */
export const imagini: Record<string, string> = {
  hero: "",
  fatada: "",
  sala: "",
  ballroom: "",
  platou: "",
  masa: "",
  mancare: "",
  gratar: "",
  ciorba: "",
  desert: "",
  vin: "",
  camera: "",
};

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
    "Bucătărie românească, mese în familie și o sală pregătită pentru momentele importante: totul la aceeași adresă, în Tecuci.",
  ],
  // Specialitățile casei / povestea locului (apare doar când e completat)
  specialitati: TBD,
  repere: [
    { valoare: "1992", eticheta: "anul înființării" },
    { valoare: "4,0", eticheta: "nota pe Google, din peste 660 de recenzii" },
    { valoare: "3 în 1", eticheta: "restaurant, cazare și evenimente" },
  ],
};

export type Produs = { nume: string; descriere?: string; gramaj?: string; pret: string };
export type CategorieMeniu = { id: string; titlu: string; subtitlu: string; produse: Produs[] };

// Meniu: adaugă/șterge produse liber. Prețurile rămân „[de completat]” până le primim de la local.
export const meniu: CategorieMeniu[] = [
  {
    id: "ciorbe",
    subtitlu: "Ciorbe și supe, ca acasă",
    titlu: "Ciorbe",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "feluri-principale",
    subtitlu: "Preparate românești gătite în casă",
    titlu: "Feluri principale",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "gratar",
    subtitlu: "De pe grătar, la comandă",
    titlu: "Grătar",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "deserturi",
    subtitlu: "Ceva dulce la final",
    titlu: "Deserturi",
    produse: [
      { nume: TBD, descriere: TBD, pret: TBD },
      { nume: TBD, descriere: TBD, pret: TBD },
    ],
  },
  {
    id: "bauturi",
    subtitlu: "Răcoritoare, cafea, vinuri",
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
  intro: "Botezuri, aniversări și mese festive, cu sală elegantă, meniu stabilit împreună și o echipă care se ocupă de detalii.",
  capacitate: TBD, // ex. „până la 200 de invitați”
  meniuri: TBD, // ex. „meniuri de la X lei/persoană”
  tipuri: [
    { titlu: "Botezuri", text: "O zi frumoasă pentru cel mic, cu masa pregătită pentru toată familia." },
    { titlu: "Aniversări", text: "Zile de naștere, cununii, aniversări de căsătorie, la masa potrivită." },
    { titlu: "Mese festive", text: "Mese de sărbători, întâlniri de familie și mese de firmă." },
  ],
};

export const nav = [
  { href: "/#despre", label: "Despre" },
  { href: "/meniu/", label: "Meniu" },
  { href: "/cazare/", label: "Cazare" },
  { href: "/#evenimente", label: "Evenimente" },
  { href: "/#contact", label: "Contact" },
];
