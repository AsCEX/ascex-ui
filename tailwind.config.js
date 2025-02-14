import { Config } from "tailwindcss"
const colors = require('tailwindcss/colors');
import { colors as grayLemonColors } from './src/utils/colors'

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        'primary': '#00563B',

        'sidebar-bg': '#eeeeee',
        'sidebar-bg-dark': '#222831',
        'sidebar-menu-bg-active': '#00563B',
        'sidebar-menu-bg-active-dark': '#00563B',

        'main-bg': '#fff',
        'main-bg-dark': '#222831',

        'table-bg': '#FFF',
        'table-bg-dark': '#1e2022',
        'table-bg-odd-dark': '#2a2d30',

        'table-header-bg': '#FFF',
        'table-header-bg-dark': '#222831',
        'table-border-color': '#31363F',
        'table-border-color-dark': '#31363F',
        'table-header-text-color': '#000',
        'table-header-text-color-dark': '#c1c1c1',


        'modal-bg-dark': '#222831',
        'modal-bg-overlay': 'rgba(34,40,49,0.47)',

        gray: {
          400: "#dfe1e5",
          925: "#2a2d30"
        },
        "gray-lemon": {
          dark: {
            // accent: '#d1bc78',
            accent: grayLemonColors.gray[100],
            'accent-hover': grayLemonColors.gray[50],
            'accent-muted': '#363636',
            text: grayLemonColors.gray['10'],
            primary: grayLemonColors.gray['100'],
            secondary: grayLemonColors.gray['50'],
            border: grayLemonColors.gray['80'],
            sidebar: {
              border: grayLemonColors.gray['100'],
              divider: grayLemonColors.gray['80'],
              link: {
                text: '',
                background: '',
                indicator: '',
                active: {
                  text: '',
                  background: '',
                  indicator: '',
                },
              },
              subLink: {
                text: grayLemonColors.gray['10'],
                background: '',
                indicator: grayLemonColors.gray['100'],
                border: '',
                active: {
                  text: '',
                  background: grayLemonColors.gray['100'],
                  indicator: grayLemonColors.gray['10'],
                  border: grayLemonColors.gray['80'],
                },
              },
            },
            button: {
              DEFAULT: grayLemonColors[50],
              hover: grayLemonColors[80],
            }
          }
        },
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card':
            '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown':
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
            "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config