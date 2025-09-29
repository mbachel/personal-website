import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            // colors: {
            //     darkBg: "#2E3532",
            //     lightBg: "#E5E5E5",
            //     darkText: "#E5E5E5",
            //     lightText: "#2E3532",
            //     primaryAccent: "[#A02C3D",
            //     secondaryAccent: "#802331",
            // },
            fontFamily: {
                nunito: ['var(--font-nunito)'],
                inter: ['var(--font-inter)'],
            }
        },
    },
    darkMode: 'class',
};

export default config;