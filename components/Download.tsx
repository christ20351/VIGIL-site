"use client";
import { useState, useEffect, useRef } from "react";
import { Monitor, Bot, ExternalLink, Terminal } from "lucide-react";

function detectOS(): "windows" | "linux" {
  if (typeof window === "undefined") return "windows";
  const ua = navigator.userAgent;
  return ua.includes("Linux") && !ua.includes("Android") ? "linux" : "windows";
}

export default function Download() {
  const [os, setOs] = useState<"windows" | "linux">(detectOS);
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

  const files = {
    windows: {
      server: "vigil-server-windows.zip",
      agent: "vigil-agent-windows.zip",
    },
    linux: {
      server: "vigil-server-linux.tar.gz",
      agent: "vigil-agent-linux.tar.gz",
    },
  };

  return (
    <section
      id="download"
      ref={ref}
      className="relative z-10 px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12 md:mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[#0ea5e9] uppercase mb-4">
            {/* // download */}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight mb-4">
            Get VIGIL.
          </h2>
          <p className="text-[#7a8fa8] font-light">
            No Python required. Just download, extract and run.
          </p>
        </div>

        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100
                        flex flex-col items-center"
        >
          {/* OS Tabs */}
          <div className="flex border border-[rgba(14,165,233,0.2)] mb-10">
            {(["windows", "linux"] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOs(o)}
                className={`font-mono text-xs tracking-widest px-6 md:px-8 py-3
                                  flex items-center gap-2 transition-all duration-200
                                  ${
                                    os === o
                                      ? "bg-[#0ea5e9] text-[#080c10] font-bold"
                                      : "text-[#7a8fa8] hover:text-[#0ea5e9] hover:bg-[rgba(14,165,233,0.08)]"
                                  }`}
              >
                {o === "windows" ? (
                  <>
                    <Monitor size={13} /> Windows
                  </>
                ) : (
                  <>
                    <Terminal size={13} /> Linux
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px
                          bg-[rgba(14,165,233,0.15)] border border-[rgba(14,165,233,0.15)]
                          w-full max-w-2xl mb-8"
          >
            {[
              {
                icon: Monitor,
                title: "VIGIL SERVER",
                desc: "Central hub. Run once on your main machine.",
                key: "server" as const,
              },
              {
                icon: Bot,
                title: "VIGIL AGENT",
                desc: "Lightweight agent. Deploy on each machine to monitor.",
                key: "agent" as const,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="bg-[#0d1117] p-8 md:p-10 flex flex-col items-center gap-4 text-center"
                >
                  <Icon
                    size={36}
                    className="text-[#0ea5e9]"
                    strokeWidth={1.5}
                  />
                  <div className="font-mono text-sm font-bold tracking-widest">
                    {card.title}
                  </div>
                  <div className="text-sm text-[#7a8fa8] leading-relaxed font-light">
                    {card.desc}
                  </div>
                  <span className="font-mono text-[0.65rem] text-[#7a8fa8]">
                    {files[os][card.key]}
                  </span>
                  <a
                    href="https://github.com/christ20351/VIGIL/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono text-xs px-6 py-3 flex items-center gap-2
                                 hover:-translate-y-0.5 transition-all duration-200
                                 ${
                                   card.key === "server"
                                     ? "bg-[#0ea5e9] text-[#080c10] font-bold hover:bg-[#0284c7] hover:shadow-[0_8px_30px_rgba(14,165,233,0.3)]"
                                     : "border border-white/15 text-[#e8f0f9] hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                 }`}
                  >
                    <ExternalLink size={13} /> Download{" "}
                    {card.title.split(" ")[1]}
                  </a>
                </div>
              );
            })}
          </div>

          <a
            href="https://github.com/christ20351/VIGIL/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.7rem] text-[#7a8fa8] tracking-widest
                        flex items-center gap-2 hover:text-[#0ea5e9] transition-colors duration-200"
          >
            View all releases on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
