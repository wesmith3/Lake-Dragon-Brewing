import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'ldb-parchment': '#E6D7B9',
        'ldb-red': '#A7333F',
        'ldb-green': '#5F6F52',
        'ldb-blue': '#36454F',
        'ldb-orange': '#CD7F32',
      },
      boxShadow: {
        'text-sm': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'text-md': '0 2px 5px rgba(0, 0, 0, 0.3)',
        'text-lg': '0 4px 6px rgba(0, 0, 0, 0.9)',
      },
    },
  },
  plugins: [],
};
export default config;
