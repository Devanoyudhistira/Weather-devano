module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
          Keyframes: {
            slideup: {
              "0%": { transform: "translateY(500px)" },
              "100%": { transform: "translateY(190px)" },
            },
          },
          colors: {
            clifford: "#da373d",
          },
          fontFamily: {
            poppins: ["poppins"],
          },
          Animation: {
            slideup: "slideup 750ms ",
          },
        },
      },
  }