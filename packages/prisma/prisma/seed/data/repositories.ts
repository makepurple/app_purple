import type { Prisma } from "@prisma/client";

export const repositories: readonly Prisma.RepositoryCreateInput[] = [
	{
		name: "dogehouse",
		user: {
			connect: {
				name: "bedawad"
			}
		}
	},
	{
		name: "berowra",
		user: {
			connect: {
				name: "sampoder"
			}
		}
	},
	{
		name: "formik",
		user: {
			connect: {
				name: "jaredpalmer"
			}
		}
	}
];
