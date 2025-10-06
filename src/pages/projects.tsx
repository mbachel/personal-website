import Head from "next/head";
import MiniHero from "@/components/MiniHero";

export default function projects() {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <meta name="description" content="Explore my projects and works." />
            </Head>
            <MiniHero />
            <div className="font-nunito text-center min-h-screen">
                Projects Page works!
            </div>
        </>
    );
} 