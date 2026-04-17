import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "AC Repair Birmingham AL | Dawson True Services",
  description: "Professional air conditioning repair in Birmingham, Alabama. Fast diagnosis, honest pricing, reliable fixes. Family-owned HVAC company. Built on Skill. Backed by Trust.",
};

export default function ACRepair() {
  const faqs = [
    {
      question: "How quickly can you respond to an AC repair call in Birmingham?",
      answer: "We prioritize urgent calls — especially during peak summer heat. Contact us directly for current availability."
    },
    {
      question: "How do I know if I need repair or full replacement?",
      answer: "We'll tell you honestly. If a repair extends your system's useful life and makes financial sense, we'll repair it. If you're throwing money at a failing system, we'll say so."
    },
    {
      question: "Do you charge for the diagnostic visit?",
      answer: "Contact us for current pricing. We believe in transparent fees — you'll know what to expect before we arrive."
    },
    {
      question: "What brands of AC systems do you service?",
      answer: "All major brands. Our technicians are experienced across system types and manufacturers."
    },
    {
      question: "Why is my AC blowing warm air?",
      answer: "The most common causes are low refrigerant, a failed compressor, a dirty condenser coil, or a thermostat issue. Each requires a different repair — which is why accurate diagnosis matters."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="AC Repair in Birmingham, Alabama"
        subtitle="Fast Diagnosis. Honest Fixes. No Guesswork."
        description="A broken AC in Birmingham isn't a minor inconvenience — it's a health and safety issue when temperatures push past 95 degrees. When your system stops cooling, starts blowing warm air, or sounds like it's working twice as hard to do half the job, you need answers fast. Not next week. Not after a long hold queue. Now."
        backgroundImage="https://images.unsplash.com/photo-1621905252873-1994b2da8543?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl mb-12">
              Dawson True Services provides professional AC repair throughout Birmingham, Alabama and the surrounding metro area. We show up, diagnose accurately, explain what we found, and fix it right. No inflated estimates. No parts you didn't need. No return visits for the same problem.
            </p>
            
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">Signs Your AC Needs Repair</h2>
            
            <ul className="space-y-6">
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Warm air from the vents.</strong> 
                If your system is running but not cooling, the problem could be refrigerant, compressor, or airflow-related. Each one has a different fix — and a different cost. We'll tell you exactly which one.
              </li>
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Weak or restricted airflow.</strong> 
                A dirty filter is the easy answer. A failing blower motor or blocked ductwork is the expensive one. We diagnose before we recommend.
              </li>
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Unusual sounds.</strong> 
                Grinding, squealing, clicking, or banging means something's wrong mechanically. Don't wait until it becomes a full breakdown.
              </li>
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Frequent cycling.</strong> 
                Your system shouldn't be turning on and off every few minutes. Short-cycling signals a sizing issue, refrigerant problem, or thermostat failure.
              </li>
              <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Rising energy bills.</strong> 
                If your usage hasn't changed but your bill keeps climbing, your system is working harder than it should. That's money leaving your pocket every month until the issue gets fixed.
              </li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-dark mt-16 mb-8">What We Repair</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Refrigerant leaks and recharge</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Compressor failure & replacement</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Thermostat calibration & replacement</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Frozen or dirty evaporator coils</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Condenser fan motor issues</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Capacitor and contactor failure</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Blower motor and belt issues</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Electrical failures and wiring</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Drainage and condensate line blockages</div>
            </div>

            <div className="mt-16 bg-dark text-white p-10 rounded-3xl">
              <h2 className="text-3xl font-heading font-bold mb-4 text-white">How We Work</h2>
              <p className="mb-4">
                We don't walk in and start selling. We diagnose first. Every AC repair starts with a full system evaluation — we identify the root cause, not just the symptom. Then we give you a clear, itemized quote before any work begins.
              </p>
              <p>
                If the repair doesn't make financial sense compared to replacement, we'll tell you that too. You deserve the full picture, not just the answer that's easiest for us to bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <CTA 
        title="Don't Sweat The Small Stuff"
        description="AC problems don't get better on their own. The best time to call is before the breakdown — the second best time is right now."
      />
    </div>
  );
}
