import { site } from "@/content/site";
import { T } from "./T";

/** Pagină legală simplă. Textul e generic și trebuie verificat de proprietar / un consultant GDPR. */
export function Legal({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="mb-8 rounded-2xl border border-dashed border-aur/50 bg-crem px-5 py-3 text-sm text-muted">
        <strong className="text-cioco">De verificat:</strong> text generic, de adaptat și validat înainte de lansare. Operator: <T>{site.firma.denumire}</T>, CUI <T>{site.firma.cui}</T>.
      </p>
      <div className="space-y-4 leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-cioco [&_li]:ml-5 [&_li]:list-disc">{children}</div>
    </div>
  );
}
