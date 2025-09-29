import Hero from "@/components/Hero";
import RootLayout from "@/components/Layout";
import Link from "next/link";
import { 
    FaLinkedin, 
    FaGithub,
    FaEnvelope,
    FaBatteryQuarter,
    FaBatteryHalf,
    FaBatteryThreeQuarters,
    FaBatteryFull,
    FaGraduationCap,
} from "react-icons/fa";
import {
    RiGitRepositoryFill,
    RiInfoCardFill,
} from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

export default function HomePage() {
    return (
        <RootLayout>
            <Hero />
            <section className="font-nunito text-center min-h-screen m-auto w-180">
                <div className="flex flex-col items-start justify-start pt-20 pb-10">
                    <h2 className="text-3xl flex items-center gap-4">Why Matthew? <FaBatteryQuarter /></h2>
                    <p className="text-xl self-start text-start max-w-160">
                        I bring a unique blend of strong technical knowledge in
                        computer science and practical, real-world experience in leadership.
                        I intend to use my expertise to help organizations solve complex problems
                        and deliver high-quality computing solutions. See my education below!
                    </p>
                    <Link 
                        className="text-xl flex text-start items-center justify-start mt-2" 
                        href="/education">
                            <FaGraduationCap size={40} className="mr-3"/> <p className="underline">Education</p>
                    </Link>
                </div>
                <div className="flex flex-col items-end justify-end pt-10 pb-10">
                    <h2 className="text-3xl flex items-center gap-4"><FaBatteryHalf /> What Can Matthew Do?</h2>
                    <p className="text-xl self-end text-end max-w-160">
        
                    </p>
                    <Link 
                        className="text-xl flex text-start items-center justify-start mt-2" 
                        href="/education">
                            <p className="underline">Projects</p><RiGitRepositoryFill size={40} className="ml-3"/>
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-start pt-10 pb-10">
                    <h2 className="text-3xl flex items-center gap-4">Who Is Matthew? <FaBatteryThreeQuarters /></h2>
                    <p className="text-xl self-start text-start max-w-160">

                    </p>
                    <Link 
                        className="text-xl flex text-start items-center justify-start mt-2" 
                        href="/education">
                            <RiInfoCardFill size={40} className="mr-3"/> <p className="underline">About</p>
                    </Link>
                </div>
                <div className="flex flex-col items-end justify-end pt-10 pb-60">
                    <h2 className="text-3xl flex items-center gap-4"><FaBatteryFull /> How About Matthew?</h2>
                    <p className="text-xl self-end text-end max-w-160">
                        I&apos;m currently looking for new opportunities to 
                        forward my career, starting in May 2026!
                        Whether you are looking for new interns, full-time employees, 
                        or just want to chat, feel free to connect with me:
                    </p>
                    <div>

                    </div>
                </div>
            </section>
        </RootLayout>
    );
}