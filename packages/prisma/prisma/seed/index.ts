/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import chalk from "chalk";
import faker from "faker";
import { experiences, organizations, repositories, skills, users } from "./data";
import { myUser } from "./generated/myUser";

faker.seed(1);

const prisma = new PrismaClient();

const main = async () => {
	console.log(chalk.blue("prisma:seeding"), chalk.magenta(new Date()));

	if (myUser) {
		await prisma.user.upsert({
			where: { name: myUser.name },
			create: myUser,
			update: {}
		});
	}

	await prisma.$transaction(skills.map((data) => prisma.skill.create({ data })));
	await prisma.$transaction(users.map((data) => prisma.user.create({ data })));
	await prisma.$transaction(organizations.map((data) => prisma.organization.create({ data })));
	await prisma.$transaction(repositories.map((data) => prisma.repository.create({ data })));
	await prisma.$transaction(experiences.map((data) => prisma.experience.create({ data })));

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
