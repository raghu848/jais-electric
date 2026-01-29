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
    <Section3D className="py-10 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/WhatsApp Image 2026-01-19 at 10.24.44 AM.jpeg"
          alt="Electrical work background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
      </div>
      <div ref={ref} className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="rounded-2xl bg-transparent backdrop-blur-none ring-1 ring-white/20 shadow-xl">
          <div className="grid gap-0 divide-y divide-white/20 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
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

function StatItem({
  label,
  value,
  suffix,
  start,
}: Readonly<{ label: string; value: number; suffix: string; start: boolean }>) {
  const v = useCountUp(value, start);
  return (
    <div className="px-6 py-8 text-center">
      <div className="text-4xl font-black tracking-tight text-white">
        {v}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/90 font-heading font-normal">
        {label}
      </div>
    </div>
  );
}