import type { Metadata } from "next";
import { GalleryPage } from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse recent electrical work across residential, commercial, industrial, and EV charging categories.",
};

export default function Gallery() {
  return <GalleryPage ssr={true} />;
}




