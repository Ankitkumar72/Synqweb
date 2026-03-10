"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Stop managing apps. <br /> Start doing work.
            </h2>
            <p className="text-lg md:text-xl text-background/60 mb-12 max-w-lg mx-auto leading-relaxed">
              Join thousands of high-performers who have reclaimed their focus with Synq.
            </p>
            <button className="bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40">
              Join Synq for Free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
