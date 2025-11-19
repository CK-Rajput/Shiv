import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-12 h-12 rounded-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-slate-600"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? (
          <svg
            className="w-12 h-10 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 10a3 3 0 100-6 3 3 0 000 6zm0-8a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4.22-1.78a1 1 0 011.415 0l1.414 1.414a1 1 0 01-1.414 1.415L14.22 2.22a1 1 0 010-1.415zm2.828 9.172a1 1 0 011.415 0l1.414 1.414a1 1 0 11-1.414 1.415l-1.414-1.414a1 1 0 010-1.415zm0-11.314a1 1 0 011.415 0l1.414 1.414a1 1 0 11-1.414 1.415L17.05 2.22a1 1 0 010-1.415zM5.05 15.364a1 1 0 011.415 0l1.414 1.414a1 1 0 11-1.414 1.415L5.05 16.78a1 1 0 010-1.415zm2.828 2.828a1 1 0 011.415 0l1.414 1.414a1 1 0 11-1.414 1.415l-1.414-1.414a1 1 0 010-1.415zm-7.07-7.07a1 1 0 011.415 0l1.414 1.414a1 1 0 11-1.414 1.415L.707 13.536a1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-12 h-10 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
