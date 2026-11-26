import { Star } from "lucide-react";

/** Ornament auriu inspirat din motivul ringului de dans. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 20" className={`h-4 w-40 text-aur ${className}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M2 10h46M112 10h46" />
      <path d="M48 10c8 0 10-7 18-7 6 0 8 5 4 7-3 2-7-1-5-3M112 10c-8 0-10-7-18-7-6 0-8 5-4 7 3 2 7-1 5-3" />
      <path d="M48 10c8 0 10 7 18 7 6 0 8-5 4-7M112 10c-8 0-10 7-18 7-6 0-8-5-4-7" />
      <path d="M80 4l4 6-4 6-4-6z" fill="currentColor" />
    </svg>
  );
}

/** Stele pentru nota reală de pe Google (4,0). */
export function Stars({ value = 4, className = "" }: { value?: number; className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex gap-0.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4" strokeWidth={1.4} fill={i < value ? "currentColor" : "none"} />
      ))}
    </span>
  );
}
