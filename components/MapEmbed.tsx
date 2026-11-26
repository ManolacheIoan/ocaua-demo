"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";

/** Harta Google se încarcă doar la cerere (mai rapid, fără cookie-uri terțe până la click). */
export function MapEmbed() {
  const [on, setOn] = useState(false);
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-aur/25 bg-crem damask">
      {on ? (
        <iframe title={`Hartă: ${site.nume}`} src={site.google.embedUrl} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="flex h-full w-full flex-col items-center justify-center gap-2 text-cioco transition hover:bg-crem-2/60">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-aur/40 bg-ivoriu text-aur-text"><MapPin aria-hidden="true" className="h-6 w-6" strokeWidth={1.4} /></span>
          <span className="font-semibold">Afișează harta Google</span>
          <span className="text-sm">{site.adresa.strada}, {site.adresa.localitate}</span>
        </button>
      )}
    </div>
  );
}
