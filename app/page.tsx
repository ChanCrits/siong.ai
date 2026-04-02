'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  MessageSquare, 
  Settings, 
  User, 
  Send, 
  Sparkles, 
  Menu, 
  X,
  Search,
  ChevronRight,
  History,
  LayoutDashboard,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SiongaIPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory] = useState([
    { id: 1, title: 'Quantum Computing Basics', date: 'Today' },
    { id: 2, title: 'React Performance Tips', date: 'Yesterday' },
    { id: 3, title: 'Next.js 15 Features', date: 'Yesterday' },
    { id: 4, title: 'Dark UI Design Trends', date: '2 days ago' },
  ]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-black text-slate-200 font-sans overflow-hidden">
      {/* Sidebar Overlay for Mobile */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isSidebarOpen ? '260px' : '0px',
          x: isSidebarOpen ? 0 : -260
        }}
        className={`fixed lg:relative z-30 flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* New Chat Button */}
          <button className="flex items-center gap-3 w-full p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all group mb-6">
            <Plus className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">New Chat</span>
          </button>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar">
            <div>
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <History className="w-3 h-3" />
                Recent
              </h3>
              <div className="space-y-1">
                {chatHistory.map((chat) => (
                  <button 
                    key={chat.id}
                    className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800/50 text-sm text-slate-300 hover:text-white transition-colors text-left group"
                  >
                    <MessageSquare className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                    <span className="truncate">{chat.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <LayoutDashboard className="w-3 h-3" />
                Workspace
              </h3>
              <div className="space-y-1">
                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800/50 text-sm text-slate-300 transition-colors">
                  <Search className="w-4 h-4 text-slate-500" />
                  <span>Search chats</span>
                </button>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="mt-auto pt-4 border-t border-slate-800/50">
            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-800/50 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center text-xs font-bold ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all">
                CE
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">Christian Earl</p>
                <p className="text-xs text-slate-500">Pro Plan</p>
              </div>
              <Settings className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative bg-gradient-to-b from-[#0a1128] via-black to-black overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                SIONGAI
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              GPT-4o Model
            </div>
            <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors text-slate-400 hover:text-white">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-8 lg:px-0 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Hero Section (Initial State) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 py-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-sm text-blue-400 mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Introducing SIONGAI 2.0</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                How can I help you <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 bg-clip-text text-transparent">today?</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                Experience the next generation of artificial intelligence. 
                SIONGAI is here to help you create, learn, and build.
              </p>
            </motion.div>

            {/* Suggestions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  icon: <Sparkles className="w-6 h-6 text-amber-400" />, 
                  title: 'Creative Writing', 
                  desc: 'Write a sci-fi story about Mars',
                  color: 'from-amber-500/20 to-transparent'
                },
                { 
                  icon: <ChevronRight className="w-6 h-6 text-blue-400" />, 
                  title: 'Coding Help', 
                  desc: 'Debug a React useEffect hook',
                  color: 'from-blue-500/20 to-transparent'
                },
                { 
                  icon: <MessageSquare className="w-6 h-6 text-emerald-400" />, 
                  title: 'Brainstorming', 
                  desc: 'Ideas for a new SaaS product',
                  color: 'from-emerald-500/20 to-transparent'
                },
                { 
                  icon: <User className="w-6 h-6 text-indigo-400" />, 
                  title: 'Learning', 
                  desc: 'Explain quantum physics simply',
                  color: 'from-indigo-500/20 to-transparent'
                },
              ].map((item, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative p-6 rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all text-left group overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all self-center" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 lg:p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="max-w-3xl mx-auto relative">
            <div className="relative flex items-center gap-2 p-1.5 rounded-[32px] bg-[#0f172a] border border-slate-800 focus-within:border-blue-500/50 transition-all shadow-2xl shadow-blue-500/10">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message SIONGAI..."
                className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-slate-200 placeholder-slate-500 resize-none py-2.5 px-5 max-h-40 min-h-[44px] text-sm leading-relaxed"
                rows={1}
              />
              <button 
                disabled={!inputValue.trim()}
                className={`p-2.5 rounded-full transition-all ${
                  inputValue.trim() 
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 scale-105 active:scale-95' 
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center mt-3 text-slate-600 uppercase tracking-widest font-medium">
              SIONGAI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </div>
  );
}
