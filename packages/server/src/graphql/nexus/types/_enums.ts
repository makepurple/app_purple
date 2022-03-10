import { enumType } from "nexus";

export const enumTypes = [
	enumType({
		name: "CodeLanguage",
		members: {
			Go: "Go",
			GraphQL: "GraphQL",
			HTML: "HTML",
			JavaScript: "JavaScript",
			Python: "Python",
			SCSS: "SCSS",
			SQL: "SQL",
			TypeScript: "TypeScript",
			YAML: "YAML"
		}
	}),
	enumType({
		name: "ExperienceType",
		members: {
			FullTime: "FullTime",
			PartTime: "PartTime",
			Contract: "Contract",
			Intern: "Intern",
			OpenSource: "OpenSource"
		}
	}),
	enumType({
		name: "FollowType",
		members: {
			Skill: "Skill",
			User: "User"
		}
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
		members: {
			ChatMessageReceived: "ChatMessageReceived",
			CodeExampleCommented: "CodeExampleCommented",
			FriendshipAccepted: "FriendshipAccepted",
			PostCommented: "PostCommented"
		}
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
		members: {
			CommentCodeExample: "CommentCodeExample",
			CommentPost: "CommentPost",
			CreateCodeExample: "CreateCodeExample",
			FollowSkill: "FollowSkill",
			FollowUser: "FollowUser",
			FriendAcceptUser: "FriendAcceptUser",
			Joined: "Joined",
			PublishPost: "PublishPost",
			UpvoteCodeExample: "UpvoteCodeExample",
			UpvotePost: "UpvotePost"
		}
	})
];
