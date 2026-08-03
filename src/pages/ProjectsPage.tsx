import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectCategoryAwaisCard } from '../components/ProjectCategoryAwaisCard';
import { Search, Sparkles, Layers, Code2, Bot, Eye, Brain } from 'lucide-react';

interface ProjectsPageProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', title: 'Projects', subtitle: 'All Work', icon: <Layers className="w-5 h-5 text-indigo-400" /> },
    { id: 'llm-agent', title: 'LLM Agents', subtitle: 'Agentic & RAG', icon: <Bot className="w-5 h-5 text-sky-400" /> },
    { id: 'cv', title: 'Vision AI', subtitle: 'YOLO & Edge', icon: <Eye className="w-5 h-5 text-emerald-400" /> },
    { id: 'ml', title: 'ML Systems', subtitle: 'RL & PyTorch', icon: <Brain className="w-5 h-5 text-purple-400" /> },
    { id: 'web-ai', title: 'Web AI', subtitle: 'Full-Stack', icon: <Code2 className="w-5 h-5 text-amber-400" /> }
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold">
          <Code2 className="w-4 h-4" />
          <span>Practical AI & Engineering Portfolio</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Featured AI & ML Projects
        </h1>
        
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Select a project category deck below to explore architectures, benchmarks, and real-world outcomes cleanly without clutter.
        </p>
      </div>

      {/* Awais142 Uiverse Category Deck Selector */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center py-2">
          {categories.map((cat) => (
            <ProjectCategoryAwaisCard
              key={cat.id}
              id={cat.id}
              title={cat.title}
              subtitle={cat.subtitle}
              icon={cat.icon}
              isSelected={selectedCategory === cat.id}
              onSelect={() => setSelectedCategory(cat.id)}
            />
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PyTorch, LangGraph, YOLO, RAG..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/20 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <p className="text-base font-bold text-slate-700 dark:text-slate-300">
            No projects found matching "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenProjectModal}
              index={idx}
            />
          ))}
        </div>
      )}

    </div>
  );
};
