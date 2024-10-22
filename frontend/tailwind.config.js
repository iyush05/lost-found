
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts.jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
  	extend: {
      backgroundImage: {
        'loginPage': "url('/hero.jpg')",
      }
    },
  },
  plugins: [],
}

