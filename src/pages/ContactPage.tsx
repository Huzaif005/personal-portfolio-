import React, { useState } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { ConnectivityButton } from '../components/ConnectivityButton';
import { Mail, Linkedin, Github, FileText, Send, Check, Copy, Calendar, MessageSquare, MapPin, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    topic: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookedSlot, setBookedSlot] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Save message to localStorage
    const existing = JSON.parse(localStorage.getItem('ujepa_portfolio_contacts') || '[]');
    existing.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('ujepa_portfolio_contacts', JSON.stringify(existing));

    setSubmitted(true);
  };

  const timeSlots = [
    'Tomorrow @ 10:00 AM PST',
    'Tomorrow @ 2:30 PM PST',
    'Thursday @ 11:00 AM PST',
    'Friday @ 4:00 PM PST'
  ];

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold">
          <Mail className="w-4 h-4" />
          <span>Direct Communication</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Get In Touch
        </h1>

        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          I am actively evaluating AI/ML Engineer internships and full-time opportunities for 2026. Send a message or grab a quick chat slot.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              <span>Contact Channels</span>
            </h3>

            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {USER_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all shrink-0"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-500 font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 font-semibold">{USER_INFO.location}</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-500 font-bold">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 font-semibold">{USER_INFO.phone}</div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Online Connectivity Profiles
              </span>

              <div className="flex flex-wrap items-center justify-around gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <ConnectivityButton platform="github" size="md" />
                <ConnectivityButton platform="linkedin" size="md" />
                <ConnectivityButton platform="email" size="md" />
                <ConnectivityButton platform="twitter" size="md" />
                <ConnectivityButton platform="phone" size="md" />
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-blue-900 dark:text-blue-200">Need a printable resume?</div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">Download formatted PDF copy</div>
              </div>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>

          </div>

          {/* Quick Recruiter Call Schedule Simulator */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Fast Track for Recruiters</span>
            </div>
            <h3 className="text-base font-bold">Schedule a 15-Minute Intro Call</h3>
            <p className="text-xs text-slate-400">
              Skip back-and-forth emails and pick a 15-min chat slot directly.
            </p>

            <button
              onClick={() => setShowBookingModal(true)}
              className="w-full py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 15-Min Recruiter Chat Slot</span>
            </button>
          </div>

        </div>

        {/* Right Side: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below. Messages are logged instantly.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. I have received your message regarding "<strong>{formData.subject}</strong>" and will reply to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', topic: 'General Inquiry', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option>General Inquiry</option>
                      <option>Recruitment / Internship</option>
                      <option>Full-Time AI/ML Role</option>
                      <option>Research Collaboration</option>
                      <option>AgriTech & Project Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enter specific subject..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Quick Subject Chips */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Quick Subject Suggestions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'AI/ML Internship Opportunity',
                      'Project Collaboration Inquiry',
                      'Research & Development Inquiry',
                      'General Connecting Request'
                    ].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: chip })}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border transition-colors ${
                          formData.subject === chip
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        + {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, project requirements, or role details..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to {USER_INFO.name}</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* Recruiter Booking Simulator Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-md w-full space-y-4">
            <h3 className="text-lg font-bold">Pick a 15-Min Intro Slot</h3>
            <p className="text-xs text-slate-400">
              Select a time that works best for your recruitment schedule:
            </p>

            {bookedSlot ? (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs space-y-2 text-center">
                <Check className="w-6 h-6 mx-auto text-emerald-400" />
                <p className="font-bold">Slot Confirmed: {bookedSlot}</p>
                <p>A calendar invite placeholder has been created.</p>
                <button
                  onClick={() => {
                    setBookedSlot(null);
                    setShowBookingModal(false);
                  }}
                  className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setBookedSlot(slot)}
                    className="w-full p-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-left text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    📅 {slot}
                  </button>
                ))}
              </div>
            )}

            {!bookedSlot && (
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-full py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
