"use client";

import { useMemo } from "react";
import { ShieldCheck, Sparkles, Timer, Wrench, Zap, Award, BadgeCheck, Hammer, Lightbulb, Battery, Home, Building, Car, Factory } from "lucide-react";
import Image from "next/image";
import { blurDataURL } from "@/components/lib/imagePlaceholders";

export default function AboutPage() {

  const timeline = useMemo(
    () => [
      { year: "2016", title: "Founded", text: "Built on safety-first service.", color: "from-[#F07F22] to-[#F9B983]" },
      { year: "2018", title: "Licensed", text: "Full electrical contractor license obtained.", color: "from-[#F07F22] to-[#F9B983]" },
      { year: "2020", title: "Expansion", text: "Extended services to commercial and industrial sectors.", color: "from-[#F07F22] to-[#F9B983]" },
      { year: "2024", title: "EV Charging", text: "Added electric vehicle charging station installation.", color: "from-[#F07F22] to-[#F9B983]" },
    ],
    []
  );

  const why = useMemo(
    () => [
      { icon: ShieldCheck, title: "Safety-first", text: "Code-compliant work.", gradient: "from-[#F07F22] to-[#F9B983]" },
      { icon: Timer, title: "Responsive", text: "Fast scheduling & updates.", gradient: "from-[#F07F22] to-[#F9B983]" },
      { icon: Wrench, title: "Clean installs", text: "Tidy workmanship.", gradient: "from-[#F07F22] to-[#F9B983]" },
      { icon: Sparkles, title: "Quality finishes", text: "Details matter.", gradient: "from-[#F07F22] to-[#F9B983]" },
      { icon: Zap, title: "Transparent", text: "Clear scopes & pricing.", gradient: "from-[#F07F22] to-[#F9B983]" },
      { icon: Award, title: "Reliable", text: "We show up on time.", gradient: "from-[#F07F22] to-[#F9B983]" },
    ],
    []
  );

  const services = [
    {
      title: "Residential",
      description: "Complete home electrical services",
      icon: Home,
      img: "/images/1f3e5cbe-11da-520d-b883-2460ecc02eea.jpg",
    },
    {
      title: "Commercial",
      description: "Office & retail electrical solutions",
      icon: Building,
      img: "/images/249975e3-05af-5098-9ff0-cae99b861321.jpg",
    },
    {
      title: "EV Charging",
      description: "Electric vehicle infrastructure",
      icon: Car,
      img: "/new_images/ev-3.jpeg",
    },
    {
      title: "Industrial",
      description: "Factory & manufacturing systems",
      icon: Factory,
      img: "/images/2a2b82be-a8e0-5545-b135-ecc463678281.jpg",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#0A192F] via-[#0C4A6E] to-[#0A192F]">
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#F07F22]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#F9B983]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-20 px-4">
          <div className="mx-auto max-w-6xl text-center relative">
            {/* Background image for the hero section */}
            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
              <Image
                src="/new_images/about.jpg"
                alt="About PowerArc Electrical Solutions"
                fill
                className="hero-bg-image opacity-60 hidden md:block"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL(2400, 1600)}
              />
              <Image
                src="/mobile_images/About_768x550.jpg.jpeg"
                alt="About PowerArc Electrical Solutions"
                fill
                className="hero-bg-image opacity-60 md:hidden"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL(2400, 1600)}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F]/80 via-[#0C4A6E]/60 to-[#0A192F]/80" />
            </div>
            
            <div className="inline-block mb-6">
              <div className="bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider animate-pulse">
                Established 2016
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F07F22] to-[#F9B983] mb-6 relative z-10 font-[family-name:var(--font-poppins)]">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-[#BAE6FD] max-w-3xl mx-auto leading-relaxed relative z-10">
              Jais Electrical Services is your trusted electrical contractor proudly serving the Greater Toronto Area, Cambridge, Kitchener, and surrounding Ontario regions.
            </p>
            <p className="text-xl md:text-2xl text-[#BAE6FD] max-w-3xl mx-auto leading-relaxed relative z-10 mt-4">
              Located at 86 Albert Street, Cambridge, ON N1R 3N5, Canada, Jais Electrical delivers comprehensive expertise across residential, commercial, industrial, and EV charging services.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((t, idx) => (
                <div
                  key={t.year}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F07F22]/20 to-[#F9B983]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-[#0C4A6E]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#F07F22]/50 hover:border-[#F9B983]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F07F22]/20">
                    <div className={`text-5xl font-black bg-gradient-to-br ${t.color} text-transparent bg-clip-text mb-4`}>
                      {t.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{t.title}</h3>
                    <p className="text-[#BAE6FD]">{t.text}</p>
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-[#F07F22] to-[#F9B983] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Licensed Contractor Section */}
        <div className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - License Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#F07F22]/20 to-[#F9B983]/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-[#0A192F] p-8 rounded-2xl border border-[#F07F22]/30">
                    <Image 
                      src="/mobile_images/liscense.jpeg" 
                      alt="ECRA License" 
                      width={840} 
                      height={740} 
                      className="rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Right side - Text Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-white mb-6">Licensed Electrical Contractors</h2>
                <p className="text-xl text-[#BAE6FD] mb-6 leading-relaxed">
                  At Jais Electrical Services Ltd, we are proud ECRA licensed electrical contractors (#7018614). 
                  Our licensed professionals ensure all electrical work meets the highest safety standards and 
                  complies with all Ontario electrical codes and regulations.
                </p>
                <p className="text-xl text-[#5EEAD4] mb-8 leading-relaxed">
                  Every visitor to our site can trust that our team of certified electricians delivers 
                  professional, reliable, and code-compliant electrical services for residential, 
                  commercial, and industrial projects throughout Cambridge and the Greater Toronto Area.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#F07F22]/20 to-[#F9B983]/20 rounded-lg border border-[#F07F22]/50">
                  <span className="text-2xl font-bold text-[#F07F22]">ECRA License : #7018614</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative h-80 transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Front */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                      <div className="relative h-full rounded-2xl overflow-hidden border border-[#F07F22]/50 group-hover:border-[#F9B983]/50 transition-all duration-500">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                          <p className="text-[#F07F22] text-sm font-semibold">{service.description}</p>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="w-10 h-10 rounded-full bg-[#F07F22]/20 backdrop-blur-sm flex items-center justify-center border border-[#F07F22]/50">
                            <service.icon className="w-5 h-5 text-[#F07F22]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <div className="h-full rounded-2xl bg-gradient-to-br from-[#0C4A6E] to-[#0A192F] p-6 border border-[#F07F22]/50 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-[#F07F22] font-semibold mb-4">{service.description}</p>
                        <p className="text-[#BAE6FD] text-sm mb-6">
                          Comprehensive electrical solutions tailored to your specific needs and requirements.
                        </p>
                        <button className="px-6 py-2 rounded-md bg-[#F07F22] hover:bg-[#F9B983] text-[#0A192F] font-semibold transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-16 px-4 pb-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {why.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
                  <div className="relative bg-[#0C4A6E]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#F07F22]/50 hover:border-[#F9B983] transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-[#0A192F]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-[#BAE6FD]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}