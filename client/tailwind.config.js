/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "width-nav": "244px",
        "width-content": "630px",
      },
      padding: {
        "px-main": "0 110px",
        "px-sub": "0 80px",
        "p-story": "1px",
      },
    },
  },
  plugins: [],
};
