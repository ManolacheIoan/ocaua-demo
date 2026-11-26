import type { Metadata } from "next";
import { meniu } from "@/content/site";
import { CtaBand, MenuList, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Meniu",
  description: "Meniul restaurantului Ocaua lui Cuza din Tecuci: ciorbe, feluri principale, grătar, deserturi și băuturi.",
  alternates: { canonical: "meniu/" },
};

export default function MeniuPage() {
  return (
    <>
      <PageHero eyebrow="Bucătărie românească" title="Meniu" text="Ciorbe, preparate gătite în casă, grătar și deserturi. Pentru meniul zilei și comenzi, sunați-ne." />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <nav aria-label="Categorii meniu" className="mb-8 flex flex-wrap gap-2">
          {meniu.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-aur/30 bg-white px-4 py-2 text-sm font-medium transition hover:border-aur-text hover:text-aur-text">{c.titlu}</a>
          ))}
        </nav>
        <MenuList level={2} />
      </div>
      <CtaBand />
    </>
  );
}
