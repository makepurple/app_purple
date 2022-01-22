import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";
import { gql } from "urql";
import type { LeaveChatPayload, User } from "../generated";

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
				leaveChat: (result: LeaveChatPayload, _, cache) => {
					const viewer = result.viewer;

					if (!viewer) return;

					const fragment = gql`
						fragment _ on User {
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
				}
			}
		}
	});
};
