import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        secondary: '#52B788',
        background: '#F8FBF0',
        surface: '#FFFFFF',
        textLight: '#1A3326',
        textSecondary: '#4A7C59',
        accent: '#52B788',
        warning: '#F4A261',
        danger: '#E63946',
        border: '#C8E6C9',
        lightGreen: '#E8F5E9',
        lightRed: '#FFEBEE'
      }
    }
  },
  plugins: []
} as Config
