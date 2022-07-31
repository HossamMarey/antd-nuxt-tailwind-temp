module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',

    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
          light: 'var(--color-secondary-light)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          dark: 'var(--color-text-dark)',
          light: 'var(--color-text-light)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          dark: 'var(--color-bg-dark)',
          light: 'var(--color-bg-light)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        }

      },
      fontFamily: {
        Poppins: ['Poppins, "Poppins", Roboto, sans-serif'],
        Cairo: ['"Cairo", "Poppins", sans-serif'],
        Bebas: ['"Bebas Neue", "Poppins", sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-rtl'),],
  corePlugins: {
    preflight: false,
  },
}
