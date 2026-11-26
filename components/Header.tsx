"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { nav, site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function DemoBand() {
  if (!site.bandaDemo) return null;
  return (
    <div className="bg-cioco-2 px-4 py-1.5 text-center text-[11px] tracking-wide text-sampanie">
      {site.bandaDemo} · <Link href="/propunere/" className="underline underline-offset-2 hover:text-ivoriu">detalii propunere</Link>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span aria-hidden="true" className="logo-mark grid h-11 w-11 place-items-center rounded-full border border-aur/60 bg-ivoriu font-serif text-lg text-aur-text">O</span>
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold text-cioco">{site.numeScurt}</span>
        <span className="block text-[10px] tracking-[.25em] text-muted uppercase">Restaurant · Cazare</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24)); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);
  return (
    <header data-scrolled={scrolled} className="site-header sticky top-0 z-40 border-b border-aur/20 bg-ivoriu/90">
      <a href="#continut" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-cioco focus:px-3 focus:py-2 focus:text-white">Sari la conținut</a>
      <div className="bar mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Logo />
        <nav aria-label="Navigare principală" className="hidden lg:block">
          <ul className="flex gap-7 text-[13px] font-medium tracking-wide text-ink/85">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-aur after:transition-transform hover:text-aur-text hover:after:scale-x-100">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${site.telefon.tel}`} className="inline-flex items-center gap-2 text-sm font-semibold text-cioco hover:text-aur-text">
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />{site.telefon.afisat}
          </a>
          <Link href="/#rezervare-masa" className="inline-flex items-center gap-2 rounded-full bg-cioco px-5 py-2.5 text-sm font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2">
            <CalendarCheck aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />Rezervă
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_auto] gap-2 border-t border-aur/20 bg-ivoriu/95 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <a href={`tel:${site.telefon.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-cioco py-3 text-sm font-semibold text-ivoriu">
        <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Sună acum
      </a>
      <Link href="/#rezervare-masa" className="inline-flex items-center justify-center gap-2 rounded-full border border-aur/60 bg-white py-3 text-sm font-semibold text-cioco">
        <CalendarCheck aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />Rezervă
      </Link>
      {site.telefon.whatsapp && (
        <a href={`https://wa.me/${site.telefon.whatsapp}`} target="_blank" rel="noopener" aria-label="Scrie-ne pe WhatsApp" className="grid w-12 place-items-center rounded-full border border-[#1e7a46] text-[#145c33]">
          <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
        </a>
      )}
    </div>
  );
}
