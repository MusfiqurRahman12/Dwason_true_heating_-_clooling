import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "HVAC Installation Birmingham AL | Dawson True Services",
  description: "Professional HVAC system installation and replacement in Birmingham, Alabama. Accurate sizing, quality equipment, clean workmanship. Family-owned. No upsells."
};

export default function HVACInstallation() {
  const faqs = [
    {
      question: "How long does HVAC installation take?",
      answer: "A standard residential replacement typically takes one day. Larger or more complex installations may take longer — we'll give you a clear timeline before work begins."
    },
    {
      question: "What size HVAC system do I need?",
      answer: "It depends on your home's square footage, insulation, window placement, ceiling height, and local climate. We perform a proper Manual J load calculation — not a square footage guess — before recommending a system."
    },
    {
      question: "Do you offer financing or payment options?",
      answer: "Contact us to discuss available options. We believe affordability is part of great service."
    },
    {
      question: "What brands do you install?",
      answer: "We work with leading HVAC manufacturers. We recommend based on reliability, efficiency, and value for your specific situation — not on margins."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="HVAC Installation in Birmingham, Alabama"
        subtitle="Get It Sized Right. Installed Right. The First Time."
        description="The most expensive HVAC mistake isn't buying the wrong brand — it's buying the wrong size. An oversized system short-cycles and leaves your home humid. An undersized one runs nonstop and drives up your energy bill."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">When You Need a New System</h2>
            <ul className="space-y-4">
              <li><strong>Your system is 12–15+ years old.</strong> Most HVAC systems have a useful life of 15–20 years with good maintenance.</li>
              <li><strong>Repair costs are climbing.</strong> If a single repair costs more than one-third of the system's remaining value, replacement is usually the smarter investment.</li>
              <li><strong>Your energy bills keep rising.</strong> Older, inefficient systems cost you money every month.</li>
              <li><strong>You're building new or adding HVAC.</strong> New construction requires proper system design from the start.</li>
              <li><strong>You want better comfort control.</strong> Modern systems offer better humidity control, zoning options, and smart thermostat integration.</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold text-dark mt-16 mb-8">Our Installation Process</h2>
            <div className="bg-dark text-white p-10 rounded-3xl">
              <ol className="space-y-6 list-decimal list-inside marker:text-[var(--color-brand)] marker:font-bold border-l border-gray-800 ml-2 pl-4">
                <li><strong>Load calculation:</strong> we size the system to your actual space, not a rule of thumb</li>
                <li><strong>Equipment recommendation:</strong> we match system type and efficiency rating to your goals and budget</li>
                <li><strong>Professional installation:</strong> to manufacturer specs with attention to airflow, refrigerant charge, and connections</li>
                <li><strong>System startup and testing:</strong> we verify every function before we leave</li>
                <li><strong>Walkthrough:</strong> you understand how your new system operates before we're done</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTA 
        title="Ready for an upgrade?"
        description="A new HVAC system is a significant investment. You deserve a contractor who sizes it correctly, installs it professionally, and doesn't disappear after the job is done."
      />
    </div>
  );
}
