import React from 'react';
import { ResumeViewer } from '../components/ResumeViewer';
import { FileText, Download, Mail, ArrowRight } from 'lucide-react';

interface ResumePageProps {
  onNavigateToContact: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigateToContact }) => {
  return (
    <div className="space-y-8 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold">
          <FileText className="w-4 h-4" />
          <span>Curriculum Vitae</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Resume & Credentials
        </h1>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Comprehensive summary of education, technical proficiency, research internships, projects, and verifiable certifications.
        </p>
      </div>

      {/* Main Resume Viewer */}
      <ResumeViewer />

      {/* Recruiter Call Out Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        <div>
          <h3 className="text-lg font-bold">Impressed with my technical background?</h3>
          <p className="text-xs text-slate-400">
            Let's schedule a 15-minute call or direct email conversation about Summer 2026 roles.
          </p>
        </div>

        <button
          onClick={onNavigateToContact}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
