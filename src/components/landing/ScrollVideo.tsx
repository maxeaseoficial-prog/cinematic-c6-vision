import { useEffect, useRef } from "react";

import { prefersReducedMotion, subscribeToMotionFrame } from "@/lib/motion";

const VIDEO_SOURCES = {
  webm: "/media/c6-app-scroll.webm",
  mp4: "/media/c6-app-scroll.mp4",
  poster: "/media/c6-app-scroll-poster.jpg",
} as const;

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

/**
 * Scroll-scrubbed video: scrolling down advances the timeline,
 * scrolling up rewinds it. Falls back to a static first frame when
 * the user prefers reduced motion.
 */
export function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const object = objectRef.current;
    const paper = paperRef.current;
    const accent = accentRef.current;
    if (!section || !video || !object || !paper || !accent) return;

    video.pause();

    const reducedMotion = prefersReducedMotion();

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = clamp(scrollable > 0 ? -rect.top / scrollable : 0);

      const entrance = reducedMotion ? 1 : clamp(progress / 0.1);
      const paperReveal = reducedMotion ? 0 : clamp((progress - 0.78) / 0.22);
      const objectExit = reducedMotion ? 0 : clamp((progress - 0.86) / 0.14);

      object.style.opacity = `${0.24 + entrance * 0.76 - objectExit * 0.5}`;
      object.style.transform = `translate3d(0, ${(1 - entrance) * 7 - objectExit * 4}svh, 0) scale(${(0.94 + entrance * 0.06 - objectExit * 0.035).toFixed(4)})`;
      paper.style.transform = `translate3d(0, ${((1 - paperReveal) * 102).toFixed(3)}%, 0)`;
      accent.style.transform = `scaleX(${(0.25 + progress * 0.75).toFixed(4)})`;

      const duration = video.readyState >= HTMLMediaElement.HAVE_METADATA ? video.duration : 0;
      if (!reducedMotion && Number.isFinite(duration) && duration > 0) {
        const finalFrameTime = Math.max(0, duration - 0.001);
        const targetTime = progress * finalFrameTime;
        if (Math.abs(video.currentTime - targetTime) > 1 / 240) {
          video.currentTime = targetTime;
        }
      } else if (reducedMotion && video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        video.currentTime = 0;
      }
    };

    const keepPaused = () => video.pause();
    const unsubscribe = subscribeToMotionFrame(update);
    video.addEventListener("loadedmetadata", update);
    video.addEventListener("durationchange", update);
    video.addEventListener("play", keepPaused);

    return () => {
      unsubscribe();
      video.removeEventListener("loadedmetadata", update);
      video.removeEventListener("durationchange", update);
      video.removeEventListener("play", keepPaused);
    };
  }, []);

  return (
    <section
      id="app"
      ref={sectionRef}
      className="scroll-video-scene relative -mt-px bg-ink text-paper"
      aria-label="Animação do app C6 Bank"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(58% 68% at 64% 42%, oklch(0.53 0.12 253 / 0.11), transparent 70%), linear-gradient(180deg, oklch(0.105 0.004 265), oklch(0.13 0.004 265) 68%, oklch(0.15 0.004 265))",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[7vw] top-[18svh] hidden h-[50svh] w-px bg-gradient-to-b from-transparent via-line-dark to-transparent lg:block"
        />
        <div
          ref={accentRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-[7vw] top-[18svh] hidden h-px w-[18vw] origin-left bg-blue/70 lg:block"
        />

        <div
          ref={objectRef}
          className="absolute inset-0 flex items-center justify-center will-change-[transform,opacity]"
        >
          <div className="relative -translate-x-[8vw] sm:translate-x-0">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              poster={VIDEO_SOURCES.poster}
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
              tabIndex={-1}
              className="block w-[180vw] max-w-[112rem] bg-transparent object-contain sm:w-[145vw] lg:w-[112vw]"
            >
              <source src={VIDEO_SOURCES.webm} type="video/webm" />
              <source src={VIDEO_SOURCES.mp4} type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          ref={paperRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[34svh] translate-y-full bg-paper will-change-transform"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-ink/10" />
          <div className="absolute left-[7vw] top-0 h-px w-[18vw] bg-blue" />
        </div>
      </div>
    </section>
  );
}
