"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/pages/header/header";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { About } from "@/components/pages/about/about";
import WhatIDo from "@/components/pages/what-i-do/what-i-do";
import Experiences from "@/components/pages/experience/experience";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtBottom(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (position: "top" | "bottom") => {
    window.scrollTo({
      top: position === "top" ? 0 : document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-gray-900 pb-20 relative">
      {/* Header Section */}
      <Header />    
      {/* About Section */}
      {/* <About/> */}

      {/* what i do  */}
      <WhatIDo/>

      {/* Experience Section */}
      <Experiences/>
      {/* Scroll Button */}


      {/* footer  */}
      <Footer />
      <button
        onClick={() => scrollTo(atBottom ? "top" : "bottom")}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all hover:bg-blue-600 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {atBottom ? (
            <motion.span
              key="up"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="down"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowDown size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
