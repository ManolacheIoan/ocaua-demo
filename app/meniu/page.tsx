import type { Metadata } from "next";
import { og } from "@/lib";
import { CtaBand, PageHero } from "@/components/Sections";
import { MenuFilter } from "@/components/MenuFilter";

export const metadata: Metadata = {
  title: "Meniu",
  description: "Meniul restaurantului Ocaua lui Cuza din Tecuci: ciorbe, feluri principale, grătar, deserturi și băuturi. Rezervări la 0766 577 307.",
  alternates: { canonical: "meniu/" },
  openGraph: og("Meniu | Ocaua lui Cuza, Tecuci", "meniu/"),
};

export default function MeniuPage() {
  return (
    <>
      <PageHero photo="ciorba" eyebrow="Bucătărie românească" title="Meniu" text="Ciorbe, preparate gătite în casă, grătar și deserturi. Pentru meniul zilei și comenzi, sunați-ne." />
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-14">
        <MenuFilter />
      </div>
      <CtaBand />
    </>
  );
}
