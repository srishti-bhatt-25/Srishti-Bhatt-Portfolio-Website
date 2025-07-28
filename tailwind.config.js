/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Gray-Blue Color Palette
        'gray-blue': {
          50: '#f8fafc',   // Very light gray-blue
          100: '#f1f5f9',  // Light gray-blue
          200: '#e2e8f0',  // Lighter gray-blue
          300: '#cbd5e1',  // Light gray-blue
          400: '#94a3b8',  // Medium gray-blue
          500: '#64748b',  // Base gray-blue
          600: '#475569',  // Dark gray-blue
          700: '#334155',  // Darker gray-blue
          800: '#1e293b',  // Very dark gray-blue
          900: '#0f172a',  // Deepest gray-blue
        },
        // Accent colors that complement gray-blue
        'accent': {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Light blue
          400: '#60a5fa',  // Medium blue
          500: '#3b82f6',  // Base blue
          600: '#2563eb',  // Dark blue
          700: '#1d4ed8',  // Darker blue
          800: '#1e40af',  // Very dark blue
          900: '#1e3a8a',  // Deepest blue
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};