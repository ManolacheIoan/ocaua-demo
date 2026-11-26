"use client";
import { useEffect, useState } from "react";
import { meniu } from "@/content/site";
import { MenuCategory } from "./Sections";

/** Meniu filtrabil pe categorii; link-urile /meniu/#ciorbe deschid direct categoria. */
export function MenuFilter() {
  const [f, setF] = useState<string>("toate");
  useEffect(() => {
    const sync = () => { const h = location.hash.slice(1); if (meniu.some((c) => c.id === h)) setF(h); };
    const t = window.setTimeout(sync, 0);
    window.addEventListener("hashchange", sync);
    return () => { window.clearTimeout(t); window.removeEventListener("hashchange", sync); };
  }, []);
  const opts = [{ id: "toate", titlu: "Toate" }, ...meniu];
  const shown = f === "toate" ? meniu : meniu.filter((c) => c.id === f);
  return (
    <>
      <div role="group" aria-label="Filtrează meniul" className="sticky top-[4.4rem] z-20 -mx-5 mb-8 flex gap-2 overflow-x-auto bg-ivoriu/95 px-5 py-3 [scrollbar-width:none]">
        {opts.map((o) => (
          <button key={o.id} type="button" aria-pressed={f === o.id} onClick={() => { setF(o.id); history.replaceState(null, "", o.id === "toate" ? location.pathname : `#${o.id}`); }}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${f === o.id ? "border-cioco bg-cioco text-ivoriu" : "border-aur/30 bg-white text-ink hover:border-aur-text hover:text-aur-text"}`}>
            {o.titlu}
          </button>
        ))}
      </div>
      <div className="grid gap-6">
        {shown.map((c) => <MenuCategory key={c.id} c={c} idx={meniu.indexOf(c)} />)}
      </div>
    </>
  );
}
