// src/styles/fonts.ts
import { Roboto, Barrio } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '900'],
});

export const barrio = Barrio({
  subsets: ['latin'],
  weight: ['400'],
});
