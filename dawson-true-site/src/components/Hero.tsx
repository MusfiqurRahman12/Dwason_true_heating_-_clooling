"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCtaText = "Schedule Service",
  primaryCtaLink = "/contact",
  secondaryCtaText = "Call (205) 677-8301",
  secondaryCtaLink = "tel:205-677-8301",
  backgroundImage = "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=2000"
}: HeroProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[var(--color-brand)]/20 border border-[var(--color-brand)]/30 backdrop-blur-md">
            <span className="text-[var(--color-brand)] font-bold text-sm tracking-wide uppercase">{subtitle}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
            {title}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
            {description}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={primaryCtaLink} 
              className="bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              {primaryCtaText} <ArrowRight size={20} />
            </Link>
            <a 
              href={secondaryCtaLink} 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <PhoneCall size={20} /> {secondaryCtaText}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
