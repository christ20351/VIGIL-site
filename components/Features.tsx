"use client";
import { useEffect, useRef } from "react";
import { Activity, Wifi, Cpu, Bell, Clock, Lock } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-time Metrics",
    desc: "CPU, RAM, Disk and network usage updated every second via WebSocket. No polling, no delays.",
  },
  {
    icon: Wifi,
    title: "Network Monitoring",
    desc: "Live upload/download speeds, active TCP/UDP connections, interfaces with IPv4/IPv6.",
  },
  {
    icon: Cpu,
    title: "Process Inspector",
    desc: "Top 30 processes by CPU with PID, name, CPU%, RAM%, state and user. Updated live.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    desc: "CPU alerts with duration threshold, instant RAM/Disk alerts, offline detection with persistent notifications.",
  },
  {
    icon: Clock,
    title: "History & Charts",
    desc: "SQLite-backed history. Browse 1h, 4h, 24h or 7 days of metrics per agent with interactive graphs.",
  },
  {
    icon: Lock,
    title: "Optional Auth",
    desc: "Token-based authentication with session cookies. Enable it with one flag — disabled by default for LAN use.",
  },
];

export default function Features() {
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
      id="features"
      ref={ref}
      className="relative z-10 px-6 md:px-16 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12 md:mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.3em] text-[#0ea5e9] uppercase mb-4">
            {/* // features */}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight tracking-tight">
            Everything you need.
            <br />
            Nothing you don t.
          </h2>
        </div>

        <div
          className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px
                        bg-[rgba(14,165,233,0.15)] border border-[rgba(14,165,233,0.15)]"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-[#080c10] p-8 md:p-10 hover:bg-[#111820] transition-colors duration-200"
              >
                <Icon
                  size={28}
                  className="text-[#0ea5e9] mb-4"
                  strokeWidth={1.5}
                />
                <div className="font-bold text-base mb-2">{f.title}</div>
                <div className="text-sm text-[#7a8fa8] leading-relaxed font-light">
                  {f.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
