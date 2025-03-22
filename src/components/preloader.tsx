"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      {/* Container for animations */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        className="relative flex items-center justify-center text-6xl font-bold"
      >
        {/* Left "<" moving in */}
        <motion.span
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {"<"}
        </motion.span>

        {/* "/" appearing in center */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          /
        </motion.span>

        {/* Right ">" moving in */}
        <motion.span
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {">"}
        </motion.span>
      </motion.div>
    </div>
  );
}
