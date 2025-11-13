// export default {
//   darkMode: "class", 
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'stack-sans': ['"Stack Sans Headline"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
