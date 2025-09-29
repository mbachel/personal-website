import Hero from "../components/Hero";
import RootLayout from "@/components/layout";

export default function HomePage() {
    return (
        <RootLayout>
            <Hero />
            <section className="font-nunito text-center min-h-screen">
                <h1>
                    hello world
                </h1>
            </section>
        </RootLayout>
    );
}