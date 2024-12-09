// src/app/layout.ts
import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/container';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SessionProvider } from 'next-auth/react';
import { roboto } from './fonts/fonts';

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Show the best recipes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-amber-100`}>
        <SessionProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
