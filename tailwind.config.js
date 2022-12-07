//  @type {import('tailwindcss').Config} 

module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#0060AF'
      }
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1028px',
      xl: '1440px',
    }
  },
  plugins: [
    require ('flowbite/plugin')
  ], 
}
