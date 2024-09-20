

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
    6. @note Get the following stuff from instructor:
        1. customized index.css that contains tailwind base directives + some basic styles + tailwind custom directives
        2. assets folder
        3. customized tailwind.config.js file that contains theme extensions
        4. modify the eslint.config.js file 
        (@learning @crucial defines rules and settings for ESLint to use when analyzing your JavaScript and React code.)
        @note The instrucotrs version, however, was using an old config version but had extended configs, ignore patters etc that I wanted to keep so I asked Claude to create a file with the best of the 2 wordls






