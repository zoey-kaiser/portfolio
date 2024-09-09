import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

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
      },
      fontFamily: {
        playwrite: ['Playwrite CL'],
        varela: ['Varela Round']
      }
    }
  },
  plugins: [typography]
} satisfies Config
