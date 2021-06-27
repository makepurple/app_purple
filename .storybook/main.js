const { addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-essentials"
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		}
	},
	webpackFinal: (config) => {
		config.module.rules.unshift({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						memo: true,
						ref: true,
						svgoConfig: {
							plugins: {
								removeViewBox: false
							}
						}
					}
				},
				"url-loader"
			]
		});

		return addWebpackAlias({ "@": path.resolve(__dirname, "../src") })(config);
	}
}
