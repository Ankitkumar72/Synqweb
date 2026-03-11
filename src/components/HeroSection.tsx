"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Calendar, Plus, Flag, Search, Star, Folder, Droplets, TreePine, Waves, ChevronRight, MessageSquareText } from "lucide-react";

const PremiumProductPreview = ({ currentStep }: { currentStep: number }) => {
  const ease = [0.16, 1, 0.3, 1] as any;

  return (
    <div className="relative h-full w-full bg-white overflow-hidden flex flex-col font-sans">
      {/* Background Layer - Subtle glows that change color */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: currentStep === 4 
            ? "radial-gradient(circle at center, rgba(83, 125, 249, 0.08) 0%, white 100%)" 
            : "white"
        }}
        transition={{ duration: 1, ease }}
      />

      {/* Header Layer */}
      <div className="relative z-20 p-6 pt-10">
        <div className="flex justify-between items-center mb-6 h-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease }}
              className="text-2xl font-black tracking-tight text-black"
            >
              {currentStep === 0 && "Schedule"}
              {currentStep === 1 && "Weekly"}
              {currentStep === 2 && <span className="italic">Synq.</span>}
              {currentStep === 3 && <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">Note</span>}
              {currentStep === 4 && "Focus"}
              {currentStep === 5 && "Folders"}
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="flex gap-1.5"
            animate={{ opacity: currentStep === 0 || currentStep === 4 ? 1 : 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
          </motion.div>
        </div>
      </div>

      <div className="relative flex-1 px-6 overflow-hidden">
        {/* State 0: Schedule / Timeline */}
        <AnimatePresence mode="popLayout">
          {currentStep === 0 && (
            <motion.div 
              key="schedule"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-x-6 top-0"
            >
               <div className="relative h-[400px]">
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[8px] font-black text-black/20 uppercase tracking-widest py-2">
                    <span>09 AM</span>
                    <span>11 AM</span>
                    <span>01 PM</span>
                    <span>03 PM</span>
                    <span>05 PM</span>
                    <span>07 PM</span>
                    <span>09 PM</span>
                  </div>
                  <div className="ml-10 space-y-3">
                    <motion.div 
                      layoutId="card-1"
                      className="bg-primary rounded-[1.8rem] p-5 shadow-lg shadow-primary/20"
                    >
                      <div className="text-sm font-black text-white">Deep Work</div>
                      <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Focus Session</div>
                    </motion.div>
                    <motion.div 
                      layoutId="card-2"
                      className="bg-accent rounded-[1.8rem] p-5 shadow-lg shadow-accent/20"
                    >
                      <div className="text-sm font-black text-white">Sprint Sync</div>
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease }}
                    className="absolute top-[42%] left-0 w-full flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                    <div className="flex-1 h-[1px] bg-red-500/30 border-t border-dashed border-red-500"></div>
                  </motion.div>
               </div>
            </motion.div>
          )}

          {/* State 1: Weekly Planner */}
          {currentStep === 1 && (
            <motion.div 
              key="weekly"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-x-6 top-0 space-y-4"
            >
               <motion.div 
                 layoutId="focus-hub"
                 className="bg-white p-5 rounded-[2rem] shadow-sm border border-black/[0.03] space-y-3"
               >
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                      <Flag size={14} fill="currentColor" />
                    </div>
                    <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Weekly Focus</span>
                 </div>
                 <h4 className="text-sm font-black text-black leading-tight">Sync Project Details</h4>
               </motion.div>
               <div className="space-y-2">
                 {[10, 11, 12].map((day, i) => (
                   <motion.div 
                     key={day}
                     initial={{ opacity: 0, y: 15 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
                     className={`p-4 rounded-2xl flex items-center justify-between border ${i === 1 ? 'bg-primary/5 border-primary/20' : 'bg-white border-black/[0.03]'}`}
                   >
                     <span className="text-[10px] font-black text-black/40 tracking-wider">MAR {day}</span>
                     <button className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase transition-all hover:scale-105 active:scale-95 ${i === 1 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-primary/5 text-primary'}`}>Plan</button>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          )}

          {/* State 2: Dashboard */}
          {currentStep === 2 && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-x-6 top-0"
            >
               <motion.div 
                 layoutId="focus-hub"
                 className="bg-black rounded-[2.5rem] p-6 mb-4 shadow-2xl shadow-black/20"
               >
                 <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Current Focus</span>
                 </div>
                 <h3 className="text-3xl font-black text-white mb-1 tracking-tight">Free Time</h3>
                 <p className="text-[9px] text-white/40 font-medium">Capture ideas until next sync.</p>
               </motion.div>
               <div className="grid grid-cols-2 gap-3">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease }}
                    className="bg-white p-5 rounded-[1.8rem] border border-black/[0.03] shadow-sm"
                  >
                    <div className="text-base font-black text-primary/40 tracking-[-0.05em] mb-1">--:--</div>
                    <div className="text-[8px] font-bold text-black uppercase opacity-20 tracking-widest">Upcoming</div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease }}
                    className="bg-[#111] p-5 rounded-[1.8rem] shadow-sm"
                  >
                    <div className="text-2xl font-black text-white">0<span className="text-[10px] text-white/30 ml-1">/ 5</span></div>
                    <div className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Tasks Done</div>
                  </motion.div>
               </div>
            </motion.div>
          )}

          {/* State 3: Notes */}
          {currentStep === 3 && (
            <motion.div 
              key="notes"
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-x-6 top-0 h-full"
            >
               <div className="space-y-8 pt-4">
                 <h2 className="text-3xl font-black text-black leading-tight italic tracking-tighter">💡 Deep Work <br/>Strategies</h2>
                 <div className="space-y-6">
                   <div className="relative pl-6">
                     <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-primary rounded-full" />
                     <p className="text-sm text-black/70 leading-relaxed font-semibold">"Flow is the result of single-tasking with zero external friction."</p>
                   </div>
                   <p className="text-sm text-black/40 leading-relaxed font-medium">Minimize context switching by batching similar small tasks into focus blocks.</p>
                 </div>
               </div>
            </motion.div>
          )}

          {/* State 4: Focus Timer */}
          {currentStep === 4 && (
            <motion.div 
              key="timer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1, ease }}
              className="absolute inset-x-6 top-0 flex flex-col items-center"
            >
               <div className="w-[13.5rem] h-[13.5rem] rounded-full border border-primary/5 flex items-center justify-center relative mb-12 group">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[-1px] rounded-full border-t-2 border-primary"
                 />
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1, ease }}
                   className="text-5xl font-black text-black tracking-tighter tabular-nums"
                 >
                   20:50
                 </motion.div>
               </div>
               <div className="w-full space-y-6">
                  <div className="h-10 w-full relative">
                     <svg className="w-full h-full" viewBox="0 0 100 20">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M0 10 Q 25 2, 50 15 T 100 10" 
                          fill="none" 
                          stroke="#63C7A9" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                        />
                     </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[Droplets, TreePine, Waves].map((Icon, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, ease }}
                        className="p-4 rounded-2xl bg-[#F8F9FC] border border-black/[0.03] flex justify-center hover:bg-white hover:shadow-md transition-all cursor-pointer"
                      >
                        <Icon size={16} className="text-black/30" />
                      </motion.div>
                    ))}
                  </div>
               </div>
            </motion.div>
          )}

          {/* State 5: Folders */}
          {currentStep === 5 && (
            <motion.div 
              key="folders"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-x-6 top-0"
            >
               <div className="relative mb-8 pt-2">
                  <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" />
                  <div className="w-full bg-foreground/[0.03] rounded-2xl py-3.5 pl-11 pr-4 text-[10px] font-bold text-black/20 tracking-tight">Quick Search</div>
               </div>
               <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{name: 'Projects', color: '#A855F7', bg: '#FAF5FF'}, {name: 'Github', color: '#6366F1', bg: '#F5F3FF'}].map((f, i) => (
                    <motion.div 
                      key={f.name}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5, ease }}
                      className="bg-white p-4 rounded-[1.8rem] shadow-sm border border-black/[0.02] flex items-center gap-3 active:scale-95 transition-transform"
                    >
                       <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: f.bg }}>
                          <Folder size={12} fill={f.color} stroke="none" />
                       </div>
                       <span className="text-[11px] font-black text-black tracking-tight">{f.name}</span>
                    </motion.div>
                  ))}
               </div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, duration: 0.6, ease }}
                 className="bg-white p-5 rounded-[1.8rem] border border-black/[0.03] flex items-center gap-4 hover:shadow-lg transition-shadow"
               >
                  <div className="w-9 h-9 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                     <MessageSquareText size={16} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs font-black text-black tracking-tight">Product Strategy v2</span>
                     <span className="text-[9px] text-black/30 font-bold uppercase tracking-widest">Active Draft</span>
                  </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation - Interactive feeling dots */}
      <div className="p-10 flex flex-col items-center gap-6">
        <div className="flex justify-center gap-2.5">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <motion.div 
              key={i}
              initial={false}
              animate={{ 
                width: i === currentStep ? 24 : 6,
                backgroundColor: i === currentStep ? "#537DF9" : "#E2E8F0"
              }}
              className="h-1.5 rounded-full transition-all duration-500 ease-[0.16, 1, 0.3, 1]"
            />
          ))}
        </div>
        
        {/* Progress Bar for the 4s cycle */}
        <div className="w-1/2 h-[2px] bg-foreground/[0.03] rounded-full overflow-hidden">
           <motion.div 
             key={currentStep}
             initial={{ x: "-100%" }}
             animate={{ x: "0%" }}
             transition={{ duration: 4, ease: "linear" }}
             className="h-full w-full bg-primary/20"
           />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 4000); // Slightly longer for the morph animations
    return () => clearInterval(timer);
  }, []);

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
            {/* Phone Enclosure Styling */}
            <div className="h-full w-full rounded-[2.8rem] overflow-hidden">
               <PremiumProductPreview currentStep={currentStep} />
               
               {/* Dynamic Island / Notch */}
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
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
