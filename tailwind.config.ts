import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base UI colors
        background: 'hsl(210, 100%, 98%)',
        card: 'hsl(0, 0%, 100%)',
        border: 'hsl(220, 15%, 90%)',
        text: 'hsl(220, 35%, 20%)',
        muted: 'hsl(220, 15%, 60%)',

        // Accent colors
        primary: 'hsl(215, 90%, 60%)',
        outline: 'hsl(215, 80%, 50%)',
        link: 'hsl(210, 100%, 50%)',
      },
      fontSize: {
        base: 'clamp(0.95rem, 1vw, 1.05rem)',
        lg: 'clamp(1.1rem, 1.2vw, 1.3rem)',
        xl: 'clamp(1.25rem, 2vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 3vw, 2rem)',
      },
      spacing: {
        fluid: 'clamp(1rem, 2vw, 2rem)',
      },
      borderRadius: {
        soft: '0.75rem',
      },
      boxShadow: {
        soft: '0 2px 6px rgba(0,0,0,0.05)',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '25ch' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        highlight: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0px transparent' },
          '50%': { transform: 'scale(1.015)', boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0px transparent' },
        },
      },
      animation: {
        typewriter: 'typewriter 3s steps(25) 0.5s 1 normal both',
        blink: 'blink 0.8s step-end infinite',
        highlight: 'highlight 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
