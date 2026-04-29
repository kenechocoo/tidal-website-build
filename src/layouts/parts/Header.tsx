import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import settings from '@/content/settings.json';

/**
 * Header component for Tidal Realty Services
 *
 * Horizontal logo lockup, active page indicator, scaled-up typography
 * Uses --dark, --soft, --bgHolder tokens
 */
export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: settings.navigation.home },
    { href: '/services', label: settings.navigation.services },
    { href: '/rentals', label: settings.navigation.rentals },
    { href: '/asset-management', label: settings.navigation.assetManagement },
    { href: settings.theNestUrl, label: settings.navigation.theNest, external: true },
    { href: '/contact', label: settings.navigation.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b shadow-sm" style={{ background: 'color-mix(in srgb, var(--bgHolder) 97%, transparent)', borderColor: 'color-mix(in srgb, var(--dark) 10%, transparent)' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-[72px] items-center justify-between">
          {/* Horizontal Logo Lockup — icon + wordmark inline, max 40px height */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={settings.logo}
              alt={settings.businessName}
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform mix-blend-multiply"
            />
            <span className="text-[20px] font-bold tracking-[0.06em] uppercase leading-none group-hover:text-primary transition-colors" style={{ color: 'var(--dark)' }}>
              {settings.businessName}
            </span>
          </Link>

          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground"
                  style={{ '--hover-color': 'var(--dark)' } as React.CSSProperties}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 ${
                    location.pathname === item.href
                      ? ''
                      : 'text-muted-foreground'
                  }`}
                  style={location.pathname === item.href ? { color: 'var(--dark)' } : undefined}
                >
                  {item.label}
                  {location.pathname === item.href ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--dark)' }} />
                  ) : (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                  )}
                </Link>
              )
            )}
            <Button size="sm" className="ml-4 text-white text-[15px] font-bold tracking-[0.08em] px-6" style={{ background: 'var(--dark)' }} asChild>
              <Link to="/contact">{settings.navigation.ctaButton}</Link>
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t py-4" style={{ borderColor: 'color-mix(in srgb, var(--dark) 10%, transparent)' }}>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium tracking-[0.08em] transition-colors py-3 px-2 rounded-md text-muted-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-[16px] font-medium tracking-[0.08em] transition-colors py-3 px-2 rounded-md ${
                      location.pathname === item.href
                        ? 'border-l-2'
                        : 'text-muted-foreground'
                    }`}
                    style={location.pathname === item.href ? { color: 'var(--dark)', borderColor: 'var(--dark)', background: 'var(--soft)' } : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button size="sm" className="mt-4 text-white text-[15px] font-bold" style={{ background: 'var(--dark)' }} asChild>
                <Link to="/contact">{settings.navigation.ctaButton}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
