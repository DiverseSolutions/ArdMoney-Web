// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  rules: [
    ['p-1px', { padding: '1px !important' }],

    ['text-light-secondary', { color: "rgba(255, 255, 255, 0.65) !important" }],
    ['text-light-back', { color: "rgba(255, 255, 255, 0.1) !important" }],
    ['text-light-disabled', { color: "rgba(255, 255, 255, 0.2) !important" }],
    ['text-light-terteriary', { color: "rgba(255, 255, 255, 0.35) !important" }],
    ['text-light-soft', { color: "rgba(255, 255, 255, 0.93) !important" }],

    ['text-primary-back', { color: "rgba(131, 98, 253, 0.1) !important" }],
    ['text-primary-disabled', { color: "rgba(131, 98, 253, 0.2) !important" }],
    ['text-primary-terteriary', { color: "rgba(131, 98, 253, 0.35) !important" }],
    ['text-primary-secondary', { color: "rgba(131, 98, 253, 0.65) !important" }],
    ['text-primary-soft', { color: "rgba(131, 98, 253, 0.93) !important" }],

    ['text-dark-back', { color: "rgba(0, 0, 0, 0.1) !important" }],
    ['text-dark-disabled', { color: "rgba(0, 0, 0, 0.2) !important" }],
    ['text-dark-terteriary', { color: "rgba(0, 0, 0, 0.35) !important" }],
    ['text-dark-secondary', { color: "rgba(0, 0, 0, 0.65) !important" }],
    ['text-dark-soft', { color: "rgba(0, 0, 0, 0.93) !important" }],

    ['text-secondary-back', { color: "rgba(171, 252, 134, 0.1) !important" }],
    ['text-secondary-disabled', { color: "rgba(171, 252, 134, 0.2) !important" }],
    ['text-secondary-terteriary', { color: "rgba(171, 252, 134, 0.35) !important" }],
    ['text-secondary-secondary', { color: "rgba(171, 252, 134, 0.65) !important" }],
    ['text-secondary-soft', { color: "rgba(171, 252, 134, 0.93) !important" }],

    ['bg-light-secondary', { "background-color": "rgba(255, 255, 255, 0.65) !important" }],
    ['bg-light-back', { "background-color": "rgba(255, 255, 255, 0.1) !important" }],
    ['bg-light-disabled', { "background-color": "rgba(255, 255, 255, 0.2) !important" }],
    ['bg-light-terteriary', { "background-color": "rgba(255, 255, 255, 0.35) !important" }],
    ['bg-light-soft', { "background-color": "rgba(255, 255, 255, 0.93) !important" }],

    ['bg-primary-back', { "background-color": "rgba(131, 98, 253, 0.1) !important" }],
    ['bg-primary-disabled', { "background-color": "rgba(131, 98, 253, 0.2) !important" }],
    ['bg-primary-terteriary', { "background-color": "rgba(131, 98, 253, 0.35) !important" }],
    ['bg-primary-secondary', { "background-color": "rgba(131, 98, 253, 0.65) !important" }],
    ['bg-primary-soft', { "background-color": "rgba(131, 98, 253, 0.93) !important" }],

    ['bg-dark-back', { "background-color": "rgba(0, 0, 0, 0.1) !important" }],
    ['bg-dark-disabled', { "background-color": "rgba(0, 0, 0, 0.2) !important" }],
    ['bg-dark-terteriary', { "background-color": "rgba(0, 0, 0, 0.35) !important" }],
    ['bg-dark-secondary', { "background-color": "rgba(0, 0, 0, 0.65) !important" }],
    ['bg-dark-soft', { "background-color": "rgba(0, 0, 0, 0.93) !important" }],

    ['bg-secondary-back', { "background-color": "rgba(171, 252, 134, 0.1) !important" }],
    ['bg-secondary-disabled', { "background-color": "rgba(171, 252, 134, 0.2) !important" }],
    ['bg-secondary-terteriary', { "background-color": "rgba(171, 252, 134, 0.35) !important" }],
    ['bg-secondary-secondary', { "background-color": "rgba(171, 252, 134, 0.65) !important" }],
    ['bg-secondary-soft', { "background-color": "rgba(171, 252, 134, 0.93) !important" }],

    ['font-light', { "font-weight": "300 !important" }],
    ['font-normal', { "font-weight": "400 !important" }],
    ['font-bold', { "font-weight": "600 !important" }],

    ['text-4xs', { 
      "font-size": "4px !important",
      "line-height": "4px !important" 
    }],
    ['text-3xs', { 
      "font-size": "8px !important",
      "line-height": "8px !important" 
    }],
    ['text-2xs', { 
      "font-size": "10px !important",
      "line-height": "12px !important" 
    }],
    ['text-xs', { 
      "font-size": "20px !important",
      "line-height": "12px !important" 
    }],
    ['text-sm', { 
      "font-size": "14px !important",
      "line-height": "20px !important" 
    }],
    ['text-base', { 
      "font-size": "16px !important",
      "line-height": "24px !important" 
    }],
    ['text-lg', { 
      "font-size": "20px !important",
      "line-height": "28px !important" 
    }],
    ['text-xl', { 
      "font-size": "24px !important",
      "line-height": "32px !important" 
    }],
    ['text-2xl', { 
      "font-size": "32px !important",
      "line-height": "36px !important" 
    }],
    ['text-3xl', { 
      "font-size": "40px !important",
      "line-height": "44px !important" 
    }],
    ['text-4xl', { 
      "font-size": "56px !important",
      "line-height": "60px !important" 
    }],

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
      primary: "#8362FD",
      secondary: "#ABFC86",
      light: "#FFFFFF",
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
      "xs": "12px",
      "sm": "20px",
      "base": "24px",
      "lg": "28px",
      "xl": "32px",
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
          line-height: ${theme.lineHeight?.["4xl"]};
          color: inherit;
          font-weight: inherit;
        }

        h2 {
          fontSize: ${theme.fontSize?.["3xl"]};
          line-height: ${theme.lineHeight?.["3xl"]};
          color: inherit;
          font-weight: inherit;
        }

        h3 {
          fontSize: ${theme.fontSize?.["2xl"]};
          line-height: ${theme.lineHeight?.["2xl"]};
          color: inherit;
          font-weight: inherit;
        }

        h4 {
          fontSize: ${theme.fontSize?.["xl"]};
          line-height: ${theme.lineHeight?.["xl"]};
          color: inherit;
          font-weight: inherit;
        }

        h5 {
          fontSize: ${theme.fontSize?.["lg"]};
          line-height: ${theme.lineHeight?.["lg"]};
          color: inherit;
          font-weight: inherit;
        }

        p {
          fontSize: ${theme.fontSize?.["base"]};
          line-height: ${theme.lineHeight?.["base"]};
          color: inherit;
          font-weight: inherit;
        }

        span {
          fontSize: ${theme.fontSize?.["sm"]};
          color: inherit;
          font-weight: inherit;
        }

        body{
          font-family: PP Neue Machina;
          color: inherit;
          font-weight: 400;
        }
`
    }
  ],
  presets: [
    presetWind(),
  ],
})
