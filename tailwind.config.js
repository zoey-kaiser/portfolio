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
          lilac: {
            DEFAULT: '#E8C5E5',
            50: '#FCF6FB',
            100: '#F9F1F9',
            200: '#F5E6F4',
            300: '#F1DBEF',
            400: '#ECD0EA',
            500: '#E8C5E5',
            600: '#D89DD3',
            700: '#C875C1',
            800: '#B84CAF',
            900: '#933A8B',
            950: '#7E3278'
          },
          pink: '#F19ED2',
        }
      },
      fontFamily: {
        playpen: ['Playpen Sans'],
        varela: ['Varela Round']
      }
    }
  },
  plugins: [typography]
}
