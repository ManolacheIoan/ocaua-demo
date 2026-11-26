"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Animații discrete la scroll (dezactivate de prefers-reduced-motion, vezi globals.css).
 * Rulează la fiecare schimbare de pagină; plasă de siguranță: tot ce e .reveal devine vizibil după 2,5 s.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = [...document.querySelectorAll(".reveal:not(.in)")];
    const showAll = () => els.forEach((e) => e.classList.add("in"));
    if (!("IntersectionObserver" in window)) return showAll();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    const t = window.setTimeout(showAll, 2500);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [pathname]);
  return null;
}
