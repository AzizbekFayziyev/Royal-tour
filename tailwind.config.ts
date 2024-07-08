import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      light: "#14265766",
      lightBlue: "#f2f8ff",
      lightBlue2: "#daeaff",
      lightYellow: "#fffcf5",
      lightYellow2: "#fff5e3",
     }
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: false,
    themes: [
      {
        default: {
          primary: "#2985ff",
          secondary: "#ffd785",
          accent: "#f2f8ff",
          neutral: "#142657",
          "base-100": "#ffffff",
          "--rounded-btn": "1000px",
          ".btn-primary": {
            color: "#ffffff",
          },
        },
      },
    ],
  },
};
export default config;
