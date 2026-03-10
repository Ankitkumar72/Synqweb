"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

const WeeklyPlanning = () => {
  const days = [
    { name: "MON", date: "09", tasks: [true, false, false], active: false },
    { name: "TUE", date: "10", tasks: [true, true, false], active: true },
    { name: "WED", date: "11", tasks: [false, false, false], active: false },
  ];

  return (
    <section className="py-24 bg-[#F9FAFF] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm border border-primary/5">
              <Calendar size={24} strokeWidth={2.5} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black tracking-[-0.04em] text-black mb-8 leading-[1.1]">
              Plan Your Week.<br />
              Protect Your Time.
            </h2>
            
            <p className="text-xl text-foreground/50 mb-10 leading-relaxed font-medium max-w-lg">
              Visual timeboxing designed for deep work. Drag and drop tasks onto your calendar to clearly see where your energy goes. Stop guessing, start performing.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-black text-black text-lg">Seamless 2-way Sync</h4>
                  <p className="text-foreground/40 font-medium">Google, Outlook, and Apple Calendar.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-black text-black text-lg">Smart Buffer Times</h4>
                  <p className="text-foreground/40 font-medium">Auto-schedule breaks between intense sessions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: UI Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative Background Layers */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl -z-10"></div>
            <div className="absolute top-10 -right-10 w-full h-full bg-white/50 border border-black/[0.03] rounded-[2.5rem] -z-10"></div>
            
            <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-black/[0.04] p-8 md:p-10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Current Roadmap</div>
                  <h3 className="text-2xl font-black text-black tracking-tight">Weekly Planner</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-black/20 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {days.map((day, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className={`text-center p-4 rounded-3xl transition-all duration-500 ${day.active ? 'bg-primary shadow-xl shadow-primary/25 scale-105' : 'bg-foreground/[0.02]'}`}>
                      <div className={`text-[10px] font-black mb-1 ${day.active ? 'text-white/60' : 'text-foreground/30'}`}>{day.name}</div>
                      <div className={`text-xl font-black ${day.active ? 'text-white' : 'text-black'}`}>{day.date}</div>
                    </div>
                    
                    <div className="space-y-3">
                      {day.tasks.map((filled, tIdx) => (
                        <div 
                          key={tIdx} 
                          className={`h-16 md:h-20 rounded-2xl border transition-all duration-500 ${
                            filled 
                              ? (day.active ? 'bg-primary/5 border-primary/20' : 'bg-foreground/[0.03] border-black/[0.03]') 
                              : 'bg-transparent border-dashed border-black/[0.05]'
                          }`}
                        >
                          {filled && (
                            <div className="p-3">
                              <div className={`w-1/2 h-1.5 rounded-full mb-2 ${day.active ? 'bg-primary/40' : 'bg-black/10'}`}></div>
                              <div className={`w-3/4 h-1.5 rounded-full ${day.active ? 'bg-primary/20' : 'bg-black/5'}`}></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Float Overlay Indicator */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="bg-white/90 backdrop-blur-md border border-primary/20 shadow-2xl px-6 py-3 rounded-full flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Syncing</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlanning;
