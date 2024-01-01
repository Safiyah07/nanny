/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'grey': '#3d5961',
				'off-white': '#f7fdff',
			},
      backgroundImage: {
        'hero-image': "url('/src/assets/nanny-hero2.jpg')",
        'about-image': "url('/src/assets/nanny1.webp')",
        'services-image': "url('/src/assets/nanny2.jpeg')",
      },
    },
    screens: {
			sm: { max: '450px' },
			md: { min: '451px', max: '767px' },
			lg: { min: '768px' },
		},
  },
  plugins: [],
}

