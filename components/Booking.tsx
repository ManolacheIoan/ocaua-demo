"use client";
import { useState } from "react";
import { RequestForm, type FormKind } from "./RequestForm";

const tabs: { k: FormKind; l: string }[] = [
  { k: "masa", l: "Masă" },
  { k: "cazare", l: "Cazare" },
  { k: "eveniment", l: "Eveniment" },
];

/** Un singur loc pentru toate cererile: mai puține decizii, mai multe rezervări. */
export function Booking({ initial = "masa" }: { initial?: FormKind }) {
  const [k, setK] = useState<FormKind>(initial);
  return (
    <div>
      <div role="tablist" aria-label="Tip cerere" className="mb-6 inline-flex rounded-full border border-aur/30 bg-crem p-1">
        {tabs.map((t) => (
          <button key={t.k} role="tab" type="button" aria-selected={k === t.k} onClick={() => setK(t.k)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${k === t.k ? "bg-cioco text-ivoriu shadow" : "text-muted hover:text-cioco"}`}>
            {t.l}
          </button>
        ))}
      </div>
      <div role="tabpanel"><RequestForm key={k} kind={k} /></div>
    </div>
  );
}
