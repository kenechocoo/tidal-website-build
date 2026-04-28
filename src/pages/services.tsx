import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import services from '@/content/services.json';

/**
 * Flat Fee Listings (For Sale) page - Tidal Realty Services
 *
 * Warm gold accent ($999 pricing card), numbered process steps,
 * navy fee comparison section with savings table.
 */
export default function ServicesPage() {
  return (
    <>
      <title>{services.meta.title}</title>
      <meta name="description" content={services.meta.description} />

      <div style={{ background: 'var(--bgHolder)' }}>

        {/* ─── Hero ─── */}
        <section className="pt-28 pb-20">
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">

              <div>
                <h1 className="font-heading text-[48px] md:text-[68px] leading-[1.05] mb-10" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                  {services.hero.titleLine1}<br />for a <em>flat fee</em>
                </h1>

                <p className="font-sans text-[19px] leading-[1.8] max-w-[540px]" style={{ color: 'var(--dark)' }}>
                  {services.hero.description.split(services.hero.highlightText)[0]}
                  <strong><em>{services.hero.highlightText}</em></strong>
                  {services.hero.description.split(services.hero.highlightText)[1]}
                </p>
              </div>

              {/* Price highlight card */}
              <div className="p-10 rounded-2xl text-center" style={{ background: 'var(--accent-warm)' }}>
                <p className="font-accent text-[12px] tracking-[0.25em] uppercase font-semibold text-white/70 mb-4">{services.hero.priceCard.label}</p>
                <p className="font-heading text-[72px] leading-none text-white mb-2" style={{ fontWeight: 300 }}>{services.hero.priceCard.price}</p>
                <p className="font-sans text-[16px] text-white/80 mb-8">{services.hero.priceCard.subtitle}</p>
                <div className="space-y-3 text-left max-w-[240px] mx-auto">
                  {services.hero.priceCard.features.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-white/80 flex-shrink-0" />
                      <span className="font-sans text-[14px] text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── How It Works: Numbered Steps ─── */}
        <section className="py-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] mb-6" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                What you <em>get</em>
              </h2>
              <p className="font-sans text-[18px] leading-[1.8] max-w-[600px] mb-16" style={{ color: 'var(--dark)', opacity: 0.7 }}>
                {services.process.description.split(services.process.highlightText)[0]}
                <strong><em>{services.process.highlightText}</em></strong>
                {services.process.description.split(services.process.highlightText)[1]}
              </p>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {services.process.steps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <span className="font-heading text-[48px] leading-none" style={{ color: 'var(--accent-warm)', fontWeight: 300, opacity: 0.5 }}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-[24px] mb-3" style={{ color: 'var(--dark)', fontWeight: 500 }}>
                        {step.title}
                      </h3>
                      <p className="font-sans text-[16px] leading-[1.7]" style={{ color: 'var(--dark)', opacity: 0.6 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Compare Our Fees ─── */}
        <section className="py-24" style={{ background: 'var(--dark)' }}>
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] mb-6 text-white" style={{ fontWeight: 300 }}>
                Compare our <em>fees</em>
              </h2>

              <p className="font-sans text-[18px] leading-[1.8] max-w-[600px] mb-16 text-white/60">
                {services.comparison.description}
              </p>

              {/* Two comparison columns */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-10 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <h3 className="font-heading text-[22px] text-white/50 mb-6" style={{ fontWeight: 500 }}>{services.comparison.traditional.title}</h3>
                  <p className="font-sans text-[15px] text-white/40 leading-[1.7] mb-8">
                    {services.comparison.traditional.description}
                  </p>
                  <div className="space-y-3 font-sans text-[15px] text-white/50">
                    <p><strong className="text-white/70">{services.comparison.traditional.exampleLabel}</strong></p>
                    {services.comparison.traditional.lines.map((line) => (
                      <p key={line.label}>{line.label} <strong className="text-white/70">{line.value}</strong></p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-sans text-[16px] text-white/50">
                      {services.comparison.traditional.summary}
                    </p>
                  </div>
                </div>

                <div className="p-10 rounded-2xl" style={{ background: 'var(--accent-warm)' }}>
                  <h3 className="font-heading text-[22px] text-white mb-6" style={{ fontWeight: 500 }}>{services.comparison.tidal.title}</h3>
                  <p className="font-sans text-[15px] text-white/80 leading-[1.7] mb-8">
                    {services.comparison.tidal.description}
                  </p>
                  <div className="space-y-3 font-sans text-[15px] text-white/80">
                    <p className="font-semibold text-white">{services.comparison.tidal.exampleLabel}</p>
                    {services.comparison.tidal.lines.map((line) => (
                      <p key={line.label}>{line.label} <strong className="text-white">{line.value}</strong></p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="font-sans text-[18px] font-semibold text-white">
                      {services.comparison.tidal.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Savings Table */}
              <h3 className="font-heading text-[26px] mb-8 text-white" style={{ fontWeight: 400 }}>{services.comparison.savingsTableTitle}</h3>
              <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid rgba(255,255,255,0.12)' }}>
                <table className="w-full border-collapse font-sans">
                  <thead>
                    <tr style={{ background: 'var(--accent-warm)' }} className="text-white">
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Sale Price</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Traditional (3%)</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Tidal Flat Fee</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-white/70">
                    {services.comparison.savingsRows.map((row, i) => (
                      <tr key={row.salePrice} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent' }}>
                        <td className="py-5 px-6 font-medium text-white/90">{row.salePrice}</td>
                        <td className="py-5 px-6">{row.traditional}</td>
                        <td className="py-5 px-6">{row.tidal}</td>
                        <td className="py-5 px-6 font-bold" style={{ color: 'var(--accent-warm)' }}>{row.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24">
          <div className="max-w-[600px] mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <h2 className="font-heading text-[36px] md:text-[44px] leading-[1.1] mb-6" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                {services.cta.titleLine1} <em>{services.cta.titleLine2}</em>
              </h2>
              <p className="font-sans text-[18px] leading-[1.7] mb-10" style={{ color: 'var(--dark)', opacity: 0.65 }}>
                {services.cta.description}
              </p>
              <Button
                size="lg"
                className="px-10 py-6 font-accent text-[13px] tracking-[0.15em] uppercase rounded-full transition-colors font-semibold hover:opacity-90"
                style={{ background: 'var(--accent-warm)', color: 'white' }}
                asChild>
                <Link to={services.cta.buttonLink}>
                  {services.cta.buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
