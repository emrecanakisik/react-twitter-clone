/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "rgba(29,155,240,1)", //rgba(28,160,242,1)
          dark: "rgba(13,142,222,1)", //rgba(13,142,222,1)
          light: "rgba(29,155,240,0.1)", //rgba(236,247,254,1)
          notAcLights: "rgba(125,200,247,1)", //rgba(125,200,247,1)
        },
        gray: {
          dark: "rgba(101, 119, 134, 1)", //rgba(101, 119, 134, 1)
          light: "rgba(170, 184, 194, 1)", //rgba(170, 184, 194, 1)
          extralight: "rgba(0,0,0, 0.03)", //rgba(225, 232, 237, 1)
          lightest: "rgba(247, 249, 249, 1)", //rgba(245, 248, 250, 1)
        },
        white: {
          transparent5: "rgba(255, 255, 255, .85)",
          mat: "#FFF",
        },
        black: "rgba(20, 23, 26, 1)", //rgba(20, 23, 26, 1)
      },
    },
  },
  plugins: [],
};
