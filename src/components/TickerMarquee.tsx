import React from 'react';
import { Sparkles, Brain, Code, Cpu, Database, Flame, Terminal } from 'lucide-react';

const TIKER_ITEMS = [
  { text: 'MACHINE LEARNING', icon: Brain },
  { text: 'ARTIFICIAL INTELLIGENCE', icon: Sparkles },
  { text: 'DATA SCIENCE', icon: Database },
  { text: 'AGENTIC AI SYSTEMS', icon: Cpu },
  { text: 'PYTORCH & TENSORFLOW', icon: Code },
  { text: 'COMPUTER VISION', icon: Flame },
  { text: 'FLYRANK ML INTERN', icon: Terminal },
];

export const TickerMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-900/90 dark:bg-slate-950/90 border-y border-blue-500/20 py-3.5 backdrop-blur-md relative z-10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...TIKER_ITEMS, ...TIKER_ITEMS, ...TIKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6 text-xs sm:text-sm font-extrabold tracking-wider text-slate-300 dark:text-slate-200">
              <Icon className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="uppercase">{item.text}</span>
              <span className="text-blue-500 font-bold ml-2">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
