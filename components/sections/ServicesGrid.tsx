"use client";

import { useMemo } from "react";
import { Wrench, Zap, Lightbulb, Home, Building, Car, Factory, Award, ShieldCheck, Timer, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Section3D } from "../sections/Section3D";
import { cn } from "../lib/cn";
import { blurDataURL } from "../lib/imagePlaceholders";

export function ServicesGrid() {
  const services = useMemo(
    () => [
      {
        title: "Residential",
        description: "Complete home electrical services",
        icon: Home,

        href: "/services#residential",
        features: [
          "Custom homes", "New Installs", "Renovations", "Troubleshooting", 
          "Solar", "Generators", "Pot lights", "Pool/Hot Tub hookups", 
          "Custom Homes"
        ],
        gradient: "from-[#0C4A6E] to-[#14B8A6]",
      },
      {
        title: "Commercial",
        description: "Office & retail electrical solutions",
        icon: Building,
        href: "/services#commercial",
        features: [
          "Commercial Electrical", "New installs", "Renovations", "Troubleshooting", 
          "Solar", "Generators", "Pot lights", "Lighting retrofits", "Maintenance", 
          "Fire Alarm"
        ],
        gradient: "from-[#0F766E] to-[#2DD4BF]",
      },
      {
        title: "EV Charging",
        description: "Electric vehicle charging solutions",
        icon: Car,
        href: "/services#ev-charging",
        features: [
          "EV Chargers" , "Electric car charger installations for your Home", "Office", "Parking lot", "and more."
        ],
        gradient: "from-[#0F766E] to-[#2DD4BF]",
      },
      {
        title: "Industrial",
        description: "Factory & manufacturing systems",
        icon: Factory,
        href: "/services#industrial",
        features: [
          "Service", "New installs", "Renos", "Troubleshooting", 
          "Solar", "Generators", "Lighting retrofits", "Maintenance", 
          "Fire Alarm", "Service"
        ],
        gradient: "from-[#0C4A6E] to-[#0F766E]",
      },
    ],
    []
  );

  return (
    <Section3D className="py-20 sm:py-24 bg-gradient-to-br from-[#0C4A6E] via-[#0A192F] to-[#0C4A6E]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#F07F22] to-[#ac8361] text-[#0A192F] text-sm font-bold uppercase tracking-wider mb-6 shadow-lg border border-[#F07F22]/30">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]">
            Professional Electrical Solutions
          </h2>
          <p className="text-[1.1rem] leading-6 text-[#BAE6FD] max-w-2xl mx-auto font-[family-name:var(--font-montserrat)]">
            From residential to commercial, industrial to EV charging—we deliver quality electrical work with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-[#F07F22]/20 bg-[#0A192F]/40 backdrop-blur-sm",
                "hover:border-[#F07F22]/50 transition-all duration-500",
                "hover:shadow-2xl hover:shadow-[#F07F22]/20",
                "flex flex-col h-full"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C4A6E]/20 to-[#0A192F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 flex flex-col flex-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-[#F07F22]" />
                </div>
                
                <h3 className="text-xl font-light text-white mb-2 flex-shrink-0 font-[family-name:var(--font-montserrat)]">{service.title}</h3>
                <p className="text-[0.9rem] text-[#BAE6FD] mb-4 flex-shrink-0 font-[family-name:var(--font-montserrat)]">{service.description}</p>
                
                <ul className="space-y-1.5 mb-6 flex-grow">
                  {service.features.map((feature, featIdx) => (
                    <li key={featIdx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F07F22]"></div>
                      <span className="text-[0.9rem] text-[#5EEAD4] font-[family-name:var(--font-montserrat)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </Section3D>
  );
}