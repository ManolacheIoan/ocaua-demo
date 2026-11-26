import Link from "next/link";
import { are, arataLipsuri, camere, meniu, site } from "@/content/site";
import { T } from "./T";
import { Ornament } from "./Ornament";
import { RoomDialogButton } from "./RoomDialogButton";
import { Photo } from "./Placeholder";

export const ani = new Date().getFullYear() - site.anInfiintare;
export const callHref = `tel:${site.telefon.tel}`;

export function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`text-[11px] font-semibold tracking-[.3em] uppercase ${light ? "text-sampanie" : "text-aur-text"}`}>{children}</p>;
}

export function SectionTitle({ eyebrow, title, id, center = false, light = false, lead }: {
  eyebrow: string; title: string; id?: string; center?: boolean; light?: boolean; lead?: string;
}) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`mt-3 font-serif text-3xl leading-tight font-semibold sm:text-[2.6rem] ${light ? "text-ivoriu" : "text-cioco"}`}>{title}</h2>
      <Ornament className={`mt-4 ${center ? "mx-auto" : ""}`} />
      {lead && <p className={`mt-4 leading-relaxed ${light ? "text-crem/85" : "text-muted"}`}>{lead}</p>}
    </div>
  );
}

const btn = "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition";
export const btnDark = `${btn} bg-cioco text-ivoriu shadow-sm hover:bg-cioco-2`;
export const btnLight = `${btn} bg-ivoriu text-cioco shadow hover:bg-white`;
export const btnGhost = `${btn} border border-aur/60 text-cioco hover:bg-crem`;
export const btnGhostLight = `${btn} border border-sampanie/60 text-ivoriu hover:bg-white/10`;

/** Meniu: produsele cu date reale; dacă o categorie nu are încă produse, apare ca invitație elegantă. */
export function MenuList({ level = 3, compact = false }: { level?: 2 | 3; compact?: boolean }) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <div className={`grid gap-5 ${compact ? "grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5" : "md:grid-cols-2"}`}>
      {meniu.map((c, idx) => {
        const items = c.produse.filter((p) => arataLipsuri || are(p.nume));
        return (
          <section key={c.id} id={c.id} aria-labelledby={`h-${c.id}`} className={`reveal lift rounded-3xl border border-aur/20 bg-white ${compact ? "p-5" : "p-6"} ${compact && idx === 4 ? "col-span-2 lg:col-span-1" : ""}`}>
            <p className="font-serif text-sm text-aur-text italic">{String(idx + 1).padStart(2, "0")}</p>
            <H id={`h-${c.id}`} className="mt-1 font-serif text-2xl text-cioco">{c.titlu}</H>
            <p className="mt-1 text-sm text-muted">{c.subtitlu}</p>
            {!compact && (
              items.length ? (
                <ul className="mt-5 divide-y divide-aur/15">
                  {items.map((p, i) => (
                    <li key={i} className="flex items-baseline gap-3 py-3">
                      <div className="min-w-0">
                        <p className="font-medium"><T>{p.nume}</T></p>
                        {p.descriere && (arataLipsuri || are(p.descriere)) && <p className="mt-0.5 text-sm text-muted"><T>{p.descriere}</T></p>}
                      </div>
                      <span aria-hidden="true" className="mb-1 flex-1 border-b border-dotted border-aur/40" />
                      {(arataLipsuri || are(p.pret)) && <p className="shrink-0 font-semibold text-aur-text"><T>{p.pret}</T></p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 rounded-2xl bg-crem px-4 py-3 text-sm text-muted">
                  Preparatele și prețurile zilei le aflați la telefon: <a className="font-semibold text-cioco underline" href={callHref}>{site.telefon.afisat}</a>
                </p>
              )
            )}
          </section>
        );
      })}
    </div>
  );
}

export function RoomCards({ level = 3 }: { level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  const list = camere.filter((c) => arataLipsuri || are(c.tip));
  if (!list.length) {
    return (
      <div className="reveal grid overflow-hidden rounded-3xl border border-aur/20 bg-white md:grid-cols-2">
        <Photo slot="camera" alt="Cameră de cazare la Ocaua lui Cuza" icon="bed" className="aspect-[4/3] md:aspect-auto md:h-full" />
        <div className="p-8 sm:p-10">
          <H className="font-serif text-2xl text-cioco">Camere pentru oaspeți</H>
          <p className="mt-3 leading-relaxed text-muted">
            Cazare la aceeași adresă cu restaurantul, în Tecuci. Spuneți-ne data sosirii și câte persoane sunteți, iar noi vă confirmăm disponibilitatea și tariful.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Restaurant la aceeași adresă", "Confirmare telefonică, fără plată online", "Potrivit pentru invitații de la evenimente"].map((t) => (
              <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-aur" />{t}</li>
            ))}
          </ul>
          <div className="mt-7 max-w-xs"><RoomDialogButton room="Cameră" /></div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {list.map((c, i) => (
        <article key={i} className="reveal lift flex flex-col overflow-hidden rounded-3xl border border-aur/20 bg-white">
          <Photo slot="camera" alt={`Fotografie: ${c.tip}`} icon="bed" className="aspect-[4/3]" />
          <div className="flex flex-1 flex-col p-6">
            <H className="font-serif text-xl text-cioco"><T>{c.tip}</T></H>
            <p className="mt-2 text-sm text-muted"><T>{c.descriere}</T></p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              {c.dotari.map((d, j) => <li key={j} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1 w-1 rotate-45 bg-aur" /><T>{d}</T></li>)}
            </ul>
            {(arataLipsuri || are(c.pret)) && <p className="mt-4 text-sm">De la <strong className="text-aur-text"><T>{c.pret}</T></strong> / noapte</p>}
            <div className="mt-auto pt-5"><RoomDialogButton room={c.tip} /></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PageHero({ title, text, eyebrow }: { title: string; text: string; eyebrow: string }) {
  return (
    <div className="relative overflow-hidden bg-cioco text-ivoriu">
      <div className="damask absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-xs tracking-wide text-crem/80"><Link href="/" className="hover:text-ivoriu">Acasă</Link> <span aria-hidden="true">/</span> {title}</nav>
        <p className="mt-6 text-[11px] font-semibold tracking-[.3em] text-sampanie uppercase">{eyebrow}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
        <Ornament className="mt-4" />
        <p className="mt-4 max-w-2xl text-crem/85">{text}</p>
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section aria-label="Rezervare rapidă" className="bg-crem">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif text-2xl text-cioco">Aveți o dată în minte?</p>
          <p className="mt-1 text-sm text-muted">Un telefon e suficient pentru o masă, o cameră sau un eveniment.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={callHref} className={btnDark}>Sună: {site.telefon.afisat}</a>
          <Link href="/#rezervare" className={btnGhost}>Cerere online</Link>
        </div>
      </div>
    </section>
  );
}
