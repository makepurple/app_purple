import { cacheExchange } from "@urql/exchange-graphcache";

export const createCache = () => {
	return cacheExchange();
};
