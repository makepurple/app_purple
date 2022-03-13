import { PrismaClient } from "@makepurple/prisma";
import chalk from "chalk";
import { codeBlock } from "common-tags";

// Make global.cachedPrisma work with TypeScript
declare global {
	// NOTE: This actually needs to be a "var", let/const don't work here.
	// eslint-disable-next-line no-var
	var cachedPrisma: PrismaClient;
}

// Workaround to make Prisma Client work well during "next dev"
// @see https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
export const prisma: PrismaClient<
	{ log: ("info" | "warn" | "error" | { emit: "event"; level: "query" })[] },
	"query",
	false
> =
	global.cachedPrisma ??
	new PrismaClient({
		log:
			process.env.NODE_ENV !== "development" && process.env.PRISMA_LOG === "true"
				? [{ emit: "event", level: "query" }, "info", "warn", "error"]
				: []
	});

if (process.env.NODE_ENV !== "production") {
	if (process.env.PRISMA_LOG === "true") {
		prisma.$on("query", (e) => {
			/* eslint-disable no-console */
			console.log(
				`${chalk.blue("prisma:query")}\n${codeBlock`
					${e.query}
				`}`
			);
			console.log(chalk.blue("prisma:params"), e.params);
			/* eslint-enable no-console */
		});
	}

	global.cachedPrisma = prisma;
}

export default prisma;
