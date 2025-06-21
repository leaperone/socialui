/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export const content = ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"];
// export const safelist = [
//   // 确保所有颜色变体都被包含
//   {
//     pattern:
//       /^(bg|text|border)-(default|primary|secondary|success|warning|danger|info)-(50|100|200|300|400|500|600|700|800|900)$/,
//   },
//   {
//     pattern:
//       /^(bg|text|border)-(default|primary|secondary|success|warning|danger|info)(-foreground)?$/,
//   },
//   {
//     pattern: /^(bg|text|border)-(content[1-4]|background|foreground|divider|focus)$/,
//   },
// ];
// export const theme = {
//   extend: {
//     borderWidth: {
//       medium: "2px",
//     },
//     spacing: {
//       // NextUI-like spacing
//       tiny: "0.125rem",
//       small: "0.25rem",
//       medium: "0.5rem",
//       large: "0.75rem",
//       // Specific sizes for components
//       8: "2rem",
//       10: "2.5rem",
//       12: "3rem",
//       16: "4rem",
//       20: "5rem",
//       24: "6rem",
//     },
//     borderRadius: {
//       // NextUI-like border radius
//       small: "0.5rem",
//       medium: "0.75rem",
//       large: "1rem",
//       // Legacy support
//       lg: "var(--radius)",
//       md: "calc(var(--radius) - 2px)",
//       sm: "calc(var(--radius) - 4px)",
//     },
//     fontSize: {
//       // NextUI-like font sizes
//       tiny: "0.75rem",
//       small: "0.875rem",
//       medium: "1rem",
//     },
//     opacity: {
//       // NextUI-like opacity values
//       hover: "0.8",
//       disabled: "0.5",
//     },
//     colors: {
//       border: "hsl(var(--border))",
//       input: "hsl(var(--input))",
//       ring: "hsl(var(--ring))",
//       background: "hsl(var(--background))",
//       foreground: "hsl(var(--foreground))",

//       // Layout colors
//       divider: "hsl(var(--divider))",
//       focus: "hsl(var(--focus))",

//       // Content colors
//       content1: "hsl(var(--content1))",
//       content2: "hsl(var(--content2))",
//       content3: "hsl(var(--content3))",
//       content4: "hsl(var(--content4))",

//       // Legacy support
//       card: {
//         DEFAULT: "hsl(var(--card))",
//         foreground: "hsl(var(--card-foreground))",
//       },
//       muted: {
//         DEFAULT: "hsl(var(--muted))",
//         foreground: "hsl(var(--muted-foreground))",
//       },
//       accent: {
//         DEFAULT: "hsl(var(--accent))",
//         foreground: "hsl(var(--accent-foreground))",
//       },
//       destructive: {
//         DEFAULT: "hsl(var(--destructive))",
//         foreground: "hsl(var(--destructive-foreground))",
//       },

//       // Semantic colors with full scale
//       default: {
//         50: "hsl(var(--default-50))",
//         100: "hsl(var(--default-100))",
//         200: "hsl(var(--default-200))",
//         300: "hsl(var(--default-300))",
//         400: "hsl(var(--default-400))",
//         500: "hsl(var(--default-500))",
//         600: "hsl(var(--default-600))",
//         700: "hsl(var(--default-700))",
//         800: "hsl(var(--default-800))",
//         900: "hsl(var(--default-900))",
//         DEFAULT: "hsl(var(--default))",
//         foreground: "hsl(var(--default-foreground))",
//       },
//       primary: {
//         50: "hsl(var(--primary-50))",
//         100: "hsl(var(--primary-100))",
//         200: "hsl(var(--primary-200))",
//         300: "hsl(var(--primary-300))",
//         400: "hsl(var(--primary-400))",
//         500: "hsl(var(--primary-500))",
//         600: "hsl(var(--primary-600))",
//         700: "hsl(var(--primary-700))",
//         800: "hsl(var(--primary-800))",
//         900: "hsl(var(--primary-900))",
//         DEFAULT: "hsl(var(--primary))",
//         foreground: "hsl(var(--primary-foreground))",
//       },
//       secondary: {
//         50: "hsl(var(--secondary-50))",
//         100: "hsl(var(--secondary-100))",
//         200: "hsl(var(--secondary-200))",
//         300: "hsl(var(--secondary-300))",
//         400: "hsl(var(--secondary-400))",
//         500: "hsl(var(--secondary-500))",
//         600: "hsl(var(--secondary-600))",
//         700: "hsl(var(--secondary-700))",
//         800: "hsl(var(--secondary-800))",
//         900: "hsl(var(--secondary-900))",
//         DEFAULT: "hsl(var(--secondary))",
//         foreground: "hsl(var(--secondary-foreground))",
//       },
//       success: {
//         50: "hsl(var(--success-50))",
//         100: "hsl(var(--success-100))",
//         200: "hsl(var(--success-200))",
//         300: "hsl(var(--success-300))",
//         400: "hsl(var(--success-400))",
//         500: "hsl(var(--success-500))",
//         600: "hsl(var(--success-600))",
//         700: "hsl(var(--success-700))",
//         800: "hsl(var(--success-800))",
//         900: "hsl(var(--success-900))",
//         DEFAULT: "hsl(var(--success))",
//         foreground: "hsl(var(--success-foreground))",
//       },
//       warning: {
//         50: "hsl(var(--warning-50))",
//         100: "hsl(var(--warning-100))",
//         200: "hsl(var(--warning-200))",
//         300: "hsl(var(--warning-300))",
//         400: "hsl(var(--warning-400))",
//         500: "hsl(var(--warning-500))",
//         600: "hsl(var(--warning-600))",
//         700: "hsl(var(--warning-700))",
//         800: "hsl(var(--warning-800))",
//         900: "hsl(var(--warning-900))",
//         DEFAULT: "hsl(var(--warning))",
//         foreground: "hsl(var(--warning-foreground))",
//       },
//       danger: {
//         50: "hsl(var(--danger-50))",
//         100: "hsl(var(--danger-100))",
//         200: "hsl(var(--danger-200))",
//         300: "hsl(var(--danger-300))",
//         400: "hsl(var(--danger-400))",
//         500: "hsl(var(--danger-500))",
//         600: "hsl(var(--danger-600))",
//         700: "hsl(var(--danger-700))",
//         800: "hsl(var(--danger-800))",
//         900: "hsl(var(--danger-900))",
//         DEFAULT: "hsl(var(--danger))",
//         foreground: "hsl(var(--danger-foreground))",
//       },
//       info: {
//         50: "hsl(var(--info-50))",
//         100: "hsl(var(--info-100))",
//         200: "hsl(var(--info-200))",
//         300: "hsl(var(--info-300))",
//         400: "hsl(var(--info-400))",
//         500: "hsl(var(--info-500))",
//         600: "hsl(var(--info-600))",
//         700: "hsl(var(--info-700))",
//         800: "hsl(var(--info-800))",
//         900: "hsl(var(--info-900))",
//         DEFAULT: "hsl(var(--info))",
//         foreground: "hsl(var(--info-foreground))",
//       },
//     },
//   },
// };
export const darkMode = "class";
export const plugins = [daisyui()];
