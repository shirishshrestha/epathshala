/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#334155", // Background color
        foreground: "#F9FAFB", // Text color
        card: {
          DEFAULT: "#ffffff", // Card background
          foreground: "#334155", // Card text color
        },
        popover: {
          DEFAULT: "#e5e5e5", // Popover background
          foreground: "#334155", // Popover text color
        },
        primary: {
          DEFAULT: "#1d1d2f", // Primary color
          foreground: "#ffffff", // Primary text color
        },
        secondary: {
          DEFAULT: "#3a3a59", // Secondary color
          foreground: "#ffffff", // Secondary text color
        },
        muted: {
          DEFAULT: "#4e4e74", // Muted color
          foreground: "#334155", // Muted text color
        },
        accent: {
          DEFAULT: "#1a8598", // Accent color
          foreground: "#ffffff", // Accent text color
        },
        destructive: {
          DEFAULT: "#E74C3C", // Destructive color (red)
          foreground: "#ffffff", // Destructive text color
        },
        mild: {
          DEFAULT: "#b0b0e3",
        },
        highlight: "#ffe066",
        border: "#D1D5DB", // Border color
        input: "#ffffff", // Input background
        ring: "#38BDF8", // Ring color (focus color)
        chart: {
          1: "#10B981", // Chart color 1 (Success color)
          2: "#FB7185", // Chart color 2 (Secondary color)
          3: "#0E7490", // Chart color 3 (Primary color)
          4: "#A78BFA", // Chart color 4 (Accent color)
          5: "#38BDF8", // Chart color 5 (Link color)
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
