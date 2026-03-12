import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

/**
 * Footer component for Tidal Realty Services
 *
 * Deep navy footer with three-column layout
 */
export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/tidal-logo.png" 
                alt="Tidal Realty Services" 
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <span className="text-lg font-light">Tidal Realty Services</span>
            </div>
            <p className="text-sm text-white/70">
              Full-Service Real Estate Brokerage
            </p>
          </div>

          {/* Center - Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-white/70" />
              <span className="text-white/90">
                2417 Truxillo Street<br />Houston, TX 77004
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 flex-shrink-0 text-white/70" />
              <a href="tel:832-930-4663" className="text-white/90 hover:text-white transition-colors">
                832-930-4663
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 flex-shrink-0 text-white/70" />
              <a href="mailto:info@tidalpm.com" className="text-white/90 hover:text-white transition-colors">
                info@tidalpm.com
              </a>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="space-y-3">
            <Link 
              to="/services" 
              className="block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/listings" 
              className="block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              Listings
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/asset-management" 
              className="block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              Asset Management
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/the-nest" 
              className="block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              The Nest
            </Link>
            <span className="text-white/30">|</span>
            <Link 
              to="/contact" 
              className="block text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-[11px] text-white/60">
            © 2025 Tidal Realty Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
