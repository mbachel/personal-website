import Head from "next/head";
import MiniHero from "@/components/MiniHero";

export default function education() {
    return (
        <>
            <Head>
                <title>My Education</title>
                <meta name="description" content="Learn about my educational background." />
            </Head>
            <MiniHero />
            <div className="font-nunito text-center min-h-screen">
                
            </div>
        </>
    );
} 