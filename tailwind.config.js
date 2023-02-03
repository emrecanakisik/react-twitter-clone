/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203,89%,53%)",
          dark: "hsl(203,89%,46%)",
          light: "hsl(203,89%,96%)",
          notAcLights: "hsl(203,89%,73%)",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extralight: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        white: {
          transparent5: "rgba(255, 255, 255, .85)",
          mat: "#FFF",
        },
        black: "#14171A",
      },
    },
  },
  plugins: [],
};
