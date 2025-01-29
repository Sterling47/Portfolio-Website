module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your file structure
  theme: {
    extend: {
      colors: {
        shadowGray: 'rgba(190, 190, 190, .321)',
      },

      animation: {
        moveUp: "moveUp 6s ease-in-out infinite",
        moveDown: "moveDown 6s ease-in-out infinite",
        wave: 'wave 6s linear infinite',
        scrollLeft: 'scrollLeft 50s linear infinite',
        scrollRight: 'scrollRight 50s linear infinite',
      },
      boxShadow: {
        'gradient': '0px 5px 15px rgba(0,204,177,0.3), 0px 10px 30px rgba(123,97,255,0.3), 0px 15px 45px rgba(255,196,20,0.3), 0px 20px 60px rgba(28,160,251,0.3)',
        'inset-orange': 'inset 0 0 10px #000000',
        'inset-complex': 
          'inset 3px 3px 6px 0px rgb(204, 219, 232), inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        moveUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        moveDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },

      },
    },
  },
  plugins: [],
};


