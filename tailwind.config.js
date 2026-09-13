/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#0b0c10',
          card: '#16181d',
          gold: '#e0a96d',
          blue: '#2997ff',
          gray: '#86868b',
          lightGray: '#f5f5f7',
          accent: '#e63946'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(41, 151, 255, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(41, 151, 255, 0.9)' },
        }
      }
    },
  },
  plugins: [],
}
