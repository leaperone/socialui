/** @type {import('tailwindcss').Config} */
import baseConfig from "../../tailwind.config.js";

export default {
  ...baseConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
};
