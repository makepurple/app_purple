/* eslint-disable no-console */
import { Prisma, PrismaClient } from "@prisma/client";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";

export const prisma = new PrismaClient();

const output = path.resolve(__dirname, "./generated/toSaveUser.ts");

const main = async () => {
	console.log(chalk.blue("prisma:saving-user"), chalk.magenta(new Date()));

	const toSaveUser = process.env.MY_USERNAME
		? await prisma.user.findUnique({
				where: {
					name: process.env.MY_USERNAME
				},
				include: {
					accounts: true,
					desiredSkills: true,
					experiences: {
						include: {
							organization: true
						}
					},
					posts: true,
					repositories: true,
					sessions: true,
					skills: true
				}
		  })
		: null;

	const userCreate: Prisma.UserCreateInput | null = toSaveUser
		? {
				...toSaveUser,
				accounts: {
					create: toSaveUser.accounts.map((account) => {
						const { userId, ...data } = account;

						return data;
					})
				},
				desiredSkills: {
					create: toSaveUser.desiredSkills.map((desiredSkill) => {
						const { userId, ...data } = desiredSkill;

						return data;
					})
				},
				experiences: {
					create: toSaveUser.experiences.map((experience) => {
						const { userId, ...data } = experience;

						return data;
					})
				},
				posts: {
					create: toSaveUser.posts.map((post) => {
						const { authorName, ...data } = post;

						return data;
					})
				},
				repositories: {
					create: toSaveUser.repositories.map((repository) => {
						const { owner, ...data } = repository;

						return data;
					})
				},
				sessions: {
					create: toSaveUser.sessions.map((session) => {
						const { userId, ...data } = session;

						return data;
					})
				},
				skills: {
					create: toSaveUser.skills.map((skill) => {
						const { userId, ...data } = skill;

						return data;
					})
				}
		  }
		: null;

	const savedUserCode = prettier.format(
		`
			import { Prisma } from "@prisma/client";

			export const toSaveUser: Prisma.UserCreateInput | null = ${JSON.stringify(userCreate, null, 4)};
		`,
		{
			parser: "typescript",
			tabWidth: 4,
			trailingComma: "none",
			useTabs: true
		}
	);

	fs.ensureFileSync(output);
	fs.writeFileSync(output, savedUserCode, { flag: "w" });
};

main()
	.catch((e) => {
		console.log(chalk.red("prisma:saving-user-error"), e.message);

		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();

		process.exit(0);
	});
