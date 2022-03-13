import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import { gql } from "urql";
import type { Mutation, User } from "../generated";

export const createCache = () => {
	return cacheExchange({
		keys: {
			GitHubUserContributionCalendar: () => null,
			GitHubUserContributionCalendarDay: () => null,
			GitHubUserContributionCalendarWeek: () => null,
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
		updates: {
			Mutation: {
				createPost: (_, __, cache) => {
					cache.invalidate("Query", "postDraft");
				},
				deleteCodeExample: ({ deleteCodeExample: result }: Mutation, _, cache) => {
					cache.invalidate({ __typename: "CodeExample", id: result.record.id });
				},
				deleteExperience: ({ deleteExperience: result }: Mutation, _, cache) => {
					cache.invalidate({ __typename: "Experience", id: result.record.id });
				},
				deleteFriendship: ({ deleteFriendship: result }: Mutation, _, cache) => {
					const viewer = result.viewer;

					if (!viewer) return;

					const fragment = gql`
						fragment _ on User {
							id
							friends {
								edges {
									cursorresult
									node {
										id
									}
								}
								nodes {
									id
								}
							}
						}
					`;

					const old = cache.readFragment(fragment, { id: viewer.id });

					if (!old) return;

					const filteredEdges = (old as User).friends.edges.filter(
						(friend) => friend.node.id !== result.record.friending.id
					);

					cache.writeFragment(fragment, {
						id: viewer.id,
						friends: {
							edges: filteredEdges,
							nodes: filteredEdges.map((edge) => edge.node)
						}
					});
				},
				deletePost: ({ deletePost: result }: Mutation, _, cache) => {
					cache.invalidate({ __typename: "Post", id: result.record.id });
				},
				deleteRepository: ({ deleteRepository: result }: Mutation, _, cache) => {
					cache.invalidate({ __typename: "Repository", id: result.record.id });
				},
				leaveChat: ({ leaveChat: result }: Mutation, _, cache) => {
					cache.invalidate({ __typename: "Chat", id: result.record.id });
				},
				publishPost: ({ publishPost: result }: Mutation, _, cache) => {
					!!result.viewer?.id &&
						cache.invalidate({ __typename: "User", id: result.viewer.id });

					cache.invalidate({ __typename: "Post", id: result.record.id });
				},
				rejectFriendship: ({ rejectFriendship: result }: Mutation, _, cache) => {
					const viewer = result.viewer;

					if (!viewer) return;

					const fragment = gql`
						fragment _ on User {
							id
							friendRequestsReceived {
								edges {
									cursor
									node {
										id
									}
								}
								nodes {
									id
								}
							}
						}
					`;

					const old = cache.readFragment(fragment, { id: viewer.id });

					if (!old) return;

					const filteredEdges = (old as User).friendRequestsReceived.edges.filter(
						(friendRequest) => friendRequest.node.id !== result.record.friender.id
					);

					cache.writeFragment(fragment, {
						id: viewer.id,
						friendRequestsReceived: {
							edges: filteredEdges,
							nodes: filteredEdges.map((edge) => edge.node)
						}
					});
				}
			}
		}
	});
};
