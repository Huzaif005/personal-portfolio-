import React from 'react';
import { motion } from 'motion/react';
import { SkillCategory, Skill } from '../types';
import { Code2, BrainCircuit, Database, Server, Sparkles, CheckCircle2 } from 'lucide-react';

interface JavierSkillCardProps {
  category: SkillCategory;
  index?: number;
}

export const JavierSkillCard: React.FC<JavierSkillCardProps> = ({ category, index = 0 }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  const getInitials = (title: string) => {
    if (title.includes('Programming')) return 'PL';
    if (title.includes('Machine Learning') || title.includes('AI')) return 'AI';
    if (title.includes('Databases')) return 'DB';
    return 'TL';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-sky-700/40 backdrop-blur-md rounded-2xl shadow-lg shadow-sky-500/20 p-1 hover:shadow-sky-500/40 transition-shadow duration-300"
    >
      <div className="group overflow-hidden relative duration-500 transition-all after:duration-500 before:duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:rotate-2 sm:hover:rotate-3 flex flex-col justify-between h-full w-full origin-bottom-right bg-neutral-900/60 backdrop-blur-md rounded-2xl outline outline-slate-400/40 -outline-offset-8 p-5 sm:p-6 text-white space-y-4">
        
        {/* Glow Effects from Javierrocadev Uiverse Card */}
        <div className="absolute w-24 h-24 bg-sky-700 rounded-full blur-xl bottom-32 right-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute w-20 h-20 bg-sky-400 rounded-full blur-xl top-20 right-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Card Header */}
        <div className="z-10 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-400 shadow-inner">
              {getCategoryIcon(category.iconName)}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {category.title}
              </h3>
              <p className="text-[11px] text-sky-300/80 font-medium">
                {category.skills.length} Core Technical Competencies
              </p>
            </div>
          </div>

          <span className="text-xl sm:text-2xl font-black font-mono text-slate-400/80 tracking-wider group-hover:text-sky-400 transition-colors">
            {getInitials(category.title)}
          </span>
        </div>

        {/* List of Skills inside the Card */}
        <div className="z-10 space-y-3 flex-1">
          {category.skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-3 rounded-xl bg-neutral-950/40 backdrop-blur-sm border border-white/10 hover:border-sky-500/40 transition-all space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-100">{skill.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-950 text-sky-300 border border-sky-800/50">
                    {skill.experience}
                  </span>
                  <span className="text-xs font-black font-mono text-sky-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + sIdx * 0.05 }}
                  className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                />
              </div>

              <p className="text-[11px] text-slate-400 leading-snug">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer info inside Javierrocadev Card */}
        <div className="z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span className="text-sky-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            Active Stack
          </span>
          <span>Verified Skill Matrix</span>
        </div>

      </div>
    </motion.div>
  );
};

export const JavierSingleSkillCard: React.FC<{ skill: Skill; index?: number }> = ({ skill, index = 0 }) => {
  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-sky-700/40 backdrop-blur-md rounded-2xl shadow-sm shadow-sky-500 p-0.5 hover:shadow-md hover:shadow-sky-500/40 transition-shadow duration-300"
    >
      <div className="group overflow-hidden relative duration-500 transition-all after:duration-500 before:duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:rotate-3 sm:hover:rotate-6 flex flex-col justify-between h-56 w-full origin-bottom-right bg-neutral-900/60 backdrop-blur-md rounded-2xl outline outline-slate-400/40 -outline-offset-8 p-5 text-white">
        
        {/* Glow Effects */}
        <div className="absolute w-24 h-24 bg-sky-700 rounded-full blur-xl bottom-32 right-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute w-20 h-20 bg-sky-400 rounded-full blur-xl top-20 right-16 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

        <div className="z-10 flex flex-col items-center justify-center text-center gap-2 flex-1">
          <span className="text-slate-400 text-5xl font-extrabold tracking-wider group-hover:text-sky-400 transition-colors">
            {getInitials(skill.name)}
          </span>
          <p className="text-gray-50 font-bold text-sm tracking-tight">
            {skill.name}
          </p>
          <p className="text-sky-300 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sky-950/80 border border-sky-800/60">
            {skill.experience} • {skill.level}% Proficiency
          </p>
        </div>

        <div className="z-10 text-[11px] text-slate-300 text-center line-clamp-2 px-1">
          {skill.description}
        </div>
      </div>
    </motion.div>
  );
};
