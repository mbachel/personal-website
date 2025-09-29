import MiniHero from "@/components/MiniHero";
import RootLayout from "@/components/Layout";

export default function about() {
    return (
        <RootLayout>
            <MiniHero />
            <div className="font-nunito text-center min-h-screen">
                About Page works!
            </div>
        </RootLayout>
    );
} 