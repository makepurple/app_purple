import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";

export const createCache = () => {
	return cacheExchange({
		keys: {
			TopLanguages: () => null,
			TopLanguage: () => null
		},
		resolvers: {
			Query: {
				posts: relayPagination()
			}
		}
	});
};
