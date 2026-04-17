import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrueTriangle from '@/components/TrueTriangle';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "The True Triangle | Our Service Promise | Dawson True Services",
  description: "The True Triangle is Dawson True Services' operating standard: Expert Service, Efficiency, and Affordability on every HVAC job in Birmingham, Alabama."
};

export default function TheTrueTriangle() {
  const faqs = [
    {
      question: "Is The True Triangle just a marketing phrase?",
      answer: "No. It's an operational framework — it defines how we diagnose, how we recommend, and how we price. Every customer interaction is measured against it."
    },
    {
      question: "What if a job can't meet all three points?",
      answer: "Then we don't take the job without telling you. If a repair isn't cost-effective, we'll recommend replacement. If a product doesn't deliver real value, we don't sell it."
    },
    {
      question: "How does The True Triangle affect pricing?",
      answer: "It means you receive a fair, transparent quote before work begins. No padding. No surprise line items. The price reflects the actual scope of work."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="The True Triangle"
        subtitle="Expert Service. Efficiency. Affordability. On Every Job."
        description="Every HVAC company will tell you they do great work. What separates the ones that actually do? A clear, consistent standard that applies to every call — not just the easy jobs or the big installs."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-heading font-bold text-dark mb-4">How the Triangle Works Together</h2>
            <p className="mb-8">
              These three points only mean something when they work together. Expert service without affordability is a premium company that prices out most customers. Affordability without expertise is cheap work that costs more in the long run. Efficiency without transparency is fast service that leaves you guessing about the bill.
            </p>
            <p className="font-bold text-dark text-xl p-8 bg-[var(--color-brand)]/10 rounded-2xl border border-[var(--color-brand)]/20 text-center">
              The True Triangle is a balance — and it's non-negotiable. Every Dawson True Services job meets all three standards. That's what we mean when we say Built on Skill. Backed by Trust.
            </p>
          </div>
        </div>
      </section>

      <TrueTriangle />
      
      <FAQ faqs={faqs} />
      <CTA 
        title="Experience the standard"
        description="Most contractors operate on one standard: get the job done and get paid. Dawson True Services operates on three."
      />
    </div>
  );
}
