import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import { gql } from "urql";
import type {
	DeleteFriendshipPayload,
	LeaveChatPayload,
	RejectFriendshipPayload,
	User
} from "../generated";

export const createCache = () => {
	return cacheExchange({
		keys: {
			TopLanguages: () => null,
			TopLanguage: () => null
		},
		resolvers: {
			Comment: {
				replies: relayPagination()
			},
			Query: {
				experiences: relayPagination(),
				repositories: relayPagination(),
				posts: relayPagination(),
				skills: relayPagination()
			},
			User: {
				chats: relayPagination(),
				followers: relayPagination(),
				following: relayPagination()
			}
		},
		updates: {
			Mutation: {
				deleteFriendship: (result: DeleteFriendshipPayload, _, cache) => {
					const viewer = result.viewer;

					if (!viewer) return;

					const fragment = gql`
						fragment _ on User {
							id
							friends {
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

					const old = cache.readFragment(fragment, { id: `User:${result.viewer.id}` });

					if (!old) return;

					const filteredEdges = (old as User).friends.edges.filter(
						(friend) => friend.node.id !== result.record.friending.id
					);

					cache.writeFragment(fragment, {
						id: `User:${result.viewer.id}`,
						friends: {
							edges: filteredEdges,
							nodes: filteredEdges.map((edge) => edge.node)
						}
					});
				},
				leaveChat: (result: LeaveChatPayload, _, cache) => {
					const viewer = result.viewer;

					if (!viewer) return;

					const fragment = gql`
						fragment _ on User {
							id
							chats {
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

					const old = cache.readFragment(fragment, { id: `User:${result.viewer.id}` });

					if (!old) return;

					const filteredEdges = (old as User).chats.edges.filter(
						(chat) => chat.node.id !== result.record.id
					);

					cache.writeFragment(fragment, {
						id: `User:${result.viewer.id}`,
						chats: {
							edges: filteredEdges,
							nodes: filteredEdges.map((edge) => edge.node)
						}
					});
				},
				rejectFriendship: (result: RejectFriendshipPayload, _, cache) => {
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

					const old = cache.readFragment(fragment, { id: `User:${result.viewer.id}` });

					if (!old) return;

					const filteredEdges = (old as User).friendRequestsReceived.edges.filter(
						(friendRequest) => friendRequest.node.id !== result.record.friender.id
					);

					cache.writeFragment(fragment, {
						id: `User:${result.viewer.id}`,
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
