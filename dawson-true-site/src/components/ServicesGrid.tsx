"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ThermometerSnowflake, Flame, Wrench, ShieldCheck, Activity } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  iconType: 'ac' | 'heat' | 'install' | 'maintain' | 'emergency';
}

const iconMap = {
  ac: <ThermometerSnowflake size={32} strokeWidth={1.5} />,
  heat: <Flame size={32} strokeWidth={1.5} />,
  install: <Wrench size={32} strokeWidth={1.5} />,
  maintain: <ShieldCheck size={32} strokeWidth={1.5} />,
  emergency: <Activity size={32} strokeWidth={1.5} />
};

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
}

export default function ServicesGrid({ 
  title = "Our Core Services", 
  subtitle = "Everything you need to stay comfortable",
  services 
}: ServicesGridProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-brand)] font-bold tracking-wide uppercase mb-3">{subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-dark">{title}</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand)]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              
              <div className="text-[var(--color-brand)] mb-6">
                {iconMap[service.iconType]}
              </div>
              
              <h4 className="text-2xl font-bold font-heading text-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-8 flex-grow">
                {service.description}
              </p>
              
              <Link 
                href={service.link}
                className="inline-flex items-center text-dark font-bold hover:text-[var(--color-brand)] transition-colors mt-auto group"
              >
                Learn More 
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
