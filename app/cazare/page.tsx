import type { Metadata } from "next";
import { cazareInfo } from "@/content/site";
import { PageHero, RoomCards } from "@/components/Sections";
import { RequestForm } from "@/components/RequestForm";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Cazare",
  description: "Camere de cazare la Ocaua lui Cuza, în Tecuci. Verifică disponibilitatea și trimite o cerere.",
  alternates: { canonical: "cazare/" },
};

export default function CazarePage() {
  const info = [
    ["Check-in", cazareInfo.checkIn],
    ["Check-out", cazareInfo.checkOut],
    ["Parcare", cazareInfo.parcare],
    ["Mic dejun", cazareInfo.micDejun],
  ];
  return (
    <>
      <PageHero title="Cazare" text="Camere pentru oaspeți în Tecuci, la același loc cu restaurantul." />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <RoomCards level={2} />
        <dl className="mt-14 grid gap-4 sm:grid-cols-4">
          {info.map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white p-5 shadow-sm">
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="mt-1 font-semibold"><T>{v}</T></dd>
            </div>
          ))}
        </dl>
        <section aria-labelledby="cerere" className="mx-auto mt-16 max-w-3xl rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 id="cerere" className="mb-6 font-serif text-3xl font-bold text-bordo">Cerere de cazare</h2>
          <RequestForm kind="cazare" />
        </section>
      </div>
    </>
  );
}
