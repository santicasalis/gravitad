/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: { colors: {
      // Agrega tus colores personalizados aquí
      primary: '#3498db',
      orange: '#FFA500',
      orangeFont: "#262626",
      navFont:"#E6E6E6" ,


    },
    fontFamily: {
      // Agrega tus fuentes personalizadas aquí
      custom: ['CustomFont', 'sans-serif'],
      barlow:"Barlow"

    },},
  },
  plugins: [],
};



