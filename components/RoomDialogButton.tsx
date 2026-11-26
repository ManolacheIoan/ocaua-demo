"use client";
import { useRef } from "react";
import { RequestForm } from "./RequestForm";

export function RoomDialogButton({ room }: { room: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()} className="w-full rounded-lg bg-bordo px-4 py-3 font-semibold text-white hover:bg-bordo-2">
        Verifică disponibilitatea
      </button>
      <dialog ref={ref} aria-label="Cerere cazare" className="m-auto w-[min(92vw,40rem)] rounded-2xl bg-crem p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-serif text-2xl text-bordo">Verifică disponibilitatea</h2>
          <button type="button" onClick={() => ref.current?.close()} className="rounded-lg px-2 py-1 text-2xl leading-none" aria-label="Închide">×</button>
        </div>
        <RequestForm kind="cazare" preset={`Interesat de: ${room}`} />
      </dialog>
    </>
  );
}
