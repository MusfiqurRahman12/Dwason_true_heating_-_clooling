import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "Heating Repair Birmingham AL | Dawson True Services",
  description: "Professional furnace and heating system repair in Birmingham, Alabama. Fast response, clear diagnosis, honest pricing. Family-owned HVAC — Built on Skill. Backed by Trust."
};

export default function HeatingRepair() {
  const faqs = [
    {
      question: "How do I know if I need heating repair or full replacement?",
      answer: "Age, repair history, and cost-to-repair vs. cost-to-replace are the key factors. We walk you through the numbers honestly so you can make the right call."
    },
    {
      question: "My furnace is making a banging noise — is that dangerous?",
      answer: "It can be. Banging on startup often indicates delayed ignition, which is a safety concern. Don't ignore it — call for service."
    },
    {
      question: "Do you service heat pumps as well as furnaces?",
      answer: "Yes. We work on all major heating system types including gas furnaces, electric furnaces, and heat pump systems."
    },
    {
      question: "Can a dirty filter cause my heating system to fail?",
      answer: "Yes. A severely restricted filter forces the system to overheat and can trigger safety shutoffs or cause component damage. Change filters regularly — or let us check it during a maintenance visit."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="Heating Repair in Birmingham, Alabama"
        subtitle="When the Heat Goes Out, We Come In."
        description="Alabama winters are mild — until they aren't. When temperatures drop and your heating system fails, comfortable becomes cold fast. Whether it's a furnace that won't fire, a heat pump that's blowing cold air, or a thermostat that stopped responding, Dawson True Services gets to the bottom of it and gets it fixed."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-heading font-bold text-dark mb-8">Common Heating Problems We Repair</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Furnace won't start or ignite.</strong> 
                Could be the igniter, the flame sensor, or a safety shutoff. We find it, we fix it.
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Heat pump blowing cold air.</strong> 
                When your heat pump cycles but delivers cold air, the system is running but not functioning. Refrigerant, reversing valve, or defrost issues are often the culprit.
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Uneven heating.</strong> 
                If some rooms are warm and others aren't, you may have ductwork problems, airflow imbalances, or zoning issues.
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <strong className="text-dark block text-xl mb-2">Short cycling.</strong> 
                System turning on and off repeatedly without fully heating the space is a warning sign — not normal operation.
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold text-dark mt-16 mb-8">Heating Systems We Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark text-white p-10 rounded-3xl">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Gas and electric furnaces</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Heat pump systems</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Central heating systems</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Air handler units</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Thermostat and control systems</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[var(--color-brand)]"></div>Ductwork and airflow issues</div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <CTA 
        title="We Don't Guess, We Diagnose."
        description="A heating system failure in January isn't a maintenance issue — it's urgent. Dawson True Services responds with the speed the situation demands."
      />
    </div>
  );
}
