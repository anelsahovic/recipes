import type { Metadata } from 'next';
import { Roboto } from '@next/font/google';
import { Barrio } from '@next/font/google';

import './globals.css';
import Container from '@/components/container';
import Header from '@/components/header';
import Footer from '@/components/footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '900'], // Include the desired weights
});

export const barrio = Barrio({
  subsets: ['latin'],
  weight: ['400'], // Barrio only has one weight
});

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Show the best recipes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.style.fontFamily}  antialiased bg-amber-100`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
