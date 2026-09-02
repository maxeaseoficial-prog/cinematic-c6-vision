import lifestyle from "@/assets/lifestyle-home.webp.asset.json";
import carbonFront from "@/assets/card-carbon.webp.asset.json";
import globalSkier from "@/assets/global-skier.webp.asset.json";
import { ArrowBadge, Shell } from "./ui";
import { cn } from "@/lib/utils";

type Panel = {
  title: string;
  copy: string;
  href: string;
  image: { url: string };
  alt: string;
  ratio: string;
  position?: string;
  tone: "dark" | "light";
  frame?: string;
};

const PANELS: Panel[] = [
  {
    title: "Conta C6",
    copy: "Sua vida financeira em um só lugar.",
    href: "#produtos",
    image: lifestyle,
    alt: "Campanha institucional C6 Bank",
    ratio: "3 / 4.1",
    position: "50% 35%",
    tone: "dark",
  },
  {
    title: "C6 Carbon",
    copy: "Exclusividade que acompanha você.",
    href: "#carbon",
    image: carbonFront,
    alt: "Cartão C6 Carbon",
    ratio: "3 / 3.7",
    position: "50% 50%",
    tone: "dark",
    frame: "bg-ink",
  },
  {
    title: "Conta Global",
    copy: "Seu dinheiro sem fronteiras.",
    href: "#conta-global",
    image: globalSkier,
    alt: "Conta Global C6 Bank",
    ratio: "3 / 4.4",
    position: "45% 40%",
    tone: "dark",
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative bg-paper py-24 md:py-36 xl:py-44">

      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="display-lg" data-reveal>
            Tudo que você espera
            <br />
            de um banco.
            <br />
            <span className="text-muted-foreground">E algumas coisas</span>
            <br />
            <span className="text-muted-foreground">que não esperava.</span>
          </h2>
          <p
            className="body-lg text-muted-foreground lg:justify-self-end lg:text-right"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Três experiências, um mesmo ecossistema. Da conta do dia a dia ao cartão mais exclusivo
            do banco.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-5 xl:gap-7">
          {PANELS.map((panel, i) => (
            <a
              key={panel.title}
              href={panel.href}
              className={cn(
                "group relative block overflow-hidden rounded-2xl",
                panel.frame ?? "bg-paper-dim",
                i === 1 && "md:mt-14",
                i === 2 && "md:mt-6",
              )}
              data-reveal
              style={{ aspectRatio: panel.ratio, "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
            >
              <img
                src={panel.image.url}
                alt={panel.alt}
                loading="lazy"
                className={cn(
                  "absolute inset-0 size-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
                  panel.frame ? "object-contain p-6" : "object-cover",
                )}
                style={{ objectPosition: panel.position }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/90"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                <div className="min-w-0 transition-transform duration-500 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-medium text-paper md:text-[1.75rem]">
                    {panel.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-on-dark">{panel.copy}</p>
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
