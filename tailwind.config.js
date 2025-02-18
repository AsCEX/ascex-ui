import { ascexUIColor } from "./src/utils/colors";

/** @type {import('tailwindcss').Config} */
export default {
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

        gray: { 925: "#2a2d30" },
        table: {
          primary: '#1e2022'
        },

        "gray-lemon": {
          dark: {
            // accent: '#d1bc78',
            accent: ascexUIColor.gray[100],
            'accent-hover': ascexUIColor.gray[50],
            'accent-muted': '#363636',
            text: ascexUIColor.gray['10'],
            header: '#222831',
            disabled: '#1d222b',
            primary: ascexUIColor.gray['100'],
            secondary: ascexUIColor.gray['50'],
            border: ascexUIColor.gray['80'],
            sidebar: {
              divider: ascexUIColor.gray['80'],
              border: ascexUIColor.gray['80'],
              // border: '#262c33',
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
                text: ascexUIColor.gray['10'],
                background: '',
                indicator: ascexUIColor.gray['100'],
                border: '',
                active: {
                  text: '',
                  background: '#0b1520',
                  indicator: ascexUIColor.gray['10'],
                  border: ascexUIColor.gray['80'],
                },
              },
            },
            scrollbar: {
              background: ascexUIColor.gray['50'],
              handle: ascexUIColor.gray['30'],
              'handle-hover': ascexUIColor.gray['20'],
            },
            button: {
              DEFAULT: ascexUIColor[50],
              hover: ascexUIColor[80],
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
  plugins: [],
}
