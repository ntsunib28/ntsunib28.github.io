/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
          primary: {
            1: '#00f2fe',
            2: '#4facfe'
          },
          secondary: {
            1: '#a200ff',
            2: '#480071',
          }
      },
      gradientColorStops: {
        'custom-gradient': {
          '0%': '#00f2fe',   // Starting color
          '25%': '#1571c2',  // 1/4
          '75%': '#5c0091',  // 3/4 
          '100%': '#d400ff', // Ending color
        },
      },
    },
  },
  fontFamily: {
    title : "'Ethnocentric Rg', sans",
    body : "'Poppins', sans"
  },
  plugins: [],
}

