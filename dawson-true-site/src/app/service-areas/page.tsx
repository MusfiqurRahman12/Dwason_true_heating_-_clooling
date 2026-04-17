import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: "HVAC Service Areas | Birmingham AL and Surrounding Cities | Dawson True Services",
  description: "Dawson True Services provides heating and cooling services throughout Birmingham, Hoover, Vestavia Hills, Trussville, Mountain Brook, Homewood, Pelham, Alabaster, and Gardendale, Alabama."
};

export default function ServiceAreas() {
  const faqs = [
    {
      question: "Do you serve my neighborhood if I'm not in Birmingham proper?",
      answer: "Most likely yes. We cover the full Birmingham metro area. Contact us with your address and we'll confirm coverage."
    },
    {
      question: "Is the service the same in smaller cities as in Birmingham?",
      answer: "Yes. We hold the same diagnostic standard, pricing transparency, and workmanship quality regardless of which city you're in."
    },
    {
      question: "Do you serve commercial properties outside Birmingham?",
      answer: "Yes. We provide HVAC services for commercial properties throughout our service area."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title="HVAC Services Across the Birmingham Metro Area"
        subtitle="Local Service. The Same Standard. Every City We Cover."
        description="Dawson True Services doesn't just say we're local — we back it up. Our team serves the full Birmingham metro area, from the city center to the suburbs and surrounding communities. No matter which city you're in, you get the same diagnostic process, the same honest pricing, and the same True Triangle standard."
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-extrabold text-dark mb-12 text-center">Cities We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Birmingham, Alabama</h3>
              <p className="text-gray-600">Our home base. We serve residential and commercial customers throughout Birmingham with the full range of HVAC services.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Hoover, Alabama</h3>
              <p className="text-gray-600">From Ross Bridge to Bluff Park, we cover the full city with the same transparent, professional service.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Vestavia Hills, Alabama</h3>
              <p className="text-gray-600">Vestavia Hills homeowners trust Dawson True Services for accurate HVAC diagnostics and efficient repairs.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Trussville, Alabama</h3>
              <p className="text-gray-600">Fast response, honest service, local knowledge of the area's homes and systems.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Mountain Brook, Alabama</h3>
              <p className="text-gray-600">We treat every home like it's our own — because our reputation depends on it.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Homewood, Alabama</h3>
              <p className="text-gray-600">From routine maintenance to emergency repair — we're responsive, professional, and fairly priced.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Pelham & Alabaster</h3>
              <p className="text-gray-600">No tiered service levels. One standard across the True Triangle.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-dark mb-3">Gardendale, Alabama</h3>
              <p className="text-gray-600">Whether it's a maintenance visit or an urgent repair call, we cover it.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTA 
        title="We are always nearby"
        description="Your city is in our zone. Your comfort is our job."
      />
    </div>
  );
}
