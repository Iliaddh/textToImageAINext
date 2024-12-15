/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'mobile': '320px',
      'mobile2': '375px',
      'mobile3': '425px',
      'tablet': '640px',
      'tablet2': '768px',
      'laptop': '1024px',
        'desktop': '1280px',
        'desktop2': '1536px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
