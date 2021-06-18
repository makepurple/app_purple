const bundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const transpileModules = require("next-transpile-modules");
const TerserPlugin = require("terser-webpack-plugin");

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.BUNDLE_ANALYZE === "true" });
const withTranspileModules = transpileModules([]);

const config = {
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US"
	},
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	target: "experimental-serverless-trace",
	env: {
		PROJECT_DIRNAME:      __dirname,

		API_BASE_URL:         process.env.API_BASE_URL,
		COOKIE_SECRET:        process.env.COOKIE_SECRET,

		REDIS_HOST:           process.env.REDIS_HOST,
		REDIS_PORT:           process.env.REDIS_PORT,
		REDIS_PASSWORD:       process.env.REDIS_PASSWORD,

		GITHUB_CLIENT_ID:     process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
		GITHUB_AUTH_CALLBACK: process.env.GITHUB_AUTH_CALLBACK
	},
	webpack5: true,
	webpack: (config, { dev, isServer, webpack }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						memo: true,
						ref: true,
						svgo: true,
						titleProp: true,
						svgoConfig: {
							plugins: {
								removeViewBox: false,
							}
						}
					}
				},
				"url-loader"
			]
		});

		if (!dev && !isServer) {
			const minimizer = config.optimization.minimizer || [];
			
			minimizer.push(new TerserPlugin());

			config.optimization.minimize = true;
			config.optimization.minimizer = minimizer;
		}

		return config;
	}
};

module.exports = withPlugins([
	withBundleAnalyzer,
	withTranspileModules
], config);
