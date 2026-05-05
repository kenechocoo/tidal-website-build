import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, FileText, Search, ShieldCheck, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import rentals from '@/content/rentals.json';

const iconMap = { FileText, Search, ShieldCheck, Key } as const;
type IconName = keyof typeof iconMap;

/**
 * Flat Fee Rentals page - Tidal Realty Services
 *
 * $399 flat fee, pale dusty blue accent (#B8C9D6), zigzag layout with real images,
 * pull-quote storytelling, fee comparison section, benefit cards on pale blue.
 */
export default function RentalsPage() {
  return (
    <>
      <title>{rentals.meta.title}</title>
      <meta name="description" content={rentals.meta.description} />

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
                  {rentals.hero.titleLine1}<br /><em>{rentals.hero.titleLine2}</em>
                </h1>

                <p className="font-sans text-[19px] leading-[1.8] max-w-[540px]" style={{ color: 'var(--dark)' }}>
                  {rentals.hero.description.split(rentals.hero.highlightText)[0]}
                  <strong><em>{rentals.hero.highlightText}</em></strong>
                  {rentals.hero.description.split(rentals.hero.highlightText)[1]}
                </p>
              </div>

              {/* Price highlight card */}
              <div className="p-10 rounded-2xl text-center" style={{ background: '#3A5A7C' }}>
                <p className="font-accent text-[12px] tracking-[0.25em] uppercase font-semibold text-white/70 mb-4">{rentals.hero.priceCard.label}</p>
                <p className="font-heading text-[72px] leading-none text-white mb-2" style={{ fontWeight: 300 }}>{rentals.hero.priceCard.price}</p>
                <p className="font-sans text-[16px] text-white/80 mb-8">{rentals.hero.priceCard.subtitle}</p>
                <div className="space-y-3 text-left max-w-[260px] mx-auto">
                  {rentals.hero.priceCard.features.map((item) => (
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

        {/* ─── Pull Quote ─── */}
        <section className="pb-20">
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-l-[4px] pl-8 py-2"
              style={{ borderColor: '#8FA8BC' }}>
              <p className="font-heading italic text-[28px] md:text-[36px] leading-[1.35]" style={{ color: 'var(--dark)' }}>
                {rentals.pullQuote}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── What You Get: Zigzag with Images ─── */}
        <section className="py-24">
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] mb-6" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                {rentals.features.titlePrefix} <em>{rentals.features.titleItalic}</em>
              </h2>

              <p className="font-sans text-[18px] leading-[1.8] max-w-[600px] mb-16" style={{ color: 'var(--dark)', opacity: 0.7 }}>
                {rentals.features.description}
              </p>

              {/* Zigzag feature rows */}
              <div className="space-y-16">
                {rentals.features.items.map((feature, i) => {
                  const Icon = iconMap[feature.icon as IconName];
                  return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid md:grid-cols-[1fr_1.2fr] gap-12 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
                    style={i % 2 === 1 ? { direction: 'rtl' } : undefined}>
                    <div style={i % 2 === 1 ? { direction: 'ltr' } : undefined}>
                      {Icon && <Icon className="h-8 w-8 mb-4" style={{ color: 'var(--dark)' }} />}
                      <h3 className="font-heading text-[26px] mb-3" style={{ color: 'var(--dark)', fontWeight: 400 }}>
                        {feature.title}
                      </h3>
                      <p className="font-sans text-[17px] leading-[1.7]" style={{ color: 'var(--dark)', opacity: 0.65 }}>
                        {feature.description}
                      </p>
                    </div>
                    <div className="h-[320px] rounded-2xl overflow-hidden" style={{ direction: 'ltr' }}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  );
                })}
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
                {rentals.comparison.titlePrefix} <em>{rentals.comparison.titleItalic}</em>
              </h2>

              <p className="font-sans text-[18px] leading-[1.8] max-w-[600px] mb-16 text-white/80">
                {rentals.comparison.description}
              </p>

              {/* Two comparison columns */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="p-10 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <h3 className="font-heading text-[22px] text-white/60 mb-6" style={{ fontWeight: 500 }}>{rentals.comparison.traditional.title}</h3>
                  <p className="font-sans text-[16px] text-white/50 leading-[1.7] mb-8">
                    {rentals.comparison.traditional.description}
                  </p>
                  <div className="space-y-3 font-sans text-[16px] text-white/60">
                    <p><strong className="text-white/80">{rentals.comparison.traditional.exampleLabel}</strong></p>
                    {rentals.comparison.traditional.lines.map((line) => (
                      <p key={line.label}>{line.label} <strong className="text-white/80">{line.value}</strong></p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-sans text-[16px] text-white/60">
                      {rentals.comparison.traditional.summary}
                    </p>
                  </div>
                </div>

                <div className="p-10 rounded-2xl" style={{ background: '#3A5A7C' }}>
                  <h3 className="font-heading text-[22px] text-white mb-6" style={{ fontWeight: 500 }}>{rentals.comparison.tidal.title}</h3>
                  <p className="font-sans text-[16px] text-white/85 leading-[1.7] mb-8">
                    {rentals.comparison.tidal.description}
                  </p>
                  <div className="space-y-3 font-sans text-[16px] text-white/85">
                    <p className="font-semibold text-white">{rentals.comparison.tidal.exampleLabel}</p>
                    {rentals.comparison.tidal.lines.map((line) => (
                      <p key={line.label}>{line.label} <strong className="text-white">{line.value}</strong></p>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="font-sans text-[20px] font-semibold text-white">
                      {rentals.comparison.tidal.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Savings Table */}
              <h3 className="font-heading text-[26px] mb-8 text-white" style={{ fontWeight: 400 }}>{rentals.comparison.savingsTableTitle}</h3>
              <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid rgba(255,255,255,0.12)' }}>
                <table className="w-full border-collapse font-sans">
                  <thead>
                    <tr style={{ background: '#3A5A7C' }} className="text-white">
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Monthly Rent</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Traditional (50%)</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Tidal Flat Fee</th>
                      <th className="py-5 px-6 text-left text-[13px] font-bold tracking-wide font-accent">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px] text-white/80">
                    {rentals.comparison.savingsRows.map((row, i) => (
                      <tr key={row.monthlyRent} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent' }}>
                        <td className="py-5 px-6 font-medium text-white/90">{row.monthlyRent}</td>
                        <td className="py-5 px-6">{row.traditional}</td>
                        <td className="py-5 px-6">{row.tidal}</td>
                        <td className="py-5 px-6 font-bold" style={{ color: '#8FB8D4' }}>{row.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Why Landlords Choose Us ─── */}
        <section className="py-24" style={{ background: '#D6DEE6' }}>
          <div className="max-w-[1100px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <h2 className="font-heading text-[40px] md:text-[52px] leading-[1.1] mb-6" style={{ color: 'var(--dark)', fontWeight: 300 }}>
                {rentals.whyChooseUs.titlePrefix} <em>{rentals.whyChooseUs.titleItalic}</em>
              </h2>
              <p className="font-sans text-[18px] leading-[1.8] max-w-[600px] mb-16" style={{ color: 'var(--dark)', opacity: 0.7 }}>
                {rentals.whyChooseUs.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {rentals.whyChooseUs.items.map((item) => (
                  <div key={item.title} className="p-8 rounded-2xl" style={{ background: 'white' }}>
                    <h3 className="font-heading text-[20px] mb-3" style={{ color: 'var(--dark)', fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p className="font-sans text-[15px] leading-[1.7]" style={{ color: 'var(--dark)', opacity: 0.6 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
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
                {rentals.cta.titleLine1} <em>{rentals.cta.titleLine2}</em>
              </h2>
              <p className="font-sans text-[18px] leading-[1.7] mb-10" style={{ color: 'var(--dark)', opacity: 0.65 }}>
                {rentals.cta.description}
              </p>
              <Button
                size="lg"
                className="px-10 py-6 font-accent text-[13px] tracking-[0.15em] uppercase rounded-full transition-colors font-semibold hover:opacity-90"
                style={{ background: 'var(--dark)', color: 'var(--soft)' }}
                asChild>
                <Link to={rentals.cta.buttonLink}>
                  {rentals.cta.buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
