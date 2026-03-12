import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, TrendingUp, Handshake, Calendar, Home, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Asset Management page - Tidal Realty Services
 *
 * Authoritative, wealth-protective design
 * Deep Navy (#1B2A4A), Gold/Amber (#C9A84C), White + Cream (#F0EDE6)
 * Heavy typography, structured layouts, data-forward
 */
export default function AssetManagementPage() {
  return (
    <>
      <title>Asset Management - Tidal Realty Services</title>
      <meta name="description" content="Professional property management in Houston. Flat $75/month fee. 20+ years experience managing single-family homes, condos, and apartment complexes." />
      
      <div className="bg-white">
        {/* Section 1: Full-Width Cinematic Hero */}
        <section className="relative h-[90vh] overflow-hidden">
          {/* Background Photo */}
          <div className="absolute inset-0">
            <img
              src="/airo-assets/images/pages/asset-management/hero"
              alt="Houston Residential Property"
              className="w-full h-full object-cover" />
            {/* Strong Navy Gradient Overlay - Left Darker */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/80 via-[#1B2A4A]/50 to-transparent"></div>
          </div>

          {/* Hero Content - Left Third */}
          <div className="relative h-full flex items-center">
            <div className="max-w-[1400px] mx-auto px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[600px]">

                {/* Gold Label */}
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-6">
                  Houston Property Management · Est. 2002
                </div>

                {/* Massive Bold Headline */}
                <h1 className="text-[60px] md:text-[70px] leading-[1.1] text-white font-bold mb-8">
                  Your Investment.<br />Our Responsibility.
                </h1>

                {/* Subtext */}
                <p className="text-[17px] text-white/90 leading-relaxed mb-10 max-w-[420px]">
                  Single-family homes, condos, and apartment complexes — managed with your profits in mind and a flat-rate fee structure that keeps your bottom line intact.
                </p>

                {/* Two Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-[#C9A84C] text-[#1B2A4A] hover:bg-[#B89840] px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold"
                    asChild>
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B2A4A] px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                    asChild>
                    <Link to="#pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stat Ticker Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#1B2A4A]/80 backdrop-blur-sm py-6">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16 text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#C9A84C]" />
                  <span className="text-[14px]">
                    <span className="font-semibold">Est. 2002</span> · 20+ Years Houston Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-[#C9A84C]" />
                  <span className="text-[14px]">
                    <span className="font-semibold">23+</span> · Units Managed
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Wallet className="h-5 w-5 text-[#C9A84C]" />
                  <span className="text-[14px]">
                    <span className="font-semibold">$75</span> · Flat Management Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Tidal Difference */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center">

              {/* Gold Rule + Label */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-[60px] h-[2px] bg-[#C9A84C] mb-4"></div>
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold">
                  Why Tidal
                </div>
              </div>

              {/* Large Centered Headline */}
              <h2 className="text-[38px] md:text-[44px] leading-[1.2] text-[#1B2A4A] font-medium mb-16 max-w-[800px] mx-auto">
                We Don't Just Manage Properties.<br />We Protect Your Profits.
              </h2>

              {/* Three Columns - No Borders */}
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                {/* Column 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <DollarSign className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Flat Rate Promise
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    No percentage-based fees eating your returns. Just $75/month — predictable, transparent, always.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <TrendingUp className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Bottom Line Focus
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Every decision we make is filtered through one question: does this protect the owner's investment?
                  </p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Handshake className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] text-[#1B2A4A] font-semibold mb-4">
                    Personal Accountability
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Large enough to handle any complex. Accessible enough to answer the phone.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Services - Professional Dossier */}
        <section className="py-20 bg-[#1B2A4A]">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Header */}
              <div className="mb-12">
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-4">
                  Full-Service Management
                </div>
                <h2 className="text-[36px] md:text-[40px] text-white font-medium">
                  We Do It All — So You Don't Have To.
                </h2>
              </div>

              {/* Two-Column Service List */}
              <div className="space-y-0">
                {/* Service Row 1 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Property Assessment</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    Inspect, advise, and prepare your property to attract quality tenants fast
                  </p>
                </div>

                {/* Service Row 2 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Marketing & Advertising</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    MLS, HAR, Greensheet, signage and data-driven rental pricing
                  </p>
                </div>

                {/* Service Row 3 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Tenant Screening</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    Full background checks on every applicant, no exceptions
                  </p>
                </div>

                {/* Service Row 4 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Rent Collection</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    Structured collection with clear due dates protecting your cash flow
                  </p>
                </div>

                {/* Service Row 5 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Eviction Management</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    Swift, professional action when needed — always on the owner's side
                  </p>
                </div>

                {/* Service Row 6 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">HOA & Bill Payment</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    We handle mortgage, insurance, HOA and tax payments on your behalf
                  </p>
                </div>

                {/* Service Row 7 */}
                <div className="grid md:grid-cols-2 gap-8 py-6 border-b border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-[20px]">—</span>
                    <h3 className="text-[20px] text-white font-medium">Monthly Reporting</h3>
                  </div>
                  <p className="text-[15px] text-white/70 md:text-right">
                    Clean income/expense reports monthly plus full year-end accounting
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Multi-Unit Expertise */}
        <section className="flex flex-col md:flex-row">
          {/* Left - Photo (55%) */}
          <div className="w-full md:w-[55%] h-[400px] md:h-auto">
            <img
              src="/airo-assets/images/pages/asset-management/hero"
              alt="Houston Apartment Complex"
              className="w-full h-full object-cover" />
          </div>

          {/* Right - Cream Panel (45%) */}
          <div className="w-full md:w-[45%] bg-[#F0EDE6] flex items-center p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-[500px]">

              {/* Gold Label */}
              <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold mb-6">
                Multi-Unit & Apartment Management
              </div>

              {/* Navy Headline */}
              <h2 className="text-[30px] md:text-[34px] text-[#1B2A4A] font-medium leading-[1.2] mb-8">
                From Boutique Condos to Large Communities — We've Seen It All.
              </h2>

              {/* Body Text */}
              <p className="text-[16px] text-[#444444] leading-relaxed mb-10">
                Our occupancy rates consistently exceed industry averages because we understand that your residents are your income. We attract the best tenants, keep them longer, and handle every aspect of daily operations without the 'slum lord' reputation that comes from cutting corners.
              </p>

              {/* Three Feature Rows with Gold Accent Bar */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 h-[30px] bg-[#C9A84C] flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-semibold mb-1">Flat Rate Pricing</h3>
                    <p className="text-[14px] text-[#666666]">Predictable costs that never eat into your returns</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 h-[30px] bg-[#C9A84C] flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-semibold mb-1">Expert Resources</h3>
                    <p className="text-[14px] text-[#666666]">CPAs, maintenance technicians, and legal support</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 h-[30px] bg-[#C9A84C] flex-shrink-0"></div>
                  <div>
                    <h3 className="text-[18px] text-[#1B2A4A] font-semibold mb-1">Resident Retention</h3>
                    <p className="text-[14px] text-[#666666]">Quality residents kept longer = stable, predictable income</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Closing CTA - Locked Template */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Photo with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/airo-assets/images/pages/home/hero"
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
