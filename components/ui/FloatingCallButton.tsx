"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/components/site/siteConfig";

export function FloatingCallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#F07F22] text-white shadow-lg hover:bg-[#F9B983] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:ring-offset-2"
      aria-label={`Call ${siteConfig.phone}`}
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}