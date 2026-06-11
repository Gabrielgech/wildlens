import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        secondary: '#8B5E3C',
        background: '#1A1A2E',
        surface: '#16213E',
        textLight: '#E8F5E9',
        accent: '#52B788',
        warning: '#F4A261',
        danger: '#E63946'
      }
    }
  },
  plugins: []
} as Config
