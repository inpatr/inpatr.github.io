module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightblue: "#93CBFF",
      paleblue: "rgba(147, 203, 255, 0.5)",
      altrose: "#898298",
      darkaltrose: "#4D4858",
      lightaltrose: "#D2CBE2",
    },
    extend: {
      backgroundImage: {
        halfbubble: "url('./assets/subtractedbubble.svg')",
        tinydevil: "url('./assets/deviltiny.svg')",
        devil: "url('./assets/devil.svg')",
      },
      spacing: {
        128: "32rem",
        220: "55rem",
      },
    },
  },
  plugins: [],
};
