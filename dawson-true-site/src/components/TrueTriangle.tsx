"use client"

import { motion } from 'framer-motion';
import { Wrench, Zap, DollarSign } from 'lucide-react';

export default function TrueTriangle() {
  const features = [
    {
      title: "Expert Service",
      description: "Skilled technicians who diagnose it right the first time. Clear communication so you understand exactly what's wrong.",
      icon: <Wrench size={32} className="text-white" />,
      delay: 0.1
    },
    {
      title: "Efficiency",
      description: "Solutions built to last, not band-aids that come back in six months. We respect your time and fix actual root causes.",
      icon: <Zap size={32} className="text-white" />,
      delay: 0.2
    },
    {
      title: "Affordability",
      description: "Honest pricing with no hidden fees and no upsell games. You pay for what was done. You get what you paid for.",
      icon: <DollarSign size={32} className="text-white" />,
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-brand)] font-bold tracking-wide uppercase mb-3">Our Core Standard</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-6">The True Triangle</h3>
          <p className="text-lg text-gray-600">
            What separates the companies that say they do great work from the ones that actually do? A clear, consistent standard that applies to every call.
          </p>
        </div>

        {/* Triangle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--color-brand)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold font-heading text-dark mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
