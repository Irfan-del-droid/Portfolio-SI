/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'orbitron': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        'cyber-dark': '#0a0e27',
        'cyber-darker': '#050812',
        'neon-cyan': '#00d4ff',
        'neon-purple': '#b300ff',
        'neon-pink': '#ff006e',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(179, 0, 255, 0.5), 0 0 40px rgba(179, 0, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)',
      },
    },
  },
  plugins: [],
}
