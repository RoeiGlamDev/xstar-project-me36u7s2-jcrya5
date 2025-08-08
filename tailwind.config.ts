import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS configuration for luxury LRP cosmetics.
 * This configuration includes custom colors and animations
 * tailored for a luxury cosmetics brand.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // Custom orange color for luxury LRP cosmetics
        },
        white: {
          DEFAULT: '#FFFFFF', // Custom white color for luxury LRP cosmetics
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});