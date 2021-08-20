const { addWebpackAlias } = require("customize-cra");
const NodemonPlugin = require("nodemon-webpack-plugin");
const ms = require("ms");
const path = require("path");

module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-essentials",
		"storybook-addon-next-router",
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
		config.plugins.push(
			new NodemonPlugin({
				watch: path.resolve(__dirname, "../src/server/emails/"),
				ext: "ts,tsx",
				ignore: ["**/generated/**"],
				exec: ["yarn", "run", "generate:emails", "\n"],
				delay: `${ms("1s")}`,
				verbose: true
			})
		)

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
