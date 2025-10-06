import type { AppProps } from 'next/app';
import "../app/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Navbar />
      <main className="m-auto w-full max-w-6xl bg-[var(--primary-background)] shadow-lg">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Providers>
  );
}