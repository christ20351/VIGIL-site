"use client";
import { Download, Terminal, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center
                                   px-6 md:px-16 pt-28 pb-16 z-10 overflow-hidden"
    >
      {/* Tag */}
      <div
        className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em]
                      text-[#0ea5e9] uppercase border border-[rgba(14,165,233,0.2)] px-4 py-2
                      mb-8 animate-fade-up"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse-dot" />
       MVP v2.0 — now available
      </div>

      {/* Title */}
      <h1
        className="font-sans font-black text-[clamp(3rem,8vw,8rem)] leading-[0.9]
                     tracking-tight text-center mb-6 animate-fade-up [animation-delay:100ms]"
      >
        Monitor
        <br />
        <span className="text-[#0ea5e9]">Everything.</span>
      </h1>

      {/* Sub */}
      <p
        className="text-[clamp(0.9rem,2vw,1.2rem)] font-light text-[#7a8fa8] max-w-xl
                    leading-relaxed mb-10 text-center animate-fade-up [animation-delay:200ms]"
      >
        Real-time monitoring for your entire infrastructure.
        <br className="hidden md:block" />
        No cloud. No subscription. Just run it.
      </p>

      {/* Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-3 mb-14
                      animate-fade-up [animation-delay:300ms]"
      >
        <a
          href="#download"
          className="font-mono text-xs px-7 py-4 bg-[#0ea5e9] text-[#080c10] font-bold
                      flex items-center justify-center gap-2
                      hover:bg-[#0284c7] hover:-translate-y-0.5
                      hover:shadow-[0_8px_30px_rgba(14,165,233,0.3)] transition-all duration-200"
        >
          <Download size={14} />
          Download for Windows
        </a>
        <a
          href="#download"
          className="font-mono text-xs px-7 py-4 border border-white/15 text-[#e8f0f9]
                      flex items-center justify-center gap-2
                      hover:border-[#0ea5e9] hover:text-[#0ea5e9]
                      hover:-translate-y-0.5 transition-all duration-200"
        >
          <Terminal size={14} />
          Download for Linux
        </a>
      </div>

      {/* Video */}
      <div className="relative w-full max-w-4xl animate-fade-up [animation-delay:400ms]">
        {/* Glow behind video */}
        <div
          className="absolute -inset-4 bg-[#0ea5e9] opacity-5 blur-3xl rounded-full
                        pointer-events-none"
        />

        {/* Frame */}
        <div
          className="relative border border-[rgba(14,165,233,0.2)]
                        shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(14,165,233,0.07)]"
        >
          {/* Fake browser bar -->*/}
          <div
            className="flex items-center gap-2 bg-[#111820]
                          border-b border-[rgba(14,165,233,0.15)] px-4 py-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3d57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffab00]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />
            <span
              className="ml-4 font-mono text-[0.65rem] text-[#7a8fa8]
                             bg-[#080c10] px-4 py-1 flex-1 max-w-xs"
            >
              http://192.168.1.10:5000
            </span>
            <span
              className="ml-auto font-mono text-[0.55rem] text-[#0ea5e9]
                             flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse-dot" />
              LIVE
            </span>
          </div>

          {/* Video */}
          <video
            src="/vigil-video.mp4"
            className="w-full block"
            playsInline
            controls={false}
            controlsList="nodownload"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            autoPlay
            muted
            loop
          />
        </div>

        {/* Corner accents */}
        <svg
          className="absolute -top-2 -left-2 w-5 h-5 text-[#0ea5e9]"
          viewBox="0 0 20 20"
        >
          <path
            d="M0,12 L0,0 L12,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          className="absolute -top-2 -right-2 w-5 h-5 text-[#0ea5e9]"
          viewBox="0 0 20 20"
        >
          <path
            d="M8,0 L20,0 L20,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          className="absolute -bottom-2 -left-2 w-5 h-5 text-[#0ea5e9]"
          viewBox="0 0 20 20"
        >
          <path
            d="M0,8 L0,20 L12,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <svg
          className="absolute -bottom-2 -right-2 w-5 h-5 text-[#0ea5e9]"
          viewBox="0 0 20 20"
        >
          <path
            d="M8,20 L20,20 L20,8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Scroll hint */}
      <div
        className="mt-12 flex flex-col items-center gap-2 opacity-30
                      animate-fade-up [animation-delay:600ms]"
      >
        <span className="font-mono text-[0.6rem] tracking-widest text-[#7a8fa8]">
          SCROLL
        </span>
        <ArrowDown size={14} className="text-[#0ea5e9] animate-bounce" />
      </div>
    </section>
  );
}
