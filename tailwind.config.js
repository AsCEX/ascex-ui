/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      fontFamily: {
        inter: 'inter, Times New Roman, serif',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom, #1d7c3d, #3da245)',
      }
    }
  },
  plugins: [],
}

