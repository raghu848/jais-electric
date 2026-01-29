import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of residential, commercial, industrial, and EV charging projects delivered by Jais Electric.",
};

export default function Projects() {
  return <ProjectsPage />;
}




