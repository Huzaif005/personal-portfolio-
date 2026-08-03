import React, { useState } from 'react';
import { PageType } from '../types';
import { USER_INFO } from '../data/portfolioData';
import { AvatarLogo } from './AvatarLogo';
import { ArcaneAIButton } from './ArcaneAIButton';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020408]/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Selfie Sticker Avatar */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="relative group-hover:scale-105 transition-transform">
            <AvatarLogo className="w-11 h-11" />
          </div>
          <div>
            <span className="text-lg font-black tracking-tight text-white flex items-center gap-1">
              HUZEFA PATEL
            </span>
            <span className="block text-[10px] uppercase tracking-widest font-mono text-sky-400 -mt-0.5">
              AI & Data Science Engineer
            </span>
          </div>
        </button>

        {/* Centered Floating Menu Pill (Uiverse Mymiamo Glassmorphic Menu) */}
        <nav className="menu hidden md:flex">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={isActive ? 'active' : ''}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <ArcaneAIButton
            label="Arcane AI"
            onClick={() => window.dispatchEvent(new CustomEvent('open-arcane-ai'))}
          />

          <div className="conic-border-wrap hover:scale-105 transition-transform duration-300">
            <button
              onClick={() => handleNavClick('contact')}
              className="conic-border-content px-5 py-2.5 text-xs font-bold text-white flex items-center gap-2 hover:bg-slate-900 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-white bg-slate-900 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#09090b]/95 backdrop-blur-2xl px-6 pt-4 pb-8 space-y-2 shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/20'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-white" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 items-center">
              <ArcaneAIButton
                label="Arcane AI"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-arcane-ai'));
                }}
                className="w-full justify-center"
              />
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-xl flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Strategy Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
