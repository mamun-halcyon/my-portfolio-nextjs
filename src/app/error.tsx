"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">Something went wrong</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We encountered an unexpected error. Please try again or go back home.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
