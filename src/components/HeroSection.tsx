"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Calendar, Plus, Flag, Search, Star, Folder, Droplets, TreePine, Waves, ChevronRight, MessageSquareText } from "lucide-react";

// Screen Components
const ScreenDailyTimeline = () => (
  <div className="flex flex-col h-full bg-white p-6 pt-10">
    <div className="flex justify-between items-center mb-8">
      <div className="text-3xl font-black tracking-tight text-black">Schedule</div>
      <div className="flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
      </div>
    </div>
    <div className="relative flex-1">
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[8px] font-black text-black/20 uppercase tracking-widest py-2">
        <span>09 AM</span>
        <span>11 AM</span>
        <span>01 PM</span>
        <span>03 PM</span>
      </div>
      <div className="ml-10 space-y-4 h-full relative">
        <div className="bg-primary rounded-[1.5rem] p-5 shadow-lg shadow-primary/20">
          <div className="text-sm font-black text-white mb-0.5">Deep Work</div>
          <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Focus Session</div>
        </div>
        <div className="bg-accent rounded-[1.5rem] p-5 shadow-lg shadow-accent/20">
          <div className="text-sm font-black text-white mb-0.5">Sprint Sync</div>
        </div>
        <div className="absolute top-[50%] -left-10 right-0 flex items-center gap-2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm"></div>
          <div className="flex-1 h-[1px] bg-red-500/30 border-t border-dashed border-red-500"></div>
        </div>
      </div>
    </div>
  </div>
);

