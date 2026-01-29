"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/lib/cn";

export function Section3D({
  children,
  className,
  id,
}: Readonly<{ children: React.ReactNode; className?: string; id?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden [perspective:1000px]",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="[transform-style:preserve-3d]"
      >
        {children}
      </motion.div>
    </section>
  );
}




