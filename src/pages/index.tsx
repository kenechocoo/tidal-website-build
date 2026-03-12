import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home page component - Tidal Realty Services
 *
 * Refined minimal luxury real estate design
 * Deep Navy (#1B2A4A), Warm Cream (#F0EDE6/#F5F0EB), Pure White
 */
export default function HomePage() {
  return (
    <>
      <title>Tidal Realty Services - Full-Service Real Estate Brokerage</title>
      <meta name="description" content="Full-service real estate brokerage specializing in property listings and professional property management. Exceptional service with flat-fee listings and competitive pricing." />
      
      <div className="bg-white">
        {/* Section 1: Hero - Full Screen Split with Transparent Navbar */}
        <section className="h-screen flex flex-col md:flex-row relative">
          {/* Transparent Navigation Bar - Floats Over Hero */}
          <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-8">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
              {/* Logo + Company Name - Left */}
              <Link to="/" className="flex flex-col items-start">
                <img
                  src="/assets/tidal-logo.png"
                  alt="Tidal Realty Services"
                  className="h-12 w-12 object-contain mb-1" />
                <span className="text-[10px] tracking-[0.2em] text-[#1B2A4A] uppercase font-light">
                  Tidal Realty Services
                </span>
              </Link>

              {/* Navigation Links - Right */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/services"
                  className="text-[11px] tracking-[0.15em] text-[#1B2A4A] hover:opacity-60 transition-opacity font-light uppercase">
                  Services
                </Link>
                <span className="text-[#1B2A4A] opacity-30">·</span>
                <Link
                  to="/asset-management"
                  className="text-[11px] tracking-[0.15em] text-[#1B2A4A] hover:opacity-60 transition-opacity font-light uppercase">
                  Asset Management
                </Link>
                <span className="text-[#1B2A4A] opacity-30">·</span>
                <Link
                  to="/the-nest"
                  className="text-[11px] tracking-[0.15em] text-[#1B2A4A] hover:opacity-60 transition-opacity font-light uppercase">
                  The Nest
                </Link>
                <span className="text-[#1B2A4A] opacity-30">·</span>
                <Link
                  to="/contact"
                  className="text-[11px] tracking-[0.15em] text-[#1B2A4A] hover:opacity-60 transition-opacity font-light uppercase">
                  Contact
                </Link>
                <span className="text-[#1B2A4A] opacity-30">·</span>
                <Button
                  size="sm"
                  className="bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 text-[11px] tracking-[0.15em] uppercase px-6"
                  asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-[#1B2A4A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Left Panel - Pure White Background */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[550px] w-full">

              <h1 className="text-[52px] md:text-[60px] leading-[1.1] text-[#1B2A4A] mb-8">
                We do it right,<br />we make it personal.
              </h1>
              <p className="text-base text-[#888888] mb-10 leading-relaxed">
                Tidal Realty Services is a full-service real estate brokerage specializing in property listings and professional property management.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-[#F5F0EB] border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                asChild>
                <Link to="/contact">
                  Let Us Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Bottom-left decorative elements */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B2A4A]"></div>
              <div className="text-[#1B2A4A] text-2xl">↓</div>
            </div>
          </div>

          {/* Right Panel - Full-bleed Photo */}
          <div className="w-full md:w-1/2 h-64 md:h-full">
            <img
              src="/assets/home-hero.png"
              alt="Modern Architecture"
              className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Section 2: Our Focus - Enhanced with Geometric Line Art */}
        <section className="min-h-screen flex items-center">
          <div className="w-full flex flex-col md:flex-row">
            {/* Left Column - Warm Cream Background */}
            <div className="w-full md:w-1/2 bg-[#F0EDE6] flex items-center p-16 min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-[600px]">

                {/* Small uppercase label */}
                <div className="text-[12px] tracking-[0.3em] text-[#1B2A4A] uppercase font-semibold mb-8">
                  Our Focus
                </div>

                {/* Double vertical line divider with quote */}
                <div className="flex gap-6 relative">
                  <div className="flex gap-2 flex-shrink-0">
                    <div className="w-0.5 bg-[#1B2A4A]"></div>
                    <div className="w-0.5 bg-[#1B2A4A] opacity-30"></div>
                  </div>
                  <div>
                    <p className="text-[22px] md:text-[24px] text-[#1B2A4A] leading-relaxed mb-10">
                      "Our focus is simple: deliver an exceptional client experience while protecting and maximizing your bottom line. That commitment is why we offer innovative programs such as flat-fee property listings and highly competitive property management pricing — value that many of our clients consider unmatched."
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-[#F0EDE6] border border-[#1B2A4A]/20 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors"
                      asChild>
                      <Link to="/services">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Warm Cream with Architectural Line Art */}
            <div className="w-full md:w-1/2 bg-[#F0EDE6] flex items-center justify-center p-16 min-h-[600px] relative overflow-hidden">
              {/* Subtle geometric line art - architectural blueprint style */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.12]"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                {/* Diagonal intersecting lines */}
                <line x1="0" y1="200" x2="800" y2="600" stroke="#888888" strokeWidth="1" />
                <line x1="0" y1="600" x2="800" y2="200" stroke="#888888" strokeWidth="1" />
                <line x1="200" y1="0" x2="600" y2="800" stroke="#888888" strokeWidth="0.5" />
                <line x1="600" y1="0" x2="200" y2="800" stroke="#888888" strokeWidth="0.5" />
                {/* Partial circle arc */}
                <circle cx="650" cy="400" r="250" stroke="#888888" strokeWidth="1" fill="none" />
                <circle cx="650" cy="400" r="180" stroke="#888888" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 3: Our Portfolio - Horizontal Stat Bar + Full-Width Photo */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Section Title */}
              <h2 className="text-[12px] tracking-[0.3em] text-[#1B2A4A] uppercase font-semibold mb-12">
                Our Portfolio
              </h2>

              {/* Horizontal Stat Bar - 4 Equal Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-l border-[#1B2A4A]">
                {/* Column 1 - White */}
                <div className="bg-white py-20 px-8 text-center border-r border-[#1B2A4A]">
                  <div className="text-[72px] md:text-[80px] leading-none text-[#1B2A4A] mb-4">23+</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#888888]">
                    Units Under<br />Management
                  </div>
                </div>

                {/* Column 2 - Deep Navy */}
                <div className="bg-[#1B2A4A] py-20 px-8 text-center border-r border-[#1B2A4A]">
                  <div className="text-[72px] md:text-[80px] leading-none text-white mb-4">25,000+</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/80">
                    Square Feet<br />Managed
                  </div>
                </div>

                {/* Column 3 - White */}
                <div className="bg-white py-20 px-8 text-center border-r border-[#1B2A4A]">
                  <div className="text-[72px] md:text-[80px] leading-none text-[#1B2A4A] mb-4">20+</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#888888]">
                    Years of Houston<br />Real Estate Experience
                  </div>
                </div>

                {/* Column 4 - Deep Navy */}
                <div className="bg-[#1B2A4A] py-20 px-8 text-center border-r border-[#1B2A4A]">
                  <div className="text-[72px] md:text-[80px] leading-none text-white mb-4">$75</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-white/80">
                    Flat Property<br />Management Fee
                  </div>
                </div>
              </div>

              {/* Full-Width Professional Team Photo */}
              <div className="mt-0 h-[450px] w-full">
                <img
                  src="/assets/team.jpg"
                  alt="Professional Team Collaboration"
                  className="w-full h-full object-cover grayscale-[20%]" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: We Make It Simple - Two Rows */}
        <section className="py-20 bg-[#F0EDE6]">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Row 1 - Two Columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[40%_60%] gap-16 mb-20">

              {/* Left Column */}
              <div>
                <div className="text-[12px] tracking-[0.3em] text-[#1B2A4A] uppercase font-semibold mb-8">
                  We Make It Simple
                </div>
                <p className="text-[18px] text-[#1B2A4A] leading-relaxed">
                  Whether you're a homeowner, investor, or tenant, Tidal Realty Services designs a set of real estate solutions tailored to your needs and goals. We focus on creating value through proactive management, competitive pricing, and a personal touch that sets us apart.
                </p>
              </div>

              {/* Right Column - Service List */}
              <div className="space-y-6">
                <Link
                  to="/services"
                  className="block text-[28px] text-[#1B2A4A] hover:underline transition-all group">
                  <span className="text-[#1B2A4A] mr-4">—</span>
                  Flat Fee Listings for Sale
                </Link>
                <Link
                  to="/services"
                  className="block text-[28px] text-[#1B2A4A] hover:underline transition-all group">
                  <span className="text-[#1B2A4A] mr-4">—</span>
                  Flat Fee Listings for Rent
                </Link>
                <Link
                  to="/services"
                  className="block text-[28px] text-[#1B2A4A] hover:underline transition-all group">
                  <span className="text-[#1B2A4A] mr-4">—</span>
                  Asset Management
                </Link>
                <Link
                  to="/services"
                  className="block text-[28px] text-[#1B2A4A] hover:underline transition-all group">
                  <span className="text-[#1B2A4A] mr-4">—</span>
                  Property Consulting
                </Link>
              </div>
            </motion.div>

            {/* Row 2 - Three Service Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8">

              {/* Card 01 - Listings */}
              <div className="bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="text-[14px] text-[#888888] mb-4">01</div>
                <h3 className="text-[28px] text-[#1B2A4A] mb-4 font-medium">Listings</h3>
                <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
                  Ready to sell or rent your property? We list it, market it, and manage the process — for a flat fee.
                </p>
                <Link
                  to="/listings"
                  className="text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center">
                  Explore Listings <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
                {/* Decorative architectural line */}
                <svg className="absolute bottom-4 right-4 opacity-[0.08]" width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" stroke="#1B2A4A" strokeWidth="1" fill="none" />
                  <line x1="10" y1="30" x2="70" y2="30" stroke="#1B2A4A" strokeWidth="0.5" />
                  <line x1="10" y1="50" x2="70" y2="50" stroke="#1B2A4A" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Card 02 - Asset Management */}
              <div className="bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="text-[14px] text-[#888888] mb-4">02</div>
                <h3 className="text-[28px] text-[#1B2A4A] mb-4 font-medium">Asset Management</h3>
                <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
                  Comprehensive property management at $75/month flat. No surprises, just results.
                </p>
                <Link
                  to="/asset-management"
                  className="text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center">
                  Learn More About Management <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
                {/* Decorative architectural line */}
                <svg className="absolute bottom-4 right-4 opacity-[0.08]" width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="60" height="60" stroke="#1B2A4A" strokeWidth="1" fill="none" />
                  <line x1="30" y1="10" x2="30" y2="70" stroke="#1B2A4A" strokeWidth="0.5" />
                  <line x1="50" y1="10" x2="50" y2="70" stroke="#1B2A4A" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Card 03 - Personal Service */}
              <div className="bg-[#F0EDE6] border border-[#1B2A4A]/20 p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="text-[14px] text-[#888888] mb-4">03</div>
                <h3 className="text-[28px] text-[#1B2A4A] mb-4 font-medium">The Human Touch</h3>
                <p className="text-[14px] text-[#888888] leading-relaxed mb-8">
                  Smart technology, backed by people who actually pick up the phone.
                </p>
                <Link
                  to="/contact"
                  className="text-[11px] tracking-[0.2em] uppercase text-[#1B2A4A] hover:opacity-60 transition-opacity inline-flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
                {/* Decorative architectural line */}
                <svg className="absolute bottom-4 right-4 opacity-[0.08]" width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="30" stroke="#1B2A4A" strokeWidth="1" fill="none" />
                  <circle cx="40" cy="40" r="20" stroke="#1B2A4A" strokeWidth="0.5" fill="none" />
                </svg>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Closing CTA - Full-Bleed Photo with Floating Card */}
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
    </>);

}