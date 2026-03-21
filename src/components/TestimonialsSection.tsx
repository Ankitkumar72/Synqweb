"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Early/Beta user of Synq",
    quote: "Synq changed how I plan my workday. It's not about doing more — it's about doing what matters. The focus mode is a game changer.",
    avatar: "RS"
  },
  {
    name: "Priya Patel",
    role: "Early/Beta user of Synq",
    quote: "The visual timeboxing is so intuitive. I've tried every productivity app out there, and Synq is the first one that actually sticks.",
    avatar: "PP"
  },
  {
    name: "Aditya Desai",
    role: "Early/Beta user of Synq",
    quote: "Pure flow. That's the only way to describe using Synq. It removes all the friction from my schedule.",
    avatar: "AD"
  },
  {
    name: "Neha Gupta",
    role: "Early/Beta user of Synq",
    quote: "The best focus tool I've used in years. It minimalist, fast, and actually helps me enter a flow state in minutes.",
    avatar: "NG"
  },
  {
    name: "Karan Singh",
    role: "Early/Beta user of Synq",
    quote: "Synq bridges the gap between planning and execution. It's the only tool that lives in my workflow without being a distraction.",
    avatar: "KS"
  },
  {
    name: "Anjali Verma",
    role: "Early/Beta user of Synq",
    quote: "Beautiful interface and even better functionality. It's rare to find a tool that looks this good and works even better.",
    avatar: "AV"
  }
];

const TestimonialsSection = () => {
  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="company" className="py-32 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-24 max-w-3xl mx-auto leading-tight">
          Built for modern creators.
        </h2>
        
        <div className="relative overflow-hidden rounded-[2rem]">
          <div className="flex gap-8">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {duplicatedTestimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="w-[350px] md:w-[450px] p-8 glass rounded-3xl hover:border-primary/20 transition-all group flex flex-col shrink-0"
                >
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-lg font-medium text-foreground/80 mb-8 leading-relaxed whitespace-normal flex-grow">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-foreground/5">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-foreground leading-none mb-1">{t.name}</div>
                      <div className="text-xs text-foreground/40 leading-none">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient Fade Overlays - Now relative to the container */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
