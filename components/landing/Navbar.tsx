"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname(); // Pengganti useLocation()

  const isLandingPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      setIsAtTop(scrollPosition === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative transition-all duration-300 ${
              isAtTop
                ? "bg-transparent border-transparent"
                : isScrolled
                  ? "bg-white/60 dark:bg-[#0F2A3F]/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
                  : "bg-white/40 dark:bg-[#0F2A3F]/40 backdrop-blur-lg border border-white/30 dark:border-white/10"
            } rounded-2xl px-6 py-3`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 group">
                <motion.div whileHover={{ scale: 1.05 }} className="w-10 h-10 bg-gradient-to-br from-[#2EC4B6] to-[#3EDBF0] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </motion.div>
                <span className="text-xl font-semibold bg-gradient-to-r from-[#2EC4B6] to-[#3EDBF0] bg-clip-text text-transparent">Akarsa</span>
              </Link>

              {/* Desktop Navigation - Only when scrolled */}
              {isLandingPage && !isAtTop && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="hidden md:flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="px-4 py-2 rounded-lg text-[#0F2A3F] dark:text-white/90 hover:text-[#2EC4B6] dark:hover:text-[#3EDBF0] transition-colors duration-200 hover:bg-white/50 dark:hover:bg-white/5"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Right Section: Theme Toggle + Mobile Menu */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className={`p-2.5 rounded-xl backdrop-blur-sm transition-all duration-200 group ${
                    isAtTop ? "bg-white/30 dark:bg-white/20 border border-white/40 dark:border-white/20" : "bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10"
                  } hover:border-[#3EDBF0]/50`}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait">
                    {theme === "light" ? (
                      <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Moon className="w-5 h-5 text-[#0F2A3F] group-hover:text-[#2EC4B6]" />
                      </motion.div>
                    ) : (
                      <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Sun className="w-5 h-5 text-white group-hover:text-[#3EDBF0]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Mobile Menu Toggle */}
                {isLandingPage && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`md:hidden p-2.5 rounded-xl backdrop-blur-sm transition-all duration-200 ${
                      isAtTop ? "bg-white/30 dark:bg-white/20 border border-white/40 dark:border-white/20" : "bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10"
                    }`}
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5 text-[#0F2A3F] dark:text-white" /> : <Menu className="w-5 h-5 text-[#0F2A3F] dark:text-white" />}
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isLandingPage && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }} className="fixed top-[88px] left-0 right-0 z-40 md:hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/80 dark:bg-[#0F2A3F]/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col py-4">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href.substring(1))}
                      className="px-6 py-3 text-left text-[#0F2A3F] dark:text-white hover:bg-gradient-to-r hover:from-[#2EC4B6]/10 hover:to-[#3EDBF0]/10 transition-all duration-200 border-b border-white/10 dark:border-white/5 last:border-b-0"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
