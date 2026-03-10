"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Timer, TrendingUp } from "lucide-react";

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
        <div className="w-56 h-56 rounded-full border-[10px] border-white/5 flex items-center justify-center relative shadow-[0_0_60px_-15px_rgba(99,199,169,0.4)]">
          <div className="flex items-center gap-1">
            <span className="text-6xl font-black text-white tracking-tighter tabular-nums">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-6xl font-black text-white/30 tracking-tighter">:</span>
            <span className="text-6xl font-black text-white tracking-tighter tabular-nums">
              {String(seconds).padStart(2, "0")}
            </span>
          </div>
          <svg className="absolute inset-0 w-full h-full -rotate-90 scale-[1.05]">
            <motion.circle
              cx="112"
              cy="112"
              r="101"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-accent stroke-accent"
              strokeDasharray="635"
              initial={{ strokeDashoffset: 635 }}
              animate={{ strokeDashoffset: 635 - (635 * (minutes * 60 + seconds)) / 1500 }}
              transition={{ duration: 1, ease: "linear" }}
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
          visual={
            <div className="relative p-10 glass rounded-[2.5rem] premium-shadow border border-foreground/[0.03] bg-gradient-to-br from-white to-primary/5">
              <div className="flex items-center justify-between mb-10">
                <div className="text-[10px] font-black opacity-20 tracking-[0.2em] uppercase">Weekly Roadmap</div>
                <div className="flex gap-2">
                   <div className="w-4 h-4 rounded-full bg-foreground/5"></div>
                   <div className="w-12 h-4 rounded-full bg-foreground/5"></div>
                </div>
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex-1 h-48 bg-primary/10 rounded-2xl animate-pulse"></div>
                <div className="flex-1 h-72 bg-primary/40 rounded-2xl shadow-lg shadow-primary/20"></div>
                <div className="flex-1 h-56 bg-primary/20 rounded-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          }
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
