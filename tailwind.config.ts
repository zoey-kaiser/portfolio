import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        pastel: {
          white: '#FAF8F6',
          green: '#91DDCF',
          lilac: '#E8C5E5',
          pink: '#F19ED2',
        }
      }
    }
  }
} satisfies Config
