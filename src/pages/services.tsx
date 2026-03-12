import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, CheckSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Services page - Tidal Realty Services
 *
 * Premium fintech meets Houston real estate
 * Bold contrasts, clear numbers, comparison-forward
 * Primary emotion: clarity and confidence
 */
export default function ServicesPage() {
  return (
    <>
      <title>Services - Tidal Realty Services</title>
      <meta name="description" content="Real estate services priced honestly. Flat-fee listings for sale and rent. No percentage-based commissions eating your returns." />
      
      <div className="bg-white">
        {/* Section 1: Pure Typographic Hero */}
        <section className="min-h-[80vh] bg-[#1B2A4A] flex items-center justify-center py-20">
          <div className="max-w-[900px] mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>

              {/* Gold Label with Rule Lines */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="w-16 h-[1px] bg-[#C9A84C]"></div>
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold">
                  Our Services
                </div>
                <div className="w-16 h-[1px] bg-[#C9A84C]"></div>
              </div>

              {/* Massive White Headline */}
              <h1 className="text-[56px] md:text-[68px] leading-[1.1] text-white mb-10">
                Real Estate Services.<br />Priced Honestly.
              </h1>

              {/* Subtext */}
              <p className="text-[18px] text-white/80 leading-relaxed mb-12 max-w-[580px] mx-auto">
                We believe great service shouldn't cost a fortune. Our flat-fee model puts more money back where it belongs — in your pocket.
              </p>

              {/* Two Ghost Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B2A4A] px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                  asChild>
                  <a href="#for-sale">Listings for Sale</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B2A4A] px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                  asChild>
                  <a href="#for-rent">Listings for Rent</a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Gold Rule */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C]"></div>
        </section>

        {/* Section 2: Flat Fee Listings for Sale */}
        <section id="for-sale" className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[55%_45%] gap-16 items-center">

              {/* Left Column - Text Content */}
              <div>
                {/* Gold Label */}
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-6">
                  Flat Fee Listings · For Sale
                </div>

                {/* Large Navy Headline */}
                <h2 className="text-[36px] md:text-[40px] text-[#1B2A4A] font-medium leading-[1.2] mb-8">
                  Sell Your Home. Keep More of What It's Worth.
                </h2>

                {/* Body Text */}
                <p className="text-[17px] text-[#444444] leading-relaxed mb-10">
                  Traditional real estate agents typically charge 5–6% commission on the sale of your home. On a $300,000 property, that's up to $18,000 out of your pocket. With Tidal Realty Services, you pay a simple flat fee — and receive the same full-service experience: MLS listing on HAR, professional marketing, contract negotiation, and expert guidance from listing to closing.
                </p>

                {/* Comparison Table */}
                <div className="grid md:grid-cols-2 gap-8 mb-10 p-8 bg-[#F5F0EB] rounded-sm">
                  {/* Traditional Agent */}
                  <div className="space-y-3">
                    <h3 className="text-[14px] tracking-[0.2em] uppercase text-[#888888] font-semibold mb-4">
                      Traditional Agent
                    </h3>
                    <div className="space-y-2 text-[15px] text-[#666666]">
                      <p>5–6% Commission</p>
                      <p>$15,000–$18,000 on a $300K home</p>
                      <p>Variable, unpredictable</p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#1B2A4A]/20"></div>

                  {/* Tidal Flat Fee */}
                  <div className="space-y-3">
                    <h3 className="text-[14px] tracking-[0.2em] uppercase text-[#1B2A4A] font-bold mb-4">
                      Tidal Flat Fee
                    </h3>
                    <div className="space-y-2 text-[15px] text-[#1B2A4A] font-semibold">
                      <p>One Flat Fee</p>
                      <p>Fraction of the cost</p>
                      <p>Transparent, upfront</p>
                    </div>
                  </div>
                </div>

                {/* Gold Link */}
                <Link 
                  to="/contact" 
                  className="text-[13px] tracking-[0.2em] uppercase text-[#C9A84C] hover:text-[#B89840] transition-colors inline-flex items-center font-semibold">
                  Contact Us to Get Your Flat Fee Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Right Column - Photo with Gold Border */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#C9A84C] translate-x-2 translate-y-2"></div>
                <img
                  src="/airo-assets/images/pages/services/brokerage-hero"
                  alt="Houston Single-Family Home"
                  className="relative w-full h-[600px] object-cover border-4 border-[#C9A84C]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: How It Works */}
        <section className="py-20 bg-[#F0EDE6]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center">

              {/* Header */}
              <div className="mb-16">
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-4">
                  The Process
                </div>
                <h2 className="text-[28px] md:text-[32px] text-[#1B2A4A] font-medium">
                  From Listing to Closing — We Handle It All.
                </h2>
              </div>

              {/* Four-Step Process Flow */}
              <div className="relative">
                {/* Connecting Gold Line */}
                <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-[#C9A84C]"></div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                      1
                    </div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-bold mb-3">
                      Property Assessment
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">
                      We evaluate your home and advise on improvements to maximize your sale price
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                      2
                    </div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-bold mb-3">
                      Strategic Pricing & Listing
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">
                      MLS and HAR listing with professional photography and market-driven pricing
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                      3
                    </div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-bold mb-3">
                      Marketing & Showings
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">
                      Multi-channel marketing, inquiry management, and showing coordination
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                      4
                    </div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-bold mb-3">
                      Contract to Close
                    </h3>
                    <p className="text-[14px] text-[#666666] leading-relaxed">
                      From offer review to closing coordination, every step handled
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Flat Fee Listings for Rent */}
        <section id="for-rent" className="py-20 bg-[#1B2A4A]">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[45%_55%] gap-16 items-center">

              {/* Left Column - Photo */}
              <div>
                <img
                  src="/airo-assets/images/pages/services/brokerage-hero"
                  alt="Houston Rental Property"
                  className="w-full h-[600px] object-cover" />
              </div>

              {/* Right Column - White Text on Navy */}
              <div>
                {/* Gold Label */}
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-6">
                  Flat Fee Listings · For Rent
                </div>

                {/* Large White Headline */}
                <h2 className="text-[36px] md:text-[40px] text-white font-medium leading-[1.2] mb-8">
                  Find the Right Tenant. Without the Hefty Fee.
                </h2>

                {/* Body Text */}
                <p className="text-[17px] text-white/80 leading-relaxed mb-10">
                  Most property managers charge the equivalent of a full month's rent just to place a tenant. Tidal charges a flat fee — period. You get full MLS exposure on HAR, tenant screening, background checks, lease preparation, and move-in coordination. Everything you need, nothing you don't.
                </p>

                {/* Feature List with Gold Dashes */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[20px] mt-1">—</span>
                    <p className="text-[16px] text-white/90">MLS & HAR listing exposure</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[20px] mt-1">—</span>
                    <p className="text-[16px] text-white/90">Professional rental market pricing analysis</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[20px] mt-1">—</span>
                    <p className="text-[16px] text-white/90">Full tenant background & credit screening</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[20px] mt-1">—</span>
                    <p className="text-[16px] text-white/90">Lease preparation and execution</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[20px] mt-1">—</span>
                    <p className="text-[16px] text-white/90">Move-in coordination and property walkthrough</p>
                  </div>
                </div>

                {/* Solid Gold Button */}
                <Button
                  size="lg"
                  className="bg-[#C9A84C] text-[#1B2A4A] hover:bg-[#B89840] px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold"
                  asChild>
                  <Link to="/contact">
                    Get Your Rental Listed <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Why This Model Works */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center">

              {/* Centered Headline */}
              <h2 className="text-[30px] md:text-[34px] text-[#1B2A4A] font-medium mb-16 max-w-[800px] mx-auto">
                The Real Estate Industry Changed. Our Pricing Did Too.
              </h2>

              {/* Three Columns */}
              <div className="grid md:grid-cols-3 gap-12">
                {/* Column 1 - Transparency */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Eye className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Transparency
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    You know exactly what you're paying before you sign anything. No surprises at closing.
                  </p>
                </div>

                {/* Column 2 - Full Service */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <CheckSquare className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Full Service
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Flat fee doesn't mean less service. You get everything a traditional agent offers — just priced fairly.
                  </p>
                </div>

                {/* Column 3 - Your Profits First */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <TrendingUp className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Your Profits First
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Every dollar saved on commission is a dollar added to your return. That's the Tidal philosophy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Closing CTA - Locked Template */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Photo with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/home-hero.png"
              alt="Modern Houston Architecture"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Floating White Card - Right Side */}
          <div className="relative h-full flex items-center justify-end px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 md:p-16 shadow-2xl max-w-[520px] w-full">

              <h2 className="text-[36px] leading-[1.2] text-[#1B2A4A] mb-8">
                We're here when it matters most.
              </h2>
              <p className="text-[16px] text-[#888888] leading-relaxed mb-6">
                We invite you to take a quick tour of our site and see how we can serve your real estate needs.
              </p>
              <p className="text-[16px] text-[#888888] leading-relaxed mb-10">
                The world may be trending toward AI and automation — and we embrace smart technology. But when it comes to your real estate investments, we still believe in the power of personal service and the human touch. Give us a call.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                asChild>
                <Link to="/contact">
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
