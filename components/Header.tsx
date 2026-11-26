import Link from "next/link";
import { nav, site } from "@/content/site";

export function DemoBand() {
  if (!site.bandaDemo) return null;
  return (
    <div className="bg-ink px-4 py-1.5 text-center text-xs text-crem/90">{site.bandaDemo}</div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-lemn/15 bg-crem/95 backdrop-blur">
      <a href="#continut" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-bordo focus:px-3 focus:py-2 focus:text-white">
        Sari la conținut
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-serif text-xl font-bold text-bordo">
          {site.numeScurt}
        </Link>
        <nav aria-label="Navigare principală" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-bordo">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${site.telefon.tel}`} className="hidden rounded-lg bg-bordo px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bordo-2 md:inline-block">
          {site.telefon.afisat}
        </a>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-lemn/30 px-3 py-2 text-sm font-medium">Meniu ☰</summary>
          <nav aria-label="Navigare mobil" className="absolute right-0 mt-2 w-48 rounded-xl border border-lemn/15 bg-white p-2 shadow-lg">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block rounded-lg px-3 py-2 hover:bg-crem-2">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-lemn/15 bg-crem/95 p-2 backdrop-blur md:hidden">
      <a href={`tel:${site.telefon.tel}`} className="flex-1 rounded-lg bg-bordo py-3 text-center font-semibold text-white">
        📞 Sună: {site.telefon.afisat}
      </a>
    </div>
  );
}
