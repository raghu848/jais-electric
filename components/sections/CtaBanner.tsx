import Link from "next/link";
import { Section3D } from "@/components/sections/Section3D";

export function CtaBanner() {
  return (
    <Section3D className="py-16 sm:py-20 bg-gradient-to-r from-[#0C4A6E] to-[#14B8A6]">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F07F22] font-[family-name:var(--font-poppins)] mb-4 sm:mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg sm:text-xl text-[#BAE6FD] mb-6 sm:mb-8 font-[family-name:var(--font-oswald)]">
          Contact us today for a free consultation and quote
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F07F22] text-[#0A192F] font-bold rounded-xl hover:bg-[#F9B983] transition-all shadow-lg font-[family-name:var(--font-oswald)]"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#BAE6FD] font-bold rounded-xl border-2 border-[#F07F22] hover:bg-[#F07F22]/10 transition-all font-[family-name:var(--font-oswald)]"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </Section3D>
  );
}