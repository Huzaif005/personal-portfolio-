import React, { useMemo } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { Github, GitCommit, GitPullRequest, Flame, Star } from 'lucide-react';

export const GitHubContributions: React.FC = () => {
  // Generate a realistic 52-week activity map array (52 weeks x 7 days)
  const heatmapData = useMemo(() => {
    const weeks = [];
    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        // Pseudo-random level 0, 1, 2, 3, 4 with higher density on weekdays
        const rand = Math.random();
        let level = 0;
        if (rand > 0.35) level = 1;
        if (rand > 0.60) level = 2;
        if (rand > 0.82) level = 3;
        if (rand > 0.93) level = 4;
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800';
      case 1: return 'bg-blue-200 dark:bg-blue-950 border border-blue-300 dark:border-blue-900';
      case 2: return 'bg-blue-400 dark:bg-blue-800 border border-blue-500 dark:border-blue-700';
      case 3: return 'bg-blue-600 dark:bg-blue-600 border border-blue-600 dark:border-blue-500';
      case 4: return 'bg-sky-400 dark:bg-sky-400 border border-sky-300 dark:border-sky-300';
      default: return 'bg-slate-100 dark:bg-slate-900';
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>GitHub Open Source Activity</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold">
                @{USER_INFO.github.split('/').pop()}
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              1,420+ contributions in the last year across ML repositories & AI agent toolkits
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="font-bold text-slate-900 dark:text-white">18 Day</span> Streak
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-bold text-slate-900 dark:text-white">142</span> Stars Earned
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[680px] space-y-1">
          <div className="flex gap-1">
            {heatmapData.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-3 h-3 rounded-xs ${getColorClass(level)} transition-colors hover:scale-125`}
                    title={`Day ${dIdx + 1}, Week ${wIdx + 1}: ${level * 3} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-slate-500">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
        <span>Less</span>
        <div className="w-2.5 h-2.5 rounded-xs bg-slate-200 dark:bg-slate-900" />
        <div className="w-2.5 h-2.5 rounded-xs bg-blue-300 dark:bg-blue-950" />
        <div className="w-2.5 h-2.5 rounded-xs bg-blue-500 dark:bg-blue-800" />
        <div className="w-2.5 h-2.5 rounded-xs bg-blue-600 dark:bg-blue-600" />
        <div className="w-2.5 h-2.5 rounded-xs bg-sky-400 dark:bg-sky-400" />
        <span>More</span>
      </div>
    </div>
  );
};
