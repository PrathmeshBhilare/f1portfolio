import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'accent': 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'line': 'var(--line)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-chakra-petch)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
