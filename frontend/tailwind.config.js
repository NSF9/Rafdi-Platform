export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rafdi: {
          dark: '#1f3f5c',
          primary: '#2e5f8a',
          light: '#4a88bf',
          bg: '#f9f4eb',
          ink: '#111827',
          success: '#059669',
          warning: '#d97706',
          error: '#991b1b',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(31, 63, 92, 0.12)',
        panel: '0 12px 24px rgba(31, 63, 92, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
