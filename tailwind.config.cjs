/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '390px',
        md: '834px',
        lg: '1184px',
      },
      fontFamily: {
        sans: ['PP Neue Machina', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors : {
        "primary-back": "rgba(131, 98, 253, 0.1)",
        "primary-disabled": "rgba(131, 98, 253, 0.2)",
        "primary-terteriary": "rgba(131, 98, 253, 0.35)",
        "primary-secondary": "rgba(131, 98, 253, 0.65)",
        "primary-soft": "rgba(131, 98, 253, 0.93)",
        "primary": "#8362FD",

        "secondary-back": "rgba(171, 252, 134, 0.1)",
        "secondary-disabled": "rgba(171, 252, 134, 0.2)",
        "secondary-terteriary": "rgba(171, 252, 134, 0.35)",
        "secondary-secondary": "rgba(171, 252, 134, 0.65)",
        "secondary-soft": "rgba(171, 252, 134, 0.93)",
        "secondary": "#ABFC86",

        "light-back": "rgba(255, 255, 255, 0.1)",
        "light-disabled": "rgba(255, 255, 255, 0.2)",
        "light-terteriary": "rgba(255, 255, 255, 0.35)",
        "light-secondary": "rgba(255, 255, 255, 0.65)",
        "light-soft": "rgba(255, 255, 255, 0.93)",
        "light": "#FFFFFF",

        "dark-back": "rgba(0, 0, 0, 0.1)",
        "dark-disabled": "rgba(0, 0, 0, 0.2)",
        "dark-terteriary": "rgba(0, 0, 0, 0.35)",
        "dark-secondary": "rgba(0, 0, 0, 0.65)",
        "dark-soft": "rgba(0, 0, 0, 0.93)",
        "dark": "#000000",

      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '12px' }],
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['20px', { lineHeight: '28px' }],
        xl: ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '36px' }],
        '3xl': ['40px', { lineHeight: '44px' }],
        '4xl': ['56px', { lineHeight: '60px' }],
      },
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "base": "16px",
        "lg": "24px",
        "xl": "28px",
      },
      gap: {
        "xs": "4px",
        "sm": "8px",
        "base": "16px",
        "lg": "24px",
        "xl": "28px",
      },
    },
  },
  plugins: [],
}
