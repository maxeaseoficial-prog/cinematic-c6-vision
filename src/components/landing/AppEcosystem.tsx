import investMosaic from "@/assets/invest-mosaic.webp.asset.json";
import atomos from "@/assets/atomos.webp.asset.json";
import globalSkier from "@/assets/global-skier.webp.asset.json";
import seguranca from "@/assets/seguranca.webp.asset.json";
import { Shell } from "./ui";
import { cn } from "@/lib/utils";

const PANELS = [
  {
    title: "Investimentos",
    copy: "Renda fixa, fundos e mais no mesmo app.",
    image: investMosaic,
    alt: "Investimentos C6 Bank",
    height: "md:h-[30rem] xl:h-[34rem]",
  },
  {
    title: "C6 Átomos",
    copy: "Os pontos do C6, do seu jeito.",
    image: atomos,
    alt: "Programa C6 Átomos",
    height: "md:h-[26rem] xl:h-[29rem]",
  },
  {
    title: "Conta Global",
    copy: "Dólar e euro em poucos toques.",
    image: globalSkier,
    alt: "Conta Global C6 Bank",
    height: "md:h-[32rem] xl:h-[37rem]",
  },
  {
    title: "Segurança",
    copy: "Controle total do seu cartão e da sua conta.",
    image: seguranca,
    alt: "Segurança C6 Bank",
    height: "md:h-[27rem] xl:h-[31rem]",
  },
];

export function AppEcosystem() {
  return (
    <section id="app" className="bg-paper-dim py-24 md:py-36 xl:py-44">
      <Shell>
        <h2 className="display-lg mx-auto max-w-4xl text-center" data-reveal>
          Um banco inteiro.
          <br />
          <span className="text-muted-foreground">Na palma da sua mão.</span>
        </h2>

        <div
          className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:mt-24 md:grid md:grid-cols-4 md:items-end md:gap-5 md:overflow-visible md:pb-0"
          role="list"
        >
          {PANELS.map((panel, i) => (
            <article
              key={panel.title}
              role="listitem"
              className={cn(
                "group relative min-w-[74vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-ink sm:min-w-[52vw] md:h-auto md:min-w-0",
                panel.height,
              )}
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="h-[26rem] md:h-full">
                <img
                  src={panel.image.url}
                  alt={panel.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-medium text-paper">{panel.title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm text-muted-on-dark">{panel.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  );
}
