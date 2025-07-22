/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./packages/react/src/**/*.{js,ts,jsx,tsx}",
    "./packages/react/.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        medium: "2px",
      },
      spacing: {
        tiny: "0.125rem",
        small: "0.25rem",
        medium: "0.5rem",
        large: "0.75rem",
      },
      borderRadius: {
        small: "0.5rem",
        medium: "0.75rem",
        large: "1rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
      },
      opacity: {
        hover: "0.8",
        disabled: "0.5",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        divider: "hsl(var(--divider))",
        focus: "hsl(var(--focus))",
        content1: "hsl(var(--content1))",
        content2: "hsl(var(--content2))",
        content3: "hsl(var(--content3))",
        content4: "hsl(var(--content4))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [daisyui],
};
