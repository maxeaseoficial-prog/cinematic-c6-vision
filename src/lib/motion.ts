import { useEffect, useRef } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reveals every [data-reveal] node once it enters the viewport. One observer for the page. */
export function useRevealObserver() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset["reveal"] = "in";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

type ParallaxOptions = {
  /** px of travel across the full scroll pass */
  y?: number;
  /** deg of rotation across the full scroll pass */
  rotate?: number;
  scale?: number;
  /** disable below this viewport width */
  minWidth?: number;
};

const subscribers = new Set<() => void>();
let ticking = false;
let bound = false;

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    subscribers.forEach((fn) => fn());
    ticking = false;
  });
}

export function subscribeToMotionFrame(fn: () => void) {
  subscribers.add(fn);
  if (!bound) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    bound = true;
  }
  fn();
  return () => {
    subscribers.delete(fn);
    if (subscribers.size === 0 && bound) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      bound = false;
    }
  };
}

/** Transform-only parallax driven by a single shared scroll listener. */
export function useParallax<T extends HTMLElement>({
  y = 60,
  rotate = 0,
  scale = 0,
  minWidth = 768,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.innerWidth < minWidth) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (below fold) .. 1 (above fold)
      const p = Math.max(-1, Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / vh));
      el.style.transform = `translate3d(0, ${(-p * y).toFixed(2)}px, 0) rotate(${(p * rotate).toFixed(3)}deg) scale(${(1 + p * scale).toFixed(4)})`;
    };

    return subscribeToMotionFrame(update);
  }, [y, rotate, scale, minWidth]);

  return ref;
}
