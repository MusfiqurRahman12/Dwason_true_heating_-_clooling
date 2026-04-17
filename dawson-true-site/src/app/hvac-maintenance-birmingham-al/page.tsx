import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "HVAC Maintenance Birmingham AL | Dawson True Services",
  description: "Preventative HVAC maintenance plans in Birmingham, Alabama. Extend equipment life, improve efficiency, prevent costly breakdowns. Family-owned. Honest service."
};

export default function HVACMaintenance() {
  const faqs = [
    {
      question: "How often should HVAC systems be serviced in Birmingham?",
      answer: "Twice a year is the standard recommendation — once before cooling season (spring) and once before heating season (fall). Birmingham's climate and high humidity make regular maintenance especially important."
    },
    {
      question: "What happens if I skip maintenance?",
      answer: "Systems that aren't maintained run less efficiently, break down more often, and have shorter lifespans. The cost of skipping maintenance almost always exceeds the cost of scheduling it."
    },
    {
      question: "Can maintenance improve my energy bills?",
      answer: "Yes. A well-maintained system operates at rated efficiency. Dirty coils, low refrigerant, and clogged filters all force the system to work harder — which shows up in your utility costs."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="HVAC Maintenance in Birmingham, Alabama"
        subtitle="The Cheapest Repair Is the One You Prevent."
        description="Most HVAC breakdowns don't happen randomly. They happen because something was missed, ignored, or deferred. Small problems that become expensive repairs — or full system failures — because nobody caught them in time."
      />

      <section className="py-24 bg-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">What's Included in a Maintenance Visit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Full system inspection</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Coil cleaning (evaporator & condenser)</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Filter inspection & replacement</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Refrigerant level check</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Thermostat calibration and testing</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Drain line inspection and clearing</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Blower motor and belt inspection</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Capacitor and contactor testing</div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTA 
        title="Protect Your Investment"
        description="Dawson True Services keeps Birmingham homes and businesses running comfortably year-round. Setup a plan today."
      />
    </div>
  );
}
