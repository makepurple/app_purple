import { cacheExchange } from "@urql/exchange-graphcache";
import { relayPagination } from "@urql/exchange-graphcache/extras";

export const createCache = () => {
	return cacheExchange({
		resolvers: {
			Query: {
				posts: relayPagination()
			}
		}
	});
};
