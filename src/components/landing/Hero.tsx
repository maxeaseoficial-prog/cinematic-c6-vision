import { useParallax } from "@/lib/motion";
import { Cta, Shell } from "./ui";


export function Hero() {
  const bgWord = useParallax<HTMLSpanElement>({ y: 130 });

  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink pb-16 pt-32 text-paper md:min-h-screen md:pb-24 md:pt-36"
    >
      {/* diffuse light field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, oklch(0.62 0.165 253 / 0.22), transparent 60%), radial-gradient(80% 70% at 10% 90%, oklch(0.42 0.15 258 / 0.18), transparent 65%), linear-gradient(180deg, oklch(0.185 0.005 265), oklch(0.145 0.004 265) 55%, oklch(0.13 0.004 265))",
        }}
      />
      {/* oversized background typography */}
      <span
        ref={bgWord}
        aria-hidden="true"
        className="pointer-events-none absolute -left-[3vw] top-[14%] -z-10 select-none font-display text-[34vw] font-medium leading-none tracking-[-0.06em] text-paper/[0.045] md:top-[8%] md:text-[30vw]"
      >
        C6
      </span>

      <Shell>
        <div className="max-w-[16ch] lg:max-w-none">
          <p className="eyebrow text-blue-soft motion-safe:animate-[fade-in_0.9s_ease-out_both]">
            Concept · Redesign
          </p>
          <h1 className="display-xl mt-6 motion-safe:animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
            Uma experiência
            <br />
            financeira
            <br />
            <span className="text-muted-on-dark">extraordinária.</span>
          </h1>
          <p className="body-lg mt-8 max-w-[46ch] text-muted-on-dark motion-safe:animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
            Conta, cartões, investimentos e muito mais em uma experiência feita para acompanhar
            você.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 motion-safe:animate-[fade-in_1s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]">
            <Cta href="#abrir-conta">Abra sua conta</Cta>
            <Cta href="#produtos" variant="outline">
              Explore o C6
            </Cta>
          </div>
        </div>
      </Shell>

    </section>
  );
}
