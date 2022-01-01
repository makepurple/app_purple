/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";

const prisma = new PrismaClient();

const main = async () => {
	console.log(chalk.blue("prisma:seeding", new Date()));

	await Promise.resolve();
};

main()
	.catch((e) => {
		console.log(chalk.red("prisma:seed-error"), e.message);

		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();

		process.exit(0);
	});
