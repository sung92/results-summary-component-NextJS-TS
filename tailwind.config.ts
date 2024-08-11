import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        lightred: "hsl(0, 100%, 67%)",
        orangeyellow: "hsl(39, 100%, 56%)",
        greenteal: "hsl(166, 100%, 37%)",
        cobaltblue: "hsl(234, 85%, 45%)",
      },
      gradients: {
        slateblue: "hsl(252, 100%, 67%)",
        royalblue: "hsl(241, 81%, 54%)",
        circle: {
          violetblue: "hsl(256, 72%, 46%)", // /1
          persianblue: "hsl(241, 72%, 46%)", // /0
        },
      },
      neutral: {
        paleblue: "hsl(221, 100%, 96%)",
        lightlavender: "hsl(241, 100%, 89%)",
        grayblue: "hsl(224, 30%, 27%)",
      },
    },
    screens: { desktop: "700px" },
    extend: {},
  },
  plugins: [],
};
export default config;
