import { Project, SkillCategory, Internship, Certification, TimelineItem, BlogPost, Testimonial } from '../types';
import { AVATAR_STICKER_DATA_URL } from './avatarDataUrl';
import { PROFESSIONAL_PORTRAIT_DATA_URL } from './profileImageDataUrl';

export const USER_INFO = {
  name: 'Huzefa Patel',
  preferredName: 'Huzefa Patel',
  title: 'Artificial Intelligence & Data Science Student',
  headline: "Hi, I'm Huzefa Patel.",
  subheadline: 'B.E. Student in AI & Data Science building AI-powered applications, machine learning systems, and generative AI solutions.',
  email: 'huzefpatel75@gmail.com',
  phone: '+91 9172749427',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/Huzaif005',
  linkedin: 'https://www.linkedin.com/in/md-huzaif-patel-046984357/',
  kaggle: 'https://kaggle.com/Huzaif005',
  twitter: 'https://x.com/Huzaif005',
  avatarUrl: PROFESSIONAL_PORTRAIT_DATA_URL,
  bioShort: 'Artificial Intelligence and Data Science student at Savitribai Phule Pune University with strong interest in Machine Learning, Deep Learning, and Generative AI. Building AI-powered applications that solve real-world problems.',
  bioLong: `Artificial Intelligence and Data Science student with strong interests in Artificial Intelligence, Machine Learning and Generative AI. Skilled in Python, C++, SQL, PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, MySQL, and MongoDB. Experienced in building end-to-end AI applications including Agri Assist Crop Disease Identification and Insight AI Mini Business Analysis Tool. Seeking AI/ML job and internship opportunities to enhance technical skills and contribute to innovative real world projects.`,
  careerObjective: 'Artificial Intelligence and Data Science student with strong interests in Artificial Intelligence, Machine Learning and Generative AI. Building AI-powered applications that solve real-world problems. Seeking AI/ML job opportunities to enhance technical skills and contribute to innovative real world projects.',
  education: {
    degree: 'Bachelor of Engineering in Artificial Intelligence & Data Science (AI-DS)',
    university: 'Dr. D. Y. Patil College of Engineering and Innovation, Varale, Talegaon (Savitribai Phule Pune University)',
    period: '2024 - 2028',
    gpa: '8.75 / 10 CGPA',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning & Deep Learning',
      'Generative AI',
      'Data Science & Analytics',
      'Database Systems (MySQL, MongoDB)',
      'Data Structures & Algorithms'
    ]
  },
  researchInterests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI'
  ],
  achievements: [
    'Developed multiple AI-based projects focused on agriculture and business analytics.',
    'Achieved 8.75 / 10 CGPA in Bachelor of Engineering (AI-DS) at Savitribai Phule Pune University.',
    'Student Coordinator, BRAIN Student Chapter, DYPCOEI.'
  ],
  leadership: [
    {
      role: 'Student Coordinator',
      organization: 'BRAIN Student Chapter, DYPCOEI',
      period: '2024 - Present',
      description: 'Managed the planning and execution of technical initiatives, workshops, and events, strengthening teamwork, communication, and event management skills.'
    },
    {
      role: 'Team Lead & Technical Collaborator',
      organization: 'Technical Competitions & Sprints',
      period: '2024 - Present',
      description: 'Worked effectively in cross-functional teams during project development sprints and technical competitions.'
    }
  ],
  stats: [
    { label: 'CGPA', value: '8.75/10' },
    { label: 'AI & ML Projects', value: '5+' },
    { label: 'Certifications', value: '1+' },
    { label: 'Degree Year', value: '2024-28' },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 92, experience: 'Active', description: 'Core programming language for ML, Deep Learning, and AI scripting.' },
      { name: 'C++', level: 82, experience: 'Active', description: 'Data structures, algorithm optimization, and object-oriented logic.' },
      { name: 'SQL', level: 85, experience: 'Active', description: 'Relational database queries, table joins, data extraction, and indexing.' },
      { name: 'JavaScript', level: 85, experience: 'Active', description: 'Dynamic web scripting, ES6+, frontend interactivity, and API integration.' }
    ]
  },
  {
    title: 'AI, Machine Learning & GenAI',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning & Scikit-learn', level: 90, experience: 'Active', description: 'Supervised & unsupervised learning, classification, regression, model evaluation.' },
      { name: 'Deep Learning & Neural Networks', level: 88, experience: 'Active', description: 'Convolutional neural networks, computer vision, image processing, model training.' },
      { name: 'Generative AI', level: 86, experience: 'Active', description: 'Prompt engineering, LLM integration, generative workflows.' },
      { name: 'Pandas & NumPy', level: 92, experience: 'Active', description: 'Data manipulation, vectorization, exploratory data analysis.' }
    ]
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 85, experience: 'Active', description: 'Structured query language, relational database design and maintenance.' },
      { name: 'MongoDB', level: 82, experience: 'Active', description: 'NoSQL document storage, JSON-like collections for AI applications.' },
      { name: 'Vector Database', level: 84, experience: 'Active', description: 'Vector embeddings, similarity search, ChromaDB/FAISS, and RAG retrieval systems.' }
    ]
  },
  {
    title: 'Tools & Soft Skills',
    iconName: 'Server',
    skills: [
      { name: 'Git & GitHub', level: 88, experience: 'Active', description: 'Version control, repository management, collaborative open-source workflows.' },
      { name: 'VS Code, Figma & Overleaf', level: 85, experience: 'Active', description: 'Development environment, UI wireframing, technical LaTeX documentation.' },
      { name: 'Leadership & Problem Solving', level: 92, experience: 'Active', description: 'Teamwork, communication, event management as BRAIN Student Chapter Coordinator.' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'casenote-ai',
    title: 'CaseNote',
    category: 'llm-agent',
    categoryLabel: 'Legal AI & Case Brief Analysis',
    shortDescription: 'An intelligent legal case note-taking and document analysis assistant powered by LLMs and Natural Language Processing.',
    problemStatement: 'Legal professionals and law students spend countless hours manually reading lengthy court rulings, legal briefs, and case files to extract key facts and summarize precedents.',
    solutionSummary: 'Engineered CaseNote, an AI-driven platform that automates legal document ingestion, key point extraction, precedent analysis, and structured case note organization.',
    technologies: ['Python', 'Generative AI', 'LLMs', 'NLP', 'LangChain', 'React'],
    keyFeatures: [
      'Automated legal document ingestion and key fact extraction',
      'AI-powered case brief summarization and precedent tagging',
      'Structured note-taking workspace with instant search & semantic indexing',
      'Distraction-free interface optimized for complex document analysis'
    ],
    whatILearned: 'Gained expertise in domain-specific text processing, prompt engineering for legal reasoning, building efficient NLP indexing pipelines, and designing intuitive web workflows.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/Huzaif005/CaseNote',
    liveDemoUrl: 'https://github.com/Huzaif005/CaseNote',
    featured: true,
    metrics: 'Legal AI Assistant'
  },
  {
    id: 'farmer-resources',
    title: 'Farmer Resources',
    category: 'web-ai',
    categoryLabel: 'Agricultural Tech & Farmer Support Platform',
    shortDescription: 'A comprehensive agricultural resource hub and support platform providing farmers with essential guides, scheme info, and farming tools.',
    problemStatement: 'Farmers often lack a centralized, easy-to-use platform to access critical agricultural guides, government scheme updates, and modern farming techniques.',
    solutionSummary: 'Engineered an accessible web platform providing structured agricultural knowledge, crop advisories, government scheme details, and supportive farming tools.',
    technologies: ['Python', 'Web Development', 'Machine Learning', 'Agricultural Tech', 'Data Management'],
    keyFeatures: [
      'Centralized resource hub for agricultural knowledge and farming advisories',
      'Structured catalog of farming tools, fertilizers, and crop guides',
      'User-friendly navigation optimized for quick access on mobile devices',
      'Integration with modern agricultural support workflows'
    ],
    whatILearned: 'Enhanced skills in domain-specific web platform design, agricultural data structuring, and creating accessible digital tools for farming communities.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/Huzaif005/farmer-resources-',
    liveDemoUrl: 'https://github.com/Huzaif005/farmer-resources-',
    featured: true,
    metrics: 'Agri Support Hub'
  },
  {
    id: 'ai-crop-disease',
    title: 'Agri Assist Crop Disease Identification',
    category: 'cv',
    categoryLabel: 'Farmer Resource Platform / Computer Vision',
    shortDescription: 'An AI-powered crop disease detection system using image processing and deep learning for identifying plant infections and advising farmers.',
    problemStatement: 'Farmers face significant yield loss due to delayed identification of fungal and bacterial plant leaf diseases.',
    solutionSummary: 'Developed a computer vision crop disease detection model using Python, deep learning image classification, and image processing techniques to classify diseased leaves and provide mitigation steps.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'OpenCV', 'PyTorch', 'Farmer Resource Platform'],
    keyFeatures: [
      'Automated crop disease detection using leaf image processing',
      'Deep learning classification model with high diagnostic accuracy',
      'Actionable treatment recommendations for agricultural yield protection',
      'Farmer-friendly resource platform integration'
    ],
    whatILearned: 'Hands-on experience in image preprocessing, dataset curation, deep neural network training for computer vision, and building practical agricultural AI tools.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/Huzaif005',
    liveDemoUrl: 'https://github.com/Huzaif005',
    featured: true,
    metrics: 'AI Crop Disease Detection',
    demoType: 'crop-disease'
  },
  {
    id: 'startup-eval-ai',
    title: 'Insight AI Mini Business Analysis Tool',
    category: 'llm-agent',
    categoryLabel: 'Generative AI & Business Analytics',
    shortDescription: 'An AI-powered business analysis platform for evaluating startup ideas, business viability, and financial feasibility.',
    problemStatement: 'Entrepreneurs and evaluators spend considerable time assessing startup ideas, business plans, and market viability manually.',
    solutionSummary: 'Built an interactive AI business evaluation platform utilizing React, Node.js, Firebase, and AI/ML models to generate automated business reports and feasibility scores.',
    technologies: ['React', 'Node.js', 'Firebase', 'AI/ML', 'Python'],
    keyFeatures: [
      'Built an AI-powered business analysis platform for evaluating startup ideas',
      'Automated risk assessment and business feasibility scoring',
      'Clean interactive web dashboard with Firebase backend integration',
      'Instant financial and competitive market summary generation'
    ],
    whatILearned: 'Mastered integrating AI logic into full-stack web architectures, handling user data in Firebase, and designing accessible UI dashboards for analytical insights.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/Huzaif005',
    liveDemoUrl: 'https://github.com/Huzaif005',
    featured: true,
    metrics: 'AI Business Evaluator',
    demoType: 'startup-eval'
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 'flyrank-ml-intern',
    role: 'Machine Learning Intern',
    company: 'Flyrank',
    location: 'Remote / Hybrid',
    period: '2025 - Present',
    type: 'Machine Learning Internship',
    description: 'Worked on machine learning model development, data optimization algorithms, and feature engineering pipelines.',
    achievements: [
      'Developed and optimized machine learning models for predictive analysis.',
      'Constructed efficient data processing and feature engineering workflows.',
      'Collaborated on deploying intelligent AI logic into active products.'
    ],
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Pipelines']
  },
  {
    id: 'brain-chapter',
    role: 'Student Coordinator',
    company: 'BRAIN Student Chapter, DYPCOEI',
    location: 'Pune, Maharashtra, India',
    period: '2024 - Present',
    type: 'Leadership & Student Coordination',
    description: 'Managed the planning and execution of technical initiatives, workshops, and AI competitions at Dr. D. Y. Patil College of Engineering and Innovation.',
    achievements: [
      'Managed planning and execution of campus technical initiatives and AI workshops.',
      'Strengthened team coordination, public communication, and event management skills.',
      'Led collaborative student hackathon teams and project development sprints.'
    ],
    technologies: ['Python', 'AI/ML', 'Leadership', 'Event Management', 'Public Speaking']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'deloitte-data-analytics-forage',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (via Forage)',
    issueDate: '2026',
    credentialId: 'FORAGE-DELOITTE-DA',
    verifyUrl: 'https://www.theforage.com',
    icon: 'Award',
    skills: ['Data Analytics', 'Data Visualization', 'Business Intelligence', 'Data Forensic & Analysis']
  },
  {
    id: 'ijirt-mobile-cloud-computing',
    title: 'A Review on Mobile Cloud Computing in New Era (Published Paper)',
    issuer: 'International Journal of Innovative Research in Technology (IJIRT) • Paper ID: IJIRT184678',
    issueDate: '2026',
    credentialId: 'IJIRT184678',
    verifyUrl: 'https://ijirt.org/publishedpaper/IJIRT184678_PAPER.pdf',
    icon: 'BookOpen',
    skills: ['Mobile Cloud Computing', 'Cloud Architecture', 'Research & Publication', 'Distributed Systems']
  },
  {
    id: 'simplilearn-data-analytics',
    title: 'Data Analytics Certificate',
    issuer: 'Simplilearn',
    issueDate: '2026',
    credentialId: 'SIMPLI-DA-2026',
    verifyUrl: 'https://www.simplilearn.com',
    icon: 'Award',
    skills: ['Data Analytics', 'Python', 'SQL', 'Data Visualization']
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'tl-1',
    year: '2024',
    title: 'B.E. Artificial Intelligence & Data Science Admission',
    category: 'education',
    subtitle: 'Dr. D. Y. Patil College of Engineering & Innovation',
    description: 'Enrolled in Bachelor of Engineering in AI-DS (Savitribai Phule Pune University). Maintained a high academic standing with CGPA 8.75 / 10.',
    highlights: ['CGPA: 8.75 / 10', 'Member of BRAIN Student Chapter']
  },
  {
    id: 'tl-2',
    year: '2024',
    title: 'Earned Data Analytics Certification',
    category: 'milestone',
    subtitle: 'Simplilearn',
    description: 'Completed comprehensive Data Analytics certification, mastering data processing, SQL, and analytical techniques.',
    highlights: ['Simplilearn Certification', 'Mastered Data Manipulation with Pandas & SQL']
  },
  {
    id: 'tl-3',
    year: '2025',
    title: 'Developed Agri Assist & Insight AI Tools',
    category: 'milestone',
    subtitle: 'AI & Full-Stack Projects',
    description: 'Engineered Agri Assist Crop Disease Identification using deep learning and Insight AI Business Analysis tool with React & Firebase.',
    highlights: ['Image processing for plant disease detection', 'AI business evaluation system']
  },
  {
    id: 'tl-4',
    year: '2025 - 2028',
    title: 'BRAIN Student Chapter Leadership & Future Growth',
    category: 'milestone',
    subtitle: 'Student Coordinator',
    description: 'Continuing leadership as Student Coordinator at DYPCOEI while actively seeking AI/ML engineering internships and research collaborations.',
    highlights: ['Student Coordinator for technical events', 'Seeking AI/ML Job & Internship Opportunities']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-crop-disease-ai',
    title: 'Building Agri Assist: Crop Disease Identification using Image Processing & Deep Learning',
    slug: 'building-agri-assist-crop-disease-ai',
    excerpt: 'How AI and computer vision can empower farmers by diagnosing plant leaf diseases instantly with deep learning classifiers.',
    date: '2025',
    readTime: '4 min read',
    category: 'Project Deep Dive',
    tags: ['Python', 'Deep Learning', 'Computer Vision', 'AgriTech'],
    coverImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000',
    content: `
### Agricultural AI: Diagnosing Plant Diseases with Deep Learning

Agriculture is the backbone of food security, but disease outbreaks can devastate crop yields. By applying Convolutional Neural Networks (CNNs) and image processing to leaf imagery, we can provide instant diagnostic assistance to farmers.

#### Key Engineering Components of Agri Assist:

1. **Dataset Preprocessing:** Normalizing leaf images, augmenting data for varying field lighting conditions, and segmenting disease spots.
2. **Deep Learning Classifier:** Utilizing convolutional feature extractors in Python (PyTorch/TensorFlow) to categorize leaf anomalies.
3. **Actionable Recommendations:** Mapping identified disease classes to practical treatment solutions.

This project demonstrates how artificial intelligence can solve practical real-world problems in agriculture.
`
  },
  {
    id: 'blog-insight-ai',
    title: 'Designing Insight AI: A Mini Business Analysis Tool Powered by Generative AI',
    slug: 'designing-insight-ai-business-analysis',
    excerpt: 'Combining React, Firebase, and AI models to help entrepreneurs evaluate startup ideas and market feasibility quickly.',
    date: '2025',
    readTime: '5 min read',
    category: 'Agentic Systems',
    tags: ['React', 'Node.js', 'Firebase', 'AI/ML', 'Business Analysis'],
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
    content: `
### Simplifying Business Idea Evaluation with AI

Evaluating startup concepts usually requires manual research on target markets, unit economics, and competitive landscapes. Insight AI automates this initial triage.

#### System Architecture:

- **Frontend:** Responsive React interface with interactive forms and financial risk visualizations.
- **Backend & Database:** Node.js server with Firebase storing evaluation logs and user input.
- **AI Engine:** Prompted AI models generating SWOT analyses and viability scores based on business parameters.

Building Insight AI deepened my experience in connecting full-stack web applications with Machine Learning backends.
`
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'DYPCOEI Faculty & Peers',
    role: 'BRAIN Student Chapter',
    organization: 'Dr. D. Y. Patil College of Engineering and Innovation',
    relationship: 'Academic & Leadership Collaboration',
    text: 'Huzefa demonstrates exceptional dedication to Artificial Intelligence and Machine Learning. As Student Coordinator, he effectively leads technical initiatives and builds impressive AI applications.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  }
];
