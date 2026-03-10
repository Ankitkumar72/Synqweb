"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-16 tracking-[-0.05em] leading-[0.9] text-black"
          >
            Stop managing apps. <br /> Start doing work.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <button className="bg-black text-white px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Join 20k+ users on synq</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
