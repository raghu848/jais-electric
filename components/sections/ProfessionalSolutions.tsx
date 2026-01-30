"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, ShieldCheck, Wrench, Lightbulb } from "lucide-react";

const solutions = [
  {
    title: "Residential Electrical",
    description: "Complete home electrical services from installations to upgrades",
    icon: Lightbulb,
    href: "/services#residential",
    features: ["Safety inspections", "Panel upgrades", "Smart home integration"]
  },
  {
    title: "Commercial Solutions",
    description: "Professional electrical services for businesses and offices",
    icon: ShieldCheck,
    href: "/services#commercial",
    features: ["Code compliance", "Energy efficiency", "Emergency services"]
  },
  {
    title: "Industrial Systems",
    description: "Heavy-duty electrical infrastructure for industrial facilities",
    icon: Wrench,
    href: "/services#industrial",
    features: ["High voltage work", "Control systems", "Preventive maintenance"]
  },
  {
    title: "EV Charging",
    description: "Electric vehicle charging station installation and setup",
    icon: Zap,
    href: "/services#ev-charging",
    features: ["Level 2 charging", "Commercial stations", "Smart charging"]
  }
];

export function ProfessionalSolutions() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A192F] to-[#0C4A6E]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
            Professional Electrical <span className="text-[#F07F22]">Solutions</span>
          </h2>
          <p className="text-xl text-[#BAE6FD] max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical services tailored to your specific needs. 
            From residential upgrades to industrial installations, we deliver excellence.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="bg-[#0C4A6E]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#F07F22]/20 hover:border-[#F07F22]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#F07F22] to-[#F9B983] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-[#0A192F]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-poppins)]">
                    {solution.title}
                  </h3>
                  <p className="text-[#BAE6FD] leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[#5EEAD4]">
                        <div className="w-2 h-2 rounded-full bg-[#F07F22] mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={solution.href}
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-bold rounded-xl hover:from-[#F9B983] hover:to-[#F07F22] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-[family-name:var(--font-oswald)]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-[#0C4A6E]/40 backdrop-blur-sm rounded-3xl p-12 border border-[#F07F22]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-[#BAE6FD] mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and quote. 
            We're here to power your projects with professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-bold rounded-xl hover:from-[#F9B983] hover:to-[#F07F22] transition-all shadow-lg hover:shadow-xl font-[family-name:var(--font-oswald)]"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="tel:+16479134501"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#BAE6FD] font-bold rounded-xl border-2 border-[#F07F22] hover:bg-[#F07F22]/10 transition-all font-[family-name:var(--font-oswald)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}