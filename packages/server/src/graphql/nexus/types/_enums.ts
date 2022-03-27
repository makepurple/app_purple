import {
	CodeLanguage,
	ExperienceType,
	FollowType,
	NotificationType,
	UserActivityType
} from "@prisma/client";
import { enumType } from "nexus";

export const enumTypes = [
	enumType({
		name: "CodeLanguage",
		members: CodeLanguage
	}),
	enumType({
		name: "ExperienceType",
		members: ExperienceType
	}),
	enumType({
		name: "FollowType",
		members: FollowType
	}),
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
	enumType({
		name: "NotificationType",
		members: NotificationType
	}),
	enumType({
		name: "SortOrder",
		members: {
			Asc: "asc",
			Desc: "desc"
		}
	}),
	enumType({
		name: "UserActivityType",
		members: UserActivityType
	})
];
