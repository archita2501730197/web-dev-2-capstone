/** @type {import('tailwindcss').Config} */
export default {
  // 1. This tells Tailwind which files to scan for classes (Crucial for rows/cols)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // 2. Enables the Dark Mode toggle feature we built
  darkMode: 'class', 
  
  theme: {
    extend: {
      // 3. Customizations for a more "Premium" look
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed', // This is a deep Indigo
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      // Smooth animations for the hover effects
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}