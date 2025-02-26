"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Globe, User, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navigationItems = [
    { label: "About", dropdownItems: ["Vision & Mission", "Leadership", "Global Network", "Success Stories"] },
    { label: "Services", dropdownItems: ["Export Solutions", "Import Advisory", "Trade Analytics", "Market Intelligence"] },
    { label: "Membership", dropdownItems: ["Elite Benefits", "Business Network", "Global Access", "Apply Now"] },
    { label: "Insights", dropdownItems: ["Research Reports", "Market Trends", "Trade Data", "Policy Updates"] },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "dark:bg-gray-900/80 bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-extrabold font-heading tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              EFICCI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="text-gray-800 dark:text-gray-200">{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-2"
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <a key={dropdownItem} href="#" className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all">
                          {dropdownItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right-side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              {isDarkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
            </button>

            <button className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:shadow-lg transition-all">
              <User className="w-4 h-4" />
              <span className="ml-2">Member Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              {isDarkMode ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-600 dark:text-gray-400" /> : <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 w-96">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input type="text" placeholder="Search for anything..." className="w-full bg-transparent border-none focus:ring-0 text-lg text-gray-900 dark:text-gray-100" autoFocus />
                <button onClick={() => setSearchOpen(false)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  <X className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
