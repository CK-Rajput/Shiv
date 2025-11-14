import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-gray-300 dark:border-slate-700 border-t-primary rounded-full"
      />
    </div>
  );
}
