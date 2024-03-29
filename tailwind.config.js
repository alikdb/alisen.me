/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    '0%': {transform: 'rotate(0.0deg)'},
                    '10%': {transform: 'rotate(-10.0deg)'},
                    '20%': {transform: 'rotate(12.0deg)'},
                    '30%': {transform: 'rotate(-10.0deg)'},
                    '40%': {transform: 'rotate(9.0deg)'},
                    '50%': {transform: 'rotate(0.0deg)'},
                    '100%': {transform: 'rotate(0.0deg)'},
                }
            },
            animation: {
                wave: 'wave 1.2s ease infinite',
            }
        },
    },
    plugins: [],
};
