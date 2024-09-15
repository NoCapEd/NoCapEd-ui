import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NoCapEd",
  description: "f(s,q)=K+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning  >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-600 text-white py-2` }
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
