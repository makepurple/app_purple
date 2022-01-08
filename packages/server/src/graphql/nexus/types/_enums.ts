import { NexusPrisma } from "@makepurple/prisma/nexus";
import { enumType } from "nexus";

export const enumTypes = [
	enumType(NexusPrisma.ExperienceType),
	enumType({
		name: "SortOrder",
		members: {
			Asc: "asc",
			Desc: "desc"
		}
	}),
	enumType(NexusPrisma.UserActivityType)
];
