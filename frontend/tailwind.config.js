
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
        'loginPage': "url('/hero.jpeg')",
        'foundPage': "url('/found-bg.jpg')",
        'lostPage': "url('/lost-bg.jpg')",
        'howitworks': "url('/howitworks.jpg')",
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', 'cursive'], // Custom font
        cedarville: ['"Cedarville Cursive"', 'cursive'],
      },
    },
  },
  plugins: [],
}

