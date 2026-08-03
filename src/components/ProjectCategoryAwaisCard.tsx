import React from 'react';

interface ProjectCategoryAwaisCardProps {
  id: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

export const ProjectCategoryAwaisCard: React.FC<ProjectCategoryAwaisCardProps> = ({
  title,
  subtitle,
  icon,
  isSelected,
  onSelect,
}) => {
  return (
    <label className="text-gray-400 cursor-pointer select-none">
      <input
        type="checkbox"
        className="hidden peer"
        checked={isSelected}
        onChange={onSelect}
      />
      <div
        onClick={onSelect}
        className={`group flex flex-col gap-3 w-36 sm:w-44 h-44 bg-slate-900/60 backdrop-blur-md rounded-2xl p-4 shadow-xl border-2 transition-all duration-300 ease-in-out cursor-pointer ${
          isSelected
            ? 'border-indigo-500 bg-indigo-950/50 translate-y-[-0.5rem] shadow-indigo-500/20 ring-2 ring-indigo-500/40'
            : 'border-slate-800/80 hover:border-indigo-500 hover:shadow-indigo-500/20 hover:translate-y-[-0.25rem]'
        }`}
      >
        <div className="relative">
          <div
            className={`w-12 h-12 mx-auto rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
              isSelected
                ? 'border-indigo-400 bg-indigo-500/30 text-indigo-300 shadow-inner'
                : 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400 group-hover:bg-indigo-500/30'
            }`}
          >
            {icon ? (
              icon
            ) : (
              <div className="flex flex-col gap-1 p-2">
                <div className="h-1 w-8 bg-indigo-400/60 rounded-full" />
                <div className="h-1 w-6 bg-indigo-400/60 rounded-full" />
                <div className="h-1 w-7 bg-indigo-400/60 rounded-full" />
              </div>
            )}
          </div>

          <div
            className={`absolute top-0 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
              isSelected
                ? 'bg-indigo-400 animate-pulse ring-4 ring-indigo-500/30'
                : 'bg-gray-600 group-hover:bg-indigo-400 group-hover:animate-pulse'
            }`}
          />
        </div>

        <div className="text-center flex-1 flex flex-col justify-center">
          <p
            className={`font-semibold text-sm tracking-tight transition-colors duration-300 ${
              isSelected ? 'text-indigo-300' : 'text-slate-200 group-hover:text-indigo-400'
            }`}
          >
            {title}
          </p>
          <p
            className={`text-xs mt-1 transition-opacity duration-300 ${
              isSelected ? 'opacity-100 text-indigo-200 font-medium' : 'opacity-60 group-hover:opacity-100 text-slate-400'
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div
          className={`h-1 rounded-full mx-auto transition-all duration-300 ${
            isSelected ? 'w-full bg-indigo-500' : 'w-0 bg-indigo-500 group-hover:w-full'
          }`}
        />
      </div>
    </label>
  );
};
