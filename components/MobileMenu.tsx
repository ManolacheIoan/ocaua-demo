"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { nav } from "@/content/site";

/** Meniu mobil: se închide la click pe link, la schimbarea paginii, la click în afară și la Esc. */
export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => ref.current?.removeAttribute("open");
  useEffect(close, [pathname]);
  useEffect(() => {
    const onDown = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) close(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);
  return (
    <details ref={ref} className="relative lg:hidden">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-aur/40 px-4 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden"><Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />Meniu</summary>
      <nav aria-label="Navigare mobil" className="absolute right-0 mt-2 w-56 rounded-2xl border border-aur/20 bg-ivoriu p-2 shadow-xl">
        <ul>
          {nav.map((n) => (
            <li key={n.href}><Link href={n.href} onClick={close} className="block rounded-xl px-4 py-2.5 hover:bg-crem">{n.label}</Link></li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
