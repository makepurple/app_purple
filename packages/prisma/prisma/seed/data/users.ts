/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { faker } from "@faker-js/faker";
import type { Prisma } from "@prisma/client";
import { skills } from "./skills";

faker.seed(1);

const names: readonly [name: string, image: string][] = [
	["dsklyar", "https://avatars.githubusercontent.com/u/12689384"],
	["jameshly", "https://avatars.githubusercontent.com/u/19769647"],
	["haejinjo", "https://avatars.githubusercontent.com/u/23015394"],
	["igorsorokin66", "https://avatars.githubusercontent.com/u/5367066"],
	["onionpancakes", "https://avatars.githubusercontent.com/u/639985"],
	["gaearon", "https://avatars.githubusercontent.com/u/810438"],
	["Owlsarecool1", "https://avatars.githubusercontent.com/u/39209930"],
	["benawad", "https://avatars.githubusercontent.com/u/7872329"],
	["sampoder", "https://avatars.githubusercontent.com/u/39828164"],
	["SadisticCompiler", "https://avatars.githubusercontent.com/u/11155306"],
	["jaredpalmer", "https://avatars.githubusercontent.com/u/4060187"],
	["fiizzy", "https://avatars.githubusercontent.com/u/34406562"],
	["leerob", "https://avatars.githubusercontent.com/u/9113740"],
	["luxonauta", "https://avatars.githubusercontent.com/u/48334856"],
	["jasonbarone", "https://avatars.githubusercontent.com/u/545055"],
	["marvelefe", "https://avatars.githubusercontent.com/u/56586020"],
	["lucasdinocloud", "https://avatars.githubusercontent.com/u/79989292"],
	["bluemix", "https://avatars.githubusercontent.com/u/3332274"],
	["stevejcox", "https://avatars.githubusercontent.com/u/15239550"],
	["PawelNackiewicz", "https://avatars.githubusercontent.com/u/31191198"],
	["rizkimcitra", "https://avatars.githubusercontent.com/u/62492410"]
];

const skillIds = skills.map((skill) => skill.id!);

export const users: readonly Prisma.UserCreateInput[] = names.map(([name, image], i) => {
	const userSkillIds: readonly string[] = [
		...new Set(
			faker.random.arrayElements(
				skillIds,
				Math.floor(
					faker.datatype.number({
						min: 2,
						max: skillIds.length - 1
					})
				)
			)
		)
	];

	const remainingSkillIds = skillIds.filter(
		(skillId) => !userSkillIds.some((id) => id === skillId)
	);

	const userDesiredSkillIds: readonly string[] = [
		...new Set(
			faker.random.arrayElements(
				remainingSkillIds,
				Math.floor(
					faker.datatype.number({
						min: 0,
						max: remainingSkillIds.length - 1
					})
				)
			)
		)
	];

	return {
		id: `User_${i}`,
		email: `${name}@testmakepurple.com`,
		image,
		name,
		skills: {
			connectOrCreate: userSkillIds.map((skillId) => ({
				where: {
					skillId_userId: {
						skillId,
						userId: `User_${i}`
					}
				},
				create: {
					skillId
				}
			}))
		},
		desiredSkills: {
			connectOrCreate: userDesiredSkillIds.map((skillId) => ({
				where: {
					skillId_userId: {
						skillId,
						userId: `User_${i}`
					}
				},
				create: {
					skillId
				}
			}))
		}
	};
});
