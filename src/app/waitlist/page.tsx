"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { motion } from "framer-motion";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <section className="flex-grow flex justify-center items-center pt-32 pb-24 overflow-hidden gradient-bg relative">
        {/* Background Shapes */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>

        <div className="container relative z-10 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] text-foreground mb-6 leading-[0.95]">
              Be the first to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#7A9AFF] to-accent">
                experience Synq.
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-foreground/50 mb-12 leading-relaxed font-medium">
              Join the waitlist today and secure your spot for early access to the ultimate flow-state workspace.
            </p>
            
            <div className="max-w-lg mx-auto bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-black/[0.05] shadow-2xl shadow-black/[0.03]">
              <WaitlistForm buttonText="Get Early Access" className="w-full" />
              <p className="mt-8 text-[11px] font-bold text-black/30 uppercase tracking-widest">
                No spam. Just your launch invite.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
