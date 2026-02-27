import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Download from "@/components/Download";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatIs />
      <Features />
      <HowItWorks />
      <Download />
      <QuickStart />
      <Footer />
    </main>
  );
}
