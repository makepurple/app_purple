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

		/**
		 * TODO
		 * @description
		 * Change this to use what is in next.config.js for webpack5, when this
		 * config eventually uses webpack5
		 * @author David Lee
		 * @date June 28
		 */
		config.node = {
			fs: "empty"
		};

		return addWebpackAlias({ "@": path.resolve(__dirname, "../src") })(config);
	}
}
