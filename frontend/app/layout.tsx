import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SessionProvider } from "next-auth/react"
import { Poppins, Fredoka, Baloo_Bhai_2, Chewy, Comic_Neue } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const fredoka = Fredoka({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
});

const balooBhai2 = Baloo_Bhai_2({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo-bhai-2',
});

const chewy = Chewy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chewy',
});

const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic-neue',
});


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
      <body className={`${poppins.variable} ${fredoka.variable} ${balooBhai2.variable} ${chewy.variable} ${comicNeue.variable} font-sans`} >
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