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
		PROJECT_DIRNAME:           __dirname,

		BASE_URL:                  process.env.BASE_URL,
		COOKIE_SECRET:             process.env.COOKIE_SECRET,

		REDIS_HOST:                process.env.REDIS_HOST,
		REDIS_PORT:                process.env.REDIS_PORT,
		REDIS_PASSWORD:            process.env.REDIS_PASSWORD,

		GITHUB_CLIENT_ID:          process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET:      process.env.GITHUB_CLIENT_SECRET,
		GITHUB_AUTH_CALLBACK:      process.env.GITHUB_AUTH_CALLBACK,

		APP_AWS_ACCESS_KEY_ID:     process.env.APP_AWS_ACCESS_KEY_ID,
		APP_AWS_SECRET_ACCESS_KEY: process.env.APP_AWS_SECRET_ACCESS_KEY,
		APP_AWS_IMAGE_BUCKET:      process.env.APP_AWS_IMAGE_BUCKET,

		POSTMARK_API_TOKEN:        process.env.POSTMARK_API_TOKEN,
		POSTMARK_FROM_EMAIL:       process.env.POSTMARK_FROM_EMAIL,
	},
	webpack5: true,
	webpack: (config, { dev, isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}

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
