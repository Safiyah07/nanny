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
        'hero-image': "url('/src/assets/hero-image.jpg')",
        'about-image': "url('/src/assets/about-image.jpg')",
        'services-image': "url('/src/assets/services-image.jpg')",
        'services-image2': "url('/src/assets/services-image2.jpg')",
        'services-image3': "url('/src/assets/services-image3.jpg')",
        'news-image': "url('/src/assets/globe-image.jpg')",
        'contact-image': "url('/src/assets/news-image.jpg')",
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

