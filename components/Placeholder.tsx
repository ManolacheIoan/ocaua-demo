/*
 * PLACEHOLDER DE IMAGINE — se înlocuiește cu poze reale de la local
 * (ex. <img src="/poze/sala.jpg" alt="..."> sau next/image cu unoptimized).
 */
const icons = {
  plate: "M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm4 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2 3v6m2-6v6M3 9v12m18-18c-2 1-2 5-2 7h2v11",
  bed: "M3 18V6m0 8h18v4M3 14V10h7a3 3 0 0 1 3 3v1m8 0v-2a3 3 0 0 0-3-3h-5",
  glass: "M8 3h8l-1 7a3 3 0 0 1-6 0L8 3Zm4 10v8m-4 0h8",
  house: "M3 11 12 4l9 7v9H3v-9Zm6 9v-6h6v6",
};

export function Placeholder({
  label,
  icon = "plate",
  className = "",
}: {
  label: string;
  icon?: keyof typeof icons;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Loc pentru fotografie: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-lemn via-bordo to-bordo-2 text-crem/90 shadow-sm ${className}`}
    >
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#fff_0,transparent_45%)]" />
      <div className="relative flex flex-col items-center gap-2 p-4 text-center">
        <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d={icons[icon]} />
        </svg>
        <span className="text-xs tracking-wide uppercase">{label}</span>
      </div>
    </div>
  );
}
