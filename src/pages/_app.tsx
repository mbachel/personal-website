"use client";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import "../app/globals.css";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MiniHero from '@/components/MiniHero';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {usePathname() === "/" 
          ? <Hero /> 
          : <MiniHero />
      }
      <main className="m-auto w-full max-w-6xl bg-[var(--primary-background)] shadow-lg">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Providers>
  );
}