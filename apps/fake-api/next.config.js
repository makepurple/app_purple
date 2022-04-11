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
	webpack5: true,
	webpack: (config) => {
		return config;
	}
};

module.exports = withPlugins([
	withBundleAnalyzer,
	withTranspileModules
], config);
