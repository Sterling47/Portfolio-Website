module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your file structure
  theme: {
    extend: {
      colors: {
        shadowGray: 'rgba(78, 78, 78, 0.9)',
      },

      animation: {
        moveUp: "moveUp 6s ease-in-out infinite",
        moveDown: "moveDown 6s ease-in-out infinite",
        wave: 'wave 6s linear infinite',
        scrollLeft: 'scrollLeft 50s linear infinite',
        scrollRight: 'scrollRight 50s linear infinite',
      },
      boxShadow: {
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


