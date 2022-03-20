module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // added colors and shades
      colors: {
        primary: "#4683c8",
        secondary: "#e3e8ef",
        darkGray: "#3f3f46",
        lightGray: "#d1d5db"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
