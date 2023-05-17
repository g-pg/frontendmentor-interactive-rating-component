/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: "1rem",
		},
		colors: {
			white: "hsl(0, 0%, 100%)",
			orange: "hsl(25, 97%, 53%)",
			"light-grey": "hsl(217, 12%, 63%)",
			"medium-grey": "hsl(216, 12%, 54%)",
			"dark-blue": {
				DEFAULT: "hsl(213, 19%, 18%)",
				500: "hsl(211, 22%, 15%)",
				700: "hsl(215, 27%, 12%)",
			},
			"very-dark-blue": "hsl(216, 12%, 8%)",
		},
		fontFamily: {
			sans: ["Overpass", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
