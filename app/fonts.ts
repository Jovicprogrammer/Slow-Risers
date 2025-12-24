import localFont from 'next/font/local';

// Fonte 1 - Exemplo com múltiplos pesos
export const DreamOrphans = localFont({
  src: [
    {
      path: './fonts/Dream_Orphans.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-dream',
  display: 'swap',
});

// Fonte 2 - Exemplo simples
export const ElementaryGothic = localFont({
  src: './fonts/Elementary_Gothic.otf',
  variable: '--font-gothic',
  weight: '400',
  display: 'swap',
});

// Fonte 3 - Outra fonte
export const Oskon = localFont({
  src: [
    {
      path: './fonts/ZTBrosOskon90s-Regular.otf',
      weight: '300',
    },

  ],
  variable: '--font-oskon',
  display: 'swap',
});

export const Dream_Orphans_Light = localFont({
  src: [
    {
      path: './fonts/Dream_Orphans_Light.otf',
      weight: '300',
    },

  ],
  variable: '--font-light-dream',
  display: 'swap',
});

export const Times = localFont({
  src: [
    {
      path: './fonts/times.ttf',
      weight: '300',
    },

  ],
  variable: '--font-times',
  display: 'swap',
});