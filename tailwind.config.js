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
        22.5: "22.5px",
      },
      letterSpacing: {
        "tight-custom-02": "-0.006em",
        "tight-custom-03": "-0.036em",
        "tight-custon-04": "-0.038em",
      },
      maxWidth: {
        1440: "1440px",
        1200: "1200px",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".line-clamp-brackets": {
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          position: "relative",
        },
        ".line-clamp-brackets::after": {
          content: '"[ ... ]"',
          position: "absolute",
          bottom: "0",
          right: "0",
          background: theme("colors.gray.900"),
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        },
      });
    },
  ],
};
