import Link from "next/link";
import { despre, evenimente, site } from "@/content/site";
import { T } from "@/components/T";
import { Placeholder } from "@/components/Placeholder";
import { RequestForm } from "@/components/RequestForm";
import { MapEmbed } from "@/components/MapEmbed";
import { MenuList, RoomCards, SectionTitle, callHref } from "@/components/Sections";

export default function Home() {
  const a = site.adresa;
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bordo-2 via-bordo to-lemn text-crem">
        <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_80%_20%,#fff_0,transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-semibold tracking-widest text-crem/85 uppercase">Tecuci · din {site.anInfiintare}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">{site.nume}</h1>
            <p className="mt-5 text-lg text-crem/90">{site.slogan}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={callHref} className="rounded-lg bg-crem px-6 py-3 font-semibold text-bordo shadow hover:bg-white">Sună acum</a>
              <a href="#rezervare" className="rounded-lg border-2 border-crem/80 px-6 py-3 font-semibold text-crem hover:bg-crem/10">Rezervă o masă</a>
            </div>
            <p className="mt-6 text-sm text-crem/85">★ {site.google.rating} pe Google, din {site.google.recenzii}</p>
          </div>
          {/* Înlocuiește cu o fotografie reală a localului */}
          <Placeholder label="Fotografie restaurant" className="aspect-[4/3] shadow-2xl" />
        </div>
      </section>

      {/* DESPRE */}
      <section aria-labelledby="despre" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="reveal">
            <SectionTitle eyebrow="Despre noi" title={despre.titlu} id="despre" />
            {despre.paragrafe.map((p, i) => <p key={i} className="mt-4 leading-relaxed text-muted"><T>{p}</T></p>)}
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <Placeholder label="Sala de mese" className="aspect-square" />
            <Placeholder label="Bucătăria" icon="glass" className="mt-8 aspect-square" />
          </div>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {despre.repere.map((r) => (
            <li key={r.eticheta} className="reveal rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="font-serif text-2xl font-bold text-bordo">{r.valoare}</p>
              <p className="mt-1 text-sm text-muted">{r.eticheta}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* MENIU */}
      <section aria-labelledby="meniu" className="bg-crem-2 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle eyebrow="Bucătărie românească" title="Din meniul nostru" id="meniu" />
          <MenuList limit={2} />
          <Link href="/meniu/" className="mt-10 inline-block rounded-lg bg-bordo px-6 py-3 font-semibold text-white hover:bg-bordo-2">Vezi meniul complet</Link>
        </div>
      </section>

      {/* CAZARE */}
      <section aria-labelledby="cazare" className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle eyebrow="Cazare în Tecuci" title="Camere pentru oaspeți" id="cazare" />
        <RoomCards />
        <Link href="/cazare/" className="mt-10 inline-block font-semibold text-bordo underline">Detalii despre cazare →</Link>
      </section>

      {/* EVENIMENTE */}
      <section aria-labelledby="evenimente" className="bg-ink py-20 text-crem">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div className="reveal">
            <p className="text-sm font-semibold tracking-widest text-crem/80 uppercase">Evenimente</p>
            <h2 id="evenimente" className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{evenimente.titlu}</h2>
            <p className="mt-4 text-crem/85"><T>{evenimente.intro}</T></p>
            <ul className="mt-8 space-y-4">
              {evenimente.tipuri.map((e) => (
                <li key={e.titlu} className="rounded-xl border border-crem/15 p-5">
                  <h3 className="font-serif text-xl">{e.titlu}</h3>
                  <p className="mt-1 text-sm text-crem/85"><T>{e.text}</T></p>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl bg-crem p-6 text-ink shadow-xl sm:p-8">
            <h3 className="mb-6 font-serif text-2xl text-bordo">Cere o ofertă</h3>
            <RequestForm kind="eveniment" />
          </div>
        </div>
      </section>

      {/* REZERVARE MASĂ */}
      <section aria-labelledby="rezervare" className="mx-auto max-w-3xl px-4 py-20">
        <SectionTitle eyebrow="Rezervări" title="Rezervă o masă" id="rezervare" />
        <div className="reveal rounded-2xl bg-white p-6 shadow-sm sm:p-8"><RequestForm kind="masa" /></div>
      </section>

      {/* RECENZII */}
      <section aria-labelledby="recenzii" className="bg-crem-2 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 id="recenzii" className="font-serif text-3xl font-bold text-bordo">Ce spun oaspeții</h2>
          <p className="mt-3 text-muted">{site.google.rating} din 5 pe Google, din {site.google.recenzii}.</p>
          <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="mt-6 inline-block rounded-lg bg-bordo px-6 py-3 font-semibold text-white hover:bg-bordo-2">
            Vezi recenziile pe Google<span className="sr-only"> (se deschide într-o filă nouă)</span>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section aria-labelledby="contact" className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle eyebrow="Contact" title="Vă așteptăm" id="contact" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="reveal space-y-6">
            <div>
              <h3 className="font-semibold">Adresă</h3>
              <address className="mt-1 text-muted not-italic">{a.strada}, {a.localitate}, {a.judet}</address>
            </div>
            <div>
              <h3 className="font-semibold">Telefon</h3>
              <a href={callHref} className="mt-1 inline-block text-lg font-semibold text-bordo underline">{site.telefon.afisat}</a>
            </div>
            <div>
              <h3 className="font-semibold">Program</h3>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-muted">
                {site.program.map((p) => (
                  <div key={p.zile} className="contents"><dt>{p.zile}</dt><dd><T>{p.ore}</T></dd></div>
                ))}
              </dl>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={callHref} className="rounded-lg bg-bordo px-5 py-3 font-semibold text-white hover:bg-bordo-2">Sună acum</a>
              {site.telefon.whatsapp && (
                <a href={`https://wa.me/${site.telefon.whatsapp}`} target="_blank" rel="noopener" className="rounded-lg border-2 border-[#1e7a46] px-5 py-3 font-semibold text-[#145c33] hover:bg-[#1e7a46]/10">WhatsApp</a>
              )}
              <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="rounded-lg border-2 border-lemn/40 px-5 py-3 font-semibold text-lemn hover:bg-crem-2">Direcții</a>
            </div>
          </div>
          <div className="reveal"><MapEmbed /></div>
        </div>
      </section>
    </>
  );
}
