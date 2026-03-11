"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = ["Figma", "Linear", "Notion", "Stripe", "Vercel"];

const SocialProof = () => {
  return (
    <section className="py-24 border-y border-foreground/5 bg-white">
      <div className="container">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 mb-16">
          TRUSTED BY TEAMS AT
        </p>
        <div className="grid grid-cols-6 md:flex md:flex-row md:justify-center items-center gap-y-10 md:gap-x-24 opacity-30 grayscale saturate-0 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <motion.span
              key={company}
              whileHover={{ opacity: 1, scale: 1.05, filter: "grayscale(0)" }}
              className={`text-[22px] md:text-[26px] font-black tracking-tighter cursor-default transition-all duration-300 text-center
                ${index < 3 ? "col-span-2" : index === 3 ? "col-start-2 col-span-2" : "col-span-2"}
                md:col-auto
              `}
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
