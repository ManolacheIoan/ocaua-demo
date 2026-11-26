export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/** Open Graph pentru subpagini (Next înlocuiește tot obiectul, deci repetăm imaginea). */
export const og = (title: string, url: string) => ({
  type: "website" as const, locale: "ro_RO", siteName: "Restaurant & Cazare Ocaua lui Cuza", title, url,
  images: [{ url: "og.jpg", width: 1200, height: 630, alt: "Ocaua lui Cuza, Tecuci" }],
});
