import cardsTrio from "@/assets/cards-trio.webp.asset.json";
import { useParallax } from "@/lib/motion";
import { Cta, Shell } from "./ui";

export function FinalCTA() {
  const cards = useParallax<HTMLImageElement>({ y: 60, rotate: 1.6 });

  return (
    <section
      id="abrir-conta"
      className="grain relative isolate flex min-h-[88svh] items-center overflow-hidden bg-ink py-24 text-paper md:min-h-[92vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 68% 55%, oklch(0.62 0.165 253 / 0.2), transparent 65%), linear-gradient(180deg, oklch(0.145 0.004 265), oklch(0.13 0.004 265))",
        }}
      />
      <Shell>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="display-lg" data-reveal>
              Seu próximo banco
              <br />
              <span className="text-muted-on-dark">começa aqui.</span>
            </h2>
            <p className="body-lg mt-7 text-muted-on-dark">
              Abra sua conta e conheça o ecossistema completo do C6 Bank.
            </p>
            <div className="mt-10">
              <Cta href="#top">Abra sua conta</Cta>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[58%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/20 blur-[100px]"
            />
            <img
              ref={cards}
              src={cardsTrio.url}
              alt="Cartões C6 Bank"
              width={1716}
              height={735}
              loading="lazy"
              className="relative w-full drop-shadow-[0_50px_80px_rgba(0,0,0,0.75)]"
            />
          </div>
        </div>
      </Shell>
    </section>
  );
}
