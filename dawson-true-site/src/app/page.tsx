import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import TrueTriangle from '@/components/TrueTriangle';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dawson True Services | Heating & Cooling Birmingham AL",
  description: "Family-owned HVAC company serving Birmingham, Alabama. Expert service, efficient solutions, honest pricing. Built on Skill. Backed by Trust. Call today.",
  openGraph: {
    title: "Dawson True Services | Heating & Cooling Birmingham AL",
    description: "Family-owned HVAC company serving Birmingham, Alabama. Expert service, efficient solutions, honest pricing. Built on Skill. Backed by Trust. Call today.",
  }
};

export default function Home() {
  
  const services = [
    {
      title: "AC Repair & Cooling",
      description: "Fast, accurate diagnosis and repair when your air conditioning stops working in the heat of an Alabama summer.",
      link: "/ac-repair-birmingham-al",
      iconType: "ac" as const
    },
    {
      title: "Heating Repair",
      description: "Furnace and heat pump repairs that restore your comfort quickly when temperatures drop.",
      link: "/heating-repair-birmingham-al",
      iconType: "heat" as const
    },
    {
      title: "HVAC Installation",
      description: "Full system replacement properly sized and installed to manufacturer specifications for maximum efficiency.",
      link: "/hvac-installation-birmingham-al",
      iconType: "install" as const
    },
    {
      title: "Preventative Maintenance",
      description: "Routine maintenance programs that extend equipment life, lower energy bills, and prevent costly breakdowns.",
      link: "/hvac-maintenance-birmingham-al",
      iconType: "maintain" as const
    },
    {
      title: "Emergency HVAC Repair",
      description: "Urgent 24/7 service when your system goes down at the worst possible time. No hidden emergency fees.",
      link: "/emergency-hvac-repair-birmingham-al",
      iconType: "emergency" as const
    }
  ];

  const faqs = [
    {
      question: "Where does Dawson True Services operate?",
      answer: "We serve Birmingham and the greater metro area including Hoover, Vestavia Hills, Trussville, Mountain Brook, Homewood, Pelham, Alabaster, and Gardendale, Alabama."
    },
    {
      question: "Is Dawson True Services family-owned?",
      answer: "Yes. Dawson True Services is a family-owned HVAC company. That matters — it means you're dealing with people who have a real stake in every job we do."
    },
    {
      question: "Do you offer emergency HVAC repair?",
      answer: "Yes. When your system goes down at the wrong time, we respond. Contact us for urgent service requests."
    },
    {
      question: "What does \"The True Triangle\" mean?",
      answer: "It's our operating standard — Expert Service, Efficiency, and Affordability on every job. Not a tagline. A commitment."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="Built on Skill. Backed by Trust."
        subtitle="Heating and Cooling Services in Birmingham, Alabama"
        description="When your HVAC system goes down, you don't have time to gamble on who shows up. You need a team that picks up the phone, gives you a straight answer, and fixes the problem right the first time. That's exactly what Dawson True Services delivers."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[var(--color-brand)] font-bold tracking-wide uppercase mb-3">Why Customers Choose Us</h2>
              <h3 className="text-4xl font-heading font-extrabold text-dark mb-6">Dependable service backed by real experience.</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">We answer the phone</h4>
                    <p className="text-gray-600">When something goes wrong with your system, the last thing you need is a voicemail. We're here.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">We diagnose before we sell</h4>
                    <p className="text-gray-600">You'll understand exactly what's wrong and what it costs before any work begins. No pressure. No surprises.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">We fix it right the first time</h4>
                    <p className="text-gray-600">Or we don't consider the job done. That's not marketing language — that's how we operate.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] font-bold">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-1">We're local to Birmingham</h4>
                    <p className="text-gray-600">Birmingham is our backyard. We serve Hoover, Vestavia Hills, Trussville, Mountain Brook, Homewood, and surrounding communities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <h4 className="text-white font-heading font-bold text-2xl mb-2">Quick Answer</h4>
                <p className="text-gray-300">
                  Dawson True Services is a licensed, family-owned HVAC contractor serving Birmingham, Alabama. We provide heating repair, AC repair, full system installation, and preventative maintenance for residential and commercial customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid services={services} />

      <TrueTriangle />

      <FAQ faqs={faqs} />

      <CTA 
        title="Don't Wait Until It Breaks"
        description="Most HVAC problems build up over time. If you want to get ahead of problems before Alabama summer hits, or need a repair today — we're ready."
      />
    </div>
  );
}
