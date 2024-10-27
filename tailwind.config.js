/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#0d1117",
        emDark: {
          bgTop: "#151A22",
          dark: "#010101",
          DEFAULT: "#3c3b3b",
          light: "#828282",
        },
        emPurple: {
          dark: "#2B2B2B",
          DEFAULT: "#6E6E6E",
          light: "#B3B3B3",
        },
        emLavender: {
          dark: "#596270",
          DEFAULT: "#7A8A9A",
          light: "#B0BCC9"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        workRegular: ["var(--font-work-sans-regular)"],
        workBold: ["var(--font-work-sans-bold)"],
      },
    },
  },
  plugins: [],
};
