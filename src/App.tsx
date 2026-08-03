import React, { useState } from 'react';
import { PageType, Project } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { AIChatDrawer } from './components/AIChatDrawer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SpaceEarthBackground } from './components/SpaceEarthBackground';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#09090b] lg:bg-[#020408] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 antialiased relative overflow-x-hidden">
        
        {/* Layer 1: Fixed Background Aura & Animated 3D Space Earth */}
        <div className="fixed inset-0 pointer-events-none z-0 aura-background-component" />
        <SpaceEarthBackground />

        {/* Ambient Top Glow Orbs */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-sky-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none z-0" />
        <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-blob" />
        <div className="fixed bottom-10 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0 animate-blob animation-delay-2000" />

        {/* Layer 2: Main Container (Floating Card on LG screens) */}
        <div className="relative z-20 max-w-[1400px] mx-auto my-0 lg:my-6 lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:shadow-2xl lg:shadow-black backdrop-blur-xl bg-[#020408]/95 flex flex-col min-h-screen lg:min-h-[calc(100vh-3rem)] overflow-hidden">

          {/* Layer 3: Grid Overlay Columns */}
          <div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 px-6 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full w-px bg-white/5 mx-auto" />
            ))}
          </div>

          {/* Scroll Progress Bar at Top */}
          <ScrollProgress />

          {/* Layer 4: Sticky Header Navbar */}
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

          {/* Layer 5: Main Content Area */}
          <main className="flex-1 relative z-10">
            {currentPage === 'home' && (
              <HomePage
                onNavigate={setCurrentPage}
                onOpenProjectModal={handleOpenProjectModal}
              />
            )}

            {currentPage === 'projects' && (
              <ProjectsPage onOpenProjectModal={handleOpenProjectModal} />
            )}

            {currentPage === 'about' && <AboutPage />}

            {currentPage === 'resume' && (
              <ResumePage onNavigateToContact={() => setCurrentPage('contact')} />
            )}

            {currentPage === 'blog' && <BlogPage />}

            {currentPage === 'contact' && <ContactPage />}
          </main>

          {/* Footer */}
          <Footer onNavigate={setCurrentPage} />

        </div>

        {/* Back To Top Floating Trigger */}
        <BackToTop />

        {/* Persistent AI Chat Assistant Drawer */}
        <AIChatDrawer />

        {/* Global Project Deep Dive Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseProjectModal}
        />

      </div>
    </ThemeProvider>
  );
}
