// tailwind.config.js

import { DreamOrphans, ElementaryGothic, Oskon } from "@/app/fonts";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // ajuste esses caminhos pro seu projeto!
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      fontFamily: {
        dream: ['var(--font-dream)'],
        gothic: ['var(--font-gothic)'],
        oskons: ['var(--font-oskon)'],
        lightdream: ['var(--font-lightdream)'],
      },
    },
  },    
  plugins: [],
};

export default config;