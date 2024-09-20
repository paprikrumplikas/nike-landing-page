

Project Setup

1. install Tailwind CSS wiht Vite (Vite is new alternative to create apps)
Follow this: https://tailwindcss.com/docs/guides/vite 
2. install dev dependeincites:
    1. npm install -D tailwindcss postcss autoprefixer
    2. npx tailwindcss init -p
    3. paste the following to tailwind.config.css
                    `/** @type {import('tailwindcss').Config} */
                export default {
                content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                ],
                theme: {
                    extend: {},
                },
                plugins: [],
                }`
    4. Overwrite index.css with tailwind directives:
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    5. Overwrite App.jsx, remove App.css






