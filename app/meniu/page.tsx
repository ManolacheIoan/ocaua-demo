import type { Metadata } from "next";
import Link from "next/link";
import { meniu } from "@/content/site";
import { MenuList, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Meniu",
  description: "Meniul restaurantului Ocaua lui Cuza din Tecuci: ciorbe, feluri principale, grătar, deserturi și băuturi.",
  alternates: { canonical: "meniu/" },
};

export default function MeniuPage() {
  return (
    <>
      <PageHero title="Meniu" text="Bucătărie românească. Prețurile și gramajele se actualizează direct din fișierul de conținut." />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <nav aria-label="Categorii meniu" className="mb-10 flex flex-wrap gap-2">
          {meniu.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-lemn/30 bg-white px-4 py-2 text-sm font-medium hover:border-bordo hover:text-bordo">{c.titlu}</a>
          ))}
        </nav>
        <MenuList />
        <Link href="/#rezervare" className="mt-12 inline-block rounded-lg bg-bordo px-6 py-3 font-semibold text-white hover:bg-bordo-2">Rezervă o masă</Link>
      </div>
    </>
  );
}
