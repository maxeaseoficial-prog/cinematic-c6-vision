import { useEffect, useRef } from "react";

import { prefersReducedMotion, subscribeToMotionFrame } from "@/lib/motion";

import { Cta, Shell } from "./ui";

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function useHeroMotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const backgroundWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const object = objectRef.current;
    const backgroundWord = backgroundWordRef.current;
    if (!section || !content || !object || !backgroundWord || prefersReducedMotion()) return;

    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scrollProgress = 0;

    const renderObject = () => {
      const scrollY = scrollProgress * 68;
      object.style.transform = `translate3d(${(pointerX * 8).toFixed(2)}px, ${(scrollY + pointerY * 6).toFixed(2)}px, 0) rotateX(${(-pointerY * 1.8).toFixed(2)}deg) rotateY(${(pointerX * 2.1).toFixed(2)}deg)`;
    };

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      scrollProgress = clamp(-rect.top / Math.max(rect.height, 1));

      content.style.opacity = `${1 - scrollProgress * 0.38}`;
      content.style.transform = `translate3d(0, ${(scrollProgress * 24).toFixed(2)}px, 0)`;
      backgroundWord.style.opacity = `${0.055 - scrollProgress * 0.025}`;
      backgroundWord.style.transform = `translate3d(0, ${(scrollProgress * 110).toFixed(2)}px, 0)`;
      renderObject();
    };

    const queuePointerRender = () => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        renderObject();
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      pointerX = clamp((event.clientX - rect.left) / rect.width, 0, 1) * 2 - 1;
      pointerY = clamp((event.clientY - rect.top) / rect.height, 0, 1) * 2 - 1;
      queuePointerRender();
    };

    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      queuePointerRender();
    };

    const unsubscribe = subscribeToMotionFrame(updateScroll);
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) {
      section.addEventListener("pointermove", onPointerMove, { passive: true });
      section.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      unsubscribe();
      cancelAnimationFrame(pointerFrame);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return { sectionRef, contentRef, objectRef, backgroundWordRef };
}

export function Hero() {
  const { sectionRef, contentRef, objectRef, backgroundWordRef } = useHeroMotion();

  return (
    <section
      ref={sectionRef}
      id="top"
      className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(75% 70% at 82% 32%, oklch(0.58 0.15 253 / 0.2), transparent 64%), radial-gradient(55% 65% at 42% 105%, oklch(0.35 0.07 255 / 0.17), transparent 72%), linear-gradient(145deg, oklch(0.155 0.006 265), oklch(0.13 0.004 265) 57%, oklch(0.105 0.004 265))",
        }}
      />

      <span
        ref={backgroundWordRef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-[4vw] top-[10%] -z-10 select-none font-display text-[48vw] font-medium leading-[0.72] tracking-[-0.04em] text-paper md:top-[4%] md:text-[35vw] lg:left-[1vw] lg:top-[12%] lg:text-[27vw]"
        style={{ opacity: 0.055 }}
      >
        C6
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[26%] -z-10 hidden h-px bg-gradient-to-r from-transparent via-blue/35 to-transparent lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[8svh] left-0 h-px w-[42vw] bg-gradient-to-r from-blue/0 via-blue/65 to-blue/0 opacity-60"
      />

      <Shell className="relative z-10">
        <div className="grid min-h-[100svh] items-center gap-2 pb-5 pt-28 sm:gap-4 sm:pb-8 sm:pt-32 lg:grid-cols-[minmax(0,0.94fr)_minmax(27rem,0.86fr)] lg:gap-0 lg:pb-10 lg:pt-28 xl:grid-cols-[minmax(0,1fr)_minmax(34rem,0.92fr)]">
          <div ref={contentRef} className="relative z-20 max-w-[45rem] will-change-transform">
            <div aria-hidden="true" className="hero-rule mb-7 h-px w-16 bg-blue sm:mb-8" />
            <h1 className="max-w-[9.2ch] text-[clamp(3rem,7.1vw,6rem)] font-medium leading-[0.91] tracking-[-0.04em]">
              <span className="hero-copy-line">Uma experiência</span>
              <span className="hero-copy-line">financeira</span>
              <span className="hero-copy-line text-muted-on-dark">extraordinária.</span>
            </h1>
            <p className="hero-support body-lg mt-7 max-w-[39ch] text-muted-on-dark sm:mt-8">
              Conta, cartões, investimentos e muito mais em uma experiência feita para acompanhar
              você.
            </p>
            <div className="hero-actions mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <Cta href="#abrir-conta">Abra sua conta</Cta>
              <Cta href="#produtos" variant="outline">
                Explore o C6
              </Cta>
            </div>
          </div>

          <div className="relative -mx-16 h-[min(51svh,30rem)] min-h-[22rem] sm:-mx-20 sm:h-[min(58svh,34rem)] lg:-mx-24 lg:h-[min(78svh,49rem)] lg:min-h-[34rem] xl:-mr-28 xl:ml-[-7rem]">
            <div
              aria-hidden="true"
              className="absolute left-[27%] top-[21%] size-[48%] rounded-full bg-blue/10 blur-[80px] sm:blur-[110px]"
            />

            <div className="hero-object-enter absolute inset-0 [perspective:1200px]">
              <div
                ref={objectRef}
                className="hero-object-motion relative size-full transform-gpu [transform-style:preserve-3d] will-change-transform"
              >
                <div
                  aria-hidden="true"
                  className="hero-satellite hero-satellite-black left-[5%] top-[32%] hidden sm:block"
                >
                  <img src="/cards/c6-black-card.webp" alt="" draggable={false} />
                </div>
                <div
                  aria-hidden="true"
                  className="hero-satellite hero-satellite-graphene right-[2%] top-[24%] hidden sm:block"
                >
                  <img src="/cards/c6-graphene-card.webp" alt="" draggable={false} />
                </div>

                <img
                  src="/cards/c6-carbon-hero.webp"
                  alt="Cartão C6 Carbon Mastercard Black sobre textura de fibra de carbono"
                  width={1950}
                  height={1800}
                  fetchPriority="high"
                  draggable={false}
                  className="absolute left-1/2 top-1/2 z-10 w-[162%] max-w-none -translate-x-[49%] -translate-y-[48%] select-none object-contain drop-shadow-[0_32px_44px_rgb(0_0_0/0.42)] sm:w-[150%] lg:w-[148%]"
                />

                <div
                  aria-hidden="true"
                  className="hero-light-sweep pointer-events-none absolute inset-y-[16%] left-[24%] z-40 w-[9%] -skew-x-12 bg-gradient-to-r from-transparent via-blue/20 to-transparent blur-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Shell>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[14svh] bg-gradient-to-b from-transparent to-ink"
      />
    </section>
  );
}
