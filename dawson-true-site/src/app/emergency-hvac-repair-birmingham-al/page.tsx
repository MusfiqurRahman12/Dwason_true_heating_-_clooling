import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "Emergency HVAC Repair Birmingham AL | Dawson True Services",
  description: "Emergency heating and cooling repair in Birmingham, Alabama. Fast response, honest service, no emergency-rate surprises."
};

export default function EmergencyRepair() {
  const faqs = [
    {
      question: "What qualifies as an HVAC emergency?",
      answer: "Any situation where the failure creates an unsafe or unlivable condition — extreme heat, extreme cold, gas or refrigerant leaks, or electrical hazards. When in doubt, call."
    },
    {
      question: "Do you charge more for emergency service?",
      answer: "Contact us directly to discuss service availability and pricing. We believe in transparent pricing — you'll know the cost before we begin."
    },
    {
      question: "What should I do while waiting for emergency HVAC service?",
      answer: "For cooling failures in heat: close blinds, move to the coolest room, hydrate. For heating failures: add layers, seal drafts. If you smell gas, exit the home and call your gas company first, then us."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="Emergency HVAC Repair in Birmingham, Alabama"
        subtitle="When It Goes Down, We Come Out."
        description="This is not the time for a contact form and a three-day wait. This is the time to call a team that responds, diagnoses fast, and fixes what's broken — with the same professionalism and transparent pricing we bring to every job."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-heading font-bold text-dark mb-8">What Counts as an Emergency</h2>
          <ul className="space-y-4">
            <li><strong>Complete system failure in extreme heat.</strong> When indoor temperatures are climbing and there's no cooling, that's a health issue.</li>
            <li><strong>No heat during cold weather.</strong> A house dropping to 50 degrees overnight is not something you wait out.</li>
            <li><strong>Gas or refrigerant leak.</strong> These are immediate safety concerns. If you smell gas, stop the system and call.</li>
            <li><strong>Electrical failures.</strong> Tripped breakers that won't reset, sparks near your HVAC require urgent attention.</li>
            <li><strong>Flooding from your HVAC unit.</strong> Water damage compounds fast.</li>
          </ul>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTA 
        title="Need us now?"
        description="Don't wait. Call right now. Fast service doesn't mean cut-corner service."
      />
    </div>
  );
}
