module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          smoky: {
            DEFAULT: "#faf9f7",
            card: "rgba(255,255,255,0.7)",
          },
        },
        backdropBlur: {
          glass: "20px",
        },
        boxShadow: {
          glass: "0 20px 30px -12px rgba(0,0,0,0.12)",
        },
        borderRadius: {
          lg: "16px",
        },
      },
    },
    plugins: [],
  }
  