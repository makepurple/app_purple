import { enumType } from "nexus";
import { ExperienceType } from "nexus-prisma";

export const enumTypes = [
	enumType(ExperienceType),
	enumType({
		name: "SortOrder",
		members: {
			Asc: "asc",
			Desc: "desc"
		}
	})
];
