"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock } from "lucide-react";

const HeroSection = () => {
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
          <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-10 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI-Driven Scheduling is here
          </div>
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
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[620px] md:w-[340px] md:h-[700px] bg-black rounded-[3.5rem] p-3.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-white/10"
          >
            {/* Phone Content */}
            <div className="h-full w-full bg-white rounded-[2.8rem] overflow-hidden flex flex-col p-8 text-left relative">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

              <div className="flex justify-between items-end mb-8 pt-8">
                <div className="text-2xl font-black tracking-tighter text-black">Tasks</div>
                <div className="text-[10px] font-black tracking-widest text-primary uppercase pb-1">Oct 12</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-[#F8F9FF] p-4 rounded-2xl flex items-center justify-between border border-primary/5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <div className="text-sm font-bold text-black/30 line-through">Review product brief</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-black/5 rounded-full"></div>
                    <div className="w-1 h-3 bg-black/5 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-black/[0.03] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-black/10"></div>
                    <div className="text-sm font-bold text-black/80">Sync with design team</div>
                  </div>
                  <div className="w-4 h-4 text-black/20">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
                        <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center justify-between border border-black/[0.03] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-black/10"></div>
                    <div className="text-sm font-bold text-black/80">Draft Q4 roadmap</div>
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-primary/5 border border-primary/10 text-[8px] font-black text-primary uppercase">High</div>
                </div>
              </div>

              <div className="mt-auto mb-4 p-4 rounded-2xl border-2 border-dashed border-black/[0.05] flex items-center justify-center gap-2">
                <div className="text-black/20 font-black text-lg">+</div>
                <div className="text-[10px] font-black text-black/30 uppercase tracking-widest">Add New Task</div>
              </div>
            </div>

            {/* Floating UI cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-20 -left-16 md:-left-32 bg-[#333] p-4 rounded-3xl shadow-2xl flex items-center gap-4 z-20 min-w-[220px] border border-white/10"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-black/20">
                <Zap size={22} fill="currentColor" />
              </div>
              <div className="text-left font-bold">
                <div className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Focus Activated</div>
                <div className="text-xs text-white">Deep Work · 45m Session</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-20 -right-16 md:-right-32 bg-white p-4 rounded-3xl shadow-2xl flex items-center gap-4 z-20 min-w-[220px] border border-black/[0.03]"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <div className="text-left font-bold">
                <div className="text-[10px] text-black/20 uppercase tracking-widest mb-0.5">Task Completed</div>
                <div className="text-xs text-black/80">Q4 Product Roadmap Sync</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
