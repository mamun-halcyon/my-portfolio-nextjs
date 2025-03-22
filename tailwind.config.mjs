/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const tailwindAnimate = require("tailwindcss-animate");

module.exports = {
  darkMode: "class", // Fix: Removed duplicate 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster Two", "cursive"],
        gotham: ['var(--font-gotham)'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [tailwindAnimate, addVariablesForColors],
};

// Fix: Replaced flattenColorPalette with Object.entries(theme("colors"))
function addVariablesForColors({ addBase, theme }) {
  let allColors = Object.entries(theme("colors") || {}).reduce(
    (acc, [key, val]) => {
      if (typeof val === "object") {
        Object.entries(val).forEach(([subKey, subVal]) => {
          acc[`--${key}-${subKey}`] = subVal;
        });
      } else {
        acc[`--${key}`] = val;
      }
      return acc;
    },
    {}
  );

  addBase({
    ":root": allColors,
  });
}
