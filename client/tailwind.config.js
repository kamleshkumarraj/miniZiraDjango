export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        bg2: "#111821",
        accent: "#00e0c8",
        muted: "#9aa6b8",
        glass: "rgba(255,255,255,0.06)",
        borderGlass: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "18px",
      },
    },
  },
  plugins: [],
};
