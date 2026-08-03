# 🚀 Huzefa Patel — AI-Powered Personal Portfolio & Arcane AI

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Huzefa_Patel-Personal_Portfolio-6366f1?style=for-the-badge&logo=react&logoColor=white)

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.21-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-v2.4_SDK-8E75B2?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**An ultra-modern, high-performance personal portfolio website featuring integrated Gemini AI assistance, glassmorphism UI aesthetics, interactive project showcases, live GitHub contribution metrics, and an interactive resume viewer.**

[Explore Arcane AI](#-arcane-ai-assistant) • [View Projects](#-featured-projects) • [Setup Guide](#%EF%B8%8F-getting-started) • [Tech Stack](#%EF%B8%8F-tech-stack--architecture)

---

</div>

## 📌 Table of Contents

- [✨ Key Features](#-key-features)
- [🤖 Arcane AI Assistant](#-arcane-ai-assistant)
- [🛠️ Tech Stack & Architecture](#%EF%B8%8F-tech-stack--architecture)
- [🌟 Featured Projects](#-featured-projects)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#%EF%B8%8F-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [🔌 API Documentation](#-api-documentation)
- [📜 Available Scripts](#-available-scripts)
- [👨‍💻 About the Author](#-about-the-author)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Key Features

- **🤖 Built-in Gemini AI Assistant ("Arcane AI")**: Interactive context-aware chatbot capable of answering questions about Huzefa's skills, experience, projects, and research papers using the `@google/genai` SDK.
- **🎨 Glassmorphic & Modern Dark UI**: Custom modern design with sleek gradients, dynamic particle backgrounds, hover micro-interactions, and ultra-fluid layout transitions powered by Motion (Framer Motion).
- **📂 Interactive Project Drawer & Detail Modals**: Deep-dive into technical architecture, features, live links, and GitHub repositories for key AI & Data Science projects.
- **📊 Live GitHub Contributions Visualizer**: Custom GitHub contribution activity panel showcasing open-source engagement.
- **📜 Integrated PDF Resume Viewer**: Embedded full-featured resume viewer with download and inline page navigation controls.
- **📝 Technical Blog & Research Section**: Integrated modal-based article reader featuring published research papers and technical writeups.
- **⚡ Hybrid Express + Vite Backend Server**: Unified full-stack node server executing both production API routes and Vite dev server middleware smoothly.

---

## 🤖 Arcane AI Assistant

The application features **Arcane AI**, a custom AI persona powered by Google's Gemini SDK (`@google/genai`).

> [!NOTE]
> Arcane AI is trained with complete context regarding Huzefa's academic records (8.75 CGPA at SPPU), project repositories (CaseNote, Farmer Resources, Agri Assist, Insight AI), and recent 2026 research publications.

```
                  +-------------------------+
                  |   User Input / Question |
                  +------------+------------+
                               |
                               v
                  +-------------------------+
                  |  POST /api/chat Server  |
                  +------------+------------+
                               |
                   +-----------+-----------+
                   |                       |
        [GEMINI_API_KEY Present]   [GEMINI_API_KEY Missing]
                   |                       |
                   v                       v
      +------------------------+  +-----------------------+
      | Google GenAI Gemini 2.4|  | Intelligent Fallback  |
      |   System Instructions  |  | Context Response Engine|
      +------------+-----------+  +-----------+-----------+
                   |                       |
                   +-----------+-----------+
                               |
                               v
                  +-------------------------+
                  |  Formatted Stream/JSON  |
                  |  to AIChatDrawer UI     |
                  +-------------------------+
```

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
- **Core Framework**: [React 19](https://react.dev/) & [TypeScript 5.8](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Glassmorphism Engine
- **Animations & Motion**: [Motion (Framer Motion 12)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

### **Backend & AI Engine**
- **Server Framework**: [Express 4.21](https://expressjs.com/)
- **Runtime & Execution**: [Node.js](https://nodejs.org/) with [TSX](https://github.com/privatenumber/tsx) & [esbuild](https://esbuild.github.io/)
- **AI SDK**: [@google/genai 2.4.0](https://www.npmjs.com/package/@google/genai) (Google Gemini API Integration)
- **Environment Management**: `dotenv`

---

## 🌟 Featured Projects

| Project | Category | Tech Stack | Highlights | Repository |
| :--- | :--- | :--- | :--- | :--- |
| **⚖️ CaseNote** | Legal AI / LLM Agent | Python, LangChain, GenAI, React | Intelligent legal brief analysis, key precedent extraction & structured case notes. | [GitHub](https://github.com/Huzaif005/CaseNote) |
| **🌾 Farmer Resources** | AgriTech Hub | Python, ML, Web AI | Government schemes, crop advisories & farmer support portal. | [GitHub](https://github.com/Huzaif005/farmer-resources-) |
| **🍃 Agri Assist** | Computer Vision AI | PyTorch, CNNs, OpenCV, Streamlit | Crop leaf disease identification with actionable organic/chemical remedies. | Private / Demo |
| **📊 Insight AI** | Business Intelligence | Python, Pandas, Scikit-learn, Plotly | Sales anomaly detection, KPI trend forecasting & interactive business dashboards. | Private / Demo |

---

## 📁 Project Structure

```ascii
personal-portfolio/
├── 📁 assets/                     # Static media & document assets (Resume PDF, photos)
├── 📁 src/                        # React Frontend Source Code
│   ├── 📁 components/             # Reusable UI Components
│   │   ├── AIChatDrawer.tsx        # Gemini AI Assistant Interface
│   │   ├── Navbar.tsx              # Dynamic Glassmorphism Navigation Bar
│   │   ├── ProjectCard.tsx         # Interactive Project Showcase Cards
│   │   ├── ResumeViewer.tsx        # PDF Resume Viewer Component
│   │   ├── GitHubContributions.tsx # Live Contribution Graph Visualizer
│   │   └── SpaceEarthBackground.tsx# Dynamic Particle Canvas & Animations
│   ├── 📁 context/                # Global State Context Providers
│   ├── 📁 data/                   # Portfolio Data Models & Content Definitions
│   ├── 📁 pages/                  # Page Views (Home, About, Projects, Blog, Contact, Resume)
│   ├── 📁 utils/                  # Helper Utilities & API Service Client
│   ├── App.tsx                    # Main Application Component & Layout
│   ├── index.css                  # Global Tailwind CSS v4 Styles & Animations
│   └── main.tsx                   # React DOM Root Entry Point
├── .env.example                   # Environment Variables Template
├── index.html                     # HTML5 Entry File with SEO Meta Tags
├── package.json                   # Project Dependencies & NPM Scripts
├── server.ts                      # Express API Server + Gemini SDK + Vite Middleware
├── tsconfig.json                  # TypeScript Compiler Configuration
└── vite.config.ts                 # Vite Bundler Configuration
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Huzaif005/personal-portfolio-.git
   cd personal-portfolio-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory (or copy from `.env.example`):

```bash
cp .env.example .env
```

Define the following environment variables:

```env
# Server Port Configuration
PORT=3000

# Google Gemini API Key (Required for AI Chatbot functionality)
GEMINI_API_KEY=your_gemini_api_key_here
```

> [!TIP]
> You can obtain a free Gemini API key from [Google AI Studio](https://aistudio.google.com/). If no key is provided, the application will automatically fall back to built-in response heuristics.

### Running the Application

- **Development Mode** (Starts Express backend + Vite HMR server):
  ```bash
  npm run dev
  ```
  Open your browser and navigate to `http://localhost:3000`.

- **Production Build**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## 🔌 API Documentation

### **AI Assistant Chat Endpoint**

- **URL**: `/api/chat`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`

#### Request Payload Body:
```json
{
  "prompt": "Tell me about Huzefa's legal AI project CaseNote."
}
```

#### Success Response (`200 OK`):
```json
{
  "text": "CaseNote is an intelligent legal case note-taking and document analysis assistant powered by LLMs, Python, and LangChain. It automates legal document ingestion, key point extraction, precedent analysis, and structured case note organization."
}
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the full-stack server using `tsx server.ts` with Vite HMR integration |
| `npm run build` | Builds the Vite frontend and compiles `server.ts` into `dist/server.cjs` using `esbuild` |
| `npm run start` | Runs the bundled production server (`dist/server.cjs`) |
| `npm run preview` | Previews the Vite production build locally |
| `npm run lint` | Runs TypeScript type checking without emitting files (`tsc --noEmit`) |
| `npm run clean` | Removes build output files (`dist/`) |

---

## 👨‍💻 About the Author

<div align="center">

### **Huzefa Patel**
*B.E. Student in Artificial Intelligence & Data Science (2024–2028)*  
**Savitribai Phule Pune University (SPPU)** — *8.75 / 10 CGPA*

[![Email](https://img.shields.io/badge/Email-huzefpatel75%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:huzefpatel75@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Huzaif005-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Huzaif005)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Md_Huzaif_Patel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/md-huzaif-patel-046984357/)
[![Kaggle](https://img.shields.io/badge/Kaggle-Huzaif005-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://kaggle.com/Huzaif005)

</div>

### 🏅 Key Certifications & Publications (2026)
- 📄 **Research Paper (2026)**: *"A Review on Mobile Cloud Computing in New Era"* — Published in IJIRT (Paper ID: `IJIRT184678`).
- 🏢 **Data Analytics Job Simulation (2026)**: Deloitte (via Forage) — Business Intelligence, Forensic Analytics, & Data Visualization.
- 🎓 **Data Analytics Certification (2026)**: Simplilearn — Python, SQL, and Advanced Data Analytics.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Huzaif005/personal-portfolio-/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<div align="center">
  <sub>Built with ❤️ by Huzefa Patel</sub>
</div>
