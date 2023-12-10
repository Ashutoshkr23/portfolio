import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#0c0c0f',
        'blue-1': '#5CB8E4',
        'blue-2': '#5CDCE4',
        'white-1': '#f5f5fa',
        'green': 'rgba(106, 226, 199, .5)',
        'green-2': 'rgba(106, 226, 199, 1)'
      },
      dropShadow: {
        'white': '0 35px 35px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
export default config
