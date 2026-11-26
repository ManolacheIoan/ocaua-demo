import Link from "next/link";
import { camere, meniu, site } from "@/content/site";
import { T } from "./T";
import { RoomDialogButton } from "./RoomDialogButton";
import { Placeholder } from "./Placeholder";

export function SectionTitle({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold tracking-widest text-lemn uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-serif text-3xl font-bold text-bordo sm:text-4xl">{title}</h2>
      <div aria-hidden="true" className="mt-4 h-px w-20 bg-gradient-to-r from-lemn-2 to-transparent" />
    </div>
  );
}

export function MenuList({ limit, level = 3 }: { limit?: number; level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {meniu.map((c) => (
        <section key={c.id} id={c.id} aria-labelledby={`h-${c.id}`} className="reveal rounded-2xl border border-lemn/15 bg-white p-6 shadow-sm">
          <H id={`h-${c.id}`} className="font-serif text-2xl text-bordo">{c.titlu}</H>
          <ul className="mt-4 divide-y divide-lemn/10">
            {c.produse.slice(0, limit).map((p, i) => (
              <li key={i} className="flex items-start justify-between gap-4 py-3">
                <div>
                  <p className="font-medium"><T>{p.nume}</T></p>
                  {p.descriere && <p className="mt-0.5 text-sm text-muted"><T>{p.descriere}</T></p>}
                </div>
                <p className="shrink-0 font-semibold text-lemn"><T>{p.pret}</T></p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function RoomCards({ level = 3 }: { level?: 2 | 3 }) {
  const H = level === 2 ? "h2" : "h3";
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {camere.map((c, i) => (
        <article key={i} className="reveal flex flex-col overflow-hidden rounded-2xl border border-lemn/15 bg-white shadow-sm">
          <Placeholder label="Foto cameră" icon="bed" className="aspect-[4/3] rounded-none" />
          <div className="flex flex-1 flex-col p-6">
            <H className="font-serif text-xl text-bordo"><T>{c.tip}</T></H>
            <p className="mt-2 text-sm text-muted"><T>{c.descriere}</T></p>
            <p className="mt-4 text-sm font-semibold">Dotări</p>
            <ul className="mt-1 list-inside list-disc text-sm text-muted">
              {c.dotari.map((d, j) => <li key={j}><T>{d}</T></li>)}
            </ul>
            <p className="mt-4 mb-5 text-sm">Preț / noapte: <strong className="text-lemn"><T>{c.pret}</T></strong></p>
            <div className="mt-auto"><RoomDialogButton room={c.tip} /></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gradient-to-br from-bordo-2 to-lemn px-4 py-16 text-crem">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="text-sm text-crem/85"><Link href="/" className="underline">Acasă</Link> / {title}</nav>
        <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-crem/90">{text}</p>
      </div>
    </div>
  );
}

export const callHref = `tel:${site.telefon.tel}`;
