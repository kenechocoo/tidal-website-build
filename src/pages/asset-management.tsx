import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import assetMgmt from '@/content/asset-management.json';

const iconMap = { DollarSign, TrendingUp, Handshake } as const;
type IconName = keyof typeof iconMap;

/**
 * Asset Management page - Tidal Realty Services
 *
 * Color tokens: --dark, --soft, --bgHolder, --accent-warm
 * Pale blue accent: #D6DEE6
 * Fonts: font-heading (Tiempos), font-sans (Founders Grotesk), font-accent (Manrope)
 */
export default function AssetManagementPage() {
  return (
    <>
      <title>{assetMgmt.meta.title}</title>
      <meta name="description" content={assetMgmt.meta.description} />

      <div style={{ background: 'var(--bgHolder)' }}>
        {/* Section 1: Full-Width Cinematic Hero */}
        <section className="relative h-[90vh] overflow-hidden">
          {/* Background Photo */}
          <div className="absolute inset-0">
            <img
              src={assetMgmt.hero.image}
              alt="Houston Residential Property"
              className="w-full h-full object-cover" />
            {/* Navy Gradient Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, color-mix(in srgb, var(--dark) 80%, transparent), color-mix(in srgb, var(--dark) 50%, transparent), transparent)' }}></div>
          </div>

          {/* Hero Content - Left Third */}
          <div className="relative h-full flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[600px]">

                {/* Massive Bold Headline */}
                <h1 className="font-heading text-[60px] md:text-[70px] leading-[1.1] text-white font-bold mb-8">
                  {assetMgmt.hero.titleLine1}<br />{assetMgmt.hero.titleLine2}
                </h1>

                {/* Subtext */}
                <p className="font-sans text-[17px] text-white/90 leading-relaxed mb-10 max-w-[420px]">
                  {assetMgmt.hero.description}
                </p>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="text-white px-8 py-6 font-accent text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold hover:opacity-90"
                  style={{ background: 'var(--accent-warm)' }}
                  asChild>
                  <Link to={assetMgmt.hero.buttonLink}>
                    {assetMgmt.hero.buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stat Ticker Bar */}
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm py-6" style={{ background: 'color-mix(in srgb, var(--dark) 80%, transparent)' }}>
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 text-white font-sans">
                {assetMgmt.hero.stats.map((stat, i) => {
                  const Icon = iconMap[stat.icon as IconName];
                  return (
                    <div key={i} className="flex items-center gap-3">
                      {Icon && <Icon className="h-5 w-5" style={{ color: 'var(--soft)' }} />}
                      <span className="text-[14px]">
                        {stat.boldText && <span className="font-semibold">{stat.boldText}</span>}
                        {stat.boldText && ' '}
                        {stat.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Tidal Difference — Pale Blue Background */}
        <section className="py-24" style={{ background: '#D6DEE6' }}>
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center">

              {/* Accent-Warm Rule + Label */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-[60px] h-[2px] mb-4" style={{ background: 'var(--accent-warm)' }}></div>
                <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--accent-warm)' }}>
                  {assetMgmt.whyTidal.label}
                </div>
              </div>

              {/* Large Centered Headline */}
              <h2 className="font-heading text-[38px] md:text-[44px] leading-[1.2] font-medium mb-16 max-w-[800px] mx-auto" style={{ color: 'var(--dark)' }}>
                {assetMgmt.whyTidal.titleLine1}<br />{assetMgmt.whyTidal.titleLine2}
              </h2>

              {/* Three Columns */}
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                {assetMgmt.whyTidal.columns.map((col) => {
                  const Icon = iconMap[col.icon as IconName];
                  return (
                    <div key={col.title} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'white' }}>
                        {Icon && <Icon className="h-8 w-8 stroke-[1.5]" style={{ color: 'var(--accent-warm)' }} />}
                      </div>
                      <h3 className="font-heading text-[22px] font-semibold mb-4" style={{ color: 'var(--dark)' }}>
                        {col.title}
                      </h3>
                      <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'var(--dark)', opacity: 0.6 }}>
                        {col.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Services - Professional Dossier */}
        <section className="py-20" style={{ background: 'var(--dark)' }}>
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Header */}
              <div className="mb-12">
                <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: 'var(--soft)' }}>
                  {assetMgmt.services.label}
                </div>
                <h2 className="font-heading text-[36px] md:text-[40px] text-white font-medium">
                  {assetMgmt.services.title}
                </h2>
              </div>

              {/* Two-Column Service List */}
              <div className="space-y-0">
                {assetMgmt.services.items.map((service) => (
                  <div key={service.title} className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                    <div className="flex items-center gap-4">
                      <span className="text-[20px]" style={{ color: 'var(--soft)' }}>&#x2022;</span>
                      <h3 className="font-heading text-[20px] text-white font-medium">{service.title}</h3>
                    </div>
                    <p className="font-sans text-[15px] text-white/70 md:text-right">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Multi-Unit Expertise */}
        <section className="flex flex-col md:flex-row">
          {/* Left - Photo (55%) */}
          <div className="w-full md:w-[55%] h-[400px] md:h-auto">
            <img
              src={assetMgmt.multiUnit.image}
              alt="Houston Apartment Complex"
              className="w-full h-full object-cover" />
          </div>

          {/* Right - Pale Blue Panel (45%) */}
          <div className="w-full md:w-[45%] flex items-center p-12 md:p-16" style={{ background: '#E8ECF2' }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-[500px]">

              {/* Accent-Warm Label */}
              <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: 'var(--accent-warm)' }}>
                {assetMgmt.multiUnit.label}
              </div>

              {/* Navy Headline */}
              <h2 className="font-heading text-[30px] md:text-[34px] font-medium leading-[1.2] mb-8" style={{ color: 'var(--dark)' }}>
                {assetMgmt.multiUnit.title}
              </h2>

              {/* Body Text */}
              <p className="font-sans text-[16px] leading-relaxed mb-10" style={{ color: 'var(--dark)', opacity: 0.65 }}>
                {assetMgmt.multiUnit.description}
              </p>

              {/* Three Feature Rows with Accent-Warm Bar */}
              <div className="space-y-6">
                {assetMgmt.multiUnit.features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-1 h-[30px] flex-shrink-0" style={{ background: 'var(--accent-warm)' }}></div>
                    <div>
                      <h3 className="font-heading text-[18px] font-semibold mb-1" style={{ color: 'var(--dark)' }}>{feature.title}</h3>
                      <p className="font-sans text-[14px]" style={{ color: 'var(--dark)', opacity: 0.55 }}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: CTA */}
        <section className="py-24" style={{ background: 'var(--bgHolder)' }}>
          <div className="max-w-[600px] mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 className="font-heading text-[36px] md:text-[44px] leading-[1.1] mb-6" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                {assetMgmt.cta.titleLine1} <em>{assetMgmt.cta.titleLine2}</em>
              </h2>
              <p className="font-sans text-[18px] leading-[1.7] mb-10" style={{ color: 'var(--dark)', opacity: 0.65 }}>
                {assetMgmt.cta.description}
              </p>
              <Button
                size="lg"
                className="px-10 py-6 font-accent text-[13px] tracking-[0.15em] uppercase rounded-full transition-colors font-semibold hover:opacity-90"
                style={{ background: 'var(--dark)', color: 'var(--soft)' }}
                asChild>
                <Link to={assetMgmt.cta.buttonLink}>
                  {assetMgmt.cta.buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
