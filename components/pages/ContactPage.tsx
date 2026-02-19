"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully! We will contact you soon.' });
        // Reset form only on success
        setFormData({ name: "", email: "", phone: "", service: "residential", message: "" });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
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
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-montserrat)]"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.1rem] text-[#BAE6FD] max-w-2xl mx-auto font-[family-name:var(--font-montserrat)] leading-6"
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
              <h2 className="text-2xl font-semibold text-white mb-8 font-heading">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0C4A6E] flex items-center justify-center border border-[#F07F22]/50">
                    <Phone className="w-6 h-6 text-[#F07F22]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Call Us</h3>
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
                    <h3 className="font-semibold text-white text-lg">Email Us</h3>
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
                    <h3 className="font-semibold text-white text-lg">Visit Us</h3>
                    <p className="text-[#5EEAD4] font-semibold text-lg">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0C4A6E]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#F07F22]/50">
              <h3 className="font-semibold text-white text-xl mb-4 font-heading">Service Areas</h3>
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
            <h2 className="text-2xl font-semibold text-white mb-8 font-heading">Send a Message</h2>
            
            {/* Status message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-green-200' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent appearance-none disabled:opacity-50"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-[#0A192F]/50 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent resize-y disabled:opacity-50"
                  placeholder="Tell us about your electrical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-bold rounded-lg hover:from-[#F9B983] hover:to-[#F07F22] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-[#0A192F]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section3D>
  );
}