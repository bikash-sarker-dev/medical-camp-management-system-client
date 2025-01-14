const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "serif"],
    },
    extend: {},
    colors: {
      "camp-text": "#090c15",
      "camp-background": "#f7fafd",
      "camp-primary": "#4c71c8",
      "camp-secondary": "#84a0e1",
      "camp-accent": "#5b81e1",
      "camp-info": "#D5DFF2",
      "camp-default": "#EAEEF1",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
});
