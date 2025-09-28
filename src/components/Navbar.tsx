"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';
import Image  from 'next/image';

export default function Navbar() {
    //to show which page is current
    const pathname = usePathname();

    const links = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <div id="navbar" className="flex items-center justify-between">
            <div className="flex items-center h-12 text-xl">
                {/* <Image 
                    src="/signature.png"
                    alt="Signature"
                    width={200}
                    height={100}
                /> */}
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