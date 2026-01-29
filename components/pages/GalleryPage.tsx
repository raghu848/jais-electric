"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles } from "lucide-react";
import { cn } from "@/components/lib/cn";
import { Section3D } from "@/components/sections/Section3D";
import { blurDataURL } from "@/components/lib/imagePlaceholders";

type GalleryCategory = "Residential" | "Commercial" | "Industrial" | "EV";
type GalleryItem = { id: string; category: GalleryCategory; src: string; title: string };

export function GalleryPage({ ssr = false }: { ssr?: boolean }) {
  // Use images from public/images folder that are not used in services section
  // Plus add EV images from public/new_images
  const actualImages = [
    { src: "/images/1f3e5cbe-11da-520d-b883-2460ecc02eea.jpg", category: "Residential" as GalleryCategory, title: "Modern Home Wiring" },
    { src: "/images/249975e3-05af-5098-9ff0-cae99b861321.jpg", category: "Commercial" as GalleryCategory, title: "Office Building Setup" },
    { src: "/images/2a2b82be-a8e0-5545-b135-ecc463678281.jpg", category: "Industrial" as GalleryCategory, title: "Factory Electrical" },
    { src: "/images/2f06b749-9cb6-5784-ac0a-7f6695c3917b.jpg", category: "Residential" as GalleryCategory, title: "Luxury Villa Setup" },
    { src: "/images/6185ea81-4638-58a6-81d5-ed95e6fa857b.jpg", category: "Commercial" as GalleryCategory, title: "Retail Space Lighting" },
    { src: "/images/8d0f6302-d10f-5196-8444-0f4e343e0457.jpg", category: "Industrial" as GalleryCategory, title: "Industrial Power Systems" },
    { src: "/images/9b4abb61-8fe9-56b8-91ed-513accf8232c.jpg", category: "EV" as GalleryCategory, title: "EV Charging Station" },
    { src: "/images/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb8b551f8db220eab6614326af68841b0f5592b2915c9faa0ecb8d0c973ef8f0ae485a6053dcb7719176345997e9e316c.jpg", category: "Commercial" as GalleryCategory, title: "Smart Office Building" },
    { src: "/images/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eb8b551f8db220eab6614326af68841b0f5592b2915c9faa0ecb8d0c973ef8f0ae485a6053dcb7719176345997e9e316c.jpg", category: "Residential" as GalleryCategory, title: "Contemporary Home Integration" },
    { src: "/new_images/ev-1.jpg", category: "EV" as GalleryCategory, title: "EV Charging Infrastructure" },
    { src: "/new_images/ev-2.jpg", category: "EV" as GalleryCategory, title: "Electric Vehicle Station" },
    { src: "/new_images/ev-3.jpeg", category: "EV" as GalleryCategory, title: "EV Charging Network" },
  ];

  const items = actualImages.map((img, i) => ({
    id: `g${i + 1}`,
    category: img.category,
    src: img.src,
    title: img.title,
  }));

  const [cat, setCat] = useState<GalleryCategory | "All">("All");
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const filtered = cat === "All" ? items : items.filter((i) => i.category === cat);

  const categoryColors = {
    All: "from-[#F07F22] to-[#F9B983]",
    Residential: "from-[#F07F22] to-[#F9B983]",
    Commercial: "from-[#F07F22] to-[#F9B983]",
    Industrial: "from-[#F07F22] to-[#F9B983]",
    EV: "from-[#F07F22] to-[#F9B983]",
  };

  return (
    <>
      {/* Hero Section with Elegant Header */}
      <Section3D className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#F07F22]/20 to-[#F9B983]/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#F07F22]/20 to-[#F9B983]/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F07F22]/10 to-[#F9B983]/10 px-6 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-[#F07F22]" />
              <span className="text-sm font-medium tracking-wider text-[#F07F22]">OUR PORTFOLIO</span>
            </motion.div>
            
            <h1 className="mb-6 bg-gradient-to-r from-white via-slate-200 to-[#F07F22] bg-clip-text font-[family-name:var(--font-poppins)] text-6xl font-bold tracking-tight text-transparent lg:text-5xl">
              ELECTRIFYING EXELLENCE
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">
              Explore our collection of masterfully executed electrical projects, 
              where precision engineering meets aesthetic innovation
            </p>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {(["All", "Residential", "Commercial", "Industrial", "EV"] as const).map((c, idx) => (
              <motion.button
                key={c}
                onClick={() => setCat(c)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "group relative overflow-hidden rounded-full px-8 py-3 font-medium tracking-wide transition-all duration-300",
                  c === cat
                    ? "bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-slate-900 shadow-xl shadow-[#F07F22]/20"
                    : "bg-slate-800/50 text-slate-300 backdrop-blur-sm ring-1 ring-slate-700/50 hover:bg-gradient-to-r hover:from-[#F07F22]/20 hover:to-[#F9B983]/20 hover:ring-[#F07F22]/50"
                )}
              >
                {c === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r",
                      categoryColors[c]
                    )}
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Section3D>

      {/* Gallery Grid Section */}
      <Section3D className="bg-gradient-to-b from-slate-950 to-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((it, idx) => (
                <motion.div
                  key={it.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <motion.button
                    type="button"
                    onClick={() => setOpen(it)}
                    whileHover={{ y: -8 }}
                    className="relative w-full overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm ring-1 ring-slate-700/50 transition-all duration-500 hover:ring-2 hover:ring-[#F07F22]/50"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={it.src}
                        alt={it.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        placeholder="blur"
                        blurDataURL={blurDataURL(1200, 900)}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                      
                      {/* Hover Zoom Icon */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute right-4 top-4 rounded-full bg-[#F07F22]/20 p-3 backdrop-blur-md"
                      >
                        <ZoomIn className="h-5 w-5 text-[#F07F22]" />
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute left-4 top-4">
                        <span className={cn(
                          "inline-flex items-center rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-lg backdrop-blur-sm",
                          categoryColors[it.category]
                        )}>
                          {it.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-3 p-6">
                      <h3 className="text-left font-serif text-xl font-semibold text-white group-hover:text-[#F07F22] transition-colors duration-300">
                        {it.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">View Project</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="text-[#F07F22]"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F07F22]/20 to-transparent"
                      style={{ pointerEvents: "none" }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <p className="text-2xl text-slate-400">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </Section3D>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            {/* Decorative Background Elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-[#F07F22]/20 to-[#F9B983]/20 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-[#F07F22]/20 to-[#F9B983]/20 blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              {/* Modal Container */}
              <div className="overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-2xl ring-1 ring-slate-700/50 shadow-2xl">
                {/* Image Container */}
                <div className="relative aspect-[16/9]">
                  <Image
                    src={open.src}
                    alt={open.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    placeholder="blur"
                    blurDataURL={blurDataURL(1600, 1000)}
                  />
                  
                  {/* Gradient Borders */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#F07F22]/30" />
                </div>

                {/* Info Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between border-t border-slate-700/50 bg-slate-900/80 p-6 backdrop-blur-xl"
                >
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {open.title}
                    </h3>
                    <span className={cn(
                      "inline-flex items-center rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900",
                      categoryColors[open.category]
                    )}>
                      {open.category}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setOpen(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F07F22] to-[#F9B983] text-slate-900 shadow-xl ring-2 ring-[#F07F22]/50 backdrop-blur-sm transition-all hover:from-[#F9B983] hover:to-[#F07F22] hover:ring-[#F07F22]"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </>
  );
}
