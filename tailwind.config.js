/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        jellynav: '#06213A',
        jellyblue: '#007BFF',
        jellycyan: '#00CFEA',
        jellybg: '#F6F8FA'
      }
    }
  },
  plugins: [],
}
