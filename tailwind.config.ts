/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}', // 如果使用 src 目录
        './modules/**/*.{js,ts,jsx,tsx,mdx}', // 如果使用 src 目录
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}