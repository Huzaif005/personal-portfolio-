import React from 'react';
import { PageType, Project } from '../types';
import { USER_INFO, SKILL_CATEGORIES, PROJECTS, INTERNSHIPS, CERTIFICATIONS, TESTIMONIALS } from '../data/portfolioData';
import { JavierSkillCard } from '../components/JavierSkillCard';
import { ProfilePhotoCard } from '../components/ProfilePhotoCard';
import { ConnectivityButton } from '../components/ConnectivityButton';
import { TickerMarquee } from '../components/TickerMarquee';
import { ArrowRight, FileText, Mail, Brain, Award, Sparkles, Briefcase, Github, Linkedin, CheckCircle2, ChevronRight, Star, Cpu, Terminal, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { getDirectionalAnimation, getCardAnimationByIndex } from '../utils/motionVariants';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenProjectModal: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProjectModal }) => {
  return (
    <div className="space-y-16 py-6 overflow-hidden">
      
      {/* SECTION 1: CLEAN DEVELOPER HERO SECTION */}
      <section className="relative overflow-hidden pt-4 pb-10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Content - Slides from Left */}
            <motion.div
              {...getDirectionalAnimation('left')}
              className="lg:col-span-7 space-y-6 text-left relative z-20"
            >
              
              <div className="badge-glow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Seeking AI/ML Engineering Opportunities</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
                  Hi, I'm <br />
                  <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                    {USER_INFO.name}
                  </span>
                </h1>
                
                <h2 className="text-lg sm:text-2xl font-bold text-slate-200">
                  {USER_INFO.title}
                </h2>

                <p className="text-sm sm:text-base font-normal text-slate-400 leading-relaxed max-w-xl">
                  {USER_INFO.subheadline}
                </p>
              </div>

              {/* Call to action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-6 py-3.5 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore AI Projects</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-2xl text-xs font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Contact Me</span>
                </button>

                <button
                  onClick={() => onNavigate('resume')}
                  className="px-5 py-3.5 rounded-2xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-sky-500/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Resume PDF</span>
                </button>
              </div>

              {/* Stat Counters Bento Card */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#09090b]/80 border border-white/10 backdrop-blur-md">
                {USER_INFO.stats.map((st, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-2xl font-black text-white tracking-tight bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                      {st.value}
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Right Side: Profile Card - Slides from Right */}
            <motion.div
              {...getDirectionalAnimation('right')}
              className="lg:col-span-5 flex justify-center relative z-10"
            >
              <div className="relative w-full max-w-sm rounded-3xl p-5 bg-[#09090b] border border-white/10 shadow-2xl space-y-4">
                <ProfilePhotoCard
                  badgeText="ML Intern @ Flyrank"
                  subTitle="AI & DS Student"
                  aspectRatio="h-80"
                />

                <div className="space-y-3 text-slate-300 text-xs">
                  <p className="leading-relaxed italic text-slate-400">
                    "Passionate about machine learning, crop disease detection, and building generative AI solutions for real-world impact."
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10 text-slate-400">
                    <ConnectivityButton platform="github" size="sm" />
                    <ConnectivityButton platform="linkedin" size="sm" />
                    <ConnectivityButton platform="email" size="sm" />
                    <span className="ml-auto text-[11px] font-mono font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg shrink-0">
                      CGPA 8.75
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Animated Marquee Ticker */}
      <TickerMarquee />

      {/* Profile & Biography Card Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#09090b]/60 backdrop-blur-md border border-white/10 p-8 shadow-2xl overflow-hidden">
          <motion.div
            {...getDirectionalAnimation('left')}
            className="lg:col-span-4 flex justify-center"
          >
            <ProfilePhotoCard
              badgeText="ML Intern @ Flyrank"
              subTitle="AI & DS Student"
              aspectRatio="h-80"
            />
          </motion.div>
          <motion.div
            {...getDirectionalAnimation('right')}
            className="lg:col-span-8 space-y-4 text-left"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              <Brain className="w-4 h-4 text-sky-400" />
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl font-black text-white">
              Practical AI Systems Over Ungrounded Hype
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {USER_INFO.bioLong}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 font-bold">
                CGPA: 8.75 / 10
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-sky-300 font-bold">
                Flyrank ML Intern
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-indigo-300 font-bold">
                Target: Summer 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            Technical Proficiency
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Core Machine Learning & AI Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <JavierSkillCard key={idx} category={cat} index={idx} />
          ))}
        </div>
      </section>

      {/* Internship Highlights Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Experience
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Internship Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERNSHIPS.map((intern, idx) => (
            <motion.div
              key={intern.id}
              {...getCardAnimationByIndex(idx)}
              className="p-6 rounded-3xl bg-[#09090b]/60 backdrop-blur-md border border-white/10 shadow-lg space-y-4 hover:border-sky-500/40 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    {intern.type}
                  </span>
                  <h3 className="text-lg font-bold text-white">{intern.role}</h3>
                  <p className="text-xs font-semibold text-slate-400">
                    {intern.company} • {intern.location}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-slate-300 shrink-0 border border-white/10">
                  {intern.period}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {intern.description}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-300">
                {intern.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Industry Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              {...getCardAnimationByIndex(idx)}
              className="p-6 rounded-3xl bg-[#09090b]/60 backdrop-blur-md border border-white/10 shadow-lg space-y-3 hover:border-sky-500/40 transition-all"
            >
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{cert.title}</h3>
              <p className="text-xs font-semibold text-slate-400">
                {cert.issuer} • {cert.issueDate}
              </p>
              <div className="flex flex-wrap gap-1 pt-2">
                {cert.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/5 text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials / Recommendations */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 mb-1 flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Recommendations
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            What Mentors & Leaders Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              {...getCardAnimationByIndex(idx)}
              className="p-6 rounded-3xl bg-[#09090b]/60 backdrop-blur-md border border-white/10 shadow-lg space-y-4 flex flex-col justify-between hover:border-sky-500/40 transition-all"
            >
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-sky-400"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-slate-400">{t.role}, {t.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};


