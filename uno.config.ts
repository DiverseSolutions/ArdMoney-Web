// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  rules: [
    ['p-1px', { padding: '1px !important' }]
  ],
  shortcuts: { 
    "btn" : "flex items-center h-full w-full justify-center rounded-3xs cursor-pointer bg-primary font-normal text-white text-3xs md:text-base px-base py-sm btn-animation",
    "btn-animation" : "transition-transform hover:scale-75 cursor-pointer",
    "btn-outline" : "btn bg-transparent border-primary border",
    "document-link" : "text-secondary underline",
    "input" : "bg-transparent text-right appearance-none outline-0 w-full",
  },
  theme : {
    animation: {},
    breakpoints: {
      sm: "391px",
      md: "834px",
      lg: "1184px",
      xl: "1300px",
    },
    fontFamily: {
      sans: "PP Neue Machina",
      serif: "Merriweather",
    },
    colors: {
      "primary-back": "rgba(131, 98, 253, 0.1)",
      "primary-disabled": "rgba(131, 98, 253, 0.2)",
      "primary-terteriary": "rgba(131, 98, 253, 0.35)",
      "primary-secondary": "rgba(131, 98, 253, 0.65)",
      "primary-soft": "rgba(131, 98, 253, 0.93)",
      primary: "#8362FD",

      "secondary-back": "rgba(171, 252, 134, 0.1)",
      "secondary-disabled": "rgba(171, 252, 134, 0.2)",
      "secondary-terteriary": "rgba(171, 252, 134, 0.35)",
      "secondary-secondary": "rgba(171, 252, 134, 0.65)",
      "secondary-soft": "rgba(171, 252, 134, 0.93)",
      secondary: "#ABFC86",

      "light-back": "rgba(255, 255, 255, 0.1)",
      "light-disabled": "rgba(255, 255, 255, 0.2)",
      "light-terteriary": "rgba(255, 255, 255, 0.35)",
      "light-secondary": "rgba(255, 255, 255, 0.65)",
      "light-soft": "rgba(255, 255, 255, 0.93)",
      light: "#FFFFFF",

      "dark-back": "rgba(0, 0, 0, 0.1)",
      "dark-disabled": "rgba(0, 0, 0, 0.2)",
      "dark-terteriary": "rgba(0, 0, 0, 0.35)",
      "dark-secondary": "rgba(0, 0, 0, 0.65)",
      "dark-soft": "rgba(0, 0, 0, 0.93)",
      dark: "#000000",
    },
    width: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "56px",
    },
    height: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "56px",
    },
    borderRadius: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "56px",
    },
    fontSize: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "56px",
    },
    lineHeight: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "12px",
      xs: "12px",
      sm: "20px",
      base: "24px",
      lg: "28px",
      xl: "32px",
      "2xl": "36px",
      "3xl": "44px",
      "4xl": "60px",
    },
    spacing: {
      "4xs": "4px",
      "3xs": "8px",
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "48px",
      "4xl": "56px",

      "layout-sm": "64px",
      "layout-lg": "128px",
      "layout-xl": "256px",
    },
  },
  preflights: [
    {
      getCSS: ({ theme }) => `
        h1 {
          fontSize: ${theme.fontSize?.["4xl"]};
        }

        h2 {
          fontSize: ${theme.fontSize?.["3xl"]};
        }

        h3 {
          fontSize: ${theme.fontSize?.["2xl"]};
        }

        h4 {
          fontSize: ${theme.fontSize?.["xl"]};
        }

        h5 {
          fontSize: ${theme.fontSize?.["lg"]};
        }

        p {
          fontSize: ${theme.fontSize?.["base"]};
        }

        span {
          fontSize: ${theme.fontSize?.["sm"]};
          color: inherit; 
        }

        body{
          font-family: PP Neue Machina;
        }
`
    }
  ],
  presets: [
    presetWind(),
  ],
})
