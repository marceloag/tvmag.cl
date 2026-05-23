/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, #7b2fff 0%, #00d4c8 50%, #ff3b7f 100%)',
      },
      colors: {
        space:  '#06090f',
        navy:   '#080d1a',
        teal:   '#00d4c8',
        violet: '#7b2fff',
        rose:   '#ff3b7f',
        amber:  '#ffaa00',
      },
      animation: {
        'aurora-1': 'aurora-1 18s ease-in-out infinite',
        'aurora-2': 'aurora-2 24s ease-in-out infinite',
        'aurora-3': 'aurora-3 20s ease-in-out infinite',
        'float':    'float 6s ease-in-out infinite',
        'marquee':  'marquee 28s linear infinite',
        'fade-up':  'fade-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'fade-in':  'fade-in 0.9s ease both',
        'pulse-dot':'pulse-dot 1.4s ease-in-out infinite',
      },
      keyframes: {
        'aurora-1': {
          '0%':   { transform: 'translate(0%, 0%) scale(1)' },
          '33%':  { transform: 'translate(3%, -4%) scale(1.08)' },
          '66%':  { transform: 'translate(-2%, 3%) scale(0.96)' },
          '100%': { transform: 'translate(0%, 0%) scale(1)' },
        },
        'aurora-2': {
          '0%':   { transform: 'translate(0%, 0%) scale(1.05)' },
          '40%':  { transform: 'translate(-5%, 3%) scale(0.95)' },
          '70%':  { transform: 'translate(4%, -2%) scale(1.1)' },
          '100%': { transform: 'translate(0%, 0%) scale(1.05)' },
        },
        'aurora-3': {
          '0%':   { transform: 'translate(0%, 0%) scale(0.98)' },
          '50%':  { transform: 'translate(2%, 5%) scale(1.06)' },
          '100%': { transform: 'translate(0%, 0%) scale(0.98)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%':      { transform: 'translateY(-18px) rotate(1deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
};
