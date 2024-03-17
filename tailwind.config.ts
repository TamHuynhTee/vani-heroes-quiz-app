import type { Config } from 'tailwindcss';

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
        primary: '#5818c6',
        secondary: '#f6f5f1',
        third: '#e4e4dc',
        fourth: '#e8e4d9',
        dark: '#3a3837',
        gray: '#7f7f7d',
        error: '#d66c7d',
        overlay: 'rgba(0, 0, 0, 0.5)',
        'modal-shadow': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
      borderRadius: {
        base: '0.25rem',
      },
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
export default config;
