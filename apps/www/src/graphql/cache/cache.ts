import { cacheExchange } from "@urql/exchange-graphcache";
import type { IntrospectionData } from "@urql/exchange-graphcache/dist/types/ast";
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
				commentCodeExample: ({ commentCodeExample: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					const parentId = result.record.parentId;
					const codeExampleId = result.record.codeExampleId;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});

					if (parentId) {
						cache
							.inspectFields({ __typename: "Comment", id: parentId })
							.filter((field) => field.fieldName === "replies")
							.forEach((field) => {
								cache.invalidate(
									{ __typename: "Comment", id: parentId },
									field.fieldName,
									field.arguments
								);
							});
					} else if (codeExampleId) {
						cache
							.inspectFields({ __typename: "CodeExample", id: codeExampleId })
							.filter((field) => field.fieldName === "comments")
							.forEach((field) => {
								cache.invalidate(
									{ __typename: "CodeExample", id: codeExampleId },
									field.fieldName,
									field.arguments
								);
							});
					}
				},
				commentPost: ({ commentPost: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					const parentId = result.record.parentId;
					const postId = result.record.postId;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});

					if (parentId) {
						cache
							.inspectFields({ __typename: "Comment", id: parentId })
							.filter((field) => field.fieldName === "replies")
							.forEach((field) => {
								cache.invalidate(
									{ __typename: "Comment", id: parentId },
									field.fieldName,
									field.arguments
								);
							});
					} else if (postId) {
						cache
							.inspectFields({ __typename: "Post", id: postId })
							.filter((field) => field.fieldName === "comments")
							.forEach((field) => {
								cache.invalidate(
									{ __typename: "Post", id: postId },
									field.fieldName,
									field.arguments
								);
							});
					}
				},
				createCodeExample: ({ createCodeExample: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => ["activities", "codeExamples"].includes(field.fieldName))
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
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
						.filter((field) =>
							[
								"activities",
								"codeExamples",
								"commentUpvotes",
								"comments",
								"notifications",
								"trophies"
							].includes(field.fieldName)
						)
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
						.filter((field) =>
							[
								"activities",
								"commentUpvotes",
								"comments",
								"notifications",
								"posts",
								"postUpvotes",
								"postViews",
								"trophies"
							].includes(field.fieldName)
						)
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

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) =>
							["activities", "posts", "trophies"].includes(field.fieldName)
						)
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				rejectFriendship: ({ rejectFriendship: result }: Mutation) => {
					if (!result.record) return;

					// eslint-disable-next-line no-console
					console.log("Fix later");
				},
				unfollowSkill: ({ unfollowSkill: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				unfollowUser: ({ unfollowUser: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				unvoteCodeExample: ({ unvoteCodeExample: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				unvotePost: ({ unvotePost: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				upvoteCodeExample: ({ upvoteCodeExample: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				},
				upvotePost: ({ upvotePost: result }: Mutation, _, cache) => {
					if (!result.record) return;

					const viewerId = result.viewer?.id;

					if (!viewerId) return;

					cache
						.inspectFields({ __typename: "User", id: viewerId })
						.filter((field) => field.fieldName === "activities")
						.forEach((field) => {
							cache.invalidate(
								{ __typename: "User", id: viewerId },
								field.fieldName,
								field.arguments
							);
						});
				}
			}
		}
	});
};
