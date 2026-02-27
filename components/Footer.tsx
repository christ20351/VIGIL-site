import { Github, Package, BookOpen, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-[rgba(14,165,233,0.15)]
                       px-6 md:px-16 py-8
                       flex flex-col md:flex-row items-center
                       gap-6 md:gap-0 md:justify-between text-center md:text-left"
    >
      <div className="font-mono text-lg font-bold text-[#0ea5e9] tracking-widest">
        VIGIL
      </div>

      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 list-none">
        {[
          {
            label: "GitHub",
            icon: Github,
            href: "https://github.com/christ20351/VIGIL",
          },
          {
            label: "Releases",
            icon: Package,
            href: "https://github.com/christ20351/VIGIL/releases",
          },
          {
            label: "Docs",
            icon: BookOpen,
            href: "https://github.com/christ20351/VIGIL/blob/vigil-auth/INSTALL.md",
          },
          {
            label: "License",
            icon: FileText,
            href: "https://github.com/christ20351/VIGIL/blob/main/LICENSE",
          },
        ].map((l) => {
          const Icon = l.icon;
          return (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.7rem] text-[#7a8fa8] tracking-widest
                            flex items-center gap-1.5 hover:text-[#0ea5e9] transition-colors duration-200"
              >
                <Icon size={13} />
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="font-mono text-[0.65rem] text-[#7a8fa8] text-center md:text-right">
        MIT License
        <br />
        v2.0 — 2026
      </div>
    </footer>
  );
}
