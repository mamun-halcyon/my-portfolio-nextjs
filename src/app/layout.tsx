import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import ThemeProvider from "@/providers/ThemeProviders";
import localFont from "next/font/local";
import Preloader from "@/components/preloader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham-Book.otf",
      weight: "400",
      style: "book",
    },
    {
      path: "../fonts/Gotham-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Gotham-Thin.otf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../fonts/Gotham-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Gotham-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-gotham",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mamun's Portfolio",
  description: "Mamun's Portfolio",
  icons: [{ rel: 'icon', url: `/favicon.ico` }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          `}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Gotham.variable} antialiased dark:bg-gray-800 transition-colors duration-300 pt-16 font-gotham`}
      >
        <ThemeProvider>
          <Preloader />
          <Navbar />
          <div className="w-full bg-slate-100 dark:bg-gray-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

