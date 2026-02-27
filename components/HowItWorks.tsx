"use client";
import { useEffect, useRef } from "react";
import { Server, Bot, Globe } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Server,
    title: "Run the Server",
    desc: "Extract the archive and launch vigil-server.exe. A setup menu appears on first launch.",
    code: `> vigil-server.exe\n[ VIGIL ] First launch setup...\nHost [0.0.0.0] :\nPort [5000] :\n✓ Server started`,
  },
  {
    num: "02",
    icon: Bot,
    title: "Deploy the Agent",
    desc: "On each machine to monitor, run vigil-agent.exe and enter the server IP.",
    code: `> vigil-agent.exe\nServer IP [192.168.1.10] :\nPort [5000] :\n✓ Connected to server`,
  },
  {
    num: "03",
    icon: Globe,
    title: "Open the Dashboard",
    desc: "Navigate to http://SERVER_IP:5000 in any browser. All agents appear instantly.",
    code: `# open in browser\nhttp://192.168.1.10:5000\n\n✓ 4 agents online`,
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={ref}
      className="relative z-10 bg-[#0d1117] border-y border-[rgba(14,165,233,0.15)]
                        px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 md:mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[#0ea5e9] uppercase mb-4">
            {/* // how it works */}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight">
            Up and running
            <br />
            in 3 steps.
          </h2>
        </div>

        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100
                        grid grid-cols-1 md:grid-cols-3 gap-px
                        bg-[rgba(14,165,233,0.15)] border border-[rgba(14,165,233,0.15)]"
        >
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="bg-[#080c10] p-8 md:p-10">
                <span
                  className="block font-mono text-6xl font-bold
                                 text-[rgba(14,165,233,0.08)] leading-none mb-4"
                >
                  {s.num}
                </span>
                <Icon
                  size={22}
                  className="text-[#0ea5e9] mb-4"
                  strokeWidth={1.5}
                />
                <div className="font-bold text-lg mb-3">{s.title}</div>
                <div className="text-sm text-[#7a8fa8] leading-relaxed font-light mb-5">
                  {s.desc}
                </div>
                <div
                  className="bg-[#111820] border border-[rgba(14,165,233,0.15)] p-4
                                font-mono text-[0.65rem] text-[#0ea5e9] leading-loose whitespace-pre-line"
                >
                  {s.code}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
