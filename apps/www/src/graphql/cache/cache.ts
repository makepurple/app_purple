import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";

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
		}
	});
};
