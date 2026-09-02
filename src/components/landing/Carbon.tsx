import carbonHero from "@/assets/carbon-hero.webp.asset.json";
import salasVip from "@/assets/salas-vip.webp.asset.json";
import { useParallax } from "@/lib/motion";
import { Cta, Eyebrow, Shell } from "./ui";

const NOTES = [
  { label: "Salas VIP", detail: "Acesso a salas VIP em aeroportos" },
  { label: "C6 Átomos", detail: "Programa de pontos do C6 Bank" },
  { label: "Experiência Carbon", detail: "Atendimento e benefícios dedicados" },
];

export function Carbon() {
  const card = useParallax<HTMLImageElement>({ y: 60, rotate: 2.2 });

  return (
    <section id="carbon" className="grain relative isolate overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 60% at 22% 45%, oklch(0.62 0.165 253 / 0.16), transparent 62%), linear-gradient(180deg, oklch(0.13 0.004 265), oklch(0.185 0.005 265))",
        }}
      />
      <Shell>
        <div className="grid items-center gap-12 py-24 md:py-36 lg:grid-cols-2 lg:gap-6 xl:py-44">
          <div className="relative order-2 lg:order-1">
            <img
              ref={card}
              src={carbonHero.url}
              alt="Cartão C6 Carbon"
              width={1950}
              height={1800}
              loading="lazy"
              className="w-full will-change-transform [mask-image:radial-gradient(80%_78%_at_50%_50%,black_58%,transparent_100%)]"
            />
          </div>


          <div className="order-1 lg:order-2 lg:pl-6 xl:pl-16">
            <Eyebrow>C6 Carbon</Eyebrow>
            <h2 className="display-lg mt-6">
              Não é apenas
              <br />
              <span className="text-muted-on-dark">um cartão.</span>
            </h2>
            <p className="body-lg mt-7 text-muted-on-dark">
              É uma experiência feita para quem espera mais.
            </p>

            <dl className="mt-12 border-t border-line-dark">
              {NOTES.map((note) => (
                <div
                  key={note.label}
                  className="grid gap-1 border-b border-line-dark py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-6"
                  data-reveal
                >
                  <dt className="text-lg font-medium">{note.label}</dt>
                  <dd className="text-sm text-muted-on-dark sm:pt-1.5">{note.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Cta href="#abrir-conta">Conheça o C6 Carbon</Cta>
              <figure className="hidden items-center gap-4 sm:flex">
                <img
                  src={salasVip.url}
                  alt="Sala VIP C6 Bank"
                  width={551}
                  height={450}
                  loading="lazy"
                  className="h-16 w-24 rounded-md object-cover"
                />
                <figcaption className="text-xs leading-relaxed text-muted-on-dark">
                  Espaços C6
                  <br />
                  em aeroportos
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
