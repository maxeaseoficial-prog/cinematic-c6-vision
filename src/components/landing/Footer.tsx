import { Accessibility, MessageSquare, Phone, Smartphone } from "lucide-react";

import { C6Logo, Shell } from "./ui";

const LINK_GROUPS = [
  {
    title: "Nossos produtos",
    items: [
      "Conta Corrente",
      "Cartão de Crédito",
      "Conta Internacional",
      "Conta PJ",
      "Empréstimos",
      "Mapa do Site",
    ],
  },
  {
    title: "Dúvidas",
    items: [
      "Tire suas dúvidas",
      "Canal de Transparência",
      "Documentos",
      "LGPD",
      "CTVM LGPD",
      "C6Seg LGPD",
      "Renegociação de dívidas",
    ],
  },
  {
    title: "Sobre nós",
    items: [
      "Quem Somos",
      "Benefícios JPMorganChase",
      "Blog",
      "Trabalhe Conosco",
      "Sala de Imprensa",
      "Sustentabilidade",
    ],
  },
];

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3 rounded-md border border-line-dark px-4 py-2.5 text-left transition-colors duration-300 hover:border-blue"
      aria-label={store === "google" ? "Disponível no Google Play" : "Disponível na App Store"}
    >
      {store === "google" ? (
        <svg viewBox="0 0 512 512" className="size-5 shrink-0" aria-hidden="true">
          <path fill="#34A853" d="M325 256 111 470c-6-5-10-13-10-23V65c0-10 4-18 10-23l214 214z" />
          <path fill="#4285F4" d="M325 256 111 42l190 108 79 45c14 8 14 30 0 38l-55 23z" />
          <path fill="#FBBC04" d="M380 195c14 8 14 30 0 38l-55 23-55-31 55-30 55 0z" />
          <path fill="#EA4335" d="M111 470l214-214 55 30-190 108c-30 17-58 33-79 76z" />
        </svg>
      ) : (
        <svg viewBox="0 0 384 512" className="size-5 shrink-0 fill-current" aria-hidden="true">
          <path d="M318 273c-1-53 43-78 45-79-25-36-63-41-76-42-32-3-63 19-79 19-17 0-42-18-69-18-35 1-68 21-86 53-37 64-9 158 27 210 18 25 39 53 67 52 27-1 37-17 70-17 32 0 42 17 70 16 29 0 47-26 65-51 20-29 29-57 29-58-1 0-56-21-56-85zM266 61c15-18 25-43 22-68-22 1-49 15-65 33-14 16-26 42-23 66 25 2 51-13 66-31z" />
        </svg>
      )}
      <span className="text-xs leading-tight text-muted-on-dark">
        Disponível
        <br />
        <span className="text-sm font-medium text-paper">
          {store === "google" ? "no Google Play" : "na App Store"}
        </span>
      </span>
    </a>
  );
}

const SOCIALS = [
  {
    name: "Instagram",
    path: "M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1s.9 1 1.1 1.7c.3.6.4 1.3.5 2.4C22 8.9 22 9.3 22 12s0 3.1-.1 4.2c0 1.1-.2 1.8-.5 2.4a4.6 4.6 0 0 1-1.1 1.7c-.5.5-1 .9-1.7 1.1-.6.3-1.3.4-2.4.5-1.1.1-1.4.1-4.2.1s-3.1 0-4.2-.1c-1.1 0-1.8-.2-2.4-.5a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.3-.6-.4-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.2c0-1.1.2-1.8.5-2.4A4.6 4.6 0 0 1 3.7 3.7c.5-.5 1-.9 1.7-1.1.6-.3 1.3-.4 2.4-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM18.4 6.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    name: "TikTok",
    path: "M16.6 2h-3v13.1a2.6 2.6 0 1 1-2.6-2.6c.2 0 .5 0 .7.1V9.5a5.7 5.7 0 1 0 4.9 5.6V8.4a6.4 6.4 0 0 0 3.9 1.3V6.6a3.5 3.5 0 0 1-3.4-3.4V2Z",
  },
  {
    name: "YouTube",
    path: "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.3V8.7l5.5 3.3L10 15.3Z",
  },
  {
    name: "X",
    path: "M17.5 3h3.1l-6.8 7.8L21.9 21h-5.9l-4.3-5.6L6.5 21H3.4l7-8L2.4 3h6l4 5.3L17.5 3Zm-1.1 16h1.7L7.7 4.8H5.9L16.4 19Z",
  },
];

function SupportBlock({
  title,
  hours,
  rows,
  icon,
}: {
  title: string;
  hours: string;
  rows: { label: string; value: string; href?: string }[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="border-t border-line-dark pt-6">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="eyebrow text-paper">{title}</h3>
      </div>
      <p className="mt-2 text-xs text-muted-on-dark">{hours}</p>
      <dl className="mt-5 space-y-4">
        {rows.map((row) => (
          <div key={row.label + row.value}>
            <dt className="text-xs text-muted-on-dark">{row.label}</dt>
            <dd className="mt-0.5 text-base font-medium tracking-tight">
              {row.href ? (
                <a href={row.href} className="link-underline text-blue-soft hover:text-blue">
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Shell>
        <div className="grid gap-12 border-t border-line-dark py-16 md:py-20 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <C6Logo className="h-5" />
            <p className="mt-6 max-w-[32ch] text-sm text-muted-on-dark">
              Concept visual não oficial, criado para fins de demonstração de design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
            </div>
            <ul className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href="#top"
                    aria-label={s.name}
                    className="grid size-10 place-items-center rounded-full border border-line-dark text-muted-on-dark transition-colors duration-300 hover:border-blue hover:text-paper"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="eyebrow text-paper">{group.title}</h3>
                <ul className="mt-6 space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#top"
                        className="link-underline text-sm text-muted-on-dark transition-colors duration-300 hover:text-paper"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="grid gap-10 pb-16 md:grid-cols-2 xl:grid-cols-4">
          <SupportBlock
            title="Atendimento"
            hours="24 horas por dia, 7 dias por semana"
            icon={<Smartphone className="size-4 text-blue" aria-hidden="true" />}
            rows={[
              { label: "Acesse pelo celular", value: "No chat do app" },
              { label: "Whatsapp", value: "(11) 2832 6088", href: "#top" },
              { label: "Capitais e regiões metropolitanas", value: "3003 6116", href: "#top" },
              { label: "Demais localidades", value: "0800 660 6116", href: "#top" },
            ]}
          />
          <SupportBlock
            title="SAC"
            hours="24 horas por dia, 7 dias por semana"
            icon={<Phone className="size-4 text-blue" aria-hidden="true" />}
            rows={[{ label: "Todas as regiões", value: "0800 660 0060", href: "#top" }]}
          />
          <SupportBlock
            title="Ouvidoria"
            hours="Segunda a sexta, exceto feriados · Das 9h às 18h"
            icon={<MessageSquare className="size-4 text-blue" aria-hidden="true" />}
            rows={[
              { label: "Telefone", value: "0800 660 6060", href: "#top" },
              { label: "Saiba mais", value: "Página de ouvidoria", href: "#top" },
            ]}
          />
          <SupportBlock
            title="Atendimento em libras"
            hours="Segunda a sexta, das 9h às 18h, exceto em feriados nacionais"
            icon={<Accessibility className="size-4 text-blue" aria-hidden="true" />}
            rows={[
              { label: "Acesse pelo celular", value: "No chat do app" },
              { label: "Para perda ou roubo", value: "Acesse pelo link", href: "#top" },
            ]}
          />
        </div>

        <div className="grid gap-8 border-t border-line-dark py-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-10">
            <C6Logo className="h-4" />
            <address className="text-xs not-italic leading-relaxed text-muted-on-dark">
              © 2026 BANCO C6 S.A.
              <br />
              CNPJ: 31.872.495/0001-72
              <br />
              Av. Nove de Julho, 3186 - Jardim Paulista,
              <br />
              São Paulo - 01406-000
            </address>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-on-dark lg:justify-end">
            {["Tarifas", "Termos de Uso e Política de Privacidade", "Segurança"].map((item) => (
              <li key={item}>
                <a href="#top" className="link-underline transition-colors hover:text-paper">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </footer>
  );
}
