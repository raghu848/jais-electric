import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageTransition } from "@/components/motion/PageTransition";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <PageTransition>
        <main className="pt-16">{children}</main>
      </PageTransition>
      <Footer />
    </div>
  );
}




