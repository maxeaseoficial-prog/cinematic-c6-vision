import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { C6Logo, Cta, Shell } from "./ui";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Conta", href: "#produtos" },
  { label: "Cartões", href: "#carbon" },
  { label: "Investimentos", href: "#ecossistema" },
  { label: "Conta Global", href: "#conta-global" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled
          ? "border-b border-line-dark bg-ink/95 backdrop-blur-xl"
          : "border-b border-transparent",

      )}
    >
      <Shell>
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center transition-[height] duration-500 lg:grid-cols-[auto_1fr_auto]",
            scrolled ? "h-16" : "h-20 md:h-24",
          )}
        >
          <a href="#top" className="flex min-w-0 items-center" aria-label="C6 Bank — início">
            <C6Logo />
          </a>

          <nav aria-label="Principal" className="hidden justify-center gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline text-[0.9375rem] text-muted-on-dark transition-colors duration-300 hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Cta href="#abrir-conta" variant="outline" compact className="hidden sm:inline-flex">
              Abra sua conta
            </Cta>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="grid size-10 place-items-center rounded-md border border-line-dark text-paper transition-colors duration-300 hover:border-blue lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </Shell>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden">
          <Shell>
            <div className="flex h-20 items-center justify-between">
              <C6Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="grid size-10 place-items-center rounded-md border border-line-dark text-paper"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex flex-col border-t border-line-dark">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line-dark py-5 text-2xl font-medium text-paper"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Cta
              href="#abrir-conta"
              className="mt-10 w-full"
              variant="solid"
              // eslint-disable-next-line react/jsx-no-bind
            >
              Abra sua conta
            </Cta>
          </Shell>
        </div>
      )}
    </header>
  );
}
