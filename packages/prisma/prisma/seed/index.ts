/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";
import faker from "faker";
import { experiences, organizations, repositories, skills, users } from "./data";
import { toSaveUser } from "./generated/toSaveUser";

faker.seed(1);

const prisma = new PrismaClient();

const log = (...args: string[]): void => {
	console.log(chalk.blue("prisma:seeding"), ...args);
};

const main = async () => {
	log(chalk.magenta(new Date()));

	if (toSaveUser) {
		await prisma.user.upsert({
			where: { name: toSaveUser.name },
			create: toSaveUser,
			update: {}
		});
	}

	log(chalk.magenta("skills"));
	await prisma.$transaction(skills.map((data) => prisma.skill.create({ data })));

	log(chalk.magenta("user"));
	await prisma.$transaction(users.map((data) => prisma.user.create({ data })));

	log(chalk.magenta("organization"));
	await prisma.$transaction(organizations.map((data) => prisma.organization.create({ data })));

	log(chalk.magenta("repository"));
	await prisma.$transaction(repositories.map((data) => prisma.repository.create({ data })));

	log(chalk.magenta("experiences"));
	await prisma.$transaction(experiences.map((data) => prisma.experience.create({ data })));
};

main()
	.catch((e) => {
		log(chalk.red("prisma:seed-error"), e.message);

		process.exit(1);
	})
	.finally(async () => {
		log(chalk.greenBright("done"), chalk.magenta(new Date()));

		await prisma.$disconnect();

		process.exit(0);
	});
