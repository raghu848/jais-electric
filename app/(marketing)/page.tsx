import type { Metadata } from "next";
import { Hero3D } from "@/components/sections/Hero3D";
import { ProfessionalSolutions } from "@/components/sections/ProfessionalSolutions";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Trusted electricians serving Greater Toronto Area, Cambridge, Kitchener, and surrounding Ontario areas.",
};

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <ProfessionalSolutions />
      <StatsBar />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