const ScreenWeeklyPlanner = () => (
  <div className="flex flex-col h-full bg-[#FDFDFF] p-6 pt-10 overflow-hidden">
    <div className="flex justify-between items-center mb-6">
      <div className="text-2xl font-black tracking-tight text-black">Mar 9 – 15</div>
      <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
        <Calendar size={14} className="text-black/40" />
      </div>
    </div>
    <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-black/[0.03] mb-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#EEEFFF] rounded-xl flex items-center justify-center text-primary">
          <Flag size={14} fill="currentColor" />
        </div>
        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Weekly Focus</span>
      </div>
      <div>
        <h4 className="text-base font-black text-black leading-tight">Creating the app payment Gateway</h4>
        <div className="flex items-center justify-between mt-2">
          <span className="px-2 py-0.5 bg-foreground/5 text-[8px] font-black text-black/40 rounded-full">High Priority</span>
          <span className="text-[8px] font-bold text-black/20">0/0 completed</span>
        </div>
      </div>
    </div>
    <div className="space-y-3">
      {['MON 9', 'TUE 10', 'WED 11'].map((day, i) => (
        <div key={day} className={`p-4 rounded-2xl flex items-center justify-between border ${i === 2 ? 'bg-[#EEEFFF] border-primary/20' : 'bg-white border-black/[0.03]'}`}>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-black/40">{day}</span>
            <span className="text-xs font-bold text-black">Free Day</span>
          </div>
          <button className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase transition-colors ${i === 2 ? 'bg-primary text-white' : 'bg-[#EEEFFF] text-primary'}`}>Plan</button>
        </div>
      ))}
    </div>
  </div>
);

const ScreenDailyDashboard = () => (
  <div className="flex flex-col h-full bg-[#f8f9fc] p-6 pt-10">
    <div className="flex justify-between items-center mb-6">
      <div className="text-3xl font-black tracking-tight text-black italic">Synq.</div>
    </div>
    <div className="bg-black rounded-[2rem] p-6 mb-4 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Current Focus</span>
      </div>
      <h3 className="text-2xl font-black text-white mb-2 leading-none">Free Time</h3>
      <p className="text-[10px] text-white/40 font-medium leading-relaxed">No upcoming tasks. Good time to plan or rest.</p>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-white p-4 rounded-[1.5rem] border border-black/[0.03] shadow-sm">
        <span className="text-[8px] font-black text-black/20 uppercase tracking-widest block mb-2">Next</span>
        <div className="text-xl font-black text-primary/40 tracking-[-0.05em] mb-1">--:--</div>
        <div className="text-[9px] font-bold text-black">All Caught Up</div>
      </div>
      <div className="bg-[#111] p-4 rounded-[1.5rem] shadow-sm">
        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mb-2">
          <CheckCircle2 size={12} className="text-white/60" />
        </div>
        <div className="text-2xl font-black text-white tracking-tighter">0<span className="text-xs text-white/30 ml-1">of 0</span></div>
        <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Tasks</div>
      </div>
    </div>
    <div className="space-y-2">
      <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">Your Notes</span>
      <div className="bg-white p-3 rounded-xl border border-black/[0.03] flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
        <span className="text-xs font-bold text-black">Untitled</span>
      </div>
    </div>
  </div>
);

const ScreenNotesViewer = () => (
  <div className="flex flex-col h-full bg-white p-6 pt-10">
    <div className="flex justify-between items-center mb-10">
      <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Uncategorized</span>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-black/10"></div>
        <div className="w-1 h-1 rounded-full bg-black/10"></div>
        <div className="w-1 h-1 rounded-full bg-black/10"></div>
      </div>
    </div>
    <div className="space-y-6">
      <h2 className="text-3xl font-black text-black leading-tight">💡 Pro Tip: Deep Work</h2>
      <div className="space-y-4">
        <p className="text-sm text-black/80 leading-relaxed">This is a <span className="font-bold">Note</span>.</p>
        <p className="text-sm text-black/60 leading-relaxed font-medium">Notes are perfect for capturing ideas, snippets of code, or brainstorming sessions that don&apos;t need a &quot;Done&quot; button.</p>
        <p className="text-sm text-black/60 leading-relaxed font-medium">Use them for your research and reference material.</p>
      </div>
    </div>
  </div>
);

const ScreenFocusTimer = () => (
  <div className="flex flex-col h-full bg-white p-6 pt-10 items-center">
    <div className="px-4 py-1.5 bg-foreground/5 rounded-full mb-10 flex items-center gap-2">
       <span className="text-[10px] font-black text-black/30 uppercase tracking-widest leading-none">No Active Task</span>
    </div>
    <h2 className="text-4xl font-black text-black mb-12">Free Time</h2>
    <div className="w-56 h-56 rounded-full border border-black/[0.05] flex items-center justify-center relative mb-12">
      <div className="text-5xl font-black text-black tracking-tighter tabular-nums">20:50:19</div>
      {/* Visual ring placeholder */}
      <div className="absolute inset-0 rounded-full border-t-2 border-primary/20 rotate-45"></div>
    </div>
    <div className="w-full space-y-4 mb-4">
       <div className="flex justify-between items-center px-1">
          <span className="text-[8px] font-black text-black/20 uppercase tracking-widest">Focus Quality</span>
          <div className="flex items-center gap-1.5 text-accent">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
             <span className="text-[8px] font-black uppercase">Live</span>
          </div>
       </div>
       <div className="h-10 w-full relative">
          <svg className="w-full h-full" viewBox="0 0 100 20">
             <path d="M0 10 Q 25 5, 50 15 T 100 10" fill="none" stroke="#63C7A9" strokeWidth="1" />
             <path d="M0 12 Q 25 8, 50 18 T 100 12" fill="none" stroke="#63C7A9" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
       </div>
    </div>
    <div className="grid grid-cols-3 gap-2 w-full mb-6">
       {[{icon: Droplets, label: 'Rainfall'}, {icon: TreePine, label: 'Forest'}, {icon: Waves, label: 'Ocean'}].map(s => (
         <div key={s.label} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#F8F9FC] border border-black/[0.03]">
            <s.icon size={14} className="text-black/40" />
            <span className="text-[8px] font-black text-black/40">{s.label}</span>
         </div>
       ))}
    </div>
    <button className="w-full py-4 bg-primary text-white font-black rounded-[1.5rem] shadow-lg shadow-primary/20 text-sm">End Session</button>
  </div>
);

const ScreenFolderManager = () => (
  <div className="flex flex-col h-full bg-[#FAFAFC] p-6 pt-10">
    <h1 className="text-3xl font-black text-black mb-8 text-center uppercase tracking-tighter">Folders</h1>
    <div className="relative mb-10 text-black/40">
       <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" />
       <div className="w-full bg-white border border-black/[0.05] rounded-2xl py-3.5 pl-10 pr-4 text-[10px] font-bold">Search folders, notes, tags...</div>
    </div>
    <div className="space-y-6">
       <div>
          <span className="text-[10px] font-black text-black/20 uppercase tracking-widest mb-4 block">All Folders</span>
          <div className="grid grid-cols-2 gap-3">
             {[{name: 'Projects', count: 1, color: '#A855F7', bg: '#FAF5FF'}, {name: 'Github', count: 0, color: '#22C55E', bg: '#F0FDF4'}].map(f => (
               <div key={f.name} className="bg-white p-3.5 rounded-[1.8rem] shadow-sm border border-black/[0.03] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                     <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: f.bg }}>
                        <Folder size={12} fill={f.color} stroke="none" />
                     </div>
                     <span className="text-xs font-bold text-black">{f.name}</span>
                  </div>
                  <span className="text-[9px] font-bold text-black/20 pr-1">{f.count}</span>
               </div>
             ))}
          </div>
       </div>

       <div className="space-y-4">
          <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block">Notes</span>
          <div className="bg-white p-4 rounded-[1.8rem] shadow-sm border border-black/[0.03] flex items-center gap-3">
             <div className="w-8 h-8 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                <MessageSquareText size={14} />
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-bold text-black">Sync Project Details</span>
                <span className="text-[9px] text-black/40 font-medium">Inside Projects</span>
             </div>
          </div>
       </div>

       <div className="border-2 border-dashed border-black/[0.05] py-4 px-5 rounded-[1.8rem] flex items-center gap-4 text-black/20 w-[48%] mt-2">
          <Plus size={18} />
          <span className="text-sm font-bold">New Folder</span>
       </div>
    </div>
  </div>
);

const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    <ScreenDailyTimeline key="s1" />,
    <ScreenWeeklyPlanner key="s2" />,
    <ScreenDailyDashboard key="s3" />,
    <ScreenNotesViewer key="s4" />,
    <ScreenFocusTimer key="s5" />,
    <ScreenFolderManager key="s6" />,
  ];

  return (
    <section className="relative pt-40 pb-24 overflow-hidden gradient-bg">

      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] text-foreground mb-8 leading-[0.95]">
            Master your day, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#7A9AFF] to-accent">
              in absolute flow.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/40 mb-12 leading-relaxed font-medium">
            Plan your week, sync your schedule, and enter deep work sessions
            with the productivity tool built for high-performance focus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <button className="w-full sm:w-auto bg-primary text-white font-black px-10 py-5 rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto bg-white border border-foreground/5 text-foreground font-black px-10 py-5 rounded-full hover:bg-foreground/5 transition-all shadow-sm">
              See how it works
            </button>
          </div>
        </motion.div>

        {/* Visual Mockup Area */}
        <div className="relative max-w-4xl mx-auto flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 60 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] 
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
            }}
            className="relative w-[300px] h-[620px] md:w-[340px] md:h-[700px] bg-black rounded-[3.5rem] p-3.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-white/10"
          >
            {/* Phone Content */}
            <div className="h-full w-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col relative">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute inset-0"
                >
                  {screens[currentScreen]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating UI cards */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden xl:flex absolute top-10 -left-64 md:-left-96 bg-[#333] p-5 rounded-[2rem] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.4)] items-center gap-4 z-20 min-w-[260px] border border-white/10"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg">
                <Zap size={22} fill="currentColor" />
              </div>
              <div className="text-left font-black">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Focus Activated</div>
                <div className="text-sm text-white">Deep Work · 45m Session</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden xl:flex absolute bottom-10 -right-64 md:-right-96 bg-white p-5 rounded-[2rem] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.1)] items-center gap-4 z-20 min-w-[260px] border border-black/[0.03]"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <CheckCircle2 size={24} strokeWidth={3} />
              </div>
              <div className="text-left font-black">
                <div className="text-[10px] text-black/20 uppercase tracking-widest mb-0.5">Task Completed</div>
                <div className="text-sm text-black/80">Q4 Product Roadmap Sync</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
