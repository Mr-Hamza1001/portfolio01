import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'ts': {'max': '384px'},
        'xs': {'min':'384px', 'max':'639px'},
        'sm': {'min':'640px', 'max':'767px'},
        'md': {'min':'768px', 'max':'1023px'},
        'lg': {'min':'1024px', 'max':'1279px'},
        'xl': {'min':'1280px', 'max':'1535px'},
        '2xl': {'min':'1536px'},
      },
      colors: {
        A2:"#A2A5FF",
        gray: "#ABB2BF",
        primary: "#A2A5FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
