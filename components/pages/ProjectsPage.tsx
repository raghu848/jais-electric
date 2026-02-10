"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/components/lib/cn";
import { Section3D } from "@/components/sections/Section3D";
import { blurDataURL } from "@/components/lib/imagePlaceholders";

type Project = {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "EV";
  image: string;
  description: string;
};

export function ProjectsPage() {
  // Your actual project images with titles and descriptions
  const actualProjects = [
    {
      id: "p1",
      title: "Commercial Electrical Installation",
      category: "Commercial" as const,
      image: "/new_images/download.jpeg",
      description: "Professional commercial electrical installation with modern lighting and control systems.",
    },
    {
      id: "p2",
      title: "Industrial Control Panel",
      category: "Industrial" as const,
      image: "/new_images/download (1).jpeg",
      description: "Advanced industrial control panel installation with safety compliance and modern automation.",
    },
    {
      id: "p3",
      title: "Commercial Lighting Upgrade",
      category: "Commercial" as const,
      image: "/new_images/download (2).jpeg",
      description: "Complete commercial lighting upgrade with energy-efficient LED systems and smart controls.",
    },
    {
      id: "p4",
      title: "Residential Electrical Service",
      category: "Residential" as const,
      image: "/new_images/images.jpeg",
      description: "Comprehensive residential electrical service including panel upgrades and modern wiring.",
    },
    {
      id: "p5",
      title: "EV Charging Station Installation",
      category: "EV" as const,
      image: "/new_images/WhatsApp Image 2026-01-19 at 10.24.32 AM.jpeg",
      description: "Fast-charging EV station installation with load management and future-ready infrastructure.",
    },
    {
      id: "p6",
      title: "Industrial Electrical System",
      category: "Industrial" as const,
      image: "/new_images/WhatsApp Image 2026-01-19 at 10.24.40 AM.jpeg",
      description: "Large-scale industrial electrical system with transformers and professional conduit work.",
    },
    {
      id: "p7",
      title: "Commercial Panel Upgrade",
      category: "Commercial" as const,
      image: "/new_images/WhatsApp Image 2026-01-19 at 10.24.42 AM.jpeg",
      description: "Commercial electrical panel upgrade with enhanced capacity and safety features.",
    },
    {
      id: "p8",
      title: "Residential Home Wiring",
      category: "Residential" as const,
      image: "/new_images/WhatsApp Image 2026-01-19 at 10.24.44 AM.jpeg",
      description: "Complete residential home wiring with modern standards and smart home integration.",
    },
  ];

  const projects = useMemo<Project[]>(() => actualProjects, []);

  const [open, setOpen] = useState<Project | null>(null);

  return (
    <>
      <Section3D className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-light italic tracking-tight text-white md:text-5xl font-[family-name:var(--font-georgia)] font-normal">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--secondary)]">
            3D-hover grid with modal details (Bright Force structure + Clou
            depth).
          </p>
        </div>
      </Section3D>

      <Section3D className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((p) => (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => setOpen(p)}
                whileHover={{
                  translateZ: 20,
                  rotateY: 10,
                  scale: 1.02,
                }}
                className={cn(
                  "group overflow-hidden rounded-2xl bg-[var(--surface)]/85 text-left shadow-bf-card",
                  "ring-1 ring-white/10 backdrop-blur-[20px]",
                  "[transform-style:preserve-3d]"
                )}
              >
                <div className="relative h-40">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover opacity-90 transition-all duration-300 ease-in-out group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    placeholder="blur"
                    blurDataURL={blurDataURL(1200, 800)}
                  />
                  <div className="absolute left-3 top-3 inline-flex rounded-full bg-black/45 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white ring-1 ring-white/10 font-heading font-normal">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-sm font-extrabold text-white font-heading font-normal">
                    {p.title}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-[var(--secondary)]">
                    View Details →
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section3D>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-white/10"
            >
              <div className="relative h-56 sm:h-72">
                <Image
                  src={open.image}
                  alt={open.title}
                  fill
                  sizes="100vw"
                  className="object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
                  placeholder="blur"
                  blurDataURL={blurDataURL(1600, 1000)}
                />
                <button
                  onClick={() => setOpen(null)}
                  className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-black/45 text-white ring-1 ring-white/10 hover:bg-black/60"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xl font-bold text-white font-heading font-normal">
                      {open.title}
                    </div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-widest text-[var(--brand-orange)] font-heading font-normal">
                      {open.category}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--secondary)]">
                  {open.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}