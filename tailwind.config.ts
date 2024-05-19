import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import { transform } from "typescript";

const plugin = require("tailwindcss/plugin");
const {
  blackA,
  mauve,
  violet,
  indigo,
  purple,
  tomato,
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
        ...tomato,
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleInSlowly: "scaleIn 1.5s ease",
      scaleOut: "scaleOut 200ms ease",
      scaleOutSlowly: "scaleOut 2s ease",
      fadeIn: "fadeIn 200ms ease",
      fadeInSlowly: "fadeIn 3.5s ease",
      fadeOut: "fadeOut 200ms ease",
      fadeOutSlowly: "fadeOut 2s ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
  },
  plugins: [
    plugin(
      ({ matchUtilities }: { matchUtilities: PluginAPI["matchUtilities"] }) => {
        matchUtilities({
          perspective: (value) => ({
            perspective: value,
          }),
        });
      }
    ),
  ],
};

export default config;
