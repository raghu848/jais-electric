import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jais Electric—serving Ontario since 2008 with safety-first workmanship and responsive service.",
};

export default function About() {
  return <AboutPage />;
}