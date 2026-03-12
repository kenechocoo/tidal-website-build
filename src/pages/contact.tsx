import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/**
 * Contact page - Tidal Realty Services
 *
 * Warm, human, effortless
 * Remove every possible reason not to reach out
 * Light, open, personal
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <title>Contact - Tidal Realty Services</title>
      <meta name="description" content="Get in touch with Tidal Realty Services. Real people, real answers. Call us at 832-930-4663 or visit us at 2417 Truxillo Street, Houston TX 77004." />
      
      <div className="bg-white">
        {/* Section 1: Hero + Contact Form - Split Screen */}
        <section className="min-h-screen flex flex-col md:flex-row">
          {/* Left Half - Photo with Contact Info Overlay */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img
              src="/airo-assets/images/pages/home/hero"
              alt="Houston Skyline"
              className="w-full h-full object-cover" />
            
            {/* Semi-transparent Navy Gradient Overlay - Bottom 30% */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B2A4A]/90 to-transparent py-12 px-8">
              <div className="max-w-[500px] mx-auto space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#C9A84C] flex-shrink-0 mt-1" />
                  <p className="text-[15px] text-white">
                    2417 Truxillo Street<br />Houston, TX 77004
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                  <a href="tel:832-930-4663" className="text-[15px] text-white hover:text-[#C9A84C] transition-colors">
                    832-930-4663
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                  <a href="mailto:info@tidalpm.com" className="text-[15px] text-white hover:text-[#C9A84C] transition-colors">
                    info@tidalpm.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Contact Form */}
          <div className="w-full md:w-1/2 bg-white flex items-center p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[550px] w-full mx-auto">

              {/* Label */}
              <div className="text-[12px] tracking-[0.3em] text-[#1B2A4A] uppercase font-semibold mb-6">
                Get In Touch
              </div>

              {/* Headline */}
              <h1 className="text-[34px] md:text-[38px] text-[#1B2A4A] font-medium leading-[1.2] mb-6">
                Let's Talk Real Estate.
              </h1>

              {/* Subtext */}
              <p className="text-[16px] text-[#888888] leading-relaxed mb-10">
                Whether you're ready to list, looking for management services, or just have questions — we're here. Real people, real answers.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus-visible:ring-0"
                    required
                  />
                </div>

                {/* I'm interested in */}
                <div>
                  <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                    <SelectTrigger className="border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] focus:border-[#C9A84C] focus:ring-0">
                      <SelectValue placeholder="I'm interested in..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat-fee-sale">Flat Fee Listing for Sale</SelectItem>
                      <SelectItem value="flat-fee-rent">Flat Fee Listing for Rent</SelectItem>
                      <SelectItem value="property-management">Property Management</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-0 border-b border-[#1B2A4A]/20 rounded-none px-0 py-3 text-[15px] min-h-[100px] resize-none focus:border-[#C9A84C] focus-visible:ring-0"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1B2A4A] text-white hover:bg-[#1B2A4A]/90 px-8 py-6 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {/* Micro-text */}
                <p className="text-[12px] text-[#888888] text-center">
                  We typically respond within one business day.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Other Ways to Reach Us */}
        <section className="py-20 bg-[#F0EDE6]">
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Centered Label */}
              <div className="text-center mb-16">
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold">
                  Other Ways to Reach Us
                </div>
              </div>

              {/* Three Columns */}
              <div className="grid md:grid-cols-3 gap-12">
                {/* Column 1 - Call Us */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Phone className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] text-[#1B2A4A] font-bold mb-3">
                    832-930-4663
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Prefer to talk? So do we. Give us a call during business hours.
                  </p>
                </div>

                {/* Column 2 - Email Us */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Mail className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] text-[#1B2A4A] font-bold mb-3">
                    info@tidalpm.com
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Send us a detailed message and we'll respond promptly.
                  </p>
                </div>

                {/* Column 3 - Visit Us */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <MapPin className="h-12 w-12 text-[#C9A84C] stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] text-[#1B2A4A] font-bold mb-3">
                    2417 Truxillo Street
                  </h3>
                  <p className="text-[15px] text-[#666666] leading-relaxed">
                    Houston, Texas 77004. Located in the heart of the city.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Map */}
        <section className="py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              {/* Centered Label */}
              <div className="text-center mb-12">
                <div className="text-[12px] tracking-[0.3em] text-[#C9A84C] uppercase font-semibold">
                  Find Us
                </div>
              </div>

              {/* Google Maps Embed Placeholder */}
              <div className="w-full h-[400px] bg-[#F0EDE6] rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8234567890123!2d-95.3698028!3d29.7604267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3b3b3b3b3b%3A0x1234567890abcdef!2s2417%20Truxillo%20St%2C%20Houston%2C%20TX%2077004!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tidal Realty Services Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Closing CTA - Locked Template */}
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
