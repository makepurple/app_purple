const { addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-essentials",
		"@storybook/addon-links",
		"addon-screen-reader",
		"storybook-tailwind-dark-mode",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss")
				}
			}
		}
	],
	babel: () => ({
		presets: ["next/babel"],
		plugins: [
			"macros",
			["styled-components", {
				"ssr": true
			}]
		]
	}),
	staticDirs: ["../public"],
	webpackFinal: (config) => {
		/**
		 * TODO
		 * @description
		 * Change this to use what is in next.config.js for webpack5, when this
		 * config eventually uses webpack5
		 * @author David Lee
		 * @date June 28, 2021
		 */
		config.node = {
			fs: "empty",
		};

		config.resolve.alias["next-auth/react"] = require.resolve("./__mocks__/next-auth/react.js");

		/**
		 * !HACK
		 * @description framer-motion ^5.0.0 is breaking storybook without this
		 * @see (@link: https://github.com/framer/motion/issues/1307#issuecomment-966827629)
		 * @author David Lee
		 * @date November 16, 2021
		 */
		config.module.rules.push({
			type: "javascript/auto",
			test: /\.mjs$/,
			include: /node_modules/,
		});
		
		return addWebpackAlias({ "@": path.resolve(__dirname, "../src") })(config);
	}
}
