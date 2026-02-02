"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/components/site/siteConfig";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#F07F22]/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-4 font-[family-name:var(--font-poppins)]">Jais Electric</h3>
            <p className="text-gray-600 mb-4">
              Professional electrical services for residential, commercial, and industrial clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-[#F07F22]" />
                <a 
                  href={siteConfig.phoneHref} 
                  className="hover:text-[#F07F22] transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-[#F07F22]" />
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="hover:text-[#F07F22] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-[#F07F22] mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-4 font-[family-name:var(--font-poppins)]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-4 font-[family-name:var(--font-poppins)]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/services#industrial" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/services#ev-charging" className="text-gray-600 hover:text-[#F07F22] transition-colors">
                  EV Charging
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form Preview */}
          <div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-4 font-[family-name:var(--font-poppins)]">Get a Quote</h3>
            <p className="text-gray-600 mb-4">
              Need electrical work done? Contact us for a free estimate.
            </p>
            <div className="flex flex-col items-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F07F22] text-[#0A192F] font-semibold rounded-md hover:bg-[#F9B983] transition-colors"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <div className="flex gap-3 mt-3">
                <a href="https://www.facebook.com/profile.php?id=61586941303806" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                </a>
                <a href="https://www.instagram.com/jais_electrical?igsh=MWRnMGwyN3JkbGFudA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-[#E1306C]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        

        {/* ECRA License Information */}
        <div className="mt-6 pt-6 border-t border-[#F07F22]/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#0A192F]/180">
            <div className="flex items-center gap-2">
              <Image 
                src="/mobile_images/liscense.jpeg" 
                alt="ECRA License" 
                width={190} 
                height={140} 
                className="rounded"
              />
              <span>ECRA License #: 7018614</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Licensed Electrical Contractor</span>
          </div>
        </div>

      <div className="mt-12 text-center">
  <p className="inline-block bg-black text-white px-6 py-3 border border-gray-200 rounded">
    &copy; {new Date().getFullYear()} Jais Electric. All rights reserved.
  </p>
</div>
                                                                                                                                                                                    
      </div>
    </footer>
  );
}
