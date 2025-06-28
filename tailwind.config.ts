import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f6feb',
        secondary: '#161b22',
        textClr: 'var(--text-color)',
        glassBg: 'var(--glass-bg)',
        border: 'var(--border)',
        badgeBorder: 'var(--badge-border)',
        background: `var(--background)`,
        foreground: '#c9d1d9',
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        code: ['var(--font-code)', 'monospace'],
      },
      spacing: { nav: '4rem' }, // Adjusted for navbar height
    },
  },
  plugins: [],
} satisfies Config;
