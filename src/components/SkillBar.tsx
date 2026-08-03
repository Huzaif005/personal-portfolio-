import React from 'react';
import { motion } from 'motion/react';

interface SkillBarProps {
  name: string;
  level: number;
  experience: string;
  description: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, experience, description }) => {
  return (
    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-bold text-slate-900 dark:text-white">{name}</span>
          <span className="ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">({experience})</span>
        </div>
        <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">{level}%</span>
      </div>

      {/* Progress Bar Background */}
      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
        />
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
        {description}
      </p>
    </div>
  );
};
