import { TBD, arataLipsuri } from "@/content/site";

/** Text care poate conține „[de completat]”: vizibil evidențiat dacă arataLipsuri, altfel eliminat. */
export function T({ children }: { children: string }) {
  if (!children.includes(TBD)) return <>{children}</>;
  if (!arataLipsuri) return <>{children.replaceAll(TBD, "").replace(/\s+([:.,;)])/g, "$1").replace(/[:—–-]\s*\.?$/, "").replace(/\(\s*\)/g, "").trim()}</>;
  const parts = children.split(TBD);
  return <>{parts.map((p, i) => <span key={i}>{p}{i < parts.length - 1 && <em className="tbd">{TBD}</em>}</span>)}</>;
}
