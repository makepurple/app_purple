const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");


module.exports = {
	theme: {
		extend: {
			colors: {
				...colors,
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
			},
			spacing: {
				...defaultTheme.spacing,
				"4.5": "1.125rem",
				"22": "5.5rem"
			}
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class"
		}),
		require("@tailwindcss/line-clamp")
	],
};