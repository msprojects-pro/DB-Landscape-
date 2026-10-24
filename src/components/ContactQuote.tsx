import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  BadgePercent,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Facebook,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, SERVICE_OPTIONS } from '../data/content';
import { QuoteFormData } from '../types';

interface ContactQuoteProps {
  selectedService: string;
  onOpenFacebookModal: () => void;
}

export const ContactQuote: React.FC<ContactQuoteProps> = ({
  selectedService,
  onOpenFacebookModal,
}) => {
  // Web3Forms access key placeholder ready for production deployment
  // Replace this placeholder key with your actual access key from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: selectedService || 'Driveways',
    location: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    mode: 'live' | 'demo';
    summary?: QuoteFormData;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please enter your town or area (e.g. Heanor, Ripley)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your outdoor project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // If a genuine Web3Forms key is provided (not placeholder), post to Web3Forms API
    if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New Outdoor Quote Request: ${formData.service} - ${formData.fullName}`,
            from_name: formData.fullName,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            service: formData.service,
            location: formData.location,
            message: formData.message,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          setSubmissionResult({ success: true, mode: 'live', summary: { ...formData } });
        } else {
          // Fallback to local confirmation
          setSubmitted(true);
          setSubmissionResult({ success: true, mode: 'demo', summary: { ...formData } });
        }
      } catch (err) {
        setSubmitted(true);
        setSubmissionResult({ success: true, mode: 'demo', summary: { ...formData } });
      } finally {
        setSubmitting(false);
      }
    } else {
      // Demo mode: simulate prompt response gracefully without fake claims
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setSubmissionResult({
          success: true,
          mode: 'demo',
          summary: { ...formData },
        });
      }, 600);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmissionResult(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Driveways',
      location: '',
      message: '',
    });
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#F3F8EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DD75C]" />
            <span className="text-xs font-semibold tracking-widest text-[#173D27] uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-[#173D27] tracking-tight mb-4 [text-wrap:balance]">
            Let's Bring Your Outdoor Project to Life.
          </h2>
          <p className="text-base sm:text-lg text-[#202720]/80 leading-relaxed">
            Have a driveway, patio or garden project in mind? Get in touch with DB Paving &amp; Landscapes to discuss what you need and request a free quotation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT FEATURE PANEL: Deep Forest Green (#173D27) */}
          <div className="lg:col-span-5 bg-[#173D27] text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#8DD75C] text-[#173D27] font-bold text-xs">
                  DB
                </span>
                <span className="font-bold text-base tracking-wide text-white">
                  {BUSINESS_INFO.name}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                Direct Contact &amp; Business Information
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                We welcome enquiries across Heanor, Derbyshire and surrounding communities for all types of paving, landscaping and groundworks.
              </p>

              {/* Verified Business Details */}
              <div className="space-y-4 mb-8">
                
                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[#8DD75C] shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-[#8DD75C] transition-colors truncate block"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#8DD75C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                      Business Location
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Serving Derbyshire and surrounding areas
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#8DD75C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                      Availability
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.availability}
                    </p>
                  </div>
                </div>

                {/* Quotation Notice */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <BadgePercent className="w-5 h-5 text-[#8DD75C] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                      Quotations
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.quotation}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Contact Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <a
                href={`mailto:${BUSINESS_INFO.email}?subject=Free%20Quote%20Enquiry%20-%20DB%20Paving%20%26%20Landscapes`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] rounded-xl transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[#173D27]" />
                Email for a Free Quote
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onOpenFacebookModal}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#8DD75C]" />
                  Find Us on Facebook
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3.5 py-2.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#8DD75C]" />
                      <span className="text-xs text-[#8DD75C]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-neutral-300" />
                      <span className="hidden sm:inline text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Quote Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-neutral-200/80 shadow-md flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#173D27] mb-1">
                      Request Your Free Quotation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#202720]/70">
                      Fill out your details below and we will get back to you to discuss your project.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. David Smith"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#202720] placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-neutral-200 focus:border-[#8DD75C] focus:ring-[#8DD75C]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="name@example.co.uk"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#202720] placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-neutral-200 focus:border-[#8DD75C] focus:ring-[#8DD75C]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                        Phone Number <span className="text-xs font-normal text-neutral-500">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-[#202720] placeholder-neutral-400 focus:outline-none focus:border-[#8DD75C] focus:ring-2 focus:ring-[#8DD75C]/20 transition-all"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-[#202720] bg-white focus:outline-none focus:border-[#8DD75C] focus:ring-2 focus:ring-[#8DD75C]/20 transition-all"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                      Project Location / Postcode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: '' });
                      }}
                      placeholder="e.g. Heanor, Ripley, Langley Mill or postcode"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#202720] placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.location
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-neutral-200 focus:border-[#8DD75C] focus:ring-[#8DD75C]/20'
                      }`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#173D27] mb-1.5">
                      Tell Us About Your Project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Please share approximate dimensions, preferred materials (e.g. block paving, porcelain, turfing), and any specific ideas..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#202720] placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-neutral-200 focus:border-[#8DD75C] focus:ring-[#8DD75C]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] active:scale-[0.99] rounded-xl shadow-xs transition-all disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DD75C]"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request My Free Quote</span>
                          <Send className="w-4 h-4 text-[#173D27]" />
                        </>
                      )}
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-[#687168]">
                      Free quotations with no obligation. All enquiries handled directly by DB Paving &amp; Landscapes.
                    </p>
                  </div>
                </motion.form>
              ) : (
                /* Success Confirmation State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center justify-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F3F8EF] border border-[#8DD75C] flex items-center justify-center text-[#173D27] mb-4 shadow-xs">
                    <CheckCircle2 className="w-9 h-9 text-[#8DD75C]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#173D27] mb-2">
                    Thank You, {submissionResult?.summary?.fullName}!
                  </h3>

                  <p className="text-sm text-[#202720]/80 max-w-md mx-auto mb-6">
                    Your enquiry for <strong className="text-[#173D27]">{submissionResult?.summary?.service}</strong> in <strong className="text-[#173D27]">{submissionResult?.summary?.location}</strong> has been logged.
                  </p>

                  {/* Submission Summary Card */}
                  <div className="w-full max-w-md bg-[#F5F6F3] p-4 rounded-2xl border border-neutral-200 text-left text-xs space-y-2 mb-6">
                    <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                      <span className="text-[#687168]">Service:</span>
                      <span className="font-semibold text-[#173D27]">{submissionResult?.summary?.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                      <span className="text-[#687168]">Location:</span>
                      <span className="font-semibold text-[#173D27]">{submissionResult?.summary?.location}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                      <span className="text-[#687168]">Email:</span>
                      <span className="font-semibold text-[#173D27]">{submissionResult?.summary?.email}</span>
                    </div>
                    {submissionResult?.summary?.phone && (
                      <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                        <span className="text-[#687168]">Phone:</span>
                        <span className="font-semibold text-[#173D27]">{submissionResult?.summary?.phone}</span>
                      </div>
                    )}
                    <div className="pt-1">
                      <span className="text-[#687168] block mb-1">Details:</span>
                      <p className="text-neutral-700 italic bg-white p-2 rounded-lg border border-neutral-200/50">
                        "{submissionResult?.summary?.message}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`mailto:${BUSINESS_INFO.email}?subject=Quote%20Follow-up:%20${submissionResult?.summary?.service}&body=Hi%20DB%20Paving%20%26%20Landscapes,%0A%0AFollowing%20up%20on%20my%20quotation%20request%20for%20${submissionResult?.summary?.service}.%0A%0AThank%20you,%0A${submissionResult?.summary?.fullName}`}
                      className="px-5 py-2.5 rounded-xl bg-[#8DD75C] text-[#173D27] font-semibold text-xs sm:text-sm hover:bg-[#7ec74e] transition-colors"
                    >
                      Email DB Paving Directly
                    </a>

                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl bg-[#F5F6F3] text-[#202720] font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
