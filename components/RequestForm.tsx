"use client";
import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
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
      kind === "masa" && g("ora") && `Ora: ${g("ora")}`,
      kind === "cazare" && `Data plecării: ${roDate(g("plecare"))}`,
      kind === "eveniment" && `Tip eveniment: ${g("eveniment")}`,
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
        <label className={label} htmlFor={`${id}-pers`}>{kind === "eveniment" ? "Număr invitați *" : "Număr persoane *"}</label>
        <input className={field} id={`${id}-pers`} name="persoane" type="number" inputMode="numeric" min={1} max={500} required />
      </div>
      {kind === "masa" && (
        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${id}-ora`}>Ora dorită</label>
          <input className={field} id={`${id}-ora`} name="ora" type="time" min="08:00" max="23:30" step={900} />
        </div>
      )}
      {kind === "cazare" && (
        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${id}-plecare`}>Data plecării *</label>
          <input className={field} id={`${id}-plecare`} name="plecare" type="date" required
            onFocus={(e) => { const d = (ref.current?.elements.namedItem("data") as HTMLInputElement | null)?.value; if (d) e.currentTarget.min = d; }} />
        </div>
      )}
      {kind === "eveniment" && (
        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${id}-ev`}>Tipul evenimentului *</label>
          <select className={field} id={`${id}-ev`} name="eveniment" required defaultValue="">
            <option value="" disabled>Alegeți…</option>
            <option>Botez</option><option>Aniversare</option><option>Cununie / nuntă</option><option>Masă festivă</option><option>Masă de firmă</option><option>Altul</option>
          </select>
        </div>
      )}
      <div className="sm:col-span-2">
        <label className={label} htmlFor={`${id}-msg`}>Mesaj</label>
        <textarea className={field} id={`${id}-msg`} name="mesaj" rows={3} defaultValue={preset}
          placeholder={kind === "cazare" ? "Tipul camerei, câți adulți și copii…" : kind === "eveniment" ? "Preferințe de meniu, aranjamente, buget orientativ…" : "Ocazie, preferințe, scaun pentru copil…"} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:flex-wrap">
        {formspreeReady ? (
          <>
            <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-cioco px-6 py-3.5 font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2 disabled:opacity-60 sm:w-auto">
              {status === "sending" ? "Se trimite…" : action}
            </button>
            {hasWa && (
              <button type="button" onClick={onWhatsAppClick} className="w-full rounded-full border border-[#1e7a46] px-6 py-3.5 font-semibold text-[#145c33] transition hover:bg-[#1e7a46]/10 sm:w-auto">
                Trimite pe WhatsApp
              </button>
            )}
          </>
        ) : (
          <>
            <button type="submit" className="w-full rounded-full bg-cioco px-6 py-3.5 font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2 sm:w-auto">
              <MessageCircle aria-hidden="true" className="mr-2 inline h-4 w-4 align-[-3px]" strokeWidth={1.8} />{action}{hasWa && <span className="font-normal opacity-80"> pe WhatsApp</span>}
            </button>
            <a href={`tel:${site.telefon.tel}`} className="w-full rounded-full border border-aur/60 px-6 py-3.5 text-center font-semibold text-cioco transition hover:bg-crem sm:w-auto">
              <Phone aria-hidden="true" className="mr-2 inline h-4 w-4 align-[-3px]" strokeWidth={1.8} />Sau sunați: {site.telefon.afisat}
            </a>
          </>
        )}
      </div>
      <p className="text-xs text-muted sm:col-span-2">Fără plată online. Rezervarea e confirmată de noi, telefonic.</p>
      <p role="status" aria-live="polite" className="text-sm font-medium text-cioco empty:hidden sm:col-span-2">
        {status === "ok" && "Mulțumim! Cererea a fost trimisă. Vă contactăm telefonic pentru confirmare."}
        {status === "err" && `Cererea nu a putut fi trimisă (verificați conexiunea). Încercați pe WhatsApp sau sunați la ${site.telefon.afisat}.`}
        {status === "wa" && "Am deschis WhatsApp cu mesajul completat. Mai trebuie doar să apăsați „Trimite”."}
      </p>
    </form>
  );
}
