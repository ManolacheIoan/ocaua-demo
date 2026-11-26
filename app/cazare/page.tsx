import type { Metadata } from "next";
import { are, arataLipsuri, cazareInfo } from "@/content/site";
import { CtaBand, PageHero, RoomCards } from "@/components/Sections";
import { RequestForm } from "@/components/RequestForm";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Cazare",
  description: "Camere de cazare la Ocaua lui Cuza, în Tecuci, la aceeași adresă cu restaurantul. Verificați disponibilitatea online sau la 0766 577 307.",
  alternates: { canonical: "cazare/" },
  openGraph: { title: "Cazare | Ocaua lui Cuza, Tecuci", url: "cazare/" },
};

export default function CazarePage() {
  const info = ([["Check-in", cazareInfo.checkIn], ["Check-out", cazareInfo.checkOut], ["Parcare", cazareInfo.parcare], ["Mic dejun", cazareInfo.micDejun]] as const)
    .filter(([, v]) => arataLipsuri || are(v));
  return (
    <>
      <PageHero photo="camera" eyebrow="Cazare în Tecuci" title="Cazare" text="Camere pentru oaspeți, la aceeași adresă cu restaurantul. Potrivit pentru invitații de la evenimente și pentru drumuri prin Tecuci." />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <RoomCards level={2} />
        {info.length > 0 && (
          <dl className="mt-8 grid gap-4 sm:grid-cols-4">
            {info.map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-aur/20 bg-white p-5">
                <dt className="text-[11px] tracking-[.2em] text-muted uppercase">{k}</dt>
                <dd className="mt-1 font-semibold"><T>{v}</T></dd>
              </div>
            ))}
          </dl>
        )}
        <section aria-labelledby="cerere" className="mx-auto mt-12 max-w-3xl rounded-3xl border border-aur/20 bg-white p-6 sm:p-9">
          <h2 id="cerere" className="mb-6 font-serif text-3xl font-semibold text-cioco">Cerere de cazare</h2>
          <RequestForm kind="cazare" />
        </section>
      </div>
      <CtaBand tip="cazare" />
    </>
  );
}
