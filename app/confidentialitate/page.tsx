import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/Sections";
import { Legal } from "@/components/Legal";
import { T } from "@/components/T";

export const metadata: Metadata = { title: "Politica de confidențialitate", description: `Cum prelucrează ${site.nume} datele trimise prin formularele site-ului.`, alternates: { canonical: "confidentialitate/" } };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Informații legale" title="Confidențialitate" text="Ce date colectăm prin site, de ce și cum vă puteți exercita drepturile." />
      <Legal>
        <h2>Ce date colectăm</h2>
        <p>Prin formularele de rezervare colectăm doar datele pe care ni le trimiteți: nume, telefon, data dorită, numărul de persoane și mesajul. Nu cerem date de plată.</p>
        <h2>De ce le folosim</h2>
        <p>Pentru a vă răspunde la cerere și a confirma rezervarea (temei: demersuri la cererea dumneavoastră, înainte de încheierea unui contract, art. 6 alin. (1) lit. b GDPR).</p>
        <h2>Cui le transmitem</h2>
        <ul>
          <li>Formspree, serviciul care transmite formularul pe email, dacă folosiți „Trimite cererea”.</li>
          <li>WhatsApp (Meta), dacă alegeți să trimiteți cererea prin WhatsApp.</li>
          <li>Google, doar dacă deschideți harta încorporată.</li>
        </ul>
        <h2>Cât timp le păstrăm</h2>
        <p>Cât este necesar pentru rezervare și, ulterior, cel mult <T>{"[de completat]"}</T>.</p>
        <h2>Drepturile dumneavoastră</h2>
        <p>Aveți dreptul de acces, rectificare, ștergere, restricționare, opoziție și portabilitate, precum și dreptul de a depune o plângere la ANSPDCP (dataprotection.ro). Pentru orice solicitare: telefon {site.telefon.afisat} sau email <T>{site.email}</T>.</p>
      </Legal>
    </>
  );
}
