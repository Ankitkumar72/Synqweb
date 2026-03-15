"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  buttonText = "Join the Waitlist",
  className = "",
  onSuccess
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list! 🎉");
        setEmail("");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto relative ${className}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-3 p-4 bg-green-50 text-green-700 rounded-[1.5rem] border border-green-200 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold text-sm tracking-tight">{message}</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Enter your email"
                disabled={status === "loading"}
                className="w-full px-6 py-4 lg:py-4 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm disabled:opacity-50 transition-all font-medium text-sm lg:text-base outline-none hover:border-black/20"
                style={{ WebkitAppearance: 'none' }}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative flex items-center justify-center gap-2 bg-primary text-white font-black px-8 py-4 lg:py-4 md:py-4 rounded-full hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100 whitespace-nowrap min-w-[160px]"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span className="text-sm tracking-tight">{buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -bottom-8 left-0 w-full flex items-center justify-center gap-1.5 text-red-500 text-xs font-semibold"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
