import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, ChevronDown, ChevronUp, Sparkles, Code2, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimationDirection, getCardAnimationByIndex, getDirectionalAnimation } from '../utils/motionVariants';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index?: number;
  direction?: AnimationDirection;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, index = 0, direction }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animProps = direction
    ? getDirectionalAnimation(direction, (index % 3) * 0.08)
    : getCardAnimationByIndex(index);

  return (
    <motion.div
      {...animProps}
      className={`uiverse-project-card cursor-pointer group ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="uiverse-card-content">
        
        {/* BACK side: Outer Face shown by default with glowing border and floating circles */}
        <div className="uiverse-card-back">
          <div className="uiverse-circle uiverse-circle-bottom" id="bottom" />
          <div className="uiverse-circle uiverse-circle-right" id="right" />

          <div className="uiverse-card-back-content">
            {/* Project Image Header */}
            <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-slate-950/80 text-sky-400 border border-sky-500/30 backdrop-blur-md">
                  {project.categoryLabel}
                </span>
                {project.metrics && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/90 text-white shadow-xs">
                    {project.metrics}
                  </span>
                )}
              </div>
            </div>

            {/* Title & Short Description */}
            <div className="my-auto py-2 space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Tech preview pills */}
            <div className="flex flex-wrap gap-1 my-1">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Hover/Tap Flip Hint Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-sky-300 font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Hover / Tap to Flip</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                3D Flip
              </span>
            </div>
          </div>
        </div>

        {/* FRONT side: Flipped Inner Face with full problem/solution, tech details & action CTA */}
        <div className="uiverse-card-front">
          <div className="uiverse-card-front-content" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-3">
              {/* Header inside flipped card */}
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {project.categoryLabel}
                </span>
                <button
                  onClick={() => setIsFlipped(false)}
                  className="text-[10px] text-slate-400 hover:text-white underline font-mono cursor-pointer"
                >
                  Flip Back
                </button>
              </div>

              <h4 className="text-base font-bold text-white">
                {project.title}
              </h4>

              {/* Problem & Solution Card */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-300 space-y-2">
                <div className="flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-amber-300">Problem:</strong> {project.problemStatement}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-emerald-300">Solution:</strong> {project.solutionSummary}</span>
                </div>
              </div>

              {/* All Technologies */}
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Tech Stack</div>
                <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto pr-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-white/10 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-md shadow-sky-500/20 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => onOpenModal(project)}
                className="w-full py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Deep Dive Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
