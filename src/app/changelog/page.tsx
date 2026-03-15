"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ChangelogPage() {
  const updates = [
    {
      version: "v1.2.0",
      date: "March 15, 2026",
      title: "Waitlist & Pre-launch Infrastructure",
      description: "Added a dedicated Waitlist page to streamline early access sign-ups and integrated a secure backend for capturing emails and delivering confirmations.",
      changes: [
        "Created a dedicated /waitlist page with a distraction-free, high-converting design",
        "Replaced generic \"Get Started\" and \"Log in\" buttons with focused \"Join Waitlist\" calls to action",
        "Integrated Supabase as the database for securely capturing and storing waitlist emails",
        "Implemented robust email deduplication to gracefully prevent double sign-ups",
        "Set up Nodemailer with Gmail SMTP to automatically send premium confirmation emails",
        "Added smooth animated states to the waitlist form for loading, success, and error scenarios"
      ],
      type: "New Feature"
    },
    {
      version: "v1.1.0",
      date: "March 14, 2026",
      title: "Creation Flow & UI Enhancements",
      description: "Focused on unifying the app's creation experience and enhancing overall UI/UX through premium interactions.",
      changes: [
        "Transitioned the Create Event flow into a consistent bottom-sheet interface",
        "Introduced navigation chips to seamlessly toggle between creating tasks, events, and locations",
        "Optimized keyboard-aware layouts with dynamic padding adjustments for text-heavy interactions",
        "Implemented smooth drag-to-close transitions and refined sheet animations",
        "Launched a new calendar selector widget for intuitive date picking",
        "Updated the daily timeline integration for faster access to creation flows"
      ],
      type: "Update"
    },
    {
      version: "v1.0.0",
      date: "March 13, 2026",
      title: "Initial Public Release",
      description: "We are excited to launch Synq! The ultimate flow-state workspace for modern knowledge workers. This initial version brings together all the essential tools for deep work and seamless collaboration.",
      changes: [
        "Smart Suggestion: AI-powered task prioritization that adapts to your workflow",
        "Weekly Focus: Set high-level goals and track your progress throughout the week",
        "Focus Streak: A gamified productivity system to keep you motivated",
        "Rainfall Mode: Immersive focus soundscapes with dynamic glassmorphism effects",
        "Unified Workspace: Seamless integration of notes, tasks, and calendar events"
      ],
      type: "New Release"
    },
    {
      version: "v0.9.5",
      date: "March 10, 2026",
      title: "Beta Refinements & UI Polish",
      description: "Before our public launch, we focused on polishing the user interface and optimizing performance across all devices.",
      changes: [
        "Refined Hero section layout for better visual balance",
        "Improved phone mockup content with real-time schedule view",
        "Enhanced floating UI elements positioning for a cleaner look",
        "Performance optimizations for faster loading across the platform"
      ],
      type: "Improvement"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#537DF9]/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#63C7A9]/5 blur-[120px]" />
      </div>

      <div className="flex-grow py-32 md:py-48 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-[48px] md:text-[72px] font-black tracking-tight text-black mb-6 leading-[1.1]">
                Change <span className="text-[#537DF9] italic">logs</span>
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed md:whitespace-nowrap">
                Stay updated with the latest improvements, new features, and fixes we&apos;ve added to Synq.
              </p>
            </motion.div>
          </header>

          <div className="space-y-32 relative">
            {updates.map((update, index) => (
              <motion.section 
                key={update.version}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 border-t border-gray-100 pt-16 md:pt-24 first:border-t-0 first:pt-0"
              >
                {/* Date Side */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-sm font-black text-[#537DF9] uppercase tracking-[0.2em]">
                      {update.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded uppercase tracking-widest self-start">
                    {update.version}
                    </span>
                    <span className="text-[10px] font-black border border-black/10 text-black/50 px-2 py-0.5 rounded uppercase tracking-widest self-start">
                    {update.type}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                      {update.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
                      {update.description}
                    </p>
                  </div>

                  <div className="glass p-8 md:p-10 rounded-[32px] premium-shadow">
                    <ul className="space-y-6">
                      {update.changes.map((change, i) => (
                        <li key={i} className="flex gap-5 text-gray-900 group">
                          <div className="mt-2 w-2 h-2 rounded-full bg-[#537DF9] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-base md:text-lg font-semibold leading-snug">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
