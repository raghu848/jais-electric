"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Section3D } from "@/components/sections/Section3D";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Professional, reliable, and clean work. They fixed our electrical issues quickly and safely.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "Excellent commercial electrical work. Completed our office upgrade on time and on budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Property Manager",
    content: "Dependable and knowledgeable. Always our first choice for electrical maintenance.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Contractor",
    content: "Great team to work with. Quality electrical work that meets all codes and standards.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Homeowner",
    content: "Fantastic service! Fixed our panel issues and upgraded our outlets efficiently.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Facility Manager",
    content: "Consistently reliable for our industrial electrical needs. Highly recommended.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section3D className="py-16 sm:py-20 bg-gradient-to-br from-[#0C4A6E] via-[#0F766E] to-[#0C4A6E]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg border border-[#F07F22]/30 sm:px-6 sm:py-3 sm:text-sm">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 font-[family-name:var(--font-poppins)]">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-[#BAE6FD] max-w-2xl mx-auto">
            Don't just take our word for it—here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-[#F07F22]/20 bg-[#0A192F]/40 backdrop-blur-sm p-8 hover:border-[#F07F22]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#F07F22]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C4A6E]/20 to-[#0A192F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F07F22] text-[#F07F22]" />
                  ))}
                </div>
                
                <p className="text-[#BAE6FD] mb-6 italic">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-[#5EEAD4]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section3D>
  );
}