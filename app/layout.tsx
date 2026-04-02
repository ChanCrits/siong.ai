import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'SIONGAI - Next Gen AI Interface',
  description: 'Experience the future of AI with SIONGAI.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body suppressHydrationWarning className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
