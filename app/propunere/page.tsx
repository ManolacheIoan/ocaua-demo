import type { Metadata } from "next";
import Link from "next/link";
import { are, camere, cazareInfo, despre, evenimente, imagini, meniu, site } from "@/content/site";
import { pachete } from "@/content/propunere";
import { PageHero, btnDark, btnGhost } from "@/components/Sections";

export const metadata: Metadata = { title: "Propunere", robots: { index: false, follow: false }, alternates: { canonical: "propunere/" } };

function lipsuri() {
  const l: string[] = [];
  if (site.program.some((p) => !are(p.ore))) l.push("Programul de funcționare");
  if (!are(site.facebook.url)) l.push("Link-ul paginii de Facebook");
  if (!are(site.email)) l.push("Adresa de email");
  if (!are(site.firma.denumire) || !are(site.firma.cui)) l.push("Datele firmei (denumire, CUI, Reg. Com.)");
  if (!are(site.adresa.codPostal)) l.push("Codul poștal");
  if (!are(despre.specialitati)) l.push("Specialitățile casei și povestea locului");
  if (meniu.some((c) => c.produse.some((p) => !are(p.nume) || !are(p.pret)))) l.push("Meniul: preparate, gramaje și prețuri");
  if (camere.some((c) => !are(c.tip) || !are(c.pret))) l.push("Camerele: tipuri, număr, dotări, tarife");
  if (Object.values(cazareInfo).some((v) => !are(v))) l.push("Check-in / check-out, parcare, mic dejun");
  if (!are(evenimente.capacitate) || !are(evenimente.meniuri)) l.push("Capacitatea sălii și meniurile pentru evenimente");
  if (Object.values(imagini).some((v) => !v)) l.push("Fotografii reale: fațadă, sală, preparate, camere");
  if (!site.formspreeEndpoint) l.push("Email-ul pe care să vină rezervările");
  return l;
}

const beneficii = [
  ["Mai multe telefoane", "Butonul „Sună” e mereu la un deget distanță pe mobil, unde caută majoritatea oamenilor."],
  ["Rezervări și după program", "Cererile pentru mese, camere și evenimente vin pe email sau WhatsApp, oricând."],
  ["Mai sus pe Google", "Date structurate pentru restaurant și cazare, hartă și pagini rapide (scor Lighthouse 100)."],
  ["Imaginea pe care o merită sala", "Un site la nivelul locației, care vinde evenimentele înainte de prima vizită."],
];

export default function Propunere() {
  const l = lipsuri();
  return (
    <>
      <PageHero eyebrow="Propunere Manotek" title="Un site la nivelul locației" text={`Pregătit pentru ${site.nume}. Tot ce vedeți funcționează deja: e nevoie doar de poze și de câteva informații de la dumneavoastră.`} />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <section aria-labelledby="ben" className="grid gap-4 md:grid-cols-4">
          <h2 id="ben" className="sr-only">Ce câștigați</h2>
          {beneficii.map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-aur/20 bg-white p-6">
              <h3 className="font-serif text-xl text-cioco">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </section>

        <section aria-labelledby="pachete" className="mt-12">
          <h2 id="pachete" className="font-serif text-3xl font-semibold text-cioco">Pachete</h2>
          <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">
            {pachete.map((p) => (
              <div key={p.nume} className={`relative flex flex-col rounded-3xl p-7 ${p.recomandat ? "bg-cioco text-ivoriu shadow-2xl md:-my-3" : "border border-aur/20 bg-white"}`}>
                {p.recomandat && <span className="absolute -top-3 left-7 rounded-full bg-aur px-3 py-1 text-[11px] font-semibold tracking-wider text-cioco-2 uppercase">Recomandat</span>}
                <h3 className="font-serif text-2xl">{p.nume}</h3>
                <p className={`mt-1 text-sm ${p.recomandat ? "text-crem/85" : "text-muted"}`}>{p.pentru}</p>
                <p className="mt-5 font-serif text-3xl">{p.pret || "Preț la discuție"}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.include.map((i) => <li key={i} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-aur" />{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {l.length > 0 && (
          <section aria-labelledby="nevoie" className="mt-12 rounded-3xl bg-crem p-7 sm:p-9">
            <h2 id="nevoie" className="font-serif text-3xl font-semibold text-cioco">De la dumneavoastră avem nevoie de</h2>
            <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {l.map((x) => <li key={x} className="flex gap-3 text-sm"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-aur" />{x}</li>)}
            </ul>
          </section>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className={btnDark}>Înapoi la site</Link>
          <Link href="/#rezervare" className={btnGhost}>Testați formularul de rezervare</Link>
        </div>
      </div>
    </>
  );
}
