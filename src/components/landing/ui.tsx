import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import logoWhite from "@/assets/logo-c6-white.png.asset.json";
import logoDark from "@/assets/logo-c6-dark.png.asset.json";
import { cn } from "@/lib/utils";

export function C6Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const asset = variant === "light" ? logoWhite : logoDark;
  return (
    <img
      src={asset.url}
      alt="C6 Bank"
      width={1790}
      height={628}
      className={cn("h-4 w-auto select-none sm:h-[18px]", className)}
      draggable={false}
    />
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-blue-soft" : "text-muted-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-px w-8", tone === "dark" ? "bg-blue" : "bg-charcoal/40")}
      />
      {children}
    </p>
  );
}

type CtaProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "ghost" | "solid-light";
  className?: string;
  compact?: boolean;
};

export function Cta({ children, href, variant = "solid", className, compact }: CtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,color,border-color,transform] duration-300 will-change-transform hover:-translate-y-[1px]",
        compact ? "px-4 py-2 text-[0.8125rem]" : "px-6 py-3.5 text-[0.9375rem]",
        variant === "solid" && "bg-blue text-paper hover:bg-blue-soft",
        variant === "solid-light" && "bg-ink text-paper hover:bg-graphite",
        variant === "outline" &&
          "border border-line-dark text-paper hover:border-blue hover:bg-blue/10",
        variant === "ghost" && "border border-line text-ink hover:border-ink hover:bg-ink/[0.04]",
        className,
      )}
    >
      {children}
      <ArrowRight
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-1",
          compact ? "size-3.5" : "size-4",
        )}
        aria-hidden="true"
      />
    </a>
  );
}

export function ArrowBadge({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full border transition-colors duration-300",
        tone === "light"
          ? "border-ink/15 text-ink group-hover:border-blue group-hover:bg-blue group-hover:text-paper"
          : "border-line-dark text-paper group-hover:border-blue group-hover:bg-blue",
        className,
      )}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px] px-6 md:px-10 xl:px-16", className)}>
      {children}
    </div>
  );
}
