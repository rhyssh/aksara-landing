"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Portfolio } from "@/components/landing/Portfolio";
import { Contact } from "@/components/landing/Contact";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="relative bg-[#0F2A3F] dark:bg-[#0a1929] text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">Akarsa Project</h3>
            <p className="text-white/70 mb-6">Building the future, one project at a time.</p>
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-white/50">© 2026 Akarsa Project. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
