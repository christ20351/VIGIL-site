import type { Metadata } from "next";
import { Space_Mono, Barlow } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "VIGIL — Monitoring System",
  description:
    "Real-time monitoring for your entire infrastructure. No cloud. No subscription.",
  icons: {
    icon: "/vigil-logo.svg", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
