"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

type ChangeType = "section" | "improvement" | "fix";

type StructuredChange = {
  text: string;
  type?: ChangeType;
};

type ChangeEntry = string | StructuredChange;

type ChangelogUpdate = {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: ChangeEntry[];
  type: string;
};

export default function ChangelogPage() {
  const updates: ChangelogUpdate[] = [
    {
      version: "v1.8.0",
      date: "March 30, 2026",
      title: "Top App Quality: Premium Splash & Loading Experience",
      description: "A high-fidelity startup experience featuring an 'Alive' animated logo, smart data-fetching synchronization, and ultra-smooth UI transitions.",
      changes: [
        { text: "Visual Identity & Branding", type: "section" },
        { text: "Configured a solid white (#FFFFFF) native launch screen for a clean, zero-blink app startup", type: "improvement" },
        { text: "Re-engineered the logo with a smooth fade-in and a subtle 1.1x pulsing scale animation", type: "improvement" },

        { text: "Performance & Synchronization", type: "section" },
        { text: "Integrated 'Ready & Loaded' check to sync splash screen with background data fetching (Notes & Tasks)", type: "improvement" },
        { text: "Added a 400ms premium cross-fade transition between the splash and dashboard", type: "improvement" }
      ],
      type: "Major Update"
    },
    {
      version: "v1.7.0",
      date: "March 30, 2026",
      title: "Adaptive Edge-to-Edge UI & System Integration",
      description: "Full compatibility with Android 11+ edge-to-edge rendering and iOS safe areas, featuring a modernized floating navigation design and immersive editor experience.",
      changes: [
        { text: "Foundation & Core Logic", type: "section" },
        { text: "Enabled Edge-to-Edge mode allowing content to flow behind system bars", type: "improvement" },
        { text: "Configured global transparent status and navigation bars", type: "improvement" },
        { text: "Resolved 'SystemChrome' undefined name errors in core logic", type: "fix" },

        { text: "Android Native Optimization", type: "section" },
        { text: "Disabled navigation bar contrast for Android 11+ to prevent forced backgrounds", type: "fix" },
        { text: "Updated native window flags for full transparency and engine control", type: "improvement" },

        { text: "Navigation & Layout", type: "section" },
        { text: "Adaptive SafeArea integration for the custom bottom navigation bar", type: "improvement" },
        { text: "Redesigned navbar with a modern floating effect (64px height, 30px radius)", type: "improvement" },
        { text: "Optimized keyboard interactivity to maximize screen real estate during editing", type: "improvement" },

        { text: "Immersive Note Editor", type: "section" },
        { text: "Unified editor theme with global transparent navigation styles", type: "improvement" },
        { text: "Fixed system bar flickering during screen transitions", type: "fix" }
      ],
      type: "Major Update"
    },
    {
      version: "v1.6.0",
      date: "March 22, 2026",
      title: "Overdue Page Redesign & Priorities Update",
      description: "A comprehensive refresh of the Overdue Tasks page with a cleaner design, improved interaction, and streamlined task priorities defaulting to 'None'.",
      changes: [
        { text: "Priorities", type: "section" },
        { text: "Tasks now default to \"None\" priority (previously \"Medium\")", type: "improvement" },
        { text: "Migrated all existing \"Medium\" priority tasks to \"None\"", type: "improvement" },
        { text: "Hidden priority pill/ring on cards when priority is \"None\"", type: "improvement" },

        { text: "Overdue Page – Header", type: "section" },
        { text: "Centered the \"Overdue\" title", type: "improvement" },
        { text: "Replaced task counter badge with hamburger menu icon", type: "improvement" },
        { text: "Applied standard AppTheme colors (removed custom red theme)", type: "improvement" },
        { text: "Redesigned summary banner: removed border box, bold black text, replaced calendar icon with check_logo.png", type: "improvement" },

        { text: "Overdue Page – Task Cards", type: "section" },
        { text: "Reduced card height (tighter padding & margins)", type: "improvement" },
        { text: "Removed thick blue left border", type: "improvement" },
        { text: "Long task names/descriptions now truncate with ellipsis", type: "improvement" },
        { text: "Full card is now tappable, navigating to the \"View Task\" page", type: "improvement" },

        { text: "Overdue Page – Reschedule Button", type: "section" },
        { text: "Wired up button to a custom dark-themed date picker calendar popup", type: "improvement" },
        { text: "Fixed tap-through bug on transparent button background", type: "fix" },
        { text: "Rescheduling preserves the original task's time (only the date changes)", type: "improvement" }
      ],
      type: "Improvement"
    },
    {
      version: "v1.5.0",
      date: "March 21, 2026",
      title: "Unified Timeline Engine & Layout Optimizations",
      description: "A complete overhaul of the timeline's mathematical collision engine to automatically handle dense scheduling, alongside dynamic scrolling and responsive text wrapping.",
      changes: [
        { text: "Unified Layout Engine", type: "section" },
        { text: "Integrated tasks and events into a single mathematical collision engine to eliminate messy overlaps", type: "improvement" },
        { text: "Dynamically multiplied Task column width weight to 3.0x to command more screen space", type: "improvement" },

        { text: "Grid & Scroll Enhancements", type: "section" },
        { text: "Introduced a Bounded Inner Scroll allowing infinite tasks to sit in an isolated micro-scroll window confined to their hour block", type: "improvement" },
        { text: "Removed hidden minimum width constraints to restore a proportional edge-to-edge gap grid for heavily packed events", type: "fix" },

        { text: "Responsive Density Controls", type: "section" },
        { text: "Enforced dynamic width constraints on task chips based on screen real estate, preventing single long tasks from hoarding entire rows", type: "fix" },
        { text: "Optimized narrow events with reduced 2px padding and explicit maximum line constraints", type: "improvement" },
        { text: "Added a responsive LayoutBuilder that intelligently drops end times when columns shrink to avoid ugly text truncation", type: "improvement" }
      ],
      type: "Major Update"
    },
    {
      version: "v1.4.0",
      date: "March 18, 2026",
      title: "Advanced Timeline & Scheduling Control",
      description: "A major update to our daily timeline experience, introducing intelligent event stacking, precision drag & drop snapping, and specialized visual treatments for tasks vs. events.",
      changes: [
        { text: "Daily Timeline", type: "section" },
        { text: "Visually distinct tasks (chips) and events (full blocks) with dedicated completion states", type: "improvement" },
        { text: "Intelligent overlapping event layout with dynamic column-based stacking", type: "improvement" },
        { text: "Precision drag & drop snapping to timeline grid with elegant visual feedback", type: "improvement" },
        { text: "Refined hourly spacing and timing indicators for a perfectly balanced view", type: "improvement" },
        { text: "Quick-create via empty slot tapping with intelligent bottom sheet fast-actions", type: "improvement" },

        { text: "View Event Page", type: "section" },
        { text: "Optimized read-only event detail view for faster quick-glancing", type: "improvement" },
        { text: "Enhanced typography and layout spacing for long event descriptions", type: "improvement" },

        { text: "Bug Fixes", type: "section" },
        { text: "Resolved deep event scheduling logical inconsistencies to ensure rock-solid timing", type: "fix" },
        { text: "Fixed timezone offset calculation errors affecting overlapping events", type: "fix" }
      ],
      type: "Major Update"
    },
    {
      version: "v1.3.0",
      date: "March 16, 2026",
      title: "Calendar & Timeline Refinements",
      description: "Polished the core scheduling experience with a premium redesign and smarter UX across the app.",
      changes: [
        "Redesigned the New Event popup with a sleek dark theme and modern grouped layout",
        "Refined date picker with circular day shapes and improved current day indicator",
        "Replaced plain action buttons with solid pill-shaped primary buttons",
        "Added a current time indicator to the Daily Timeline view",
        "Upgraded the event creation flow with a more robust schedule selection component",
        "Fixed padding issues on the Profile page for a balanced layout",
        "Removed the redundant \"Clear Offline Data\" button from Profile"
      ],
      type: "Improvement"
    },
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
        <div className="container mx-auto">
          <header className="mb-24 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FAFAFA] hover:bg-gray-100 text-base font-semibold text-black rounded-full border border-gray-200/80 transition-colors"
              >
                Follow us on X
              </a>
            </motion.div>
          </header>

          <div className="max-w-5xl mx-auto space-y-32 relative">
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
                      {update.changes.map((change: ChangeEntry, i: number) => {
                        const isString = typeof change === "string";
                        const text = isString ? change : change.text;
                        const type = isString ? "improvement" : change.type || "improvement";

                        if (type === "section") {
                          return (
                            <li key={i} className={`pt-2 pb-1 ${i === 0 ? "" : "mt-2"}`}>
                              <h3 className="text-xl font-black text-black tracking-tight">{text}</h3>
                            </li>
                          );
                        }

                        const dotColor = type === "fix" ? "bg-[#FF5A5A]" : "bg-[#537DF9]";

                        return (
                          <li key={i} className="flex gap-5 text-gray-900 group">
                            <div className={`mt-2 w-2 h-2 rounded-full ${dotColor} flex-shrink-0 group-hover:scale-150 transition-transform duration-300`} />
                            <span className="text-base md:text-lg font-semibold leading-snug">{text}</span>
                          </li>
                        );
                      })}
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
