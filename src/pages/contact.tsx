import Head from "next/head";
import MiniHero from "@/components/MiniHero";
import ContactForm from "@/components/ContactForm";

export default function contact() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Get in touch with me." />
            </Head>
            <MiniHero />
            <section>
                <ContactForm />
            </section>
        </>
    );
}   