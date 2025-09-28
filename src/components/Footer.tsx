import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex font-inter items-center justify-center h-fit">
            <div className="p-6">
                <Link 
                    href="https://www.instagram.com/matty.c.b02/" 
                    title="Instagram" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <FaInstagram
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
            </div>
            <p>
                © 2025 Matthew Bachelder. All rights reserved.
            </p>
        </footer>
    );
}