import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['var(--font-nunito)'],
                inter: ['var(--font-inter)'],
            },
        },
    },
    darkMode: 'class',
};

export default config;