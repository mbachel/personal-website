import Head from "next/head";
import MiniHero from "@/components/MiniHero";

export default function about() {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Learn more about me and my background." />
            </Head>
            <MiniHero />
            <div className="font-nunito text-center min-h-screen">
                About Page works!
            </div>
        </>
    );
} 