"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section3D } from "@/components/sections/Section3D";
import { cn } from "@/components/lib/cn";
import { blurDataURL } from "@/components/lib/imagePlaceholders";
import { serviceCategories } from "@/data/services";

// Map service categories to images from the public/images folder
const serviceImageMap: Record<string, string> = {
  residential: "/images/1f3e5cbe-11da-520d-b883-2460ecc02eea.jpg",
  commercial: "/images/249975e3-05af-5098-9ff0-cae99b861321.jpg",
  industrial: "/images/2a2b82be-a8e0-5545-b135-ecc463678281.jpg",
  "ev-charging": "https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg",
};

export function ServicesPage() {
  return (
    <>
      <Section3D className="py-14 sm:py-18 bg-gradient-to-br from-[#F0FDFA] to-[#FFFFFF]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 -z-10 rounded-2xl overflow-hidden">
              <Image
                src="/new_images/Services.jpg"
                alt="Professional electrical services"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL(800, 600)}
              />
            </div>
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] text-sm font-bold uppercase tracking-wider mb-6 shadow-lg border border-[#F07F22]">
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F] font-[family-name:var(--font-montserrat)]">
              Professional Electrical Solutions
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-[1.1rem] text-[#021d1b] leading-6 font-[family-name:var(--font-montserrat)]">
              Residential, commercial, industrial, and EV charging—delivered
              with safety-first workmanship and clean finishes.
            </p>
          </div>
        </div>
      </Section3D>

      <Section3D className="pb-20 bg-gradient-to-b from-white to-[#F0FDFA]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-16">
            {serviceCategories.map((c, idx) => {
              // Alternate image position (left then right)
              const isImageOnLeft = idx % 2 === 0;
              
              return (
                <motion.section
                  id={c.slug}
                  key={c.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl bg-white shadow-xl",
                    "border border-[#F07F22] hover:shadow-2xl transition-all duration-500",
                    "flex flex-col md:flex-row",
                    isImageOnLeft ? "" : "md:flex-row-reverse"
                  )}
                >
                  {/* Main service image */}
                  <div className="md:w-1/2 relative">
                    <div className="relative h-full min-h-80">
                      <Image
                        src={serviceImageMap[c.slug] || "/images/1f3e5cbe-11da-520d-b883-2460ecc02eea.jpg"}
                        alt={`${c.title} electrical service`}
                        fill
                        className={c.slug === "ev-charging" ? "object-contain" : "object-cover"}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={blurDataURL(800, 600)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F07F22]/20 to-transparent group-hover:from-[#F9B983]/30 transition-opacity duration-500" />
                    </div>
                  </div>
                  
                  {/* Content area organized into two columns */}
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-[#F0FDFA] relative z-10">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F07F22] to-[#F9B983] flex items-center justify-center mb-4">
                        <div className="w-5 h-5 rounded-full bg-[#0A192F]/30"></div>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#0A192F] font-heading mb-2">
                        {c.title}
                      </h2>
                      <p className="text-[#0F766E] text-base mb-4 leading-relaxed">
                        {c.blurb}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <ul className="space-y-2">
                        {c.bullets.slice(0, Math.ceil(c.bullets.length / 2)).map((b, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#F07F22] to-[#F9B983] mt-2 flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#0A192F]"></div>
                            </div>
                            <span className="text-[#0F766E] text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <ul className="space-y-2">
                        {c.bullets.slice(Math.ceil(c.bullets.length / 2)).map((b, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#F07F22] to-[#F9B983] mt-2 flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#0A192F]"></div>
                            </div>
                            <span className="text-[#0F766E] text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-semibold rounded-lg hover:from-[#F9B983] hover:to-[#F07F22] transition-all shadow-lg hover:shadow-xl text-sm"
                      >
                        Request Quote
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>

                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </Section3D>
      
      {/* Add a call-to-action section */}
      <Section3D className="py-20 bg-gradient-to-r from-[#0C4A6E] to-[#14B8A6]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F07F22] font-[family-name:var(--font-montserrat)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#BAE6FD] mb-8">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F07F22] text-[#0A192F] font-semibold rounded-xl hover:bg-[#F9B983] transition-all shadow-lg"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#BAE6FD] font-semibold rounded-xl border-2 border-[#F07F22] hover:bg-[#F07F22]/10 transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </Section3D>
    </>
  );
}