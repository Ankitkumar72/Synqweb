"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Timer, TrendingUp, Plus, Flag, MessageSquareText } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  visual: React.ReactNode;
  reverse?: boolean;
}

const FeatureCard = ({ 
  title, 
  description, 
  highlights, 
  icon: Icon, 
  visual, 
  reverse = false 
}: FeatureCardProps) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 py-24`}>
    <motion.div
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex-1 space-y-8"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
        <Icon size={28} />
      </div>
      <div className="space-y-4">
        <h3 className="text-4xl font-bold tracking-tight text-foreground">{title}</h3>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-md">{description}</p>
      </div>
      <ul className="space-y-4">
        {highlights.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-foreground/70">
            <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent">
              <TrendingUp size={12} />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex-1 w-full"
    >
      {visual}
    </motion.div>
  </div>
);
const WeeklyRoadmapPreview = () => {
  return (
    <div className="relative p-8 md:p-12 glass rounded-[2.5rem] premium-shadow border border-foreground/[0.03] bg-gradient-to-br from-white to-primary/5 overflow-hidden min-h-[480px] flex items-center justify-center">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] -z-10"></div>

      <div className="relative w-full max-w-sm space-y-6">
        {/* Weekly Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-black/[0.03] space-y-4"
        >
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#EEEFFF] rounded-xl flex items-center justify-center text-primary">
               <Flag size={18} fill="currentColor" />
             </div>
             <span className="text-sm font-bold text-black/40 uppercase tracking-widest">Weekly Focus</span>
          </div>
          <div className="space-y-1">
             <h4 className="text-xl font-black text-black">Creating the app payment gateway</h4>
             <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-foreground/5 text-[10px] font-black text-black/40 rounded-full uppercase tracking-tighter">High Priority</span>
                <span className="text-[10px] font-bold text-black/20">0/0 completed</span>
             </div>
          </div>
        </motion.div>

        {/* Schedule Task Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-5 rounded-[2rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-primary/10 flex items-center justify-between group hover:border-primary/30 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary/10 flex items-center justify-center text-xs font-black text-black">
               <div className="text-center">
                 <div className="text-[8px] uppercase opacity-40">Tue</div>
                 <div className="leading-none mt-0.5">10</div>
               </div>
            </div>
            <div>
              <h5 className="text-sm font-bold text-black">Free Day</h5>
              <p className="text-[10px] text-black/40 font-medium italic">No tasks scheduled</p>
            </div>
          </div>
          <button className="px-5 py-1.5 bg-[#EEEFFF] text-primary text-[10px] font-black rounded-full uppercase transition-all group-hover:bg-primary group-hover:text-white">
            Plan
          </button>
        </motion.div>

        {/* Floating Note Component */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -bottom-4 -right-8 md:-right-12 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-black/[0.03] max-w-[240px] hidden md:block"
        >
          <div className="flex items-center gap-2 mb-3">
             <MessageSquareText size={16} className="text-accent" />
             <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Pro Tip</span>
          </div>
          <p className="text-xs font-semibold text-black leading-relaxed">
            <span className="text-accent">Deep Work:</span> Use notes to capture ideas that don&apos;t need a &quot;Done&quot; button.
          </p>
        </motion.div>

        {/* Calendar Navigation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 px-6 py-2 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl flex items-center gap-3"
        >
          <span>Mar 9 - Mar 15</span>
          <Plus size={12} className="text-primary" />
        </motion.div>
      </div>
    </div>
  );
};

const AnimatedTimer = () => {
  const [minutes, setMinutes] = React.useState(25);
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          setMinutes((m) => (m === 0 ? 25 : m - 1));
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-square md:aspect-video flex items-center justify-center bg-black rounded-[2.5rem] overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-50"></div>
      <div className="relative z-10 text-center scale-75 md:scale-100">
        <div className="w-56 h-56 rounded-full bg-[#050505] flex items-center justify-center relative shadow-2xl ring-1 ring-white/10 overflow-hidden">
          {/* Inner Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl"></div>

          <div className="flex items-center gap-1 z-20">
            <span className="text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-lg">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-6xl font-black text-white/30 tracking-tighter drop-shadow-md">:</span>
            <span className="text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-lg">
              {String(seconds).padStart(2, "0")}
            </span>
          </div>
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background Track (Inside) */}
            <circle
              cx="112"
              cy="112"
              r="100"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="16"
              fill="transparent"
            />
            {/* Animated Progress (Inside) */}
            <motion.circle
              cx="112"
              cy="112"
              r="100"
              stroke="currentColor"
              strokeWidth="16"
              fill="transparent"
              className="text-accent stroke-accent"
              strokeDasharray="628"
              initial={{ strokeDashoffset: 628 }}
              animate={{ strokeDashoffset: 628 - (628 * (minutes * 60 + seconds)) / 1500 }}
              transition={{ duration: 1, ease: "linear" }}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      {/* Small floating UI inside the timer box */}
      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-8 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Active Flow</span>
        </div>
      </motion.div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="product" className="py-32 bg-white">
      <div className="container">
        {/* Feature 1 */}
        <FeatureCard
          title="Plan Your Week. Protect Your Time."
          description="Visual timeboxing designed for deep work. Drag tasks directly onto your calendar to clearly see where your energy goes. Stop guessing, start performing."
          highlights={["2-way calendar sync", "Smart buffer scheduling", "Multi-time zone support"]}
          icon={Calendar}
          visual={<WeeklyRoadmapPreview />}
        />

        {/* Feature 2 */}
        <FeatureCard
          reverse
          title="Zen Mode Focus"
          description="Enter distraction-free deep work sessions with built-in focus timers and progress tracking. Our focus mode handles notifications, ambient soundscapes, and tracks your flow quality in real-time."
          highlights={["4.8x productivity increase", "12 hours saved weekly", "Ambient sound library"]}
          icon={Timer}
          visual={<AnimatedTimer />}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
