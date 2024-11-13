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
        background: "#F9FAFB", // Background color
        foreground: "#334155", // Text color
        card: {
          DEFAULT: "#ffffff", // Card background
          foreground: "#334155", // Card text color
        },
        popover: {
          DEFAULT: "#e5e5e5", // Popover background
          foreground: "#334155", // Popover text color
        },
        primary: {
          DEFAULT: "#0E7490", // Primary color
          foreground: "#ffffff", // Primary text color
        },
        secondary: {
          DEFAULT: "#F43F5E", // Secondary color
          foreground: "#ffffff", // Secondary text color
        },
        muted: {
          DEFAULT: "#E0E0E0", // Muted color
          foreground: "#334155", // Muted text color
        },
        accent: {
          DEFAULT: "#0ead69", // Accent color
          foreground: "#ffffff", // Accent text color
        },
        destructive: {
          DEFAULT: "#E74C3C", // Destructive color (red)
          foreground: "#ffffff", // Destructive text color
        },
        mild: {
          DEFAULT: "#F1F1E6",
        },
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
