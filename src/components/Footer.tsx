import React from 'react';
import { PageType } from '../types';
import { USER_INFO } from '../data/portfolioData';
import { AvatarLogo } from './AvatarLogo';
import { ConnectivityButton } from './ConnectivityButton';
import { Github, Linkedin, Mail, Twitter, Brain, ArrowUpRight, PhoneCall, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#020408]/90 text-slate-400 relative z-20">
      
      {/* SECTION 5: CLEAN PORTFOLIO CTA HEADER */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 border-b border-white/10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Seeking AI/ML Engineering Opportunities</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
          Let's Build Impactful <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent font-serif-custom font-normal">
            AI Systems Together
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal">
          Open for Summer 2026 AI/ML engineering internships, full-time roles, and technical collaborations in Machine Learning & Generative AI.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </button>

          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </button>
        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Branding & Status */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <AvatarLogo className="w-9 h-9" />
              <span className="text-xl font-black tracking-tight text-white">
                HUZEFA PATEL
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              AI & Data Science B.E. Student at SPPU • ML Intern @ Flyrank. Building machine learning models and computer vision applications.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for AI/ML Engineer Roles & Internships</span>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {(['home', 'projects', 'about', 'resume', 'blog', 'contact'] as PageType[]).map((p) => (
                <li key={p}>
                  <button
                    onClick={() => {
                      onNavigate(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-sky-400 transition-colors capitalize font-medium"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Focus Areas */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Core Tech
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Agentic LLMs</li>
              <li>PyTorch & CUDA</li>
              <li>RAG & Vector DBs</li>
              <li>FastAPI Microservices</li>
            </ul>
          </div>

          {/* Column 5: Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Role
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>ML Intern @ Flyrank</li>
              <li>AI Systems Creator</li>
              <li>Summer 2026 Target</li>
            </ul>
          </div>

          {/* Column 6: Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              Social Network
            </h3>
            <div className="flex flex-wrap gap-4 pt-1">
              <ConnectivityButton platform="github" size="sm" />
              <ConnectivityButton platform="linkedin" size="sm" />
              <ConnectivityButton platform="email" size="sm" />
              <ConnectivityButton platform="twitter" size="sm" />
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© {currentYear} Huzefa Patel. AI & ML Engineer.</p>
          <p>Engineered with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
