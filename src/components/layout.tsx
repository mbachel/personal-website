// import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "../app/globals.css";
import MyHead from "@/components/Head";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MyHead />
        <body className={`flex flex-col h-screen justify-between antialiased ${nunito.variable} ${inter.variable}`}>
          <Providers>
            <Navbar />
            <main className="mb-auto">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
    </html>
  );
}
