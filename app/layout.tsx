import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevBlog - Modern Development Blog',
  description:
    'A modern blog platform for developers. Learn about Next.js, React, TypeScript, and more.',
  keywords: ['blog', 'development', 'nextjs', 'react', 'typescript', 'web development'],
  authors: [{ name: 'DevBlog Team' }],
  openGraph: {
    title: 'DevBlog - Modern Development Blog',
    description: 'A modern blog platform for developers',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      {/* ⭐ Google Search Console tag MUST be here */}
      <head>
        <meta
          name="google-site-verification"
          content="R4jFbCSH-_UHBBoYrmRekjm6xvggVIxue929C_IL4xk"
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
