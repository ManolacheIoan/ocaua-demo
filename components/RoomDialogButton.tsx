"use client";
import { useRef } from "react";
import { RequestForm } from "./RequestForm";

export function RoomDialogButton({ room }: { room: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()} className="w-full rounded-full bg-cioco px-5 py-3 text-sm font-semibold text-ivoriu transition hover:bg-cioco-2">
        Verifică disponibilitatea
      </button>
      <dialog ref={ref} onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }} aria-label="Cerere cazare" className="m-auto w-[min(92vw,40rem)] rounded-3xl bg-ivoriu p-6 sm:p-8 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="font-serif text-2xl text-cioco">Verifică disponibilitatea</h2>
          <button type="button" onClick={() => ref.current?.close()} className="rounded-lg px-2 py-1 text-2xl leading-none" aria-label="Închide">×</button>
        </div>
        <RequestForm kind="cazare" preset={`Interesat de: ${room}`} />
      </dialog>
    </>
  );
}
