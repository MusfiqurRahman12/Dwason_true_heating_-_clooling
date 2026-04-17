import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "HVAC Services Birmingham AL | Dawson True Services",
  description: "Full-service heating and cooling in Birmingham, Alabama. AC repair, heating repair, HVAC installation, maintenance, and emergency service. Family-owned. Honest pricing."
};

export default function Services() {
  const faqs = [
    {
      question: "Do you work on all HVAC brands?",
      answer: "Yes. Our technicians are experienced with all major brands and system types — central air, heat pumps, gas furnaces, and more."
    },
    {
      question: "Can you handle both residential and commercial systems?",
      answer: "Yes. We service homes, small businesses, and commercial facilities throughout the Birmingham area."
    },
    {
      question: "What's the first step when I call?",
      answer: "We listen. Then we schedule a diagnostic visit, evaluate the system, and give you a clear answer before any work begins."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="HVAC Services in Birmingham, Alabama"
        subtitle="Every Heating and Cooling Service You Need — Done Right"
        description="You shouldn't need four different contractors to keep your home comfortable. Dawson True Services handles everything — from diagnosing a system that won't start to installing a brand-new unit that cuts your energy bill. One company. One standard. Every time."
        backgroundImage="https://images.unsplash.com/photo-1510525035222-777cbf18cc8d?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold font-heading text-dark">AC Repair</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4 text-lg">Birmingham summers are not forgiving. When your cooling system underperforms — or stops entirely — we diagnose fast and repair right. From refrigerant leaks to compressor failure, we've seen it and fixed it.</p>
                <a href="/ac-repair-birmingham-al" className="text-[var(--color-brand)] font-bold hover:underline">Learn about AC Repair &rarr;</a>
              </div>
            </div>

            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold font-heading text-dark">Heating Repair</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4 text-lg">Cold snaps in Alabama can catch you off guard. Furnace issues, heat pump failures, thermostat problems — we identify the source and restore performance quickly so your home or business stays warm.</p>
                <a href="/heating-repair-birmingham-al" className="text-[var(--color-brand)] font-bold hover:underline">Learn about Heating Repair &rarr;</a>
              </div>
            </div>

            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold font-heading text-dark">HVAC Installation & Replacement</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4 text-lg">Installing the wrong system size is one of the most expensive mistakes in HVAC. We size accurately, recommend honestly, and install to manufacturer specs. New build or full replacement — same standard either way.</p>
                <a href="/hvac-installation-birmingham-al" className="text-[var(--color-brand)] font-bold hover:underline">Learn about Installation &rarr;</a>
              </div>
            </div>

            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold font-heading text-dark">Preventative Maintenance</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4 text-lg">Reactive repairs cost more than preventative maintenance. Always. Our maintenance program keeps your system running efficiently, catches problems early, and extends equipment life.</p>
                <a href="/hvac-maintenance-birmingham-al" className="text-[var(--color-brand)] font-bold hover:underline">View Maintenance Plans &rarr;</a>
              </div>
            </div>

            <div className="p-10 bg-[var(--color-brand)]/10 rounded-3xl border border-[var(--color-brand)]/20 shadow-sm flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold font-heading text-dark">Emergency HVAC Repair</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 text-lg">Systems don't care about business hours. When something goes down at the worst possible time, we respond. Same diagnostic standard. Same quality. No emergency-rate surprises buried in the fine print.</p>
                <a href="/emergency-hvac-repair-birmingham-al" className="text-[var(--color-brand)] font-bold hover:underline">Emergency Services &rarr;</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <CTA 
        title="We Service Both Residential and Commercial Systems"
        description="Dawson True Services provides air conditioning repair, heating repair, HVAC system installation, preventative maintenance programs, and emergency HVAC repair in Birmingham, Alabama."
      />
    </div>
  );
}
