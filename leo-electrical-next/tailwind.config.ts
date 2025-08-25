
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E6FBFF",
          100: "#C0F5FF",
          200: "#8AEAFF",
          300: "#54DFFF",
          400: "#2FD4FF",
          500: "#00C8FF",
          600: "#00A0CC",
          700: "#007799",
          800: "#004F66",
          900: "#002733"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
