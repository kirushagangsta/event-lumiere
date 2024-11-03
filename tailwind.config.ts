import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

export default <Partial<Config>> {
  content: [
    './assets/styles/*.css',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    screens: {
      xl: '1140px',
      xxl: '1920px'
    },
    fontFamily: {
      trajan: ['Trajan', 'serif'],
      cormorant: ['Cormorant', 'serif'],
      serif: ['Source Serif', 'serif'],
      forum: ['Forum', 'serif']
    }
  },
}
