/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius:{
        'full' : '50%',
      },
      width:{
        "NotFull": '90%',
      },
      height :{
        '18' : '4.5rem',
      },
      fontFamily:{
        'kanit' : ['kanit',],
        'kanit-regular' : ['kanit-regular'],
        'kanit-medium' : ['kanit-medium'],
        'RussoOne-Regular' : ['RussoOne-Regular'],
        'BreeSerif-regular' : ['BreeSerif-regular'],
      },
      backgroundColor:{
        'darkBackground2':'#1f2a48',
        'lightBackground2': '#f5f8ff',
        'lightBackground': '#fefefe',
        
        'darkBackground': '#141c30',
      },
    },
  },
  plugins: [],
}

