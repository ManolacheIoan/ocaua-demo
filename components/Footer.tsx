import Link from "next/link";
import { are, nav, site } from "@/content/site";
import { Ornament } from "./Ornament";

export function Footer() {
  const a = site.adresa, f = site.firma;
  return (
    <footer className="bg-cioco-2 pb-20 text-crem/80 lg:pb-0">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-2xl text-ivoriu">{site.nume}</p>
          <Ornament className="mt-3" />
          <p className="mt-3 text-sm">Tecuci · din {site.anInfiintare}</p>
        </div>
        <div className="mt-10 grid gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Adresă</p>
            <address className="mt-2 not-italic">{a.strada}<br />{a.localitate}, {a.judet}</address>
          </div>
          <div>
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Rezervări</p>
            <a className="mt-2 block text-lg text-ivoriu hover:text-sampanie" href={`tel:${site.telefon.tel}`}>{site.telefon.afisat}</a>
            {are(site.facebook.url) ? <a className="underline" href={site.facebook.url} rel="noopener">Facebook · {site.facebook.nume}</a> : <span>Facebook · {site.facebook.nume}</span>}
          </div>
          <nav aria-label="Link-uri subsol">
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Explorează</p>
            <ul className="mt-2 grid grid-cols-2 gap-1">
              {nav.map((n) => <li key={n.href}><Link className="hover:text-ivoriu" href={n.href}>{n.label}</Link></li>)}
              <li><a className="hover:text-ivoriu" href={site.google.mapsUrl} rel="noopener" target="_blank">Recenzii Google</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-crem/10 px-5 py-4 text-center text-xs text-crem/80">
        © {new Date().getFullYear()} {site.nume}
        {are(f.denumire) && ` · ${f.denumire}`}{are(f.cui) && ` · CUI ${f.cui}`}{are(f.regCom) && ` · ${f.regCom}`}
        {" · "}Site realizat de Manotek
      </div>
    </footer>
  );
}
