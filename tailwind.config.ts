import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#1959AC",
        secondary: "#0546D2",
        text: "#222222",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
