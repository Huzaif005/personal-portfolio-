export type PageType = 'home' | 'projects' | 'about' | 'resume' | 'blog' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'llm-agent' | 'ml' | 'cv' | 'web-ai';
  categoryLabel: string;
  shortDescription: string;
  problemStatement: string;
  solutionSummary: string;
  technologies: string[];
  keyFeatures: string[];
  whatILearned: string;
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  metrics?: string;
  demoType?: 'crop-disease' | 'startup-eval' | 'agent-loop' | 'green-ai' | 'portfolio';
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  experience: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  icon: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  category: 'education' | 'milestone' | 'project' | 'internship';
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  text: string;
  relationship: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
