import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/Sections";
import { Legal } from "@/components/Legal";

export const metadata: Metadata = { title: "Politica de cookies", description: `Ce cookie-uri folosește site-ul ${site.nume}.`, alternates: { canonical: "cookies/" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informații legale" title="Cookies" text="Pe scurt: site-ul nu folosește cookie-uri proprii de marketing sau de analiză." />
      <Legal>
        <h2>Cookie-uri proprii</h2>
        <p>Site-ul nu setează cookie-uri de urmărire, publicitate sau statistici.</p>
        <h2>Servicii terțe</h2>
        <ul>
          <li><strong>Google Maps</strong>: harta se încarcă numai după ce apăsați „Afișează harta Google”. Abia atunci Google poate seta propriile cookie-uri.</li>
          <li><strong>WhatsApp</strong> și <strong>Google Maps</strong> (link-urile externe) se deschid pe site-urile lor, unde se aplică politicile acestora.</li>
        </ul>
        <h2>Cum controlați cookie-urile</h2>
        <p>Puteți șterge sau bloca cookie-urile din setările browserului. Dacă pe viitor se adaugă instrumente de analiză, această pagină și un banner de consimțământ vor fi actualizate.</p>
      </Legal>
    </>
  );
}
