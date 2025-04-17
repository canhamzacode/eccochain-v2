import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const newyork = localFont({
  src: [
    {
      path: '../../public/fonts/NewYork.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/NewYorkLarge-Semibold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/NewYorkMedium-Bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-newyork',
});

const inter = Inter({
  variable: '--font-geist-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EccoChain - Break Language Barriers, Anytime, Anywhere.',
  description: 'Break Language Barriers, Anytime, Anywhere.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newyork.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
