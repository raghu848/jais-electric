import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, industrial, and EV charging services across Cambridge, Kitchener, and the GTA.",
};

export default function Services() {
  return <ServicesPage />;
}














