import Link from "next/link";
import { nav, site } from "@/content/site";
import { T } from "./T";

export function Footer() {
  const a = site.adresa;
  return (
    <footer className="bg-ink pb-24 text-crem/85 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-crem">{site.nume}</p>
          <p className="mt-2 text-sm">Firmă locală din {site.anInfiintare}</p>
          <p className="mt-2 text-sm">
            Denumire firmă: <T>{site.firma.denumire}</T>
            <br />CUI: <T>{site.firma.cui}</T> · Reg. Com.: <T>{site.firma.regCom}</T>
          </p>
        </div>
        <div>
          <p className="font-semibold text-crem">Contact</p>
          <address className="mt-2 text-sm not-italic">
            {a.strada}, {a.localitate}, {a.judet}
            <br />
            <a className="underline" href={`tel:${site.telefon.tel}`}>{site.telefon.afisat}</a>
          </address>
          <p className="mt-2 text-sm">
            Facebook: {site.facebook.url.startsWith("http") ? (
              <a className="underline" href={site.facebook.url} rel="noopener">{site.facebook.nume}</a>
            ) : (
              <>{site.facebook.nume} <T>{site.facebook.url}</T></>
            )}
          </p>
        </div>
        <nav aria-label="Link-uri subsol">
          <p className="font-semibold text-crem">Link-uri</p>
          <ul className="mt-2 space-y-1 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link className="hover:underline" href={n.href}>{n.label}</Link></li>
            ))}
            <li><a className="hover:underline" href={site.google.mapsUrl} rel="noopener" target="_blank">Recenzii Google</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-crem/15 px-4 py-4 text-center text-xs">
        © {new Date().getFullYear()} {site.nume} · Site realizat de Manotek
      </div>
    </footer>
  );
}
