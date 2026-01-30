"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/components/lib/cn";
import { blurDataURL } from "@/components/lib/imagePlaceholders";
import { siteConfig } from "@/components/site/siteConfig";

export function Hero3D() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });

  const bgX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const bgY = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      className={cn(
        "relative h-[100svh] overflow-hidden [perspective:1000px]",
        // Ocean Electric gradient
        "bg-[radial-gradient(circle_at_top,_#0A192F,_#0C4A6E_55%)]"
      )}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        mx.set(x);
        my.set(y);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {/* Z=-150: Parallax background */}
      <motion.div
        style={{ x: bgX, y: bgY, translateZ: -150 }}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >
        <Image
          src={"/new_images/Home.jpg"}
          srcSet={`/mobile_images/Home_768x1024.jpg 768w, /new_images/Home.jpg 1200w`}
          alt="Luxurious residential property with architectural lighting"
          fill
          priority
          className="hero-bg-image opacity-95 brightness-105 contrast-110 grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
          placeholder="blur"
          blurDataURL={blurDataURL(2400, 1600)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Much lighter overlay so the photo and motion are visible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,25,47,0.3),_transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/10 via-[#0A192F]/25 to-[#0A192F]/55" />
      </motion.div>

      {/* Z=90: Decorative sparks */}
      <motion.div
        style={{ x: bgX, y: bgY, translateZ: 90 }}
        className="pointer-events-none absolute inset-0 opacity-90 [transform-style:preserve-3d]"
      >
        <div className="absolute left-[-8%] top-[18%] h-64 w-64 rounded-full bg-[#14B8A6]/12 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[10%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute left-[48%] top-[14%] h-[2px] w-[240px] rotate-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </motion.div>

      {/* Z=0 content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="mx-12 max-w-3xl text-left [transform-style:preserve-3d]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl font-[family-name:var(--font-poppins)]"
          >
            Professional Electrical Services
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-pretty text-xl font-semibold leading-8 text-white/85 md:text-2xl font-heading font-normal"
          >
            Trusted electricians serving {siteConfig.serviceAreas}
          </motion.h2>

          {/* Dual CTAs (Amber Force yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ translateZ: 15, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="[transform-style:preserve-3d]"
            >
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-md px-7 text-sm font-extrabold text-[#0A192F]",
                  "bg-[#F07F22] shadow-[0_18px_45px_rgba(252,211,77,0.22)]",
                  "transition-colors hover:bg-[#F9B983]",
                  "motion-safe:animate-[pulse_2.6s_ease-in-out_infinite]"
                )}
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ translateZ: 15, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="[transform-style:preserve-3d]"
            >
              <a
                href={siteConfig.phoneHref}
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-md px-7 text-sm font-extrabold",
                  "bg-[#F07F22] shadow-[0_18px_45px_rgba(252,211,77,0.22)]",
                  "text-[#0A192F] transition-colors hover:bg-[#F9B983]"
                )}
              >
                Call {siteConfig.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {["Residential", "Commercial", "Industrial", "EV"].map((b) => (
              <span
                key={b}
                className="rounded-full bg-[#F07F22]/20 px-4 py-2 text-xs font-bold tracking-wide text-[#F07F22] ring-1 ring-[#F07F22]/30 backdrop-blur-md flex items-center gap-2"
              >
                {b === "Residential" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                )}
                {b === "Commercial" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2zm0-4h-2V9h2v2zm0-4H8V5h2v2z" />
                  </svg>
                )}
                {b === "Industrial" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 11H4V8h16v3zm0-5H4V4h16v2zm0 8H4v-3h16v3zm0 5H4v-3h16v3z" />
                  </svg>
                )}
                {b === "EV" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 5V2c0-.55-.45-1-1-1s-1 .45-1 1v1H9V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3zM8 3h8v2H8V3zm9 15H7v-2h10v2zm0-4H7V9c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v5z" />
                  </svg>
                )}
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}