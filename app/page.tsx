import Link from "next/link";
import { ArrowRight, CalendarCheck, Clock, MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react";
import { are, arataLipsuri, despre, evenimente, site } from "@/content/site";
import { T } from "@/components/T";
import { Photo } from "@/components/Placeholder";
import { Booking } from "@/components/Booking";
import { Gallery } from "@/components/Gallery";
import { MapEmbed } from "@/components/MapEmbed";
import { Ornament, Stars } from "@/components/Ornament";
import { Eyebrow, I, MenuTiles, RoomCards, SectionTitle, ani, btnDark, btnGhost, btnGhostLight, btnLight, callHref, waHref } from "@/components/Sections";

const piloni = [
  { titlu: "Restaurant", text: "Bucătărie românească, pentru mesele de zi cu zi și pentru cele de duminică.", href: "/meniu/", cta: "Vezi meniul", foto: "mancare" as const },
  { titlu: "Evenimente", text: "Sală elegantă pentru botezuri, aniversări și mese festive.", href: "/#evenimente", cta: "Descoperă sala", foto: "sala" as const },
  { titlu: "Cazare", text: "Camere pentru oaspeți, la aceeași adresă cu restaurantul.", href: "/cazare/", cta: "Vezi camerele", foto: "camera" as const },
];

export default function Home() {
  const a = site.adresa;
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-cioco-2 text-ivoriu">
        <Photo name="hero" priority badge={false} sizes="100vw" className="absolute! inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(36_21_14/.94)_0%,rgb(36_21_14/.78)_45%,rgb(36_21_14/.25)_100%)]" />
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-28">
          <Eyebrow light>{`Tecuci · din ${site.anInfiintare}`}</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-serif text-[2.9rem] leading-[1.02] font-semibold sm:text-7xl">
            Ocaua lui Cuza
            <span className="mt-3 block text-2xl font-normal text-sampanie italic sm:text-[2.1rem]">restaurant, cazare și evenimente</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-crem/90">
            Masa de duminică, botezul celui mic sau o noapte de cazare în Tecuci. Din {site.anInfiintare}, la aceeași adresă.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={callHref} className={btnLight}><I icon={Phone} />Sună acum</a>
            <a href="#rezervare-masa" className={btnGhostLight}><I icon={CalendarCheck} />Rezervă o masă</a>
          </div>
          <p className="mt-6 text-sm text-crem/85">sau sunați direct: <a href={callHref} className="font-semibold text-ivoriu underline-offset-4 hover:underline">{site.telefon.afisat}</a></p>
        </div>
        <span className="absolute right-4 bottom-20 rounded-full bg-cioco-2/60 px-2.5 py-1 text-[10px] tracking-wide text-crem/90 backdrop-blur-sm sm:bottom-24">Foto ilustrativă</span>
      </section>

      {/* BARA DE ÎNCREDERE — date reale */}
      <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-5">
        <dl className="grid grid-cols-3 divide-x divide-aur/20 rounded-3xl border border-aur/20 bg-ivoriu shadow-[0_24px_50px_-30px_rgb(36_21_14/.45)]">
          <div className="flex flex-col-reverse px-3 py-5 text-center sm:px-6">
            <dt className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">pe Google, din peste 660 de recenzii</dt>
            <dd className="flex items-center justify-center gap-2 font-serif text-2xl text-cioco sm:text-3xl">{site.google.rating}<Star aria-hidden="true" className="h-5 w-5 text-aur" fill="currentColor" strokeWidth={0} /></dd>
          </div>
          <div className="flex flex-col-reverse px-3 py-5 text-center sm:px-6">
            <dt className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">firmă locală, din {site.anInfiintare}</dt>
            <dd className="font-serif text-2xl text-cioco sm:text-3xl">{ani} de ani</dd>
          </div>
          <div className="flex flex-col-reverse px-3 py-5 text-center sm:px-6">
            <dt className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">restaurant, cazare și evenimente</dt>
            <dd className="font-serif text-2xl text-cioco sm:text-3xl">3 în 1</dd>
          </div>
        </dl>
      </div>

      {/* CE OFERIM */}
      <section aria-labelledby="oferim" className="mx-auto max-w-6xl px-5 pt-16 pb-16">
        <h2 id="oferim" className="sr-only">Ce oferim</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {piloni.map((p) => (
            <Link key={p.titlu} href={p.href} className="reveal lift zoom group overflow-hidden rounded-3xl border border-aur/20 bg-white">
              <Photo name={p.foto} badge={false} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[16/10]" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-cioco">{p.titlu}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                <p className="btn-arrow mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-aur-text">{p.cta}<I icon={ArrowRight} /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESPRE */}
      <section aria-labelledby="despre" className="border-y border-aur/15 bg-crem">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
          <div className="reveal grid grid-cols-5 gap-4">
            <Photo name="fatada" alt="Loc pentru fotografia fațadei Ocaua lui Cuza" icon="building" label="Fațada clădirii" className="col-span-3 aspect-[3/4] rounded-3xl" />
            <div className="col-span-2 flex flex-col gap-4 pt-10">
              <Photo name="masa" badge={false} sizes="20vw" className="aspect-[3/4] rounded-3xl" />
              <div className="rounded-3xl bg-cioco p-5 text-center text-ivoriu">
                <p className="font-serif text-4xl">{site.anInfiintare}</p>
                <p className="mt-1 text-[10px] tracking-[.2em] text-sampanie uppercase">anul înființării</p>
              </div>
            </div>
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="Despre noi" title={despre.titlu} id="despre" />
            {despre.paragrafe.map((p, i) => <p key={i} className="mt-4 text-[1.05rem] leading-relaxed text-muted first:mt-0"><T>{p}</T></p>)}
            {(arataLipsuri || are(despre.specialitati)) && <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">Specialitățile casei: <T>{despre.specialitati}</T></p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/meniu/" className={btnDark}>Vezi meniul<I icon={ArrowRight} /></Link>
              <a href="#galerie" className={btnGhost}>Galerie foto</a>
            </div>
          </div>
        </div>
      </section>

      {/* EVENIMENTE */}
      <section aria-labelledby="evenimente" className="on-dark relative overflow-hidden bg-cioco text-ivoriu">
        <div className="damask absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[.9fr_1.1fr] md:py-20">
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div aria-hidden="true" className="arch absolute -inset-3 border border-sampanie/40" />
            <Photo name="sala" sizes="(min-width: 768px) 30vw, 90vw" className="arch aspect-[4/5] w-full" />
          </div>
          <div className="reveal">
            <SectionTitle light eyebrow="Evenimente" title="Momentele importante, în sala potrivită" id="evenimente" lead={evenimente.intro} className="mb-8" />
            <ul className="grid gap-3 sm:grid-cols-3">
              {evenimente.tipuri.map((e) => (
                <li key={e.titlu} className="rounded-2xl border border-sampanie/25 bg-white/5 p-5 transition hover:border-sampanie/50 hover:bg-white/10">
                  <h3 className="font-serif text-xl text-ivoriu">{e.titlu}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-crem/85">{e.text}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-sampanie/20 pt-5 text-sm">
              <div><dt className="text-[11px] tracking-[.2em] text-sampanie uppercase">Capacitate sală</dt><dd className="mt-1 text-crem/90"><T>{evenimente.capacitate}</T></dd></div>
              <div><dt className="text-[11px] tracking-[.2em] text-sampanie uppercase">Meniuri eveniment</dt><dd className="mt-1 text-crem/90"><T>{evenimente.meniuri}</T></dd></div>
            </dl>
            <ol className="mt-7 grid gap-4 sm:grid-cols-3">
              {["Ne spuneți data și numărul de invitați", "Stabilim împreună meniul și aranjamentele", "Vă bucurați de eveniment, noi ne ocupăm de rest"].map((t, i) => (
                <li key={t} className="flex gap-3 text-sm text-crem/90">
                  <span className="font-serif text-2xl leading-none text-sampanie">{i + 1}</span>{t}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rezervare-eveniment" className={btnLight}>Cere o ofertă<I icon={ArrowRight} /></a>
              <a href={callHref} className={btnGhostLight}><I icon={Phone} />{site.telefon.afisat}</a>
            </div>
          </div>
        </div>
      </section>

      {/* MENIU */}
      <section aria-labelledby="meniu" className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-x-6">
          <SectionTitle eyebrow="Bucătărie românească" title="Din meniul casei" id="meniu" />
          <div className="mb-10 hidden lg:block"><Link href="/meniu/" className={btnGhost}>Meniul complet<I icon={ArrowRight} /></Link></div>
        </div>
        <MenuTiles />
        <div className="mt-6 lg:hidden"><Link href="/meniu/" className={btnGhost}>Meniul complet<I icon={ArrowRight} /></Link></div>
      </section>

      {/* CAZARE */}
      <section aria-labelledby="cazare" className="border-y border-aur/15 bg-crem">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-x-6">
            <SectionTitle eyebrow="Cazare în Tecuci" title="Rămâneți peste noapte" id="cazare" lead="Camere pentru oaspeți, la aceeași adresă cu restaurantul. Potrivite pentru invitații de la evenimente și pentru drumuri prin Tecuci." />
            <div className="mb-10 hidden lg:block"><Link href="/cazare/" className={btnGhost}>Detalii cazare<I icon={ArrowRight} /></Link></div>
          </div>
          <RoomCards />
          <div className="mt-6 lg:hidden"><Link href="/cazare/" className={btnGhost}>Detalii cazare<I icon={ArrowRight} /></Link></div>
        </div>
      </section>

      {/* GALERIE */}
      <section aria-labelledby="galerie" className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle eyebrow="Galerie" title="Atmosfera de la Ocaua" id="galerie" />
        <Gallery items={[
          { k: "sala", span: "col-span-2 row-span-2" }, { k: "platou" }, { k: "ciorba" },
          { k: "gratar", span: "row-span-2" }, { k: "vin", span: "row-span-2" }, { k: "ballroom", span: "col-span-2" },
          { k: "desert" }, { k: "hero", span: "md:col-span-2" },
        ]} />
      </section>

      {/* RECENZII — doar nota reală */}
      <section aria-labelledby="recenzii" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="reveal flex flex-col items-center gap-6 rounded-3xl border border-aur/25 bg-white px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:text-left">
          <div className="flex items-center gap-5">
            <p className="font-serif text-6xl leading-none text-cioco">{site.google.rating}</p>
            <div>
              <Stars className="text-aur" />
              <h2 id="recenzii" className="mt-1 font-serif text-xl text-cioco">Nota oaspeților pe Google</h2>
              <p className="text-sm text-muted">{site.google.rating} din 5, din {site.google.recenzii}</p>
            </div>
          </div>
          <a href={site.google.mapsUrl} target="_blank" rel="noopener" className={btnDark}>
            Vezi recenziile pe Google<I icon={ArrowRight} /><span className="sr-only"> (se deschide într-o filă nouă)</span>
          </a>
        </div>
      </section>

      {/* REZERVARE + CONTACT */}
      <section aria-labelledby="rezervare" className="relative overflow-hidden bg-crem">
        <span id="rezervare-masa" aria-hidden="true" className="absolute top-0" />
        <span id="rezervare-cazare" aria-hidden="true" className="absolute top-0" />
        <span id="rezervare-eveniment" aria-hidden="true" className="absolute top-0" />
        <div className="damask absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-6 px-5 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="reveal rounded-3xl border border-aur/20 bg-white p-6 shadow-[0_30px_60px_-40px_rgb(58_36_25/.5)] sm:p-9">
            <Eyebrow>Rezervări</Eyebrow>
            <h2 id="rezervare" className="mt-3 font-serif text-3xl font-semibold text-cioco sm:text-4xl">Rezervați în mai puțin de un minut</h2>
            <p className="mt-2 mb-7 text-sm text-muted">Alegeți ce doriți, completați câteva detalii și vă confirmăm telefonic.</p>
            <Booking />
          </div>
          <div id="contact" className="reveal flex flex-col gap-5">
            <div className="on-dark rounded-3xl bg-cioco p-7 text-ivoriu">
              <Eyebrow light>Contact</Eyebrow>
              <a href={callHref} className="mt-3 inline-flex items-center gap-3 font-serif text-3xl hover:text-sampanie"><I icon={Phone} className="h-6 w-6 text-sampanie" />{site.telefon.afisat}</a>
              <p className="mt-4 flex gap-3 text-sm text-crem/90"><I icon={MapPin} className="mt-0.5 h-4 w-4 shrink-0 text-sampanie" /><span>{a.strada}<br />{a.localitate}, {a.judet}</span></p>
              <div className="mt-4 flex gap-3 border-t border-sampanie/20 pt-4 text-sm text-crem/90">
                <I icon={Clock} className="mt-0.5 h-4 w-4 shrink-0 text-sampanie" />
                <dl className="grid flex-1 grid-cols-[auto_1fr] gap-x-5 gap-y-1">
                  {site.program.map((p) => <div key={p.zile} className="contents"><dt>{p.zile}</dt><dd><T>{p.ore}</T></dd></div>)}
                </dl>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {waHref && <a href={`${waHref}?text=${encodeURIComponent(`Bună ziua! Aș dori informații despre ${site.numeScurt}.`)}`} target="_blank" rel="noopener" className={btnGhostLight}><I icon={MessageCircle} />WhatsApp</a>}
                <a href={site.google.mapsUrl} target="_blank" rel="noopener" className={btnGhostLight}><I icon={Navigation} />Direcții</a>
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
        <Ornament className="relative mx-auto pb-8" />
      </section>
    </>
  );
}
