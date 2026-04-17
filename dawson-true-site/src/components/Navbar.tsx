"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'True Triangle', path: '/the-true-triangle' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Dawson True Services Logo" width={50} height={50} className="object-contain" />
              <span className="font-heading font-bold text-xl text-dark hidden md:block">
                DAWSON <span className="text-[var(--color-brand)]">TRUE</span> SERVICES
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-[var(--color-brand)] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
             <div className="flex flex-col items-end mr-3">
               <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Fast Service</span>
               <a href="tel:205-677-8301" className="text-dark font-heading font-bold text-lg hover:text-[var(--color-brand)] transition-colors">
                  (205) 677-8301
               </a>
             </div>
             <Link 
               href="/emergency-hvac-repair-birmingham-al" 
               className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-5 py-2.5 rounded-md font-semibold flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
             >
               <PhoneCall size={18} />
               <span>Emergency Repair</span>
             </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[var(--color-brand)] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-[var(--color-brand)] hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-3 pt-4 border-t border-gray-200">
                <a href="tel:205-677-8301" className="w-full flex items-center justify-center gap-2 bg-gray-100 text-dark px-5 py-3 rounded-md font-bold mb-3">
                  <PhoneCall size={18} />
                  (205) 677-8301
                </a>
                <Link 
                  href="/emergency-hvac-repair-birmingham-al" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand)] text-white px-5 py-3 rounded-md font-bold shadow-md"
                >
                  Emergency Repair
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
