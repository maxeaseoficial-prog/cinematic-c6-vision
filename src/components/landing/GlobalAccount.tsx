import globalHero from "@/assets/global-hero.webp.asset.json";
import cardsGlobal from "@/assets/cards-global.webp.asset.json";
import { useParallax } from "@/lib/motion";
import { Cta, Eyebrow, Shell } from "./ui";

export function GlobalAccount() {
  const cards = useParallax<HTMLImageElement>({ y: 48, rotate: -1.2 });

  return (
    <section id="conta-global" className="relative overflow-hidden bg-paper py-24 md:py-36 xl:py-44">
      <Shell>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
          <div>
            <Eyebrow tone="light">Conta Global</Eyebrow>
            <h2 className="display-lg mt-6" data-reveal>
              Seu dinheiro
              <br />
              <span className="text-muted-foreground">fala outras moedas.</span>
            </h2>
            <p className="body-lg mt-7 text-muted-foreground">Real. Dólar. Euro. Uma experiência.</p>
            <div className="mt-10">
              <Cta href="#abrir-conta" variant="solid-light">
                Conheça a Conta Global
              </Cta>
            </div>
          </div>

          <div className="relative">
            {/* orbital, editorial composition — graphic elements of the concept */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={globalHero.url}
                alt="Campanha Conta Global C6 Bank"
                width={2560}
                height={1079}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-[50%_45%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-ink/45 via-transparent to-transparent"
              />
            </div>
            <img
              ref={cards}
              src={cardsGlobal.url}
              alt="Cartões da Conta Global C6 Bank"
              width={551}
              height={450}
              loading="lazy"
              className="absolute -bottom-8 left-2 w-[44%] max-w-[300px] rounded-xl ring-1 ring-line-dark drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)] sm:-bottom-12 sm:left-6"
            />
          </div>
        </div>
      </Shell>
    </section>
  );
}
