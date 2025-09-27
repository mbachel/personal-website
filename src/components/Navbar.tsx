"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    //to show which page is current
    const pathname = usePathname();

    const links = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <nav className="flex items-center justify-end h-12 text-lg bg-[#A02C3D]">
            {links.map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={pathname === href ? "font-bold px-10 h-full flex items-center bg-[#802331]" : "px-6 m-4"}
                >
                    {label}
                </Link>
            ))}
        </nav>
    );
}