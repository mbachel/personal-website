import Hero from "../components/Hero";
import RootLayout from "@/components/layout";

export default function HomePage() {
    return (
        <RootLayout>
            <Hero />
            <div className="font-nunito text-center min-h-screen">
                Home Page works!
            </div>
        </RootLayout>
    );
}