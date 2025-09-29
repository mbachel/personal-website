import Hero from "../components/Hero";
import RootLayout from "@/components/layout";

export default function HomePage() {
    return (
        <RootLayout>
            <Hero />
            <section className="font-nunito text-center min-h-screen">
                <div className="flex flex-col items-start ml-100 pb-5">
                    <h2 className="text-3xl">Why Matthew?</h2>
                    <p className="text-xl">
                        
                    </p>
                </div>
                <div className="flex flex-col items-end mr-100 pt-5 pb-5">
                    <h2 className="text-3xl">What Can Matthew Do?</h2>
                    <p className="text-xl">
        
                    </p>
                </div>
                <div className="flex flex-col items-start ml-100 pt-5 pb-5">
                    <h2 className="text-3xl">Who Is Matthew?</h2>
                    <p>

                    </p>
                </div>
                <div className="flex flex-col items-end mr-100 pt-5 pb-20">
                    <h2 className="text-3xl">How About Matthew?</h2>
                    <p>

                    </p>
                </div>
            </section>
        </RootLayout>
    );
}