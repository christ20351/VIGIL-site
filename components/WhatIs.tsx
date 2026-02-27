"use client";
import { useEffect, useRef } from "react";

export default function WhatIs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.add("opacity-100", "translate-y-0"),
        ),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 bg-[#0d1117] border-y border-[rgba(14,165,233,0.15)]
                        px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[#0ea5e9] uppercase mb-4">
            {/* // what is vigil */}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight mb-6">
            Your infrastructure.
            <br />
            One dashboard.
          </h2>
          <p className="text-[#7a8fa8] font-light leading-relaxed mb-4">
            VIGIL is a self-hosted monitoring system that lets you watch CPU,
            RAM, disk, network, and processes across all your machines — from a
            single browser tab, in real time.
          </p>
          <p className="text-[#7a8fa8] font-light leading-relaxed">
            No cloud account. No data leaving your network. Just run the server
            on one machine and deploy the lightweight agent on everything else.
          </p>
        </div>

        {/* Architecture diagram */}
        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100
                        flex flex-col items-center font-mono"
        >
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            {[
              "AGENT\nPC / Server",
              null,
              "VIGIL SERVER\nCentral Hub",
              null,
              "AGENT\nPC / Server",
            ].map((item, i) => {
              if (item === null)
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1 text-[0.5rem] text-[#0ea5e9]"
                  >
                    <div className="w-6 md:w-8 h-px bg-[#0ea5e9]" />
                    <span>WS</span>
                    <div className="w-6 md:w-8 h-px bg-[#0ea5e9]" />
                  </div>
                );
              const lines = item.split("\n");
              const isCenter = lines[0].includes("VIGIL");
              return (
                <div
                  key={i}
                  className={`border px-3 md:px-4 py-3 text-center min-w-[90px] md:min-w-[110px]
                                 ${
                                   isCenter
                                     ? "border-[#0ea5e9] bg-[rgba(14,165,233,0.08)]"
                                     : "border-[rgba(14,165,233,0.2)] bg-[#111820]"
                                 }`}
                >
                  <span
                    className={`block text-[0.6rem] md:text-[0.65rem] tracking-wide mb-1
                                    ${isCenter ? "text-[#0ea5e9]" : "text-[#0ea5e9]"}`}
                  >
                    {lines[0]}
                  </span>
                  <span className="block text-[0.45rem] md:text-[0.5rem] text-[#7a8fa8]">
                    {lines[1]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gradient-to-b from-[#0ea5e9] to-transparent" />
            <div className="border border-[#0ea5e9] bg-[rgba(14,165,233,0.08)] px-4 md:px-6 py-3 text-center">
              <span className="block text-[0.7rem] md:text-[0.75rem] text-[#0ea5e9] tracking-wide">
                WEB DASHBOARD
              </span>
              <span className="block text-[0.45rem] md:text-[0.5rem] text-[#7a8fa8]">
                http://IP:5000
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
