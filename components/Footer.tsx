import Link from "next/link";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { are, nav, site } from "@/content/site";
import { Ornament } from "./Ornament";
import { T } from "./T";

const ic = "mt-0.5 h-4 w-4 shrink-0 text-sampanie";

export function Footer() {
  const a = site.adresa, f = site.firma;
  return (
    <footer className="on-dark bg-cioco-2 pb-24 text-crem/85 lg:pb-0">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-2xl text-ivoriu">{site.nume}</p>
          <Ornament className="mt-3" />
          <p className="mt-3 text-sm">Restaurant, cazare și evenimente în Tecuci, din {site.anInfiintare}</p>
        </div>
        <div className="mt-10 grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Vizitați-ne</p>
            <p className="mt-3 flex gap-2.5"><MapPin aria-hidden="true" className={ic} strokeWidth={1.6} /><span>{a.strada}<br />{a.localitate}, {a.judet}</span></p>
            <a className="mt-2 inline-flex items-center gap-1.5 underline-offset-4 hover:text-ivoriu hover:underline" href={site.google.mapsUrl} target="_blank" rel="noopener">Deschide în Google Maps<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.6} /></a>
          </div>
          <div>
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Rezervări</p>
            <a className="mt-3 flex items-center gap-2.5 text-lg text-ivoriu hover:text-sampanie" href={`tel:${site.telefon.tel}`}><Phone aria-hidden="true" className={ic} strokeWidth={1.6} />{site.telefon.afisat}</a>
            {site.telefon.whatsapp && <a className="mt-2 flex items-center gap-2.5 hover:text-ivoriu" href={`https://wa.me/${site.telefon.whatsapp}`} target="_blank" rel="noopener"><MessageCircle aria-hidden="true" className={ic} strokeWidth={1.6} />WhatsApp</a>}
            <p className="mt-2">Email: <T>{site.email}</T></p>
            <p className="mt-2">Facebook: {are(site.facebook.url) ? <a className="underline" href={site.facebook.url} rel="noopener" target="_blank">{site.facebook.nume}</a> : <>{site.facebook.nume} <T>{site.facebook.url}</T></>}</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Program</p>
            <div className="mt-3 flex gap-2.5">
              <Clock aria-hidden="true" className={ic} strokeWidth={1.6} />
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                {site.program.map((p) => <div key={p.zile} className="contents"><dt>{p.zile}</dt><dd><T>{p.ore}</T></dd></div>)}
              </dl>
            </div>
          </div>
          <nav aria-label="Link-uri subsol">
            <p className="text-[11px] tracking-[.25em] text-sampanie uppercase">Explorează</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
              {nav.map((n) => <li key={n.href}><Link className="hover:text-ivoriu" href={n.href}>{n.label}</Link></li>)}
              <li><Link className="hover:text-ivoriu" href="/#galerie">Galerie</Link></li>
              <li><a className="hover:text-ivoriu" href={site.google.mapsUrl} rel="noopener" target="_blank">Recenzii Google</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-crem/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-crem/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nume} · <T>{`${f.denumire}`}</T> · CUI <T>{f.cui}</T> · Reg. Com. <T>{f.regCom}</T>
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/confidentialitate/" className="hover:text-ivoriu">Confidențialitate</Link>
            <Link href="/cookies/" className="hover:text-ivoriu">Cookies</Link>
            <a href="https://www.anpc.ro" target="_blank" rel="noopener" className="hover:text-ivoriu">ANPC</a>
            <span>Site realizat de Manotek</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
