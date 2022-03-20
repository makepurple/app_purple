import { cacheExchange } from "@urql/exchange-graphcache";
import { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import type { Mutation } from "../generated";
import schema from "../generated/schema.gen.json";

export const createCache = () => {
	return cacheExchange({
		keys: {
			GitHub: () => null,
			GitHubUserContributionCalendar: () => null,
			GitHubUserContributionCalendarDay: () => null,
			GitHubUserContributionCalendarWeek: () => null,
			SuggestOrganizations: () => null,
			SuggestRepositories: () => null,
			SuggestSkillOwners: () => null,
			SuggestSkills: () => null,
			TopLanguages: () => null,
			TopLanguage: () => null
		},
		resolvers: {
			Comment: {
				replies: relayPagination()
			},
			Post: {
				comments: relayPagination()
			},
			Query: {
				activityFeed: relayPagination(),
				comments: relayPagination(),
				experiences: relayPagination(),
				repositories: relayPagination(),
				posts: relayPagination(),
				skills: relayPagination(),
				suggestFriends: relayPagination()
			},
			Skill: {
				posts: relayPagination(),
				users: relayPagination()
			},
			User: {
				activities: relayPagination(),
				chats: relayPagination(),
				codeExamples: relayPagination(),
				desiredSkills: relayPagination(),
				followers: relayPagination(),
				following: relayPagination(),
				friends: relayPagination(),
				friendRequestsReceived: relayPagination(),
				notifications: relayPagination(),
				repositories: relayPagination(),
				skills: relayPagination()
			}
		},
		schema: schema as IntrospectionData,
		updates: {
			Mutation: {
				createExperience: ({ createExperience: result }: Mutation, _, cache) => {
					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "experiences")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				createPost: (_, __, cache) => {
					cache.invalidate("Query", "postDraft");
				},
				createRepository: ({ createRepository: result }: Mutation, _, cache) => {
					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "repositories")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				deleteCodeExample: ({ deleteCodeExample: result }: Mutation, _, cache) => {
					if (!result.record) return;

					cache.invalidate({ __typename: "CodeExample", id: result.record.id });

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => {
							switch (field.fieldName) {
								case "activities":
								case "codeExamples":
								case "commentUpvotes":
								case "comments":
								case "notifications":
								case "trophies":
									return true;
								default:
									return false;
							}
						})
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				deleteExperience: ({ deleteExperience: result }: Mutation, _, cache) => {
					if (!result.record) return;

					cache.invalidate({ __typename: "Experience", id: result.record.id });
				},
				deleteFriendship: ({ deleteFriendship: result }: Mutation) => {
					if (!result.record) return;

					// eslint-disable-next-line no-console
					console.log("Fix later");
				},
				deletePost: ({ deletePost: result }: Mutation, _, cache) => {
					if (!result.record) return;

					cache.invalidate({ __typename: "Post", id: result.record.id });

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => {
							switch (field.fieldName) {
								case "activities":
								case "commentUpvotes":
								case "comments":
								case "notifications":
								case "posts":
								case "postUpvotes":
								case "postViews":
								case "trophies":
									return true;
								default:
									return false;
							}
						})
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				deleteRepository: ({ deleteRepository: result }: Mutation, _, cache) => {
					if (!result.record) return;

					cache.invalidate({ __typename: "Repository", id: result.record.id });
				},
				leaveChat: ({ leaveChat: result }: Mutation, _, cache) => {
					if (!result.record) return;

					cache.invalidate({ __typename: "Chat", id: result.record.id });
				},
				publishPost: ({ publishPost: result }: Mutation, _, cache) => {
					if (!result.record) return;

					!!result.viewer?.id &&
						cache.invalidate({ __typename: "User", id: result.viewer.id });

					cache.invalidate({ __typename: "Post", id: result.record.id });
				},
				rejectFriendship: ({ rejectFriendship: result }: Mutation) => {
					if (!result.record) return;

					// eslint-disable-next-line no-console
					console.log("Fix later");
				}
			}
		}
	});
};
