import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <header className="flex font-inter items-center justify-center h-fit text-center pt-16">
            <div>
                <div className="pb-4">
                    <Image 
                        src="/me.jpg" 
                        alt="Profile Picture" 
                        width={148} 
                        height={148} 
                        className="w-60 h-60 rounded-full object-cover object-center items-center mx-auto"
                        priority
                    />
                </div>
                <h1 className="text-5xl mt-4 pb-2">
                    Matthew Bachelder
                </h1>
                <h3 className="text-lg pb-2">
                    Charlotte, NC
                </h3>
                <h2 className="text-xl pb-6">
                    Early Entry MS Information Technology
                    <br />
                    BA Computer Science, IT Concentration
                </h2>
                <div className="pb-6">
                    <Link 
                        href="/contact" 
                        title="Contact Me">
                        <MdMail
                            size={32}
                            className="inline-block mx-2"
                        />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/matthewbachelder/" 
                        title="LinkedIn" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <FaLinkedin
                            size={32}
                            className="inline-block mx-2"
                        />
                    </Link>
                    <Link 
                        href="https://github.com/mbachel" 
                        title="GitHub" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <FaGithub
                            size={32}
                            className="inline-block mx-2"
                        />
                    </Link>
                </div>
                <p className="text-lg pb-20 w-128">
                    Experience in Python, Git, SQL, and web development. 
                    Knowledge in backend systems, databases, and full-stack applications using React, Angular, and FastAPI.
                </p>
            </div>
        </header>
    );
}