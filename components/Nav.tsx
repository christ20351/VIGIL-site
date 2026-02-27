"use client";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#080c10]/85 backdrop-blur-md
                    border-b border-[rgba(14,165,233,0.15)]"
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 font-mono text-[#0ea5e9] text-lg font-bold tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse-dot" />
          VIGIL
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {["About", "Features", "How it works", "Download"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[#7a8fa8] text-xs font-medium tracking-widest uppercase
                               hover:text-[#0ea5e9] transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub */}
        <a
          href="https://github.com/christ20351/VIGIL"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 font-mono text-xs px-5 py-2
                      border border-[#0ea5e9] text-[#0ea5e9]
                      hover:bg-[#0ea5e9] hover:text-[#080c10] transition-all duration-200"
        >
          <Github size={14} />
          GitHub →
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#0ea5e9] p-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[rgba(14,165,233,0.15)] bg-[#080c10]
                        flex flex-col px-6 py-4 gap-4"
        >
          {["About", "Features", "How it works", "Download"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setOpen(false)}
              className="text-[#7a8fa8] text-sm font-medium tracking-widest uppercase
                             hover:text-[#0ea5e9] transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <a
            href="https://github.com/christ20351/VIGIL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 w-fit
                        border border-[#0ea5e9] text-[#0ea5e9]"
          >
            <Github size={14} /> GitHub →
          </a>
        </div>
      )}
    </nav>
  );
}
