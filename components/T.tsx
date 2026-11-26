import { TBD } from "@/content/site";

/** Afișează text și evidențiază vizibil orice „[de completat]”. */
export function T({ children }: { children: string }) {
  if (!children.includes(TBD)) return <>{children}</>;
  const parts = children.split(TBD);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <em className="tbd">{TBD}</em>}
        </span>
      ))}
    </>
  );
}
