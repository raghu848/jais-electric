"use client";

import { useState } from "react";
import { Section3D } from "./Section3D";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";

export function CtaBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <Section3D className="py-20 bg-gradient-to-r from-[#0C4A6E] to-[#14B8A6]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F07F22] font-[family-name:var(--font-poppins)] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#BAE6FD] mb-8">
              Contact us today for a free consultation and quote. 
              We're here to power your projects with professional excellence.
            </p>
            
            {/* <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#F07F22]" />
                <span className="text-[#5EEAD4]">(647) 913-4501</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#F07F22]" />
                <span className="text-[#5EEAD4]">info@jaiselectrical.ca</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="w-5 h-5 text-[#F07F22]" />
                <span className="text-[#5EEAD4]">Cambridge, ON N1R 3N5</span>
              </div>
            </div> */}
            
            {/* Social Media Links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=61586941303806"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:bg-[#1877F2]/80 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/jais_electrical?igsh=MWRnMGwyN3JkbGFudA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center hover:opacity-80 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0A192F]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#F07F22]/20"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#F07F22] mx-auto flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#0A192F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-[#BAE6FD]">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h3>
                
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0C4A6E]/30 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 bg-[#0C4A6E]/30 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 bg-[#0C4A6E]/30 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0C4A6E]/30 border border-[#F07F22]/30 rounded-lg text-white placeholder-[#5EEAD4] focus:outline-none focus:ring-2 focus:ring-[#F07F22] focus:border-transparent resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#F07F22] to-[#F9B983] text-[#0A192F] font-bold rounded-lg hover:from-[#F9B983] hover:to-[#F07F22] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 font-[family-name:var(--font-oswald)]"
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
            )}
          </motion.div>
        </div>
      </div>
    </Section3D>
  );
}
