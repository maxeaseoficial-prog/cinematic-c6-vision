import { createFileRoute } from "@tanstack/react-router";

import { AppEcosystem } from "@/components/landing/AppEcosystem";
import { C6Ecosystem } from "@/components/landing/C6Ecosystem";
import { Carbon } from "@/components/landing/Carbon";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { GlobalAccount } from "@/components/landing/GlobalAccount";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Products } from "@/components/landing/Products";
import { ScrollVideo } from "@/components/landing/ScrollVideo";

import { useRevealObserver } from "@/lib/motion";

const title = "C6 Bank Concept — Uma experiência financeira extraordinária";
const description =
  "Concept visual de landing page para o C6 Bank: conta, cartões, C6 Carbon, Conta Global e investimentos em uma direção de arte editorial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealObserver();

  return (
    <div className="bg-paper">
      <Header />
      <main>
        <Hero />
        <ScrollVideo />
        <Products />

        <Carbon />
        <AppEcosystem />
        <GlobalAccount />
        <C6Ecosystem />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
