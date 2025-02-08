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
            }
          }
        },
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            // DEFAULT: '#050814',
            DEFAULT: '#1e2022',
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: "#1e2022",
            dark: "#1e2022",
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config