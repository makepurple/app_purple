/* eslint-disable no-console */
import { Prisma, PrismaClient } from "@prisma/client";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";

export const prisma = new PrismaClient();

const output = path.resolve(__dirname, "./generated/myUser.ts");

const main = async () => {
	console.log(chalk.blue("prisma:saving-user"), chalk.magenta(new Date()));

	fs.ensureFileSync(output);

	const myUser = process.env.MY_USERNAME
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

	const userCreate: Prisma.UserCreateInput | null = myUser
		? {
				...myUser,
				accounts: { create: myUser.accounts },
				desiredSkills: { create: myUser.desiredSkills },
				experiences: { create: myUser.experiences },
				posts: { create: myUser.posts },
				repositories: { create: myUser.repositories },
				sessions: { create: myUser.sessions },
				skills: { create: myUser.skills }
		  }
		: null;

	const savedUserCode = prettier.format(
		`
			import { Prisma } from "@prisma/client";

			export const myUser: Prisma.UserCreateInput | null = ${JSON.stringify(userCreate, null, 4)};
		`,
		{
			parser: "typescript",
			tabWidth: 4,
			trailingComma: "none",
			useTabs: true
		}
	);

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
