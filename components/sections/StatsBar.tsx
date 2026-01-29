"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Section3D } from "@/components/sections/Section3D";

function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      setValue(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [durationMs, start, target]);

  return value;
}

function StatItem({
  label,
  value,
  suffix,
  start,
}: Readonly<{ label: string; value: number; suffix: string; start: boolean }>) {
  const v = useCountUp(value, start);
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 text-center">
      <div className="text-3xl sm:text-4xl font-black tracking-tight text-white font-heading">
        {v}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-widest text-[#F07F22] font-heading font-normal sm:mt-2">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = useMemo(
    () => [
      { label: "Years Experience", value: 15, suffix: "+" },
      { label: "Projects Completed", value: 500, suffix: "+" },
      { label: "Satisfaction", value: 100, suffix: "%" },
      { label: "Emergency Service", value: 24, suffix: "/7" },
    ],
    []
  );

  return (
    <Section3D className="py-8 sm:py-10 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/new_images/WhatsApp Image 2026-01-19 at 10.24.44 AM.jpeg"
          alt="Electrical work background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/70 via-[#0C4A6E]/50 to-[#0A192F]/70" />
      </div>
      <div ref={ref} className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="rounded-2xl bg-transparent backdrop-blur-none ring-1 ring-[#99F6E4]/20 shadow-xl">
          <div className="grid gap-0 divide-y divide-[#99F6E4]/20 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:grid-cols-4">
            {stats.map((s) => (
              <StatItem
                key={s.label}
                label={s.label}
                value={s.value}
                suffix={s.suffix}
                start={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </Section3D>
  );
}