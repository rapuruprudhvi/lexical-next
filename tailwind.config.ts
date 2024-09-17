// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts,jsx,tsx}",  // Add this if you have plugins in a separate folder
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-h1': '2.25rem', // Example size for h1
        'heading-h2': '1.875rem', // Example size for h2
        'heading-h3': '1.5rem', // Example size for h3
        'heading-h4': '1.25rem', // Example size for h4
        'heading-h5': '1.125rem', // Example size for h5
        'heading-h6': '1rem', // Example size for h6
      },
      fontWeight: {
        'heading': '700', // Example font weight for headings
      },
      lineHeight: {
        'heading-h1': '2.5rem',
        'heading-h2': '2.25rem',
        'heading-h3': '2rem',
        'heading-h4': '1.75rem',
        'heading-h5': '1.5rem',
        'heading-h6': '1.25rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
