import Link from "next/link";
import { ArrowRight, BedDouble, Check, Phone, type LucideIcon } from "lucide-react";
import { are, arataLipsuri, camere, meniu, site, type CategorieMeniu } from "@/content/site";
import type { StockKey } from "@/content/images";
import { T } from "./T";
import { Ornament } from "./Ornament";
import { RoomDialogButton } from "./RoomDialogButton";
import { Photo } from "./Placeholder";

export const ani = new Date().getFullYear() - site.anInfiintare;
export const callHref = `tel:${site.telefon.tel}`;
export const waHref = site.telefon.whatsapp ? `https://wa.me/${site.telefon.whatsapp}` : "";

/** Fotografia ilustrativă pentru fiecare categorie de meniu. */
export const fotoCategorie: Record<string, StockKey> = {
  ciorbe: "ciorba", "feluri-principale": "mancare", gratar: "gratar", deserturi: "desert", bauturi: "vin",
};

export function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`text-[11px] font-semibold tracking-[.3em] uppercase ${light ? "text-sampanie" : "text-aur-text"}`}>{children}</p>;
}

export function SectionTitle({ eyebrow, title, id, center = false, light = false, lead, className = "mb-10" }: {
  eyebrow: string; title: string; id?: string; center?: boolean; light?: boolean; lead?: string; className?: string;
}) {
  return (
    <div className={`${className} ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`mt-3 font-serif text-[2rem] leading-[1.12] font-semibold sm:text-[2.6rem] ${light ? "text-ivoriu" : "text-cioco"}`}>{title}</h2>
      <Ornament className={`mt-4 ${center ? "mx-auto" : ""}`} />
      {lead && <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? "text-crem/85" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

const btn = "btn-arrow inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition focus-visible:outline-offset-4";
export const btnDark = `${btn} bg-cioco text-ivoriu shadow-sm hover:bg-cioco-2 hover:shadow-md`;
export const btnLight = `${btn} bg-ivoriu text-cioco shadow hover:bg-white`;
export const btnGhost = `${btn} border border-aur/60 bg-white/60 text-cioco hover:border-aur-text hover:bg-white`;
export const btnGhostLight = `${btn} border border-sampanie/60 text-ivoriu hover:bg-white/10`;

/** Iconiță lucide pentru butoane (decorativă). */
export function I({ icon: Icon, className = "h-4 w-4" }: { icon: LucideIcon; className?: string }) {
  return <Icon aria-hidden="true" className={className} strokeWidth={1.7} />;
}

/** Plăci cu categoriile de meniu (pe prima pagină). */
export function MenuTiles() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      {meniu.map((c, i) => (
        <li key={c.id} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
          <Link href={`/meniu/#${c.id}`} className="reveal zoom group relative block overflow-hidden rounded-3xl">
            <Photo name={fotoCategorie[c.id]} badge={false} sizes="(min-width: 1024px) 20vw, 50vw" className={i === 4 ? "aspect-[2/1] lg:aspect-[3/4]" : "aspect-[3/4]"} />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-cioco-2/90 via-cioco-2/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="font-serif text-xs text-sampanie italic">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-xl text-ivoriu sm:text-2xl">{c.titlu}</h3>
              <p className="mt-0.5 hidden text-xs text-crem/90 sm:block">{c.subtitlu}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** O categorie de meniu, cu produse. Prețurile lipsă apar ca „[de completat]”. */
export function MenuCategory({ c, idx, level = 2 }: { c: CategorieMeniu; idx: number; level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  const items = c.produse.filter((p) => arataLipsuri || are(p.nume));
  return (
    <section id={c.id} aria-labelledby={`h-${c.id}`} className="grid overflow-hidden rounded-3xl border border-aur/20 bg-white md:grid-cols-[.8fr_1.2fr]">
      <Photo name={fotoCategorie[c.id]} sizes="(min-width: 768px) 35vw, 100vw" className="aspect-[16/9] md:aspect-auto md:min-h-full" />
      <div className="p-6 sm:p-8">
        <p className="font-serif text-sm text-aur-text italic">{String(idx + 1).padStart(2, "0")}</p>
        <H id={`h-${c.id}`} className="mt-1 font-serif text-3xl text-cioco">{c.titlu}</H>
        <p className="mt-1 text-sm text-muted">{c.subtitlu}</p>
        {items.length ? (
          <ul className="mt-5 divide-y divide-aur/15">
            {items.map((p, i) => (
              <li key={i} className="flex items-baseline gap-3 py-3.5">
                <div className="min-w-0">
                  <p className="font-medium text-ink"><T>{p.nume}</T></p>
                  {p.descriere && (arataLipsuri || are(p.descriere)) && <p className="mt-0.5 text-sm text-muted"><T>{p.descriere}</T></p>}
                </div>
                <span aria-hidden="true" className="mb-1 flex-1 border-b border-dotted border-aur/40" />
                <p className="shrink-0 font-semibold text-aur-text"><T>{p.pret}</T></p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 rounded-2xl bg-crem px-4 py-3 text-sm text-muted">
            Preparatele și prețurile zilei le aflați la telefon: <a className="font-semibold text-cioco underline" href={callHref}>{site.telefon.afisat}</a>
          </p>
        )}
      </div>
    </section>
  );
}

export function RoomCards({ level = 3 }: { level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  const list = camere.filter((c) => arataLipsuri || are(c.tip));
  if (!list.length) {
    return (
      <div className="reveal grid overflow-hidden rounded-3xl border border-aur/20 bg-white md:grid-cols-2">
        <Photo name="camera" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] md:aspect-auto md:h-full" />
        <div className="p-8 sm:p-10">
          <H className="font-serif text-2xl text-cioco">Camere pentru oaspeți</H>
          <p className="mt-3 leading-relaxed text-muted">Cazare la aceeași adresă cu restaurantul. Spuneți-ne data sosirii și câte persoane sunteți, iar noi vă confirmăm disponibilitatea.</p>
          <div className="mt-7 max-w-xs"><RoomDialogButton room="Cameră" /></div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {list.map((c, i) => (
        <article key={i} className="reveal lift zoom flex flex-col overflow-hidden rounded-3xl border border-aur/20 bg-white">
          <Photo name="camera" sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3]" />
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-crem text-aur-text"><I icon={BedDouble} /></span>
              <H className="font-serif text-xl leading-snug text-cioco"><T>{c.tip}</T></H>
            </div>
            <p className="mt-3 text-sm text-muted"><T>{c.descriere}</T></p>
            <p className="mt-4 text-[11px] font-semibold tracking-[.2em] text-muted uppercase">Dotări</p>
            <ul className="mt-1.5 space-y-1 text-sm text-muted">
              {c.dotari.map((d, j) => <li key={j} className="flex items-center gap-2"><I icon={Check} className="h-3.5 w-3.5 text-aur-text" /><T>{d}</T></li>)}
            </ul>
            <p className="mt-4 border-t border-aur/15 pt-4 text-sm">Tarif / noapte: <strong className="text-aur-text"><T>{c.pret}</T></strong></p>
            <div className="mt-auto pt-5"><RoomDialogButton room={c.tip.replace(/\s*\[de completat\]/g, "")} /></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PageHero({ title, text, eyebrow, photo }: { title: string; text: string; eyebrow: string; photo?: StockKey }) {
  return (
    <div className="relative isolate overflow-hidden bg-cioco text-ivoriu">
      {photo && <Photo name={photo} priority badge={false} sizes="100vw" className="absolute! inset-0 -z-10 opacity-40" />}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-cioco-2/95 via-cioco/85 to-cioco/45" />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-xs tracking-wide text-crem/90"><Link href="/" className="hover:text-ivoriu">Acasă</Link> <span aria-hidden="true">/</span> {title}</nav>
        <p className="mt-6 text-[11px] font-semibold tracking-[.3em] text-sampanie uppercase">{eyebrow}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-6xl">{title}</h1>
        <Ornament className="mt-4" />
        <p className="mt-4 max-w-2xl text-crem/90 sm:text-lg">{text}</p>
      </div>
    </div>
  );
}

export function CtaBand({ tip = "masa" }: { tip?: "masa" | "cazare" | "eveniment" }) {
  return (
    <section aria-label="Rezervare rapidă" className="border-t border-aur/15 bg-crem">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif text-2xl text-cioco">Aveți o dată în minte?</p>
          <p className="mt-1 text-sm text-muted">Un telefon e suficient pentru o masă, o cameră sau un eveniment.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={callHref} className={btnDark}><I icon={Phone} />Sună: {site.telefon.afisat}</a>
          <Link href={`/#rezervare-${tip}`} className={btnGhost}>Cerere online<I icon={ArrowRight} /></Link>
        </div>
      </div>
    </section>
  );
}
