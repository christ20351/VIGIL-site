"use client";
import { useState, useEffect, useRef } from "react";
import { Monitor, Terminal } from "lucide-react";

const codes = {
  windows: [
    { type: "comment", text: "# Clone the repo" },
    { type: "cmd", text: "git clone https://github.com/christ20351/VIGIL.git" },
    { type: "cmd", text: "cd VIGIL" },
    { type: "empty" },
    { type: "comment", text: "# Run the installer" },
    { type: "cmd", text: "install.bat" },
    { type: "empty" },
    { type: "comment", text: "# Or start manually" },
    { type: "cmd", text: "cd server && python server.py" },
  ],
  linux: [
    { type: "comment", text: "# Clone the repo" },
    { type: "cmd", text: "git clone https://github.com/christ20351/VIGIL.git" },
    { type: "cmd", text: "cd VIGIL" },
    { type: "empty" },
    { type: "comment", text: "# Run the installer" },
    { type: "cmd", text: "chmod +x install.sh && ./install.sh" },
    { type: "empty" },
    { type: "comment", text: "# Or start manually" },
    { type: "cmd", text: "cd server && python3 server.py" },
    { type: "cmd", text: "cd agent  && sudo python3 agent.py" },
  ],
};

export default function QuickStart() {
  const [os, setOs] = useState<"windows" | "linux">("windows");
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
      id="quickstart"
      ref={ref}
      className="relative z-10 bg-[#0d1117] border-t border-[rgba(14,165,233,0.15)]
                        px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[#0ea5e9] uppercase mb-4">
            {/* // quick start */}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight mb-6">
            From zero
            <br />
            to monitoring.
          </h2>
          <p className="text-[#7a8fa8] font-light leading-relaxed">
            Everything you need to get VIGIL running from source in minutes.
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <div className="flex border-b border-[rgba(14,165,233,0.15)]">
            {(["windows", "linux"] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOs(o)}
                className={`font-mono text-[0.7rem] px-5 py-3 tracking-widest
                                  flex items-center gap-2 transition-all duration-200
                                  ${
                                    os === o
                                      ? "text-[#0ea5e9] border-b-2 border-[#0ea5e9] -mb-px"
                                      : "text-[#7a8fa8] hover:text-[#0ea5e9]"
                                  }`}
              >
                {o === "windows" ? (
                  <>
                    <Monitor size={12} /> Windows
                  </>
                ) : (
                  <>
                    <Terminal size={12} /> Linux / Mac
                  </>
                )}
              </button>
            ))}
          </div>

          <div
            className="bg-[#111820] border border-[rgba(14,165,233,0.15)] border-t-0 p-6
                          font-mono text-[0.7rem] md:text-[0.75rem] leading-loose overflow-x-auto"
          >
            {codes[os].map((line, i) => (
              <div key={i}>
                {line.type === "empty" && <br />}
                {line.type === "comment" && (
                  <span className="text-[#7a8fa8]">{line.text}</span>
                )}
                {line.type === "cmd" && (
                  <span className="text-[#0ea5e9]">{line.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 font-mono text-[0.65rem] text-[#7a8fa8]">
            Requires Python 3.11+ ·{" "}
            <a
              href="https://github.com/christ20351/VIGIL/blob/vigil-auth/INSTALL.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ea5e9] hover:underline"
            >
              Full install guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
