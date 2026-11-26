"use client";
import { useState } from "react";
import { site } from "@/content/site";

/** Harta Google se încarcă doar la cerere (mai rapid, fără cookie-uri terțe până la click). */
export function MapEmbed() {
  const [on, setOn] = useState(false);
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-xl border border-lemn/15 bg-crem-2 shadow-sm">
      {on ? (
        <iframe title={`Hartă: ${site.nume}`} src={site.google.embedUrl} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="flex h-full w-full flex-col items-center justify-center gap-2 text-lemn hover:bg-crem">
          <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span className="font-semibold">Afișează harta Google</span>
          <span className="text-sm">{site.adresa.strada}, {site.adresa.localitate}</span>
        </button>
      )}
    </div>
  );
}
