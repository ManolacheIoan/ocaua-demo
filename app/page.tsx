import Link from "next/link";
import { are, arataLipsuri, despre, evenimente, site } from "@/content/site";
import { T } from "@/components/T";
import { Photo } from "@/components/Placeholder";
import { Booking } from "@/components/Booking";
import { MapEmbed } from "@/components/MapEmbed";
import { Ornament, Stars } from "@/components/Ornament";
import { Eyebrow, MenuList, RoomCards, SectionTitle, ani, btnDark, btnGhost, btnGhostLight, btnLight, callHref } from "@/components/Sections";

const piloni = [
  { titlu: "Restaurant", text: "Bucătărie românească pentru mesele de zi cu zi și de duminică.", href: "/meniu/", cta: "Vezi meniul", icon: "plate" as const, slot: "masa" as const },
  { titlu: "Evenimente", text: "Sală elegantă pentru botezuri, aniversări și mese festive.", href: "/#evenimente", cta: "Descoperă sala", icon: "flower" as const, slot: "sala" as const },
  { titlu: "Cazare", text: "Camere pentru oaspeți, la aceeași adresă cu restaurantul.", href: "/cazare/", cta: "Verifică disponibilitatea", icon: "bed" as const, slot: "camera" as const },
];

export default function Home() {
  const a = site.adresa;
  const program = site.program.filter((p) => arataLipsuri || are(p.ore));
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivoriu">
        <div className="damask absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-14 md:grid-cols-[1.05fr_.95fr] md:pt-14 md:pb-16">
          <div>
            <Eyebrow>{`Tecuci · din ${site.anInfiintare}`}</Eyebrow>
            <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-semibold text-cioco sm:text-6xl">
              Ocaua lui Cuza
              <span className="mt-2 block text-2xl font-normal text-aur-text italic sm:text-3xl">restaurant, cazare & evenimente</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              {site.slogan}. De {ani} de ani, locul în care Tecuciul se adună la masă, la sărbători și la momentele care contează.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={callHref} className={btnDark}>Sună acum · {site.telefon.afisat}</a>
              <a href="#rezervare-masa" className={btnGhost}>Rezervă o masă</a>
            </div>
            <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-3 rounded-full border border-aur/25 bg-white/70 py-2 pr-5 pl-2 text-sm shadow-sm transition hover:bg-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-cioco font-serif text-sm text-ivoriu">{site.google.rating}</span>
              <span className="leading-tight">
                <Stars className="text-aur" />
                <span className="block text-xs text-muted">pe Google, din {site.google.recenzii}</span>
              </span>
              <span className="sr-only">(se deschide într-o filă nouă)</span>
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div aria-hidden="true" className="arch absolute -inset-3 border border-aur/40" />
            <Photo slot="hero" alt="Sala de evenimente Ocaua lui Cuza" icon="flower" tone="dark" priority className="arch aspect-[4/5] w-full shadow-[0_30px_60px_-30px_rgb(58_36_25/.6)]" />
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-aur/25 bg-ivoriu px-5 py-3 shadow-lg sm:-left-8">
              <p className="font-serif text-3xl leading-none text-cioco">{ani}</p>
              <p className="mt-1 text-[11px] tracking-[.2em] text-muted uppercase">ani de ospitalitate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CELE TREI SERVICII */}
      <section aria-label="Ce oferim" className="border-y border-aur/15 bg-crem">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-3">
          {piloni.map((p) => (
            <Link key={p.titlu} href={p.href} className="reveal lift group overflow-hidden rounded-3xl border border-aur/20 bg-white">
              <Photo slot={p.slot} alt={p.titlu} icon={p.icon} className="aspect-[16/9]" />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-cioco">{p.titlu}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                <p className="mt-4 text-sm font-semibold text-aur-text">{p.cta} <span aria-hidden="true" className="inline-block transition group-hover:translate-x-1">→</span></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESPRE */}
      <section aria-labelledby="despre" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="reveal grid grid-cols-5 gap-4">
            <Photo slot="fatada" alt="Clădirea Ocaua lui Cuza" icon="house" className="col-span-3 aspect-[3/4] rounded-3xl" />
            <div className="col-span-2 flex flex-col gap-4 pt-10">
              <Photo slot="bucatarie" alt="Preparate din bucătăria Ocaua lui Cuza" icon="plate" className="aspect-square rounded-3xl" />
              <div className="rounded-3xl bg-cioco p-5 text-center text-ivoriu">
                <p className="font-serif text-4xl">{site.anInfiintare}</p>
                <p className="mt-1 text-[10px] tracking-[.2em] text-sampanie uppercase">anul înființării</p>
              </div>
            </div>
          </div>
          <div className="reveal">
            <SectionTitle eyebrow="Despre noi" title={despre.titlu} id="despre" />
            {despre.paragrafe.map((p, i) => <p key={i} className="mt-4 leading-relaxed text-muted first:mt-0"><T>{p}</T></p>)}
            {(arataLipsuri || are(despre.specialitati)) && <p className="mt-4 leading-relaxed text-muted">Specialitățile casei: <T>{despre.specialitati}</T></p>}
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-aur/20 pt-6">
              {despre.repere.map((r) => (
                <div key={r.eticheta}>
                  <dt className="sr-only">{r.eticheta}</dt>
                  <dd className="font-serif text-2xl text-cioco">{r.valoare}</dd>
                  <dd className="mt-1 text-xs leading-snug text-muted">{r.eticheta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* EVENIMENTE */}
      <section aria-labelledby="evenimente" className="relative overflow-hidden bg-cioco text-ivoriu">
        <div className="damask absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[.9fr_1.1fr]">
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div aria-hidden="true" className="arch absolute -inset-3 border border-sampanie/40" />
            <Photo slot="sala" alt="Masă aranjată pentru eveniment în sala Ocaua lui Cuza" icon="flower" className="arch aspect-[4/5] w-full" />
          </div>
          <div className="reveal">
            <SectionTitle light eyebrow="Evenimente" title="Momentele importante, în sala potrivită" id="evenimente" lead={evenimente.intro} />
            <ul className="grid gap-3 sm:grid-cols-3">
              {evenimente.tipuri.map((e) => (
                <li key={e.titlu} className="rounded-2xl border border-sampanie/25 bg-white/5 p-5">
                  <h3 className="font-serif text-xl text-ivoriu">{e.titlu}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-crem/80">{e.text}</p>
                </li>
              ))}
            </ul>
            {(arataLipsuri || are(evenimente.capacitate) || are(evenimente.meniuri)) && (
              <p className="mt-5 text-sm text-crem/85">Capacitate: <T>{evenimente.capacitate}</T> · Meniuri: <T>{evenimente.meniuri}</T></p>
            )}
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Ne spuneți data și numărul de invitați", "Stabilim împreună meniul și aranjamentele", "Voi vă bucurați, noi ne ocupăm de rest"].map((t, i) => (
                <li key={t} className="flex gap-3 text-sm text-crem/90">
                  <span className="font-serif text-2xl leading-none text-sampanie">{i + 1}</span>{t}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#rezervare-eveniment" className={btnLight}>Cere o ofertă pentru eveniment</a>
              <a href={callHref} className={btnGhostLight}>Sună: {site.telefon.afisat}</a>
            </div>
          </div>
        </div>
      </section>

      {/* MENIU */}
      <section aria-labelledby="meniu" className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-x-6">
          <SectionTitle eyebrow="Bucătărie românească" title="Din meniul casei" id="meniu" />
          <Link href="/meniu/" className={`${btnGhost} mb-10 hidden lg:inline-flex`}>Meniul complet</Link>
        </div>
        <MenuList compact />
        <Link href="/meniu/" className={`${btnGhost} mt-6 lg:hidden`}>Meniul complet</Link>
      </section>

      {/* CAZARE */}
      <section aria-labelledby="cazare" className="bg-crem">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle eyebrow="Cazare în Tecuci" title="Rămâneți peste noapte" id="cazare" />
          <RoomCards />
        </div>
      </section>

      {/* RECENZII */}
      <section aria-labelledby="recenzii" className="mx-auto max-w-6xl px-5 py-14">
        <div className="reveal flex flex-col items-center gap-6 rounded-3xl border border-aur/25 bg-white px-6 py-10 text-center md:flex-row md:justify-between md:px-12 md:text-left">
          <div className="flex items-center gap-5">
            <p className="font-serif text-6xl leading-none text-cioco">{site.google.rating}</p>
            <div>
              <Stars className="text-aur" />
              <h2 id="recenzii" className="mt-1 font-serif text-xl text-cioco">Apreciat de oaspeți pe Google</h2>
              <p className="text-sm text-muted">{site.google.rating} din 5, din {site.google.recenzii}</p>
            </div>
          </div>
          <a href={site.google.mapsUrl} target="_blank" rel="noopener" className={btnDark}>
            Vezi recenziile pe Google<span className="sr-only"> (se deschide într-o filă nouă)</span>
          </a>
        </div>
      </section>

      {/* REZERVARE + CONTACT */}
      <section aria-labelledby="rezervare" className="relative overflow-hidden bg-crem">
        <span id="rezervare-masa" aria-hidden="true" className="absolute top-0" />
        <span id="rezervare-cazare" aria-hidden="true" className="absolute top-0" />
        <span id="rezervare-eveniment" aria-hidden="true" className="absolute top-0" />
        <div className="damask absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="reveal rounded-3xl border border-aur/20 bg-white p-6 shadow-[0_30px_60px_-40px_rgb(58_36_25/.5)] sm:p-9">
            <Eyebrow>Rezervări</Eyebrow>
            <h2 id="rezervare" className="mt-3 font-serif text-3xl font-semibold text-cioco sm:text-4xl">Rezervă în mai puțin de un minut</h2>
            <p className="mt-2 mb-7 text-sm text-muted">Alegeți ce doriți, completați câteva detalii și vă sunăm pentru confirmare.</p>
            <Booking />
          </div>
          <div id="contact" className="reveal flex flex-col gap-5">
            <div className="rounded-3xl bg-cioco p-7 text-ivoriu">
              <Eyebrow light>Contact</Eyebrow>
              <a href={callHref} className="mt-3 block font-serif text-3xl hover:text-sampanie">{site.telefon.afisat}</a>
              <address className="mt-3 text-sm text-crem/85 not-italic">{a.strada}<br />{a.localitate}, {a.judet}</address>
              {program.length > 0 && (
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-t border-sampanie/20 pt-4 text-sm text-crem/85">
                  {program.map((p) => <div key={p.zile} className="contents"><dt>{p.zile}</dt><dd><T>{p.ore}</T></dd></div>)}
                </dl>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {site.telefon.whatsapp && <a href={`https://wa.me/${site.telefon.whatsapp}`} target="_blank" rel="noopener" className={btnGhostLight}>WhatsApp</a>}
                <a href={site.google.mapsUrl} target="_blank" rel="noopener" className={btnGhostLight}>Direcții</a>
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
