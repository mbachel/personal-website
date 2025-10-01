import MiniHero from "@/components/MiniHero";
import RootLayout from "@/components/Layout";

export default function contact() {
    return (
        <RootLayout>
            <MiniHero />
            <section className="flex flex-col items-center text-center min-h-screen">
                <div className="flex items-center font-nunito pt-10">
                    Contact Page works!
                </div>
                <iframe className="flex items-center m-auto pb-5" src="/resume.pdf" width="825" height="1145"/>
            </section>
        </RootLayout>
    );
}   