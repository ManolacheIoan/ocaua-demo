/**
 * Fotografii ilustrative cu licență liberă (Unsplash License: uz comercial permis, fără atribuire obligatorie).
 * Surse și autori: CREDITS.md. Se înlocuiesc cu poze reale de la local (vezi `imagini` în content/site.ts).
 * Fișiere: public/images/<cheie>-{640,1024,1600}.webp
 */
export type StockImage = { w: number; h: number; alt: string; autor: string; profil: string; sursa: string };

export const stock = {
  hero: { w: 1600, h: 1067, alt: "Masă festivă aranjată, cu lumânări și pahare de vin", autor: "Michael Fousert", profil: "https://unsplash.com/@michaelfousert", sursa: "https://unsplash.com/photos/cGZ-X0nAUgY" },
  sala: { w: 1600, h: 1066, alt: "Sală de evenimente cu mese rotunde, scaune albe și aranjamente florale", autor: "Mathis Payet Descombes", profil: "https://unsplash.com/@mathis_pyt", sursa: "https://unsplash.com/photos/wYWeVmlGWHM" },
  ballroom: { w: 1600, h: 1067, alt: "Sală elegantă cu candelabre și mese lungi pregătite pentru eveniment", autor: "Lucas T Photography", profil: "https://unsplash.com/@lucastphotography", sursa: "https://unsplash.com/photos/T5v5i67QYGk" },
  platou: { w: 1600, h: 1067, alt: "Platou bogat cu aperitive, brânzeturi, mezeluri și fructe", autor: "We The Creators", profil: "https://unsplash.com/@wethecreators", sursa: "https://unsplash.com/photos/QVGVxz5SN5Y" },
  masa: { w: 1600, h: 2134, alt: "Masă cu față de masă albă, pâine și flori", autor: "Mantas Sinkevičius", profil: "https://unsplash.com/@mantasink", sursa: "https://unsplash.com/photos/Lpgei3ONE5Y" },
  gratar: { w: 1600, h: 2400, alt: "Frigărui de carne pe grătar, la jar", autor: "Олег Мороз", profil: "https://unsplash.com/@tengyart", sursa: "https://unsplash.com/photos/PpHXk5lH_Uk" },
  ciorba: { w: 1600, h: 1066, alt: "Ciorbă cu smântână și verdeață, în bol alb", autor: "Rasmus Gundorff Sæderup", profil: "https://unsplash.com/@rasmusgs", sursa: "https://unsplash.com/photos/U9DW1GGTTXw" },
  desert: { w: 1600, h: 2134, alt: "Felie de prăjitură cu caramel, pe farfurie neagră", autor: "Aliona Gumeniuk", profil: "https://unsplash.com/@agumeniuk", sursa: "https://unsplash.com/photos/GAauSStia3s" },
  vin: { w: 1600, h: 2400, alt: "Vin roșu turnat într-un pahar, pe o masă de restaurant", autor: "Alev Takil", profil: "https://unsplash.com/@alevtakil", sursa: "https://unsplash.com/photos/dR8t0L8YXsI" },
  camera: { w: 1600, h: 1067, alt: "Cameră de hotel luminoasă, cu pat dublu și tonuri calde", autor: "Clay Banks", profil: "https://unsplash.com/@claybanks", sursa: "https://unsplash.com/photos/yOs9Zc5JvTw" },
  camera2: { w: 1600, h: 1066, alt: "Pat cu tăblie din lemn masiv și veioză, în lumină caldă", autor: "Annie Spratt", profil: "https://unsplash.com/@anniespratt", sursa: "https://unsplash.com/photos/rBJLZhOVHtw" },
  camera3: { w: 1600, h: 1066, alt: "Cameră de hotel cu pat matrimonial și lumină ambientală", autor: "Markus Winkler", profil: "https://unsplash.com/@markuswinkler", sursa: "https://unsplash.com/photos/zk3DLNjeObQ" },
} satisfies Record<string, StockImage>;

export type StockKey = keyof typeof stock;
