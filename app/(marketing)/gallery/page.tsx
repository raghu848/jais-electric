import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our electrical project portfolio across residential, commercial, industrial, and EV charging categories.",
};

export default function Gallery() {
  return <GalleryPage />;
}














