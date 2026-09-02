import investHammock from "@/assets/invest-hammock.webp.asset.json";
import atomos from "@/assets/atomos.webp.asset.json";
import auto from "@/assets/auto.webp.asset.json";
import seguros from "@/assets/seguros.webp.asset.json";
import { ArrowBadge, Shell } from "./ui";
import { cn } from "@/lib/utils";

const AREAS = [
  {
    name: "C6 Invest",
    copy: "Investimentos dentro da mesma conta.",
    image: investHammock,
    alt: "C6 Invest",
    className: "lg:col-span-7 aspect-[16/11]",
    position: "50% 50%",
  },
  {
    name: "C6 Átomos",
    copy: "O programa de pontos do banco.",
    image: atomos,
    alt: "C6 Átomos",
    className: "lg:col-span-5 aspect-[16/11]",
    position: "50% 40%",
  },
  {
    name: "C6 Auto",
    copy: "Financiamento e serviços para o seu carro.",
    image: auto,
    alt: "C6 Auto",
    className: "lg:col-span-5 aspect-[16/11]",
    position: "50% 35%",
  },
  {
    name: "C6 Seguros",
    copy: "Proteção para o que importa.",
    image: seguros,
    alt: "C6 Seguros",
    className: "lg:col-span-7 aspect-[16/11]",
    position: "50% 55%",
  },
];

export function C6Ecosystem() {
  return (
    <section id="ecossistema" className="bg-ink py-24 text-paper md:py-36 xl:py-44">
      <Shell>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg" data-reveal>
            Um banco.
            <br />
            <span className="text-muted-on-dark">Muitas possibilidades.</span>
          </h2>
          <p className="body-lg text-muted-on-dark lg:max-w-[34ch] lg:text-right">
            Investimentos, pontos, veículos e seguros conectados na mesma experiência.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:mt-24 lg:grid-cols-12">
          {AREAS.map((area, i) => (
            <a
              key={area.name}
              href="#abrir-conta"
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-graphite",
                area.className,
              )}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <img
                src={area.image.url}
                alt={area.alt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-90 transition-transform duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                style={{ objectPosition: area.position }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent"
              />
              <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div className="min-w-0 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-medium md:text-[1.7rem]">{area.name}</h3>
                  <p className="mt-2 max-w-[30ch] text-sm text-muted-on-dark">{area.copy}</p>
                </div>
                <ArrowBadge tone="dark" />
              </div>
            </a>
          ))}
        </div>
      </Shell>
    </section>
  );
}
