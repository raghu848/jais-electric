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
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        "bg-[rgba(10,25,47,0.55)] backdrop-blur-xl",
        isScrolled && "bg-[rgba(10,25,47,0.78)]"
      )}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/new_images/transparent-logo_white.png"
            alt="Jais Electrical Services Ltd Logo"
            width={120}
            height={40}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => {
            const isActive = activeHref === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-semibold text-[#5EEAD4] transition-colors hover:text-[#F07F22]",
                  isActive && "text-[#F07F22]"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              "rounded-lg bg-gradient-to-r from-[#F07F22] to-[#F9B983] px-6 py-3 text-base font-black text-[#0A192F] shadow-lg shadow-[#F07F22]/30",
              "transition-all duration-300 hover:from-[#F9B983] hover:to-[#F07F22] hover:shadow-xl hover:shadow-[#F07F22]/50 hover:-translate-y-0.5",
              "transform motion-safe:hover:scale-105"
            )}
          >
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#F07F22] ring-1 ring-[#F07F22]/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#F07F22]/10 bg-[rgba(10,25,47,0.92)] backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => {
                const isActive = activeHref === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-semibold text-[#5EEAD4] ring-1 ring-transparent",
                      "hover:bg-[#F07F22]/10 hover:text-[#F07F22]",
                      isActive && "bg-[#F07F22]/20 text-[#F07F22] ring-[#F07F22]/20"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href={siteConfig.phoneHref}
                className="rounded-md bg-[#F07F22] px-3 py-2 text-sm font-extrabold text-[#0A192F] text-center hover:bg-[#F9B983]"
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