import type { Metadata } from 'next';
import { Roboto } from '@next/font/google';

import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Include the desired weights
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
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
