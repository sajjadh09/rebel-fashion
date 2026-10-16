import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { StoreProvider } from "@/components/store-provider";
import RouteTransitions from "@/components/route-transitions";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rebel Fashion | Premium Marketplace",
  description: "A premium fashion marketplace for elevated essentials, new arrivals, and modern apparel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--brand-background)] text-[color:var(--brand-charcoal)]">
        <StoreProvider>
          <Header />
          <main>
            <RouteTransitions>{children}</RouteTransitions>
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
