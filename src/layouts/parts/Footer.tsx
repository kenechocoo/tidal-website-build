import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import settings from '@/content/settings.json';

/**
 * Footer component for Tidal Realty Services
 *
 * Deep navy footer with Founders Grotesk body and Manrope nav links
 * Uses --dark token
 */
export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)' }} className="text-white">
      {/* TREC Required Disclosures - Top Strip */}
      <div className="border-b border-white/15" style={{ background: 'color-mix(in srgb, var(--dark) 85%, black)' }}>
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-[12px] text-white/60 text-center max-w-[700px] leading-relaxed">
              {settings.footer.trecPreamble}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
              <a
                href="/documents/information-about-brokerage-services.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent text-[11px] tracking-[0.15em] uppercase text-white/85 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                {settings.footer.trecLinkBrokerage}
              </a>
              <span className="hidden md:inline text-white/30">|</span>
              <a
                href="/documents/consumer-protection-notice.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-accent text-[11px] tracking-[0.15em] uppercase text-white/85 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                {settings.footer.trecLinkConsumer}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left - Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--soft)' }}>
                <img
                  src={settings.logo}
                  alt={settings.businessName}
                  className="h-full w-full object-contain scale-[1.85] mix-blend-multiply"
                />
              </div>
              <span className="font-sans text-lg font-bold">{settings.businessName}</span>
            </div>
            <p className="font-sans text-sm text-white/70">
              {settings.tagline}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={settings.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={settings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={settings.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/70 hover:text-white transition-colors"
              >
                {/* X / Twitter icon (not in lucide) */}
                <svg
                  className="h-[18px] w-[18px]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center - Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 font-sans text-sm">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-white/70" />
              <span className="text-white/90">
                {settings.address.line1}<br />{settings.address.line2}
              </span>
            </div>
            <div className="flex items-center gap-3 font-sans text-sm">
              <Phone className="h-4 w-4 flex-shrink-0 text-white/70" />
              <a href={`tel:${settings.phone}`} className="text-white/90 hover:text-white transition-colors">
                {settings.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 font-sans text-sm">
              <Mail className="h-4 w-4 flex-shrink-0 text-white/70" />
              <a href={`mailto:${settings.email}`} className="text-white/90 hover:text-white transition-colors">
                {settings.email}
              </a>
            </div>
          </div>

          {/* Right - Navigation Links */}
          <div className="space-y-3">
            <Link
              to="/services"
              className="block font-accent text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              {settings.navigation.services}
            </Link>
            <Link
              to="/rentals"
              className="block font-accent text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              {settings.navigation.rentals}
            </Link>
            <Link
              to="/asset-management"
              className="block font-accent text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              {settings.navigation.assetManagement}
            </Link>
            <a
              href={settings.theNestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-accent text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              {settings.navigation.theNest}
            </a>
            <Link
              to="/contact"
              className="block font-accent text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors">
              {settings.navigation.contact}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-accent text-[11px] text-white/60">
            &copy; {new Date().getFullYear()} {settings.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
