import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'sharp-grotesk-lt': 'SharpGroteskLt',
        'sharp-grotesk-md': 'SharpGroteskMd',
        'futura-lt': 'FuturaLt',
        'futura-bk': 'FuturaBk',
        'futura-md': 'FuturaMd',
        'test-grotesk': ['Schibsted Grotesk', 'sans-serif']
      },
      colors: {
        'black': '#1C1C1C',
        'primary': '#214ADC',
        'secondary': '#77FE74',
        'alternate': '#F2F2F2',
      },
      boxShadow: {
        'button-shadow': '0px 4px 24px 0px rgba(0, 0, 0, 0.20);',
      }
    },
  },
  plugins: [],
}
export default config
