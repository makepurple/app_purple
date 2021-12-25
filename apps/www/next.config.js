const bundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const transpileModules = require("next-transpile-modules");

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.BUNDLE_ANALYZE === "true" });
const withTranspileModules = transpileModules([
	"@makepurple/components",
	"@makepurple/hooks",
	"@makepurple/utils",
	"@makepurple/validators"
]);

const config = {
	experimental: {
		esmExternals: false,
		externalDir: true
	},
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US"
	},
	images: {
		domains: ["res.cloudinary.com"]
	},
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	env: {
		PROJECT_DIRNAME:           __dirname,

		BASE_URL:                  process.env.BASE_URL,
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

		CLOUDINARY_CLOUD_NAME:     process.env.CLOUDINARY_CLOUD_NAME,
		CLOUDINARY_API_KEY:        process.env.CLOUDINARY_API_KEY,
		CLOUDINARY_API_SECRET:     process.env.CLOUDINARY_API_SECRET,
		CLOUDINARY_API_VARIABLE:   process.env.CLOUDINARY_API_VARIABLE,
	},
	webpack5: true,
	webpack: (config, { dev, isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}

		if (isServer) {
			config.externals.push('_http_common')
		}

		return config;
	}
};

module.exports = withPlugins([
	withBundleAnalyzer,
	withTranspileModules
], config);