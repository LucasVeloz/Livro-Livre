import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "base": "0px 2px 10px 0px rgba(0,0,0,0.10)"
      },
      colors: {
        primary: "#037030",
        secondary: "#0A3063",
        tertiary: "#8EA2A2",
        background: "white",
        custom: {
          black: "#1d1e1f",
          white: "#FBFDFD",
          darkGray: "#717171",
          lightGray: "#E4E4E7",
        }
      },
    },
  },
  plugins: [],
};
export default config;
