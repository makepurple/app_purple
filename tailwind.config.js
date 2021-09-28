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
			},
		},
	},
	plugins: [],
};
