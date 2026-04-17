"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ faqs, title = "Frequently Asked Questions", subtitle = "Got questions? We have answers." }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-brand)] font-bold tracking-wide uppercase mb-2">{subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">{title}</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[var(--color-brand)] bg-[var(--color-brand)]/5' : 'border-gray-200 bg-white'}`}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
                >
                  <span className="font-semibold text-lg text-dark pr-4">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[var(--color-brand)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
