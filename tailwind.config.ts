// tailwind.config.js

import { DreamOrphans, ElementaryGothic, Oskon, Times } from "@/app/fonts";

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
        times: ['var(--font-times)'],
      },
    },
  },    
  plugins: [],
};

export default config;