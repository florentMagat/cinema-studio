/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['Times']
    },
    screens: {
      "mobile": {
        "raw": "(min-width:200px) and (max-width: 768px) and (min-height: 600px)",
      },
      "tablet": {
        "raw": "(min-width:769px) and (max-width: 1023px) and (min-height: 700px) and (max-height: 836px)",
      },
      "laptop": {
        "raw": "(min-width: 1024px) and (min-height: 700px)",
      },
    },
  },
  plugins: [],
};
