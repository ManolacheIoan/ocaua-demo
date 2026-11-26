"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { stock, type StockKey } from "@/content/images";
import { imagini } from "@/content/site";
import { Photo } from "./Placeholder";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const src = (k: StockKey) => (imagini[k] ? `${base}/poze/${imagini[k]}` : `${base}/images/${k}-1600.webp`);

/** Galerie cu lightbox: click / Enter deschide, săgeți pentru navigare, Esc sau click pe fundal închide. */
export function Gallery({ items }: { items: { k: StockKey; span?: string }[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState(0);
  const n = items.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);
  const open = (x: number) => { setI(x); ref.current?.showModal(); };

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const cur = items[i].k;
  return (
    <>
      <ul className="grid grid-flow-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 md:grid-cols-4">
        {items.map((it, x) => (
          <li key={it.k} className={it.span ?? ""}>
            <button type="button" onClick={() => open(x)} className="reveal zoom group relative block h-full w-full overflow-hidden rounded-2xl text-left">
              <Photo name={it.k} sizes="(min-width: 768px) 25vw, 50vw" className="h-full w-full" badge={false} />
              <span aria-hidden="true" className="absolute inset-0 bg-cioco-2/0 transition group-hover:bg-cioco-2/25" />
              <span aria-hidden="true" className="absolute right-3 bottom-3 grid h-9 w-9 place-items-center rounded-full bg-ivoriu/90 text-cioco opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <Expand className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <span className="sr-only">Mărește: {stock[it.k].alt}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">Fotografii ilustrative, până la ședința foto de la local.</p>
      <dialog ref={ref} aria-label="Galerie foto" onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
        className="m-auto max-h-[92vh] w-[min(94vw,72rem)] overflow-visible bg-transparent p-0 backdrop:bg-cioco-2/90">
        <figure className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src(cur)} alt={stock[cur].alt} loading="lazy" decoding="async" className="max-h-[80vh] w-full rounded-2xl object-contain" />
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-crem/90">
            <span>{stock[cur].alt}{!imagini[cur] && " · Foto ilustrativă"}</span>
            <span aria-live="polite">{i + 1} / {n}</span>
          </figcaption>
        </figure>
        <button type="button" onClick={() => ref.current?.close()} aria-label="Închide galeria" className="absolute -top-2 right-0 grid h-11 w-11 -translate-y-full place-items-center rounded-full bg-ivoriu text-cioco shadow-lg sm:-right-2 sm:translate-x-full sm:translate-y-0">
          <X className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(-1)} aria-label="Fotografia anterioară" className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivoriu/90 text-cioco shadow-lg">
          <ChevronLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Fotografia următoare" className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivoriu/90 text-cioco shadow-lg">
          <ChevronRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </dialog>
    </>
  );
}
