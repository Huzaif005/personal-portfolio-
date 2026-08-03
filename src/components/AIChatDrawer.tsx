import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, X, Send, RefreshCw, User, ChevronDown, ExternalLink, MessageSquareText } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';
import { ArcaneAIButton } from './ArcaneAIButton';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const PRESET_QUESTIONS = [
  '⚖️ Tell me about CaseNote Legal AI',
  '🌾 What is Farmer Resources?',
  '🪴 How does Agri Assist work?',
  '📈 What is Insight AI?',
  '🛠️ What are Huzefa\'s technical skills?',
];

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-1',
  sender: 'assistant',
  text: `Hi there! 👋 I'm **Arcane AI**, Huzefa's portfolio assistant. Ask me anything about Huzefa's AI & ML projects like **CaseNote**, **Farmer Resources**, **Agri Assist**, or his technical skill set!`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

export const AIChatDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem('portfolio_ai_chat_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load chat history', e);
    }
    return [INITIAL_WELCOME_MESSAGE];
  });

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save chat history to localStorage whenever messages change
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_ai_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.error('Failed to save chat history', e);
    }
  }, [messages]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Global event listener to open Arcane AI chat
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-arcane-ai', handleOpen);
    return () => window.removeEventListener('open-arcane-ai', handleOpen);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputPrompt).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query, messages: [...messages, userMessage] }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const assistantReply = data.response || "I couldn't process that response right now.";

      const botMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: assistantReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
      if (!isOpen) setHasUnread(true);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: "Sorry, I ran into a connection issue while fetching the response. Huzefa's projects include **CaseNote**, **Farmer Resources**, **Agri Assist**, and **Insight AI**!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([INITIAL_WELCOME_MESSAGE]);
    try {
      localStorage.removeItem('portfolio_ai_chat_history');
    } catch (e) {
      console.error(e);
    }
  };

  // Helper function to render text with basic markdown formatting (bold, links)
  const renderFormattedText = (content: string) => {
    // Regex matching markdown links [label](url) and **bold**
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    let parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match;

    // First replace links
    const contentWithLinksProcessed: React.ReactNode[] = [];
    let currentText = content;

    // Simple parser for bold **text** and markdown links
    const parseBoldAndLinks = (textSegment: string): React.ReactNode[] => {
      const nodes: React.ReactNode[] = [];
      // Split by markdown link pattern
      const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
      let lastIndex = 0;
      let m;

      while ((m = regex.exec(textSegment)) !== null) {
        if (m.index > lastIndex) {
          nodes.push(...parseBoldOnly(textSegment.substring(lastIndex, m.index)));
        }
        nodes.push(
          <a
            key={`link-${m.index}`}
            href={m[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 underline font-medium"
          >
            <span>{m[1]}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        );
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < textSegment.length) {
        nodes.push(...parseBoldOnly(textSegment.substring(lastIndex)));
      }

      return nodes;
    };

    const parseBoldOnly = (rawText: string): React.ReactNode[] => {
      const boldParts = rawText.split(/\*\*(.*?)\*\*/g);
      return boldParts.map((part, i) => {
        if (i % 2 === 1) {
          return <strong key={i} className="font-semibold text-sky-200">{part}</strong>;
        }
        return part;
      });
    };

    return parseBoldAndLinks(content);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pointer-events-auto">
        <ArcaneAIButton
          onClick={() => setIsOpen(!isOpen)}
          label={isOpen ? 'Close Arcane AI' : 'Arcane AI'}
          className="shadow-2xl shadow-sky-500/30 scale-105"
        />
      </div>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[530px] max-h-[calc(100vh-7rem)] flex flex-col rounded-2xl bg-slate-950/95 border border-sky-500/30 shadow-2xl shadow-sky-950/80 backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-sky-950/80 to-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md">
                  <img
                    src={USER_INFO.avatarUrl}
                    alt="AI Assistant Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-white tracking-wide">
                      Arcane AI
                    </h3>
                    <span className="px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 text-[9px] font-mono border border-sky-500/30">
                      Gemini 3.6
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Huzefa's Portfolio AI Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Reset Conversation"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body - Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-sky-600/30 border border-sky-500/40 flex items-center justify-center text-sky-400 flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-br-none shadow-md'
                        : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">
                      {renderFormattedText(msg.text)}
                    </div>
                    <span
                      className={`block text-[9px] mt-1 font-mono ${
                        msg.sender === 'user' ? 'text-sky-200 text-right' : 'text-slate-500 text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 justify-start items-center">
                  <div className="w-7 h-7 rounded-full bg-sky-600/30 border border-sky-500/40 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Preset Question Pills */}
            <div className="px-3 py-2 bg-slate-900/60 border-t border-slate-800/80 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-sky-900/50 text-slate-300 hover:text-sky-200 border border-slate-700/60 hover:border-sky-500/40 text-[10px] font-medium whitespace-nowrap transition-all cursor-pointer disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask about CaseNote, Agri Assist, skills..."
                disabled={isLoading}
                className="flex-1 bg-slate-900 text-slate-100 placeholder-slate-500 text-xs rounded-xl px-3.5 py-2.5 border border-slate-800 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputPrompt.trim() || isLoading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-40 disabled:hover:bg-sky-600 transition-all cursor-pointer flex-shrink-0 shadow-md shadow-sky-950"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
