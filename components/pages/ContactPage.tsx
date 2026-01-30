"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Section3D } from "@/components/sections/Section3D";
import { siteConfig } from "@/components/site/siteConfig";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "residential",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your inquiry, ${formData.name}. We'll contact you soon!`);
    setFormData({ name: "", email: "", phone: "", service: "residential", message: "" });
  };

  return (
    <Section3D className="py-20 bg-gradient-to-br from-[#0A192F] via-[#0C4A6E] to-[#0A192F]">
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#F07F22]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#F9B983]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Get In Touch
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 font-[family-name:var(--font-poppins)]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#BAE6FD] max-w-2xl mx-auto"
          >
            Have questions about our electrical services? Reach out to us today for a free consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 font-heading">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0C4A6E] flex items-center justify-center border border-[#F07F22]/50">
                    <Phone className="w-6 h-6 text-[#F07F22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Call Us</h3>
                    <a 
                      href={siteConfig.phoneHref} 
                      className="text-[#5EEAD4] hover:text-[#F07F22] transition-colors font-semibold text-lg"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0C4A6E] flex items-center justify-center border border-[#F07F22]/50">
                    <Mail className="w-6 h-6 text-[#F07F22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Email Us</h3>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-[#5EEAD4] hover:text-[#F07F22] transition-colors font-semibold text-lg"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0C4A6E] flex items-center justify-center border border-[#F07F22]/50">
                    <MapPin className="w-6 h-6 text-[#F07F22]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Visit Us</h3>
                    <p className="text-[#5EEAD4] font-semibold text-lg">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0C4A6E]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#F07F22]/50">
              <h3 className="font-bold text-white text-xl mb-4 font-heading">Service Areas</h3>
              <p className="text-[#BAE6FD]">
                {siteConfig.serviceAreas}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-[#0C4A6E]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#F07F22]/50 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src="/new_images/hero-house.jpg"
                alt=""
                fill
                className="object-cover opacity-10"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-8 font-heading">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#BAE6FD] font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#BAE6FD] font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[#BAE6FD] font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-[#BAE6FD] font-semibold mb-2">Service Type</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent appearance-none"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="ev-charging">EV Charging</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#BAE6FD] font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                  placeholder="Tell us about your electrical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-bold rounded-lg hover:from-[#F9B983] hover:to-[#F07F22] transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section3D>
  );
}