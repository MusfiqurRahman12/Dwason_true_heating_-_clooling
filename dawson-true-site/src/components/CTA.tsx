"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText = "Call (205) 677-8301",
  primaryButtonLink = "tel:205-677-8301",
  secondaryButtonText = "Schedule Online",
  secondaryButtonLink = "/contact"
}: CTAProps) {
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-darker z-0">
        <div className="absolute opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand)] via-darker to-darker w-[150%] h-[150%] -left-1/4 -top-1/4"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark border border-gray-800 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-brand)] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--color-brand)] rounded-full blur-3xl opacity-20"></div>

          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 relative z-10">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light relative z-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href={primaryButtonLink} 
              className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl"
            >
              <PhoneCall size={20} /> {primaryButtonText}
            </a>
            <Link 
              href={secondaryButtonLink} 
              className="bg-white hover:bg-gray-100 text-dark font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-xl"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
