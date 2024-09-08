/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-flex": ['"Roboto Flex"', "sans-serif"],
        "roboto-condensed": ["roboto_condensedregular", "sans-serif"],
        bebas: ["bebas_neueregular", "sans-serif"],
      },
      fontSize: {
        "15px": "15px",
      },
      lineHeight: {
        5.5: "22.5px",
      },
      letterSpacing: {
        "tight-0.02": "0.02em",
        "tight-0.03": "0.03em",
        "tight-0.04": "0.04em",
      },
      maxWidth: {
        1440: "1440px",
        1200: "1200px",
      },
    },
  },
  plugins: [],
};
