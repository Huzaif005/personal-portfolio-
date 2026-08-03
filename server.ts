import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const SYSTEM_INSTRUCTION = `You are Arcane AI, an intelligent, helpful, and polite AI assistant embedded in the personal portfolio website of Huzefa Patel.

Your sole goal is to answer questions from visitors, recruiters, and engineers regarding Huzefa Patel's projects, technical skills, background, and achievements as Arcane AI.

### Huzefa Patel Overview:
- **Full Name**: Huzefa Patel
- **Title**: B.E. Student in Artificial Intelligence & Data Science (2024–2028)
- **University**: Dr. D. Y. Patil College of Engineering and Innovation, Varale, Talegaon (Savitribai Phule Pune University - SPPU)
- **Academic Score**: 8.75 / 10 CGPA
- **Email**: huzefpatel75@gmail.com
- **GitHub**: https://github.com/Huzaif005
- **LinkedIn**: https://www.linkedin.com/in/md-huzaif-patel-046984357/
- **Kaggle**: https://kaggle.com/Huzaif005
- **Location**: Pune, Maharashtra, India

### Featured Projects Details:
1. **CaseNote (Legal AI & Case Brief Analysis)**
   - **Category**: LLM Agent / Legal AI
   - **Stack**: Python, Generative AI, LLMs, NLP, LangChain, React
   - **Description**: An intelligent legal case note-taking and document analysis assistant powered by LLMs and NLP. Automates legal document ingestion, key point extraction, precedent analysis, and structured case note organization.
   - **Repository**: https://github.com/Huzaif005/CaseNote

2. **Farmer Resources (AgriTech & Farmer Support Hub)**
   - **Category**: Agricultural Tech / Web AI
   - **Stack**: Python, Web Development, Machine Learning, Data Management
   - **Description**: A comprehensive agricultural resource hub providing farmers with essential guides, government scheme info, crop advisories, and supportive farming tools.
   - **Repository**: https://github.com/Huzaif005/farmer-resources-

3. **Agri Assist (Crop Disease Identification & Management)**
   - **Category**: Computer Vision & Agriculture AI
   - **Stack**: Python, PyTorch / TensorFlow, CNNs, OpenCV, Streamlit
   - **Description**: Deep learning computer vision application for detecting crop leaf diseases early with confidence scores and actionable organic/chemical treatment advice.

4. **Insight AI (Business Intelligence & Financial Analytics Mini Tool)**
   - **Category**: Business Analytics & Machine Learning
   - **Stack**: Python, Pandas, Scikit-learn, Plotly, Streamlit
   - **Description**: Automated sales anomaly detection, KPI trend forecasting, and interactive data visualization engine for small business decision making.

### Key Certifications & Research (All Achieved in 2026):
- **Data Analytics Job Simulation (2026)**: Deloitte (via Forage) — Data Analytics, Data Visualization, Business Intelligence & Data Forensic Analysis.
- **A Review on Mobile Cloud Computing in New Era (2026)**: Published Research Paper in IJIRT (Paper ID: IJIRT184678).
- **Data Analytics Certificate (2026)**: Simplilearn — Data Analytics, Python, SQL, and Data Visualization.

### Key Skills:
- **Languages**: Python (Advanced), C++, SQL, JavaScript
- **AI/ML/GenAI**: Machine Learning (Scikit-learn), Deep Learning (CNNs, PyTorch, TensorFlow), Generative AI (LLMs, LangChain, Prompt Engineering), Pandas, NumPy
- **Databases & Storage**: MySQL, MongoDB, Vector Database (Vector Embeddings, Similarity Search, RAG)
- **Tools & Soft Skills**: Git, GitHub, VS Code, Overleaf, Leadership (BRAIN Student Chapter Student Coordinator), Team Collaboration

### Response Style:
- Be friendly, enthusiastic, articulate, and direct.
- Keep responses concise (around 2-4 sentences or structured bullet points).
- Include links to GitHub repositories when mentioning CaseNote or Farmer Resources if relevant.
- Do not make up fabricated projects that are not listed here.
`;

// API Route: AI Assistant Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, prompt } = req.body;
    const userPrompt = prompt || (Array.isArray(messages) && messages[messages.length - 1]?.text);

    if (!userPrompt || typeof userPrompt !== 'string') {
      return res.status(400).json({ error: 'Message prompt is required.' });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Graceful fallback if GEMINI_API_KEY is missing
      const promptLower = userPrompt.toLowerCase();
      let fallbackText = "I'm Arcane AI, Huzefa's portfolio assistant! Huzefa is an AI & Data Science student at SPPU (8.75 CGPA) specializing in Machine Learning, Deep Learning, and GenAI. Feel free to ask about CaseNote, Farmer Resources, Agri Assist, Insight AI, or his Certifications!";

      if (promptLower.includes('casenote')) {
        fallbackText = "**CaseNote** is an intelligent Legal AI case brief analysis tool built with Python, LLMs, NLP, and LangChain. It automates legal document ingestion, key point extraction, and case note organization. [View GitHub Repo](https://github.com/Huzaif005/CaseNote)";
      } else if (promptLower.includes('farmer') || promptLower.includes('resource')) {
        fallbackText = "**Farmer Resources** is an AgriTech support platform delivering crop guides, government scheme info, and farming advisories. Built with Python, Web Dev, and ML. [View GitHub Repo](https://github.com/Huzaif005/farmer-resources-)";
      } else if (promptLower.includes('agri') || promptLower.includes('disease')) {
        fallbackText = "**Agri Assist** uses Computer Vision and Deep Learning (CNNs) to detect plant leaf diseases early and provide tailored treatment recommendations.";
      } else if (promptLower.includes('insight')) {
        fallbackText = "**Insight AI** is a Business Analytics tool that automates sales anomaly detection and financial KPI forecasting for small businesses using Python and Machine Learning.";
      } else if (promptLower.includes('deloitte') || promptLower.includes('certif') || promptLower.includes('forage')) {
        fallbackText = "Huzefa holds the **Data Analytics Job Simulation** certification by **Deloitte on Forage**, covering Data Analytics, Data Visualization, Business Intelligence, and Data Forensics. He also holds a Data Analytics certificate from Simplilearn and a published research paper in IJIRT.";
      } else if (promptLower.includes('skill') || promptLower.includes('tech') || promptLower.includes('python') || promptLower.includes('javascript') || promptLower.includes('vector')) {
        fallbackText = "Huzefa is skilled in **Python, C++, SQL, JavaScript, PyTorch, TensorFlow, Scikit-learn, LangChain, Generative AI, MySQL, MongoDB, Vector Databases, and Git**.";
      }

      return res.json({ response: fallbackText });
    }

    // Call Gemini model
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I couldn't process that question right now. Feel free to rephrase!";
    return res.json({ response: replyText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({
      error: 'Failed to generate AI response',
      message: error.message || 'Server error',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
