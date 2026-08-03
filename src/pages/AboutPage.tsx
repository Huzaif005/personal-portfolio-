import React from 'react';
import { USER_INFO, INTERNSHIPS, SKILL_CATEGORIES, TIMELINE, CERTIFICATIONS } from '../data/portfolioData';
import { SkillBar } from '../components/SkillBar';
import { GitHubContributions } from '../components/GitHubContributions';
import { ProfilePhotoCard } from '../components/ProfilePhotoCard';
import { GraduationCap, Briefcase, Award, BookOpen, Clock, CheckCircle2, Brain, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { getDirectionalAnimation, getCardAnimationByIndex } from '../utils/motionVariants';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Header Profile Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <motion.div
          {...getDirectionalAnimation('left')}
          className="lg:col-span-8 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold">
            <Brain className="w-4 h-4" />
            <span>AI & Machine Learning Engineering Student</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About {USER_INFO.name}
          </h1>

          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {USER_INFO.bioLong}
          </p>

          <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 space-y-2 text-xs">
            <span className="font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
              Career Objective:
            </span>
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
              {USER_INFO.careerObjective}
            </p>
          </div>
        </motion.div>

        {/* Right Sidebar Profile & Education Cards */}
        <motion.div
          {...getDirectionalAnimation('right')}
          className="lg:col-span-4 space-y-6"
        >
          
          {/* Profile Photo Card */}
          <div className="p-4 rounded-3xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/20 dark:border-slate-800 shadow-xl">
            <ProfilePhotoCard
              badgeText="Verified Profile"
              subTitle="AI-DS Engineering"
              aspectRatio="h-72"
            />
          </div>

          {/* Education Highlight Card */}
          <div className="p-6 rounded-3xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/20 dark:border-slate-800 shadow-xl space-y-4">
            <div className="p-3 rounded-2xl bg-blue-600 text-white w-fit">
              <GraduationCap className="w-6 h-6" />
            </div>

          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Educational Background
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
              {USER_INFO.education.degree}
            </h3>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {USER_INFO.education.university} • ({USER_INFO.education.period})
            </p>
            <div className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              GPA: {USER_INFO.education.gpa}
            </div>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Core Technical Coursework:
            </span>
            <div className="flex flex-wrap gap-1">
              {USER_INFO.education.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
        </motion.div>
      </div>

      {/* GitHub Activity Heatmap */}
      <GitHubContributions />

      {/* Interactive Timeline of AI Learning Journey */}
      <section className="space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            Progressive Growth
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Timeline of My AI Learning Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-8">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={item.id}
              {...getCardAnimationByIndex(idx)}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/20 dark:border-slate-800 shadow-md space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {item.year} — {item.subtitle}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 w-fit">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/40"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications & Certifications Section */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Academic Credentials & Research</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Publications & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              {...getCardAnimationByIndex(idx)}
              className="p-6 rounded-2xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/20 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    {cert.icon === 'BookOpen' ? <BookOpen className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                    {cert.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 pt-2 border-t border-slate-100 dark:border-slate-800/80 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Paper / Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
