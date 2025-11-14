import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/solutions", label: "Solutions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-primary dark:text-primary">
              Maheshwara.ai
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex btn-outline text-sm dark:border-primary dark:text-primary"
            >
              Why us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xs md:text-sm px-3 md:px-6 py-2"
            >
              Get Free consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 ml-4"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300"
            />
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-3 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
