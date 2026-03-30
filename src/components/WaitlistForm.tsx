"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Copy } from "lucide-react";

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
    } catch {
      setStatus("error");
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto relative ${className}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <WaitlistSuccessUI message={message} />
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

const WaitlistSuccessUI = ({ message }: { message: string }) => {
  const [copied, setCopied] = useState(false);
  const shareLink = "https://synqweb-five.vercel.app/";
  const shareText = `Just joined the waitlist for Synq — a focus app that actually gets deep work. Check it out →\n${shareLink}`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`, '_blank');
  };

  const shareOnDiscord = () => {
    window.open("https://discord.gg/BjVNVCk3", "_blank");
  };

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex items-center justify-center gap-2 mb-6 text-black">
        <CheckCircle2 className="w-6 h-6" />
        <span className="font-extrabold text-xl tracking-tight">{message}</span>
      </div>

      <div className="bg-transparent border border-black/10 p-6 rounded-[2rem] w-full text-left relative overflow-hidden">
        <h3 className="font-black text-lg text-black mb-1">Invite a focus buddy</h3>
        <p className="text-sm text-black/60 mb-5 font-medium leading-relaxed">
          Synq works better with an accountability partner. Invite someone you work or study with.
        </p>

        <div className="bg-black/5 rounded-2xl p-4 mb-5 border border-black/5">
          <p className="text-sm text-black/80 leading-relaxed font-medium">
            &ldquo;Just joined the waitlist for Synq &mdash; a focus app that actually gets deep work. Check it out &rarr;&rdquo;
            <br />
            <a href={shareLink} target="_blank" rel="noopener noreferrer" className="text-black font-bold mt-1 inline-block hover:underline">{shareLink}</a>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={shareOnX}
            type="button"
            aria-label="Share on X"
            title="Share on X"
            className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-black group-hover:fill-white transition-colors"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </button>
          
          <button
            onClick={shareOnLinkedIn}
            type="button"
            aria-label="Share on LinkedIn"
            title="Share on LinkedIn"
            className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <svg viewBox="0 0 24 24" className="w-[1.2rem] h-[1.2rem] fill-black group-hover:fill-white transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </button>
          
          <button
            onClick={shareOnWhatsApp}
            type="button"
            aria-label="Share on WhatsApp"
            title="Share on WhatsApp"
            className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black group-hover:fill-white transition-colors"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.471-1.761-1.643-2.061-.173-.298-.018-.46.13-.609.134-.135.297-.348.446-.521.151-.173.2-.296.298-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.013c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </button>

          <button
            onClick={shareOnDiscord}
            type="button"
            aria-label="Join Discord"
            title="Join Discord"
            className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-[#5865F2] hover:border-[#5865F2] hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <svg viewBox="0 0 24 24" className="w-[1.2rem] h-[1.2rem] fill-black group-hover:fill-white transition-colors"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.294a.073.073 0 0 1 .077-.01 13.525 13.525 0 0 0 8.216 0 .073.073 0 0 1 .077.01c.12.102.246.2.372.294a.077.077 0 0 1-.006.128 12.51 12.51 0 0 1-1.872.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" /></svg>
          </button>

          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy Link"
            className="group w-12 h-12 bg-white border border-black/5 rounded-full flex items-center justify-center hover:bg-gray-100 hover:border-gray-200 hover:scale-110 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
          >
            {copied ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5 text-black" />
            )}
            <span className={`absolute -top-8 px-2 py-1 bg-black text-white text-[10px] font-bold rounded pointer-events-none transition-opacity whitespace-nowrap ${copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
