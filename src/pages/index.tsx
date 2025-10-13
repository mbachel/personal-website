import Head from "next/head";
import Link from "next/link";
import { 
    FaBatteryQuarter,
    FaBatteryHalf,
    FaBatteryThreeQuarters,
    FaBatteryFull,
    FaGraduationCap,
    FaFileDownload,
} from "react-icons/fa";
import {
    RiGitRepositoryFill,
    RiInfoCardFill,
} from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Welcome to my personal website!" />
            </Head>
            <a  href="/Matthew Bachelder.pdf"
                download
                className="flex items-center justify-center">
                    <p className="flex items-center justify-center text-2xl mt-12 w-70 h-20 rounded-lg" 
                    id="download-resume">
                        Download Resume <FaFileDownload className="ml-3"/>
                    </p>
            </a>
            <section className="font-nunito min-h-screen flex flex-col items-center justify-center px-20">
                <div className="flex w-240">
                    <Link 
                        className="flex items-center justify-start mt-10" 
                        href="/experience">
                            <FaGraduationCap size={240}/>
                    </Link>
                    <div className="flex flex-col items-end justify-end flex-1 pt-20 pb-10 ml-5">
                        <h2 className="text-3xl flex items-center gap-4 pb-2"><FaBatteryQuarter /> Why Matthew?</h2>
                        <p className="text-xl self-end text-end max-w-160">
                            I bring a unique blend of strong technical knowledge in
                            computer science and practical, real-world experience in leadership.
                            I intend to use my expertise to help organizations solve complex problems
                            and deliver high-quality computing solutions.
                        </p>
                    </div>
                </div>
                <div className="flex w-240 pt-20">
                    <div className="flex flex-col items-start justify-start pt-10 pb-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2">What Can Matthew Do? <FaBatteryHalf /></h2>
                        <p className="text-xl pb-2">Here&apos;s a snapshot of my core competencies:</p>
                        <ul className="text-xl self-start text-start max-w-180 list-disc">
                            <li><span className="font-bold">Web Development</span> - React/Angular, full-stack, interactive features.</li>
                            <li><span className="font-bold">Software Engineering</span> - CI/CD pipelines, version control, unit testing.</li>
                            <li><span className="font-bold">System Architecture</span> - Modular design, database integration, scalability.</li>
                            <li><span className="font-bold">Project Management</span> - Agile/Scrum, client collaboration, documentation.</li>
                        </ul>
                    </div>
                    <Link 
                        className="flex items-center justify-end flex-1" 
                        href="/projects">
                            <RiGitRepositoryFill size={240}/>
                    </Link>
                </div>
                <div className="flex w-240 pt-20">
                    <Link 
                        className="flex items-center justify-start mt-10" 
                        href="/about">
                            <RiInfoCardFill className="animate-fade-right" size={240}/>
                    </Link>
                    <div className="flex flex-col items-end justify-end flex-1 pt-10 pb-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2"><FaBatteryThreeQuarters /> Who Is Matthew?</h2>
                        <p className="text-xl self-end text-end max-w-160">
                            I&apos;m in my Senior year at the University of North Carolina at Charlotte,
                            studying a computer science degree with a concentration in Information Technology.
                            I was also accepted into the Early Entry program at UNCC for a Master&apos;s 
                            in Information Technology. In my free time, I enjoy fishing, traveling, and 
                            gaming with my friends. See more about me below!
                        </p>
                    </div>
                </div>
                <div className="flex w-240 pt-20 pb-30">
                    <div className="flex flex-col items-start justify-start pt-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2">How About Matthew? <FaBatteryFull /></h2>
                        <p className="text-xl self-start text-start max-w-160">
                            I&apos;m currently looking for new opportunities to 
                            forward my career, starting in May 2026!
                            Whether you are looking for new interns, full-time employees, 
                            or just want to chat, feel free to connect with me!
                        </p>
                    </div>
                    <Link 
                        className="flex items-center justify-end flex-1" 
                        href="/contact">
                            <MdContactPage size={240}/>
                    </Link>
                </div>
            </section>
        </>
    );
}