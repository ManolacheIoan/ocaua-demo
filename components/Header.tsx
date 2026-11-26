import Link from "next/link";
import { nav, site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function DemoBand() {
  if (!site.bandaDemo) return null;
  return (
    <div className="bg-cioco-2 px-4 py-1.5 text-center text-[11px] tracking-wide text-sampanie">
      {site.bandaDemo} · <Link href="/propunere/" className="underline underline-offset-2">detalii propunere</Link>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-aur/60 font-serif text-lg text-aur-text">O</span>
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold text-cioco">{site.numeScurt}</span>
        <span className="block text-[10px] tracking-[.25em] text-muted uppercase">Restaurant · Cazare</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-aur/20 bg-ivoriu/90 backdrop-blur-md">
      <a href="#continut" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-cioco focus:px-3 focus:py-2 focus:text-white">Sari la conținut</a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo />
        <nav aria-label="Navigare principală" className="hidden lg:block">
          <ul className="flex gap-7 text-[13px] font-medium tracking-wide text-ink/85">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="transition-colors hover:text-aur-text">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.telefon.tel}`} className="text-sm font-semibold text-cioco hover:text-aur-text">{site.telefon.afisat}</a>
          <Link href="/#rezervare" className="rounded-full bg-cioco px-5 py-2.5 text-sm font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2">Rezervă</Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_auto_auto] gap-2 border-t border-aur/20 bg-ivoriu/95 p-2 backdrop-blur lg:hidden">
      <a href={`tel:${site.telefon.tel}`} className="rounded-full bg-cioco py-3 text-center text-sm font-semibold text-ivoriu">Sună · {site.telefon.afisat}</a>
      {site.telefon.whatsapp && <a href={`https://wa.me/${site.telefon.whatsapp}`} target="_blank" rel="noopener" className="rounded-full border border-[#1e7a46] px-4 py-3 text-sm font-semibold text-[#145c33]">WhatsApp</a>}
      <Link href="/#rezervare" className="rounded-full border border-aur/60 px-4 py-3 text-sm font-semibold text-cioco">Rezervă</Link>
    </div>
  );
}
