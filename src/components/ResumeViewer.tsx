import React, { useState } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { Download, FileText, Eye, EyeOff, Check, GraduationCap, Award, Code2, Sparkles, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

export const ResumeViewer: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // If preview is hidden, temporarily show for printing
    const wasHidden = !showPreview;
    if (wasHidden) setShowPreview(true);

    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 300);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Primary Download Hub Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <Check className="w-3.5 h-3.5" />
              <span>Verified Official Resume</span>
            </div>

            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {USER_INFO.name}'s Curriculum Vitae
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              B.E. Artificial Intelligence & Data Science (2024 - 2028) • CGPA: 8.75/10 • Dr. D. Y. Patil College of Engineering & Innovation, SPPU.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {downloading ? (
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>Download PDF Resume</span>
            </button>

            {/* Toggle Preview Button */}
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-3.5 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showPreview ? 'Hide Preview' : 'Preview Document'}</span>
            </button>
          </div>
        </div>

        {/* Quick Credentials Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white">B.E. AI-DS (2024 - 2028)</div>
            <div className="text-slate-500 dark:text-slate-400">DYPCOEI (SPPU) • CGPA 8.75/10</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white">Python, C++, SQL, AI/ML</div>
            <div className="text-slate-500 dark:text-slate-400">Deep Learning, MySQL, MongoDB</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
              <Award className="w-4 h-4" />
              <span>Certifications & Role</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white">Simplilearn Data Analytics</div>
            <div className="text-slate-500 dark:text-slate-400">Student Coordinator, BRAIN Chapter</div>
          </div>
        </div>

      </div>

      {/* Printable Resume Document Sheet (Expandable or automatically visible on print) */}
      <div className={`${showPreview ? 'block' : 'hidden print:block'} transition-all`}>
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xl space-y-6 print:p-0 print:border-none print:shadow-none print:rounded-none font-sans">
          
          {/* Header Section */}
          <div className="text-center space-y-2 border-b border-slate-300 pb-5">
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-wider">
              {USER_INFO.name.toUpperCase()}
            </h1>

            <div className="text-xs font-semibold text-slate-700 flex flex-wrap items-center justify-center gap-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                {USER_INFO.phone}
              </span>
              <span>⋄</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                {USER_INFO.location}
              </span>
            </div>

            <div className="text-xs font-semibold text-blue-700 flex flex-wrap items-center justify-center gap-2">
              <a href={`mailto:${USER_INFO.email}`} className="hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {USER_INFO.email}
              </a>
              <span>⋄</span>
              <a href={USER_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />
                GitHub ({USER_INFO.github.replace('https://github.com/', '')})
              </a>
              <span>⋄</span>
              <a href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Objective
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              Artificial Intelligence and Data Science student with strong interests in Artificial Intelligence, Machine Learning and Generative AI. Building AI-powered applications that solve real-world problems. Seeking AI/ML job opportunities to enhance technical skills and contribute to innovative real world projects.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Education
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs text-slate-900">
                <span>Bachelor of Engineering (AI-DS)</span>
                <span>2024 - 2028</span>
              </div>
              <p className="text-xs text-slate-800">
                Dr. D. Y. Patil College of Engineering and Innovation, Varale, Talegaon. (Savitribai Phule Pune University)
              </p>
              <p className="text-xs font-bold text-blue-800">
                CGPA : 8.75 / 10
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Technical Skills
            </h2>

            <div className="text-xs text-slate-800 space-y-1">
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 sm:col-span-2 font-bold text-slate-900">Programming</span>
                <span className="col-span-9 sm:col-span-10">Python, C++, SQL</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 sm:col-span-2 font-bold text-slate-900">AI / ML</span>
                <span className="col-span-9 sm:col-span-10">Machine Learning, Deep Learning, Pandas, NumPy, Scikit-learn, Generative AI</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 sm:col-span-2 font-bold text-slate-900">Database</span>
                <span className="col-span-9 sm:col-span-10">MySQL, MongoDB</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 sm:col-span-2 font-bold text-slate-900">Tools</span>
                <span className="col-span-9 sm:col-span-10">Git, GitHub, VS Code, Figma, Overleaf</span>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <span className="col-span-3 sm:col-span-2 font-bold text-slate-900">Soft Skills</span>
                <span className="col-span-9 sm:col-span-10">Leadership, Teamwork, Problem Solving, Communication, Time Management</span>
              </div>
            </div>
          </div>

          {/* Experience / Internships */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Experience & Internships
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs text-slate-900">
                <span>Machine Learning Intern — Flyrank</span>
                <span>2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Engineered machine learning models, predictive algorithms, and feature extraction pipelines.</li>
                <li>Collaborated on deploying intelligent AI logic into product features and data automation workflows.</li>
                <li><strong>Technologies:</strong> Python, Machine Learning, Scikit-learn, Pandas, NumPy, Data Pipelines.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-slate-900">
                Farmer Resource Platform — Agri Assist Crop Disease Identification
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Developed an AI-powered crop disease detection system using image processing and machine learning.</li>
                <li><strong>Technologies:</strong> Python, Machine Learning, Deep Learning.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-slate-900">
                Insight AI Mini Business Analysis Tool
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
                <li>Built an AI-powered business analysis platform for evaluating startup ideas.</li>
                <li><strong>Technologies:</strong> React, Node.js, Firebase, AI/ML.</li>
              </ul>
            </div>
          </div>

          {/* Publications & Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Publications & Certifications
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
              <li>
                <strong>Published Research Paper:</strong> "A Review on Mobile Cloud Computing in New Era" – Published in International Journal of Innovative Research in Technology (IJIRT, Paper ID: IJIRT184678).{' '}
                <a
                  href="https://ijirt.org/publishedpaper/IJIRT184678_PAPER.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-bold underline hover:text-blue-900"
                >
                  [View Published PDF]
                </a>
              </li>
              <li><strong>Data Analytics Certificate</strong> – Simplilearn</li>
            </ul>
          </div>

          {/* Research Interests */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Research Interests
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800">
              <li>Artificial Intelligence, Machine Learning, Generative AI</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Achievements
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-0.5">
              <li>Developed multiple AI-based projects focused on agriculture and business analytics.</li>
              <li>Strong interest in Artificial Intelligence and emerging technologies.</li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-0.5">
              Leadership
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
              <li>Worked effectively in teams during project development and technical competitions.</li>
              <li>
                <strong>Student Coordinator, BRAIN Student Chapter, DYPCOEI:</strong> Managed the planning and execution of technical initiatives, strengthening teamwork, communication, and event management skills.
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};
