"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Let&apos;s Connect!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Feel free to reach out for collaborations or just a chat.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://github.com/MMamunurRashid" target="_blank">
              <Github className="w-6 h-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/md-mamunur-rashid-web/" target="_blank">
              <Linkedin className="w-6 h-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
            </Link>
            <Link href="mailto:mdmamun.iubat.m@gmail.com">
              <Mail className="w-6 h-6 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Mamunur Rashid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
