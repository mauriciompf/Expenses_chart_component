const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pri-soft-red": "hsl(10, 79%, 65%)",
        "pri-cyan": "hsl(186, 34%, 60%)",
        "neu-park-brown": "hsl(25, 47%, 15%)",
        "neu-medium-brown": "hsl(28, 10%, 53%)",
        "neu-cream": "hsl(27, 66%, 92%)",
        "neu-very-pale-orange": "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};
