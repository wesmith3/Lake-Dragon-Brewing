import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'faded-edges': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/path/to/your/image.jpg")',
      },
      colors: {
        'ldb-parchment': '#E6D7B9',
        'ldb-red': '#A7333F',
        'ldb-green': '#5F6F52',
        'ldb-blue': '#36454F',
        'ldb-orange': '#CD7F32',
      }
    },
  },
  plugins: [],
};
export default config;
