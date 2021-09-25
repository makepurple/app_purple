module.exports = {
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.svg$": "<rootDir>/src/test/mocks/svgr.mock.ts",
		"\\.(css|less|scss|sss|styl)$": "identity-obj-proxy"
	},
	setupFiles: [
		"dotenv/config",
		"<rootDir>/src/test/mocks/fetch.mock.ts",
		"<rootDir>/src/test/mocks/next-auth/client.mock.ts",
		"<rootDir>/src/test//mocks/portal.mock.ts"
	],
	setupFilesAfterEnv: [
		"./src/test/jest-setup.ts"
	],
	testEnvironment: "jsdom",
	testMatch: [
		"<rootDir>/**/*test.{ts,tsx}",
		"<rootDir>/**/*test/index.{ts,tsx}"
	],
	testPathIgnorePatterns: [
		"/.storybook/",
		"/build",
		"/dist/",
		"/node_modules/"
	],
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest",
		"^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
	}
};
