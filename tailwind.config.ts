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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'solution-section': ' linear-gradient(139deg, #2270F0 0%, #1EC4FA 61.91%);',
        'webInfo-section': ' linear-gradient(29deg, #0B548C 19.04%, #136AAE 55.46%, #1386DE 83.61%);',
        'breport-section': 'linear-gradient(252deg, #FF7317 20.06%, #F98723 48.5%, #F7922A 80.41%);',
      },
    },
    screens: {
      xxs: { 'max': '375px' },
      xs: '375px',
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      screens: {
        xs: "425px",
        md: "768px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
}
export default config
