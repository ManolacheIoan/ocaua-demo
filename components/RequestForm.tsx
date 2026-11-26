"use client";
import { useId, useRef, useState } from "react";
import { site } from "@/content/site";

export type FormKind = "masa" | "cazare" | "eveniment";

const titles: Record<FormKind, string> = {
  masa: "Rezervare masă",
  cazare: "Cerere cazare",
  eveniment: "Cerere ofertă eveniment",
};

const formspreeReady = site.formspreeEndpoint.startsWith("https://formspree.io/");

export function RequestForm({ kind, preset = "" }: { kind: FormKind; preset?: string }) {
  const id = useId();
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err" | "nobackend">("idle");
  const today = new Date().toISOString().slice(0, 10);

  function collect() {
    const fd = new FormData(ref.current!);
    return {
      nume: String(fd.get("nume") ?? ""),
      telefon: String(fd.get("telefon") ?? ""),
      data: String(fd.get("data") ?? ""),
      persoane: String(fd.get("persoane") ?? ""),
      mesaj: String(fd.get("mesaj") ?? ""),
    };
  }

  function whatsapp() {
    if (!ref.current?.reportValidity()) return;
    const v = collect();
    const text = [
      `Bună ziua! ${titles[kind]} – ${site.numeScurt}`,
      `Nume: ${v.nume}`,
      `Telefon: ${v.telefon}`,
      `${kind === "cazare" ? "Data sosirii" : "Data"}: ${v.data}`,
      `Număr persoane: ${v.persoane}`,
      v.mesaj && `Mesaj: ${v.mesaj}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.telefon.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formspreeReady) return setStatus("nobackend");
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

  return (
    <form ref={ref} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" aria-label={titles[kind]}>
      <div>
        <label className={label} htmlFor={`${id}-nume`}>Nume *</label>
        <input className={field} id={`${id}-nume`} name="nume" required autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-tel`}>Telefon *</label>
        <input className={field} id={`${id}-tel`} name="telefon" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9 +().-]{9,}" />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-data`}>{kind === "cazare" ? "Data sosirii *" : "Data *"}</label>
        <input className={field} id={`${id}-data`} name="data" type="date" min={today} required />
      </div>
      <div>
        <label className={label} htmlFor={`${id}-pers`}>Număr persoane *</label>
        <input className={field} id={`${id}-pers`} name="persoane" type="number" min={1} max={500} required />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor={`${id}-msg`}>Mesaj</label>
        <textarea className={field} id={`${id}-msg`} name="mesaj" rows={3} defaultValue={preset}
          placeholder={kind === "cazare" ? "Număr de nopți, tipul camerei…" : kind === "eveniment" ? "Tipul evenimentului, preferințe meniu…" : "Ora dorită, preferințe…"} />
      </div>
      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="flex-1 rounded-full bg-cioco px-6 py-3.5 font-semibold text-ivoriu shadow-sm transition hover:bg-cioco-2 disabled:opacity-60 sm:flex-none">
          {status === "sending" ? "Se trimite…" : kind === "masa" ? "Rezervă masa" : kind === "cazare" ? "Verifică disponibilitatea" : "Cere oferta"}
        </button>
        {site.telefon.whatsapp && (
          <button type="button" onClick={whatsapp} className="flex-1 rounded-full border border-[#1e7a46] px-6 py-3.5 font-semibold text-[#145c33] transition hover:bg-[#1e7a46]/10 sm:flex-none">
            Trimite pe WhatsApp
          </button>
        )}
      </div>
      <p className="text-xs text-muted sm:col-span-2">Fără plată online. Vă sunăm noi pentru confirmare.</p>
      <p role="status" aria-live="polite" className="text-sm sm:col-span-2">
        {status === "ok" && "Mulțumim! Cererea a fost trimisă. Vă contactăm telefonic pentru confirmare."}
        {status === "err" && `Cererea nu a putut fi trimisă. Încercați pe WhatsApp sau sunați la ${site.telefon.afisat}.`}
        {status === "nobackend" && `Formularul online nu este încă activ în acest demo. Folosiți „Trimite pe WhatsApp” sau sunați la ${site.telefon.afisat}.`}
      </p>
    </form>
  );
}
