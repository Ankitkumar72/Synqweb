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

              <div className="flex justify-between items-center mb-8 pt-8">
                <div className="text-3xl font-black tracking-tight text-black">Schedule</div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
                </div>
              </div>
              
              <div className="relative flex-1">
                {/* Time Markers */}
                <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[8px] font-black text-black/20 uppercase tracking-widest py-2">
                  <span>09 AM</span>
                  <span>11 AM</span>
                  <span>01 PM</span>
                  <span>03 PM</span>
                </div>

                <div className="ml-10 space-y-4 h-full relative">
                  {/* Focus Block */}
                  <div className="bg-primary rounded-[1.5rem] p-5 shadow-lg shadow-primary/20">
                    <div className="text-sm font-black text-white mb-0.5">Deep Work</div>
                    <div className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Focus Session</div>
                  </div>

                  {/* Sync Block */}
                  <div className="bg-accent rounded-[1.5rem] p-5 shadow-lg shadow-accent/20">
                    <div className="text-sm font-black text-white mb-0.5">Sprint Sync</div>
                  </div>

                  {/* Current Time Indicator */}
                  <div className="absolute -bottom-4 -left-10 right-0 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="flex-1 h-[1px] bg-red-500/30 border-t border-dashed border-red-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI cards */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-10 -left-64 md:-left-96 bg-[#333] p-5 rounded-[2rem] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.4)] flex items-center gap-4 z-20 min-w-[260px] border border-white/10"
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
              className="absolute bottom-10 -right-64 md:-right-96 bg-white p-5 rounded-[2rem] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 min-w-[260px] border border-black/[0.03]"
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
