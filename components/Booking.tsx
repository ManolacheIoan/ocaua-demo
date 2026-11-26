"use client";
import { useEffect, useRef, useState } from "react";
import { RequestForm, type FormKind } from "./RequestForm";

const tabs: { k: FormKind; l: string }[] = [
  { k: "masa", l: "Masă" },
  { k: "cazare", l: "Cazare" },
  { k: "eveniment", l: "Eveniment" },
];
/** Link-urile „#rezervare-eveniment”, „#rezervare-cazare” deschid direct fila potrivită. */
const fromHash = (): FormKind | null => {
  const m = location.hash.match(/^#rezervare-(masa|cazare|eveniment)$/);
  return m ? (m[1] as FormKind) : null;
};

export function Booking() {
  const [k, setK] = useState<FormKind>("masa");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    const sync = () => { const h = fromHash(); if (h) setK(h); };
    sync();
    const t = window.setTimeout(sync, 60); // după navigarea client, URL-ul se actualizează imediat după montare
    window.addEventListener("hashchange", sync);
    return () => { window.clearTimeout(t); window.removeEventListener("hashchange", sync); };
  }, []);
  function onKey(e: React.KeyboardEvent, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n = (i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setK(tabs[n].k);
    refs.current[n]?.focus();
  }
  return (
    <div>
      <div role="tablist" aria-label="Tip cerere" className="mb-6 inline-flex rounded-full border border-aur/30 bg-crem p-1">
        {tabs.map((t, i) => (
          <button key={t.k} ref={(el) => { refs.current[i] = el; }} id={`tab-${t.k}`} role="tab" type="button"
            aria-selected={k === t.k} aria-controls="panou-rezervare" tabIndex={k === t.k ? 0 : -1}
            onClick={() => setK(t.k)} onKeyDown={(e) => onKey(e, i)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${k === t.k ? "bg-cioco text-ivoriu shadow" : "text-muted hover:text-cioco"}`}>
            {t.l}
          </button>
        ))}
      </div>
      <div role="tabpanel" id="panou-rezervare" aria-labelledby={`tab-${k}`}><RequestForm key={k} kind={k} /></div>
    </div>
  );
}
