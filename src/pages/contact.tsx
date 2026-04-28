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
import { useState, useRef, type FormEvent } from 'react';
import contact from '@/content/contact.json';
import settings from '@/content/settings.json';

/**
 * Contact page - Tidal Realty Services
 *
 * Color tokens: --dark, --soft, --bgHolder
 * Fonts: font-heading (Tiempos), font-sans (Founders Grotesk), font-accent (Manrope)
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const submission = new FormData(e.currentTarget);
      submission.append('access_key', '2939e2b8-059e-442c-ad94-3b050a44129e');
      submission.append(
        'subject',
        `New Contact Form: ${formData.fullName} — ${formData.interest || 'General Inquiry'}`,
      );
      submission.append('from_name', 'Tidal Realty Services Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submission,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || `Submit failed: ${response.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Something went wrong. Please try again or email us at info@tidalpm.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <title>{contact.meta.title}</title>
      <meta name="description" content={contact.meta.description} />

      <div style={{ background: 'var(--bgHolder)' }}>
        {/* Section 1: Hero + Contact Form - Split Screen */}
        <section className="min-h-screen flex flex-col md:flex-row">
          {/* Left Half - Photo with Contact Info Overlay */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img
              src={contact.hero.image}
              alt="Houston Property"
              className="w-full h-full object-cover" />

            {/* Semi-transparent Gradient Overlay - Bottom 30% */}
            <div className="absolute bottom-0 left-0 right-0 py-12 px-8" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--dark) 90%, transparent) 0%, transparent 100%)' }}>
              <div className="max-w-[500px] mx-auto space-y-4 font-sans">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: 'var(--soft)' }} />
                  <p className="text-[15px] text-white">
                    {settings.address.line1}<br />{settings.address.line2}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--soft)' }} />
                  <a href={`tel:${settings.phone}`} className="text-[15px] text-white hover:opacity-70 transition-colors">
                    {settings.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--soft)' }} />
                  <a href={`mailto:${settings.email}`} className="text-[15px] text-white hover:opacity-70 transition-colors">
                    {settings.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half - Contact Form */}
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16" style={{ background: '#f5f2ec' }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[550px] w-full mx-auto">

              {/* Label */}
              <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold mb-6" style={{ color: 'var(--accent-warm)' }}>
                {contact.hero.label}
              </div>

              {/* Headline */}
              <h1 className="font-heading text-[34px] md:text-[38px] font-medium leading-[1.2] mb-6" style={{ color: 'var(--dark)' }}>
                {contact.hero.title}
              </h1>

              {/* Subtext */}
              <p className="font-sans text-[16px] leading-relaxed mb-10" style={{ color: 'var(--dark)', opacity: 0.6 }}>
                {contact.hero.description}
              </p>

              {/* Contact Form */}
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-[48px] mb-4">✓</div>
                  <h2 className="font-heading text-[28px] font-medium mb-4" style={{ color: 'var(--dark)' }}>
                    {contact.hero.successTitle}
                  </h2>
                  <p className="font-sans text-[16px] leading-relaxed" style={{ color: 'var(--dark)', opacity: 0.6 }}>
                    {contact.hero.successDescription}
                  </p>
                </div>
              ) : (
              <form
                ref={formRef}
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6 font-sans"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <Input
                    type="text"
                    name="Full Name"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="border-0 border-b rounded-none px-0 py-3 text-[15px] focus-visible:ring-0 bg-transparent"
                    style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="Email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-0 border-b rounded-none px-0 py-3 text-[15px] focus-visible:ring-0 bg-transparent"
                    style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}
                    required
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-0 border-b rounded-none px-0 py-3 text-[15px] focus-visible:ring-0 bg-transparent"
                    style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}
                    required
                  />
                </div>

                <div>
                  <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                    <SelectTrigger className="border-0 border-b rounded-none px-0 py-3 text-[15px] focus:ring-0 bg-transparent" style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}>
                      <SelectValue placeholder="I'm interested in..." />
                    </SelectTrigger>
                    <SelectContent>
                      {contact.hero.interestOptions.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="Interested In" value={formData.interest} />
                </div>

                <div>
                  <Input
                    type="text"
                    name="Property Address"
                    placeholder="Property Address (address of the property we'd be servicing)"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    className="border-0 border-b rounded-none px-0 py-3 text-[15px] focus-visible:ring-0 bg-transparent"
                    style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}
                  />
                </div>

                <div>
                  <Textarea
                    name="Message"
                    placeholder="Anything else you'd like us to know?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-0 border-b rounded-none px-0 py-3 text-[15px] min-h-[100px] resize-none focus-visible:ring-0 bg-transparent"
                    style={{ borderColor: 'color-mix(in srgb, var(--dark) 20%, transparent)' }}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full text-white px-8 py-6 font-accent text-[11px] tracking-[0.2em] uppercase rounded-sm transition-colors font-semibold hover:opacity-90"
                  style={{ background: 'var(--dark)' }}>
                  {submitting ? 'Sending...' : 'Send Message'} {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <p className="font-sans text-[12px] text-center" style={{ color: 'var(--dark)', opacity: 0.45 }}>
                  {contact.hero.responseNote}
                </p>
              </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Section 2: Other Ways to Reach Us */}
        <section className="py-20" style={{ background: 'var(--bgHolder)' }}>
          <div className="max-w-[1200px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <div className="text-center mb-16">
                <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--accent-warm)' }}>
                  {contact.otherWays.label}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Phone className="h-12 w-12 stroke-[1.5]" style={{ color: 'var(--accent-warm)' }} />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3" style={{ color: 'var(--dark)' }}>
                    {settings.phone}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'var(--dark)', opacity: 0.55 }}>
                    {contact.otherWays.phoneNote}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Mail className="h-12 w-12 stroke-[1.5]" style={{ color: 'var(--accent-warm)' }} />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3" style={{ color: 'var(--dark)' }}>
                    {settings.email}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'var(--dark)', opacity: 0.55 }}>
                    {contact.otherWays.emailNote}
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <MapPin className="h-12 w-12 stroke-[1.5]" style={{ color: 'var(--accent-warm)' }} />
                  </div>
                  <h3 className="font-heading text-[20px] font-bold mb-3" style={{ color: 'var(--dark)' }}>
                    {settings.address.line1}
                  </h3>
                  <p className="font-sans text-[15px] leading-relaxed" style={{ color: 'var(--dark)', opacity: 0.55 }}>
                    {contact.otherWays.addressNote}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Map */}
        <section className="py-20" style={{ background: '#f5f2ec' }}>
          <div className="max-w-[1400px] mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>

              <div className="text-center mb-12">
                <div className="font-accent text-[12px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--accent-warm)' }}>
                  {contact.map.label}
                </div>
              </div>

              <div className="w-full h-[400px] rounded-sm overflow-hidden" style={{ background: 'var(--bgHolder)' }}>
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

      </div>
    </>
  );
}
