const bundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const transpileModules = require("next-transpile-modules");

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.BUNDLE_ANALYZE === "true" });
const withTranspileModules = transpileModules([]);

const config = {
	experimental: {
		externalDir: true
	},
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US"
	},
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"]
	},
	env: {
		API_URL:                   process.env.API_URL,
		API_URL_STATIC_BUILD:      process.env.API_URL_STATIC_BUILD,
		NEXTAUTH_SECRET:           process.env.NEXTAUTH_SECRET,
		NEXTAUTH_URL:              process.env.NEXTAUTH_URL,

		REDIS_HOST:                process.env.REDIS_HOST,
		REDIS_PORT:                process.env.REDIS_PORT,
		REDIS_PASSWORD:            process.env.REDIS_PASSWORD,

		GITHUB_CLIENT_ID:          process.env.GITHUB_CLIENT_ID,
		GITHUB_CLIENT_SECRET:      process.env.GITHUB_CLIENT_SECRET,
		GITHUB_ACCESS_TOKEN:       process.env.GITHUB_ACCESS_TOKEN,

		POSTMARK_API_TOKEN:        process.env.POSTMARK_API_TOKEN,
		POSTMARK_FROM_EMAIL:       process.env.POSTMARK_FROM_EMAIL,

		PUSHER_APP_ID:             process.env.PUSHER_APP_ID,
		PUSHER_KEY:                process.env.PUSHER_KEY,
		PUSHER_SECRET:             process.env.PUSHER_SECRET,
		PUSHER_CLUSTER:            process.env.PUSHER_CLUSTER,

		CLOUDINARY_CLOUD_NAME:     process.env.CLOUDINARY_CLOUD_NAME,
		CLOUDINARY_API_KEY:        process.env.CLOUDINARY_API_KEY,
		CLOUDINARY_API_SECRET:     process.env.CLOUDINARY_API_SECRET,
		CLOUDINARY_API_VARIABLE:   process.env.CLOUDINARY_API_VARIABLE,
	},
	rewrites: async () => ({
		beforeFiles: [
			{
				source: "/blog",
				destination: "/leedavidcs/posts"
			}
		]
	}),
	webpack5: true,
	webpack: (config, { dev, isServer }) => {
		return config;
	}
};

module.exports = withPlugins([
	withBundleAnalyzer,
	withTranspileModules
], config);
