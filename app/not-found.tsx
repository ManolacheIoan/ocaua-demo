import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-4xl text-bordo">Pagina nu a fost găsită</h1>
      <Link href="/" className="mt-6 inline-block underline">Înapoi la prima pagină</Link>
    </div>
  );
}
