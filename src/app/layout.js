// app/layout.js - Enhanced with smooth scrolling
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Navodya Jain | Product-Focused Professional',
  description: 'Blending product analytics, product management, design thinking, and development to build user-centered digital products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0E0E0E]`}>
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}