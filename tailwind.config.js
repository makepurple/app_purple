const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
	theme: {
		extend: {
			colors: {
				electric: '#db00ff',
				ribbon: '#0047ff',
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp")
	],
};
