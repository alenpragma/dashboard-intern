module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      clipPath: {
        'custom-clip': 'polygon(0 0, 13% 0, 20% 10%, 100% 10%, 100% 100%, 0 100%)',
        'custom-clip2': 'polygon(0 9%, 72% 9%, 81% 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.clip-path-custom': {
          'clip-path': 'polygon(0 0, 13% 0, 20% 10%, 100% 10%, 100% 100%, 0 100%)',
        },
        '.clip-path2-custom': {
          'clip-path': 'polygon(0 9%, 72% 9%, 81% 0, 100% 0, 100% 100%, 0 100%)',
        },
      });
    },
  ],
};
