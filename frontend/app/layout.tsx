import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NoCapEd - Personalized Story-Driven Learning",
    template: "%s | NoCapEd"
  },
  description: "NoCapEd: Revolutionizing education through AI-powered storytelling and personalized learning. f(s,q)=K+",
  keywords: ["education", "AI", "personalized learning", "storytelling", "EdTech"],
  authors: [{ name: "NoCapEd Team" }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.nocaped.com/',
    siteName: 'NoCapEd',
    title: 'NoCapEd - Personalized Story-Driven Learning',
    description: 'Revolutionizing education through AI-powered storytelling and personalized learning. f(s,q)=K+',
    images: [
      {
        url: 'https://www.nocaped.com/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'NoCapEd - Personalized Story-Driven Learning',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="default" enableSystem={true}>
          <SessionProvider>
            <div className="flex flex-col min-h-screen bg-background text-text">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>             
              <Footer />
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}