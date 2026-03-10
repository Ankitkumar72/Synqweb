"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = ["Figma", "Linear", "Notion", "Stripe", "Vercel"];

const SocialProof = () => {
  return (
    <section className="py-24 border-y border-foreground/5 bg-white">
      <div className="container">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 mb-16">
          Trusted by modern teams at
        </p>
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale saturate-0">
          {companies.map((company) => (
            <motion.span
              key={company}
              whileHover={{ opacity: 1, scale: 1.05, filter: "grayscale(0)" }}
              className="text-xl md:text-2xl font-black tracking-tighter cursor-default transition-all duration-300"
            >
              {company}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
