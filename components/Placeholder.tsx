import { imagini } from "@/content/site";

/*
 * FOTO: dacă imagini[slot] are un fișier (public/poze/...), se afișează poza reală.
 * Altfel, un placeholder elegant (gradient + iconiță) — se înlocuiește cu poze reale de la local.
 */
const icons = {
  plate: "M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm4 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0",
  bed: "M3 18V6m0 8h18v4M3 14v-4h7a3 3 0 0 1 3 3v1m8 0v-2a3 3 0 0 0-3-3h-5",
  glass: "M8 3h8l-1 7a3 3 0 0 1-6 0L8 3Zm4 10v8m-4 0h8",
  house: "M3 11 12 4l9 7v9H3v-9Zm6 9v-6h6v6",
  flower: "M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-5c2 2 2 3 0 5-2-2-2-3 0-5Zm0 13c2 2 2 3 0 5-2-2-2-3 0-5ZM3 11c2-2 3-2 5 0-2 2-3 2-5 0Zm13 0c2-2 3-2 5 0-2 2-3 2-5 0Z",
};
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Photo({
  slot, alt, icon = "plate", className = "", tone = "light", priority = false,
}: {
  slot: keyof typeof imagini; alt: string; icon?: keyof typeof icons; className?: string; tone?: "light" | "dark"; priority?: boolean;
}) {
  const file = imagini[slot];
  if (file) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`${base}/poze/${file}`} alt={alt} className={`object-cover ${className}`} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />;
  }
  const bg = tone === "dark"
    ? "bg-[radial-gradient(120%_90%_at_30%_15%,#6b4a35_0%,#3a2419_55%,#24150e_100%)] text-sampanie"
    : "bg-[radial-gradient(120%_90%_at_30%_15%,#fffaf2_0%,#ecdfca_55%,#d9c3a0_100%)] text-aur-text";
  return (
    <div role="img" aria-label={alt} className={`relative flex items-center justify-center overflow-hidden ${bg} ${className}`}>
      <div className="damask absolute inset-0 opacity-70" />
      <div className="absolute inset-3 rounded-[inherit] border border-current/25" />
      <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="relative opacity-70">
        <path d={icons[icon]} />
      </svg>
    </div>
  );
}
