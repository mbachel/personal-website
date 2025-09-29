"use client";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';
import Image  from 'next/image';
import { Albert_Sans } from 'next/font/google';

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

export default function Navbar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    //to show which page is current
    const pathname = usePathname();
    if (!mounted) return null;

    const links = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <div id="navbar" className="flex items-center justify-between">
            <div className="flex items-center h-12 text-xl">
                {resolvedTheme === "dark" ? (
                <Image 
                    src="/logo-dark.png"
                    alt="Logo"
                    width={79}
                    height={79}
                />
                ) : (
                <Image 
                    src="/logo-light.png"
                    alt="Logo"
                    width={79}
                    height={79}
                />
                )}
                <span className={`ml-3 text-2xl ${albert.variable}`}><span className="font-bold">Matthew</span>Bachelder</span>
            </div>
            <nav className="flex items-center h-12 text-xl">
                <ThemeSwitch />
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={pathname === href ? "font-bold px-10 h-full flex items-center" : "px-6 m-4"}
                        id={pathname === href ? "active" : undefined}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}