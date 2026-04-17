import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Contact */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Dawson True Services Logo" width={40} height={40} className="object-contain brightness-0 invert" />
              <span className="font-heading font-bold text-xl text-white">
                DAWSON <span className="text-[var(--color-brand)]">TRUE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Family-owned HVAC company serving Birmingham, Alabama. Built on Skill. Backed by Trust.
            </p>
            <div className="space-y-3 pt-2">
              <a href="tel:205-677-8301" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[var(--color-brand)]" />
                <span>(205) 677-8301</span>
              </a>
              <a href="mailto:Sales@DawsonTrueHVAC.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-[var(--color-brand)]" />
                <span>Sales@DawsonTrueHVAC.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-brand)] shrink-0 mt-1" />
                <span>2401 Old Springville Rd,<br/>Birmingham, AL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-brand)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand)] transition-colors">All Services</Link></li>
              <li><Link href="/the-true-triangle" className="hover:text-[var(--color-brand)] transition-colors">The True Triangle</Link></li>
              <li><Link href="/service-areas" className="hover:text-[var(--color-brand)] transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* HVAC Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">HVAC Services</h3>
            <ul className="space-y-3">
              <li><Link href="/ac-repair-birmingham-al" className="hover:text-[var(--color-brand)] transition-colors">AC Repair</Link></li>
              <li><Link href="/heating-repair-birmingham-al" className="hover:text-[var(--color-brand)] transition-colors">Heating Repair</Link></li>
              <li><Link href="/hvac-installation-birmingham-al" className="hover:text-[var(--color-brand)] transition-colors">HVAC Installation</Link></li>
              <li><Link href="/hvac-maintenance-birmingham-al" className="hover:text-[var(--color-brand)] transition-colors">HVAC Maintenance</Link></li>
              <li><Link href="/emergency-hvac-repair-birmingham-al" className="hover:text-[var(--color-brand)] transition-colors">Emergency Repair</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Areas We Serve</h3>
            <ul className="space-y-3 grid grid-cols-2 gap-x-4">
              <li>Birmingham</li>
              <li>Hoover</li>
              <li>Vestavia Hills</li>
              <li>Trussville</li>
              <li>Mountain Brook</li>
              <li>Homewood</li>
              <li>Pelham</li>
              <li>Alabaster</li>
            </ul>
            <div className="mt-6">
              <Link href="/service-areas" className="text-[var(--color-brand)] text-sm font-semibold hover:underline flex items-center gap-1">
                View All Areas &rarr;
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dawson True Heating and Cooling LLC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built on Skill. <span className="text-[var(--color-brand)]">Backed by Trust.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
