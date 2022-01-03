import type { Prisma } from "@prisma/client";
import { ExperienceType } from "@prisma/client";

export const experiences: readonly Prisma.ExperienceCreateInput[] = [
	{
		organization: {
			connect: {
				name: "cloudera"
			}
		},
		positionName: ExperienceType.FullTime,
		startDate: new Date(),
		user: {
			connect: {
				name: "dsklyar"
			}
		}
	},
	{
		organization: {
			connect: {
				name: "vercel"
			}
		},
		positionName: ExperienceType.FullTime,
		startDate: new Date(),
		user: {
			connect: {
				name: "leerob"
			}
		}
	},
	{
		organization: {
			connect: {
				name: "vercel"
			}
		},
		positionName: ExperienceType.FullTime,
		startDate: new Date(),
		user: {
			connect: {
				name: "jaredpalmer"
			}
		}
	}
];
