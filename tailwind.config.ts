import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Calm modern fintech palette
        brand: {
          50: "#eef6f5",
          100: "#d6ebe8",
          200: "#aed7d2",
          300: "#7dbcb5",
          400: "#4f9d96",
          500: "#2f8079", // primary accent (calm teal)
          600: "#246661",
          700: "#1f524e",
          800: "#1b4340",
          900: "#173836",
        },
        ink: {
          DEFAULT: "#16201f",
          soft: "#46534f",
          faint: "#7b8783",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f5f7f6",
          sunken: "#eef1f0",
        },
        positive: "#1f7a55",
        caution: "#b07b15",
        negative: "#b04a3a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22, 32, 31, 0.04), 0 8px 24px rgba(22, 32, 31, 0.06)",
        lift: "0 2px 6px rgba(22, 32, 31, 0.06), 0 16px 40px rgba(22, 32, 31, 0.10)",
      },
      maxWidth: {
        app: "30rem", // ~480px mobile-first container
      },
    },
  },
  plugins: [],
};

export default config;
