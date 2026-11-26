"use client";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/content/site";

export type FormKind = "masa" | "cazare" | "eveniment";

const titles: Record<FormKind, string> = {
  masa: "Rezervare masă",
  cazare: "Cerere cazare",
  eveniment: "Cerere ofertă eveniment",
};

/** Cu endpoint Formspree: cererea pleacă pe email (+ WhatsApp ca alternativă). Fără: butonul principal deschide WhatsApp precompletat. */
const formspreeReady = site.formspreeEndpoint.startsWith("https://formspree.io/");
const hasWa = !!site.telefon.whatsapp;

const localToday = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const roDate = (iso: string) => (iso ? iso.split("-").reverse().join(".") : "");

export function RequestForm({ kind, preset = "" }: { kind: FormKind; preset?: string }) {
  const id = useId();
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err" | "wa">("idle");
  const dateRef = useRef<HTMLInputElement>(null);
  useEffect(() => { dateRef.current?.setAttribute("min", localToday()); }, []); // calculat în browser, nu la build

  function openWhatsApp() {
    const fd = new FormData(ref.current!);
    const g = (k: string) => String(fd.get(k) ?? "").trim();
    const text = [
      `Bună ziua! ${titles[kind]} – ${site.numeScurt}`,
      `Nume: ${g("nume")}`,
      `Telefon: ${g("telefon")}`,
      `${kind === "cazare" ? "Data sosirii" : "Data"}: ${roDate(g("data"))}`,
      `Număr persoane: ${g("persoane")}`,
      g("mesaj") && `Mesaj: ${g("mesaj")}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${site.telefon.whatsapp}?text=${encodeURIComponent(text)}`;
    const w = window.open(url, "_blank");
    if (w) w.opener = null;
    else window.location.href = url; // dacă browserul blochează fereastra nouă
    setStatus("wa");
  }

  function onWhatsAppClick() {
    if (ref.current?.reportValidity()) openWhatsApp();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formspreeReady) {
      if (hasWa) return openWhatsApp();
      window.location.href = `tel:${site.telefon.tel}`;
      return;
    }
    setStatus("sending");
    try {
      const fd = new FormData(ref.current!);
      fd.append("_subject", `${titles[kind]} – site`);
      fd.append("tip", titles[kind]);
      const r = await fetch(site.formspreeEndpoint, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error();
      setStatus("ok");
      ref.current!.reset();
    } catch {
      setStatus("err");
    }
  }

  const field = "mt-1.5 w-full rounded-xl border border-aur/35 bg-ivoriu px-4 py-3 text-ink transition focus:border-aur-text focus:bg-white";
  const label = "block text-xs font-semibold tracking-wide text-muted uppercase";
  const action = kind === "masa" ? "Rezervă masa" : kind === "cazare" ? "Verifică disponibilitatea" : "Cere oferta";

  return (
    <form ref={ref} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" aria-label={titles[kind]}>
      <div>
        <label className={label} htmlFor={`${id}-nume`}>Nume *</label>
        <input className={field} id={`${id}-nume`} name="nume" required autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-tel`}>Telefon *</label>
        <input className={field} id={`${id}-tel`} name="telefon" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9 +]{9,}" title="Număr de telefon, ex. 0722 123 456" />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-data`}>{kind === "cazare" ? "Data sosirii *" : "Data *"}</label>
        <input className={field} id={`${id}-data`} name="data" type="date" ref={dateRef} required />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-pers`}>Număr persoane *</label>
        <input className={field} id={`${id}-pers`} name="persoane" type="number" inputMode="numeric" min={1} max={500} required />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor={`${id}-msg`}>Mesaj</label>
        <textarea className={field} id={`${id}-msg`} name="mesaj" rows={3} defaultValue={preset}
          placeholder={kind === "cazare" ? "Număr de nopți, tipul camerei…" : kind === "eveniment" ? "Tipul evenimentului, numărul de invitați, preferințe…" : "Ora dorită, preferințe…"} />
      </div>
      <div className="flex flex-wrap gap-3 sm:col-span-2">
        {formspreeReady ? (
          <>
            <button type="submit" disabled={status === "sending"} className="flex-1 rounded-full bg-cioco px-6 py-3.5 font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2 disabled:opacity-60 sm:flex-none">
              {status === "sending" ? "Se trimite…" : action}
            </button>
            {hasWa && (
              <button type="button" onClick={onWhatsAppClick} className="flex-1 rounded-full border border-[#1e7a46] px-6 py-3.5 font-semibold text-[#145c33] transition hover:bg-[#1e7a46]/10 sm:flex-none">
                Trimite pe WhatsApp
              </button>
            )}
          </>
        ) : (
          <>
            <button type="submit" className="flex-1 rounded-full bg-cioco px-6 py-3.5 font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2 sm:flex-none">
              {action}{hasWa && <span className="font-normal opacity-80"> · prin WhatsApp</span>}
            </button>
            <a href={`tel:${site.telefon.tel}`} className="flex-1 rounded-full border border-aur/60 px-6 py-3.5 text-center font-semibold text-cioco transition hover:bg-crem sm:flex-none">
              Sau sună: {site.telefon.afisat}
            </a>
          </>
        )}
      </div>
      <p className="text-xs text-muted sm:col-span-2">Fără plată online. Rezervarea e confirmată de noi, telefonic.</p>
      <p role="status" aria-live="polite" className="text-sm font-medium text-cioco empty:hidden sm:col-span-2">
        {status === "ok" && "Mulțumim! Cererea a fost trimisă. Vă contactăm telefonic pentru confirmare."}
        {status === "err" && `Cererea nu a putut fi trimisă. Încercați pe WhatsApp sau sunați la ${site.telefon.afisat}.`}
        {status === "wa" && "Am deschis WhatsApp cu mesajul completat. Mai trebuie doar să apăsați „Trimite”."}
      </p>
    </form>
  );
}
