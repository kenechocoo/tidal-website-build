import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import home from '@/content/home.json';
import settings from '@/content/settings.json';

/**
 * Home page — Tidal Realty Services
 *
 * Studio Story bordered container hero with Tiempos Headline.
 * Color tokens: --dark (#001446), --soft (#dbd6c9), --bgHolder (#e2ded4)
 */
export default function HomePage() {
  return (
    <>
      <title>{home.meta.title}</title>
      <meta name="description" content={home.meta.description} />

      <div>
        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO: STUDIO STORY BORDERED CONTAINER
            Solid navbar + framed photo with bottom gradient + pinned text
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="flex flex-col relative" style={{ background: 'var(--dark)' }}>
          {/* Solid Navbar — sits above photo, not overlapping */}
          <nav className="relative z-10 h-[72px] flex-shrink-0 flex items-center px-8" style={{ background: 'var(--bgHolder)' }}>
            <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between">
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

              <div className="hidden lg:flex items-center gap-8">
                <Link to="/" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1" style={{ color: 'var(--dark)' }}>
                  {settings.navigation.home}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'var(--dark)' }} />
                </Link>
                <Link to="/services" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground">
                  {settings.navigation.services}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </Link>
                <Link to="/rentals" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground">
                  {settings.navigation.rentals}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </Link>
                <Link to="/asset-management" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground">
                  {settings.navigation.assetManagement}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </Link>
                <a href={settings.theNestUrl} target="_blank" rel="noopener noreferrer" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground">
                  {settings.navigation.theNest}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </a>
                <Link to="/contact" className="group text-[16px] font-medium tracking-[0.08em] transition-colors relative pb-1 text-muted-foreground">
                  {settings.navigation.contact}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: 'var(--dark)' }} />
                </Link>
                <Button size="sm" className="ml-4 text-white text-[15px] font-bold tracking-[0.08em] px-6" style={{ background: 'var(--dark)' }} asChild>
                  <Link to="/contact">{settings.navigation.ctaButton}</Link>
                </Button>
              </div>

              <button className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors" style={{ color: 'var(--dark)' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Photo Container — reduced height so text is more prominent */}
          <div className="relative z-10 mx-8 mb-0 h-[65vh] overflow-hidden rounded-2xl">
            {/* Photo — slightly zoomed and angled */}
            <img
              src={home.hero.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'scale(1.08) rotate(-1deg)', transformOrigin: '50% 40%' }}
            />

            {/* Warm beige tint + bottom dark gradient overlay — stronger so text pops */}
            <div
              className="absolute inset-0 z-[1]"
              style={{ background: 'linear-gradient(to top, rgba(0, 20, 70, 0.72) 0%, rgba(0, 20, 70, 0.3) 45%, rgba(226, 222, 212, 0.25) 100%)' }}
            />

            {/* Text — pinned bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-10 bottom-[52px] left-[24px] md:left-[48px]"
            >
              {/* Headline — Tiempos Headline */}
              <h1
                className="font-heading text-[52px] md:text-[80px] leading-[1.0] max-w-[640px] text-white drop-shadow-lg"
                style={{ fontWeight: 400 }}
              >
                {home.hero.title}
              </h1>

              {/* Body — Founders Grotesk — Capital "A" */}
              <p className="font-sans text-[22px] leading-[1.6] max-w-[520px] mt-5 drop-shadow-md" style={{ fontWeight: 500, color: 'white', letterSpacing: '0.01em' }}>
                {home.hero.subtitle}
              </p>

              {/* Single CTA — "Contact Us" */}
              <div className="flex flex-wrap gap-[14px] mt-9">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-[14px] font-accent text-[12px] tracking-[0.15em] uppercase transition-colors font-semibold hover:opacity-90"
                  style={{ background: 'var(--soft)', color: 'var(--dark)' }}
                  asChild
                >
                  <Link to={home.hero.ctaLink}>
                    {home.hero.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — OUR SERVICES: NAVY BACKGROUND
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="pt-10 pb-24" style={{ background: 'var(--dark)' }}>
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-2">

              <div className="flex items-center gap-4 mb-4">
                <div className="w-[40px] h-[2px]" style={{ background: 'var(--accent-warm)' }}></div>
                <div className="w-[20px] h-[2px]" style={{ background: '#B8C9D6' }}></div>
              </div>
              <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] text-white mb-4" style={{ fontWeight: 300 }}>
                {home.services.headingPrefix} <em>{home.services.headingItalic}</em>
              </h2>
              <p className="font-sans text-[19px] leading-[1.7] max-w-[700px]" style={{ color: 'var(--soft)', opacity: 0.9 }}>
                {home.services.description}
              </p>
            </motion.div>

            {/* Three Cards — tight gap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8">

              {home.services.cards.map((card) => (
                <div key={card.title} className="p-10 border border-white/15 hover:border-white/30 transition-colors" style={{ background: 'color-mix(in srgb, var(--dark) 70%, black)' }}>
                  <h3 className="font-heading text-[24px] text-white mb-4" style={{ fontWeight: 400 }}>{card.title}</h3>
                  <p className="font-sans text-[16px] text-white/80 leading-[1.7] mb-8">
                    {card.description}
                  </p>
                  <Link
                    to={card.linkUrl}
                    className="font-accent text-[12px] tracking-[0.15em] uppercase hover:opacity-60 transition-opacity inline-flex items-center"
                    style={{ color: 'var(--soft)' }}>
                    {card.linkText} <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — OUR MISSION: BEIGE BACKGROUND
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-[120px]" style={{ background: 'var(--bgHolder)' }}>
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Label centered */}
              <div className="flex flex-col items-center mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[30px] h-[2px]" style={{ background: '#B8C9D6' }}></div>
                  <div className="w-[60px] h-[2px]" style={{ background: 'var(--accent-warm)' }}></div>
                  <div className="w-[30px] h-[2px]" style={{ background: '#B8C9D6' }}></div>
                </div>
                <div className="font-accent text-[16px] tracking-[0.3em] uppercase font-bold" style={{ color: 'var(--accent-warm)' }}>
                  {home.mission.label}
                </div>
              </div>

              {/* Two-column layout: large quote left, supporting text right */}
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Left — Pull Quote with decorative border */}
                <div className="border-l-[4px] pl-8" style={{ borderColor: 'var(--accent-warm)' }}>
                  <p className="font-heading text-[34px] md:text-[44px] leading-[1.3] font-bold italic" style={{ color: 'var(--dark)' }}>
                    {home.mission.quote}
                  </p>
                </div>

                {/* Right — Supporting copy + CTA */}
                <div>
                  <p className="font-sans text-[17px] text-[#555555] leading-[1.8] mb-10">
                    {home.mission.description}
                  </p>

                  <Button
                    size="lg"
                    className="px-8 py-6 font-accent text-[13px] tracking-[0.15em] uppercase rounded-sm transition-colors font-semibold hover:opacity-90"
                    style={{ background: 'var(--dark)', color: 'var(--soft)' }}
                    asChild>
                    <Link to={home.mission.ctaLink}>
                      {home.mission.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — CLOSING CTA: NAVY BACKGROUND
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-[120px] relative overflow-hidden" style={{ background: 'var(--dark)' }}>
          {/* Subtle decorative circle in background */}
          <div className="absolute -right-[200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -left-[100px] -bottom-[100px] w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none" />

          <div className="max-w-[800px] mx-auto px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <div className="font-accent text-[11px] tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--soft)' }}>
                {home.closingCta.label}
              </div>

              <h2 className="font-heading text-[44px] md:text-[56px] leading-[1.15] text-white mb-10" style={{ fontWeight: 400 }}>
                {home.closingCta.title}
              </h2>

              <p className="font-sans text-[18px] leading-[1.8] mb-12 max-w-[600px] mx-auto" style={{ color: 'var(--soft)', opacity: 0.9 }}>
                {home.closingCta.description}
              </p>

              {/* CTA */}
              <Button
                size="lg"
                className="px-10 py-6 font-accent text-[13px] tracking-[0.15em] uppercase rounded-sm transition-colors font-semibold hover:opacity-90"
                style={{ background: 'var(--soft)', color: 'var(--dark)' }}
                asChild>
                <Link to={home.closingCta.ctaLink}>
                  {home.closingCta.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
