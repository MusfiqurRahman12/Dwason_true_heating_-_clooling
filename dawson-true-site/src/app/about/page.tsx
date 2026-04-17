import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TrueTriangle from '@/components/TrueTriangle';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "About Dawson True Services | Family-Owned HVAC Birmingham AL",
  description: "Dawson True Services is a family-owned HVAC company in Birmingham, Alabama. Honest service, experienced technicians, and fair pricing — guided by The True Triangle.",
};

export default function About() {
  const faqs = [
    {
      question: "How long has Dawson True Services been operating?",
      answer: "We've built our reputation job by job, customer by customer — serving the Birmingham area with the kind of service we'd want for our own homes."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Yes. Dawson True Services is fully licensed and insured. We don't cut corners on credentials any more than we cut corners on the job."
    },
    {
      question: "What areas do you serve?",
      answer: "Birmingham, Hoover, Vestavia Hills, Trussville, Mountain Brook, Homewood, Pelham, Alabaster, and Gardendale, Alabama."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="About Dawson True Services"
        subtitle="Family-Owned. Birmingham Built. Backed by The True Triangle."
        description="There are a lot of HVAC companies in Birmingham. Most of them will tell you they're the best. We'd rather show you — through how we communicate, how we price, and how we work."
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl mb-8">
              Dawson True Services was built on a straightforward belief: customers deserve honest answers, fair pricing, and work that holds up. Not just on the first visit. Every time. We're a family-owned company, which means when you call us, you're not getting a call center. You're getting people who care whether the job gets done right.
            </p>
            
            <h2 className="text-3xl font-heading font-bold text-dark mt-16 mb-8">How We Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">We diagnose first.</h3>
                <p>Before we recommend anything, we evaluate your system. You get a clear picture of what's happening — and what your options are — before work begins.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">We price honestly.</h3>
                <p>Flat, transparent quotes. No line items you didn't ask for. No upsells disguised as recommendations.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-4">We stand behind our work.</h3>
                <p>If something isn't right, we make it right. That's the only acceptable outcome.</p>
              </div>
            </div>

            <div className="mt-16 bg-dark text-white p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)] opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">Quick Answer — Who Is Dawson True Services?</h2>
              <p className="relative z-10">
                Dawson True Services LLC is a family-owned HVAC contractor located in Birmingham, Alabama. The company provides heating repair, air conditioning repair, HVAC installation, and preventative maintenance for residential and commercial customers throughout the Birmingham metro area including Hoover, Vestavia Hills, Trussville, Mountain Brook, and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrueTriangle />

      <FAQ faqs={faqs} />

      <CTA 
        title="Ready to experience the True difference?"
        description="The HVAC industry has a trust problem. We're here to fix that — one job at a time. Built on Skill. Backed by Trust."
      />
    </div>
  );
}
