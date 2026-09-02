import { useEffect, useRef } from "react";

import videoAsset from "@/assets/animacao-celulares.mp4.asset.json";
import videoWebm from "@/assets/animacao-celulares.webm.asset.json";

import { Shell } from "./ui";

/**
 * Scroll-scrubbed video: scrolling down advances the timeline,
 * scrolling up rewinds it. Falls back to a static first frame when
 * the user prefers reduced motion.
 */
export function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.pause();

    let frame = 0;
    let target = 0;
    let current = 0;
    let duration = 0;
    let running = false;

    const readDuration = () => {
      duration = Number.isFinite(video.duration) ? video.duration : 0;
    };
    readDuration();
    video.addEventListener("loadedmetadata", readDuration);

    const tick = () => {
      // smooth easing towards the scroll target so the scrub feels cinematic
      current += (target - current) * 0.18;
      if (duration > 0) {
        const time = Math.min(Math.max(current * duration, 0), duration - 0.02);
        if (Math.abs(video.currentTime - time) > 0.005) video.currentTime = time;
      }
      if (Math.abs(target - current) > 0.0005) {
        frame = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? -rect.top / scrollable : 0;
      target = Math.min(Math.max(progress, 0), 1);
      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", readDuration);
    };
  }, []);

  return (
    <section
      id="app"
      ref={sectionRef}
      className="relative bg-ink text-paper"
      style={{ height: "260vh" }}
      aria-label="Animação do app C6 Bank"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 45%, oklch(0.62 0.165 253 / 0.14), transparent 65%), linear-gradient(180deg, oklch(0.13 0.004 265), oklch(0.145 0.004 265))",
          }}
        />
        <Shell>
          <div className="relative">
            <video
              ref={videoRef}
              src={videoAsset.url}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              className="mx-auto w-full max-w-[1200px]"
            />
            <p className="mt-8 text-center text-sm tracking-[0.18em] text-muted-on-dark uppercase">
              Role para explorar o app
            </p>
          </div>
        </Shell>
      </div>
    </section>
  );
}
