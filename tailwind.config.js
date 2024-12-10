/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                'raleway': ['Raleway', 'serif'],
                'Alegreya': ['Alegreya', 'serif'],
            }
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "synthwave"],
    }
}