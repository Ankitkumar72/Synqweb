"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivers",
    role: "Product Designer @ Linear",
    quote: "Synq changed how I plan my workday. It's not about doing more — it's about doing what matters. The focus mode is a game changer.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Software Engineer @ Stripe",
    quote: "The visual timeboxing is so intuitive. I've tried every productivity app out there, and Synq is the first one that actually sticks.",
    avatar: "SC"
  },
  {
    name: "Marcus Thorne",
    role: "Founder @ Stealth Startup",
    quote: "Pure flow. That's the only way to describe using Synq. It removes all the friction from my schedule.",
    avatar: "MT"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="company" className="py-32 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-center mb-24 max-w-3xl mx-auto leading-tight">
          Built for modern creators.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass rounded-3xl hover:border-primary/20 transition-all group flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-lg font-medium text-foreground/80 mb-8 leading-relaxed flex-grow">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-bold text-foreground leading-none mb-1">{t.name}</div>
                  <div className="text-xs text-foreground/40 leading-none">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
