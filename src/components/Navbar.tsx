"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
    //to show which page is current
    const pathname = usePathname();

    const links = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <nav className="flex items-center justify-end h-12 text-xl">
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
    );
}