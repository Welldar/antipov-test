import type { Config } from 'tailwindcss'
import formPlugin from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { fontFamily: { sans: '"Roboto", sans-serif' } },
  },
  plugins: [formPlugin],
} satisfies Config
