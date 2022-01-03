/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Prisma } from "@prisma/client";
import faker from "faker";
import { skills } from "./skills";

faker.seed(1);

const names: readonly string[] = [
	"dsklyar",
	"jameshly",
	"haejinjo",
	"igorsorokin66",
	"onionpancakes",
	"gaearon",
	"Owlsarecool1",
	"benawad",
	"sampoder",
	"SadisticCompiler",
	"jaredpalmer",
	"fiizzy",
	"leerob",
	"luxonauta",
	"jasonbarone",
	"marvelefe",
	"lucasdinocloud",
	"bluemix",
	"stevejcox",
	"PawelNackiewicz",
	"rizkimcitra"
];

const skillIds = skills.map((skill) => skill.id!);

export const users: readonly Prisma.UserCreateInput[] = names.map((name, i) => {
	const userSkillIds: readonly string[] = [
		...new Set(
			faker.random.arrayElements(
				skillIds,
				Math.floor(
					faker.datatype.number({
						min: 0,
						max: skillIds.length - 1
					})
				)
			)
		)
	];

	const remainingSkillIds = skillIds.filter(
		(skillId) => !!userSkillIds.find((id) => id === skillId)
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
		name,
		skills: {
			create: userSkillIds.map((skillId) => ({ skillId }))
		},
		desiredSkills: {
			create: userDesiredSkillIds.map((skillId) => ({ skillId }))
		}
	};
});
