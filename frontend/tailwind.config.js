/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkPink: "#44252a",
        primaryLightPink: "#6c3843",

        strawberryRed: "#950600",
        berryBlue: "#1e1c31"
      },
   
      },
  },
  plugins: [],
}
