"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/components/lib/cn";
import { navLinks } from "@/components/site/navLinks";
import { siteConfig } from "@/components/site/siteConfig";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const activeHref = useMemo(() => {
    if (pathname === "/") return "/";
    const hit = navLinks.find((l) => pathname.startsWith(l.href) && l.href !== "/");
    return hit?.href ?? pathname;
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[#F07F22]/10",
        "bg-[rgba(10,25,47,0.75)] backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/new_images/transparent-logo_white.png"
            alt="Jais Electrical Services Ltd Logo"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => {
            const isActive = activeHref === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-base font-semibold text-[#5EEAD4] transition-all duration-300 hover:text-[#F07F22] font-[family-name:var(--font-oswald)]",
                  isActive && "text-[#F07F22] border-b-2 border-[#F07F22] pb-1"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "rounded-lg bg-gradient-to-r from-[#F07F22] to-[#F9B983] px-7 py-3.5 text-base font-black text-[#0A192F] shadow-lg shadow-[#F07F22]/30",
              "transition-all duration-300 hover:from-[#F9B983] hover:to-[#F07F22] hover:shadow-xl hover:shadow-[#F07F22]/50 hover:-translate-y-0.5",
              "transform motion-safe:hover:scale-105 font-[family-name:var(--font-oswald)]"
            )}
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-[#F07F22] ring-1 ring-[#F07F22]/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#F07F22]/10 bg-[rgba(10,25,47,0.95)] backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => {
                const isActive = activeHref === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-lg px-4 py-3 text-lg font-semibold text-[#5EEAD4] ring-1 ring-transparent font-[family-name:var(--font-oswald)]",
                      "hover:bg-[#F07F22]/15 hover:text-[#F07F22]",
                      isActive && "bg-[#F07F22]/25 text-[#F07F22] ring-[#F07F22]/30"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={siteConfig.phoneHref}
                className="rounded-lg bg-[#F07F22] px-4 py-3.5 text-lg font-extrabold text-[#0A192F] text-center hover:bg-[#F9B983] font-[family-name:var(--font-oswald)]"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}