import { NexusPrisma } from "@makepurple/prisma/nexus";
import { enumType } from "nexus";

export const enumTypes = [
	enumType(NexusPrisma.CodeLanguage),
	enumType(NexusPrisma.ExperienceType),
	enumType(NexusPrisma.FollowType),
	enumType({
		name: "GitHubUserContributionLevel",
		members: {
			None: "NONE",
			FirstQuartile: "FIRST_QUARTILE",
			SecondQuartile: "SECOND_QUARTILE",
			ThirdQuartile: "THIRD_QUARTILE",
			FourthQuartile: "FOURTH_QUARTILE"
		}
	}),
	enumType(NexusPrisma.NotificationType),
	enumType({
		name: "SortOrder",
		members: {
			Asc: "asc",
			Desc: "desc"
		}
	}),
	enumType(NexusPrisma.UserActivityType)
];
