import { preload } from "react-dom";
import { Building2, BedDouble, ImageIcon, UtensilsCrossed, Wine, type LucideIcon } from "lucide-react";
import { imagini } from "@/content/site";
import { stock, type StockKey } from "@/content/images";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const icons = { building: Building2, bed: BedDouble, plate: UtensilsCrossed, glass: Wine, image: ImageIcon } satisfies Record<string, LucideIcon>;

type Props = {
  name: StockKey | "fatada";
  alt?: string;
  className?: string;
  /** atribut sizes pentru srcset (ex. "(min-width: 1024px) 50vw, 100vw") */
  sizes?: string;
  priority?: boolean;
  icon?: keyof typeof icons;
  label?: string;
  badge?: boolean;
};

/**
 * Imagine: 1) poza reală din public/poze (imagini[name]), 2) foto ilustrativă Unsplash (WebP responsive),
 * 3) placeholder premium la dimensiunea finală. Containerul (className) stabilește dimensiunea/raportul.
 */
export function Photo({ name, alt, className = "", sizes = "100vw", priority = false, icon = "image", label, badge = true }: Props) {
  const real = imagini[name];
  const s = name in stock ? stock[name as StockKey] : undefined;
  const img = "absolute inset-0 h-full w-full object-cover";
  const load = { loading: priority ? ("eager" as const) : ("lazy" as const), fetchPriority: priority ? ("high" as const) : ("auto" as const), decoding: "async" as const };

  if (real || s) {
    const srcSet = [640, 1024, 1600].map((w) => `${base}/images/${name}-${w}.webp ${w}w`).join(", ");
    // imaginea principală (LCP) se preîncarcă din <head>, cu prioritate mare
    if (priority && !real) preload(`${base}/images/${name}-1024.webp`, { as: "image", imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: "high" });
    return (
      <div className={`relative overflow-hidden bg-crem-2 ${className}`}>
        {real ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`${base}/poze/${real}`} alt={alt ?? s?.alt ?? ""} className={img} {...load} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${base}/images/${name}-1024.webp`}
            srcSet={srcSet}
            sizes={sizes} width={s!.w} height={s!.h} alt={alt ?? s!.alt} className={img} {...load}
          />
        )}
        {!real && badge && (
          <span className="absolute right-3 bottom-3 rounded-full bg-cioco-2/70 px-2.5 py-1 text-[10px] tracking-wide text-ivoriu">Foto ilustrativă</span>
        )}
      </div>
    );
  }

  const Icon = icons[icon];
  return (
    <div role="img" aria-label={alt ?? "Loc pentru fotografie"} className={`relative flex items-center justify-center overflow-hidden bg-[radial-gradient(120%_90%_at_30%_15%,#fffaf2_0%,#ecdfca_55%,#d9c3a0_100%)] text-aur-text ${className}`}>
      <div className="damask absolute inset-0 opacity-70" />
      <div className="absolute inset-3 rounded-[inherit] border border-aur/40" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Icon aria-hidden="true" className="h-9 w-9" strokeWidth={1} />
        {label && <span className="font-serif text-lg text-cioco">{label}</span>}
        <span className="text-[11px] tracking-[.18em] uppercase">Foto — se înlocuiește cu poza reală</span>
      </div>
    </div>
  );
}
