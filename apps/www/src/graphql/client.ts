import { WindowUtils } from "@makepurple/utils";
import type { SSRData, SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import deepMerge from "deepmerge";
import deepEqual from "fast-deep-equal";
import type { GetServerSidePropsContext } from "next";
import type { Client } from "urql";
import { createClient, dedupExchange, ssrExchange } from "urql";
import { createCache } from "./cache";
import {
	devtoolsExchange,
	errorExchange,
	multipartFetchExchange,
	refocusExchange,
	requestPolicyExchange
} from "./exchanges";

export const URQL_STATE_PROP_NAME = "__URQL_STATE__";

/**
 * Consistently determine the API URL for the current client even when in a
 * deploy preview or similar
 */
const getApiUrl = (isStatic?: boolean): string => {
	// In the browser we just use a relative URL and everything works perfectly
	if (process.browser) return "/api/graphql";

	/**
	 * @description
	 * Infer the deploy URL if we're in production
	 * VERCEL_URL = Vercel, DEPLOY_URL = Netlify
	 *
	 * If this is run for a static page (isStatic = true), use the hosted api, because the local
	 * api won't be available during build-time
	 * @author David Lee
	 * @date April 17, 2022
	 */
	const PROVIDER_URL = isStatic
		? process.env.API_URL_STATIC_BUILD
		: process.env.API_URL || process.env.VERCEL_URL || process.env.DEPLOY_URL;

	if (PROVIDER_URL) {
		/**
		 * !HACK
		 * @description
		 * We replace https:// from the URL if it exists and add it ourselves
		 * always at the beginning as the above environment variables are not
		 * guaranteed to include it
		 */
		return `https://${PROVIDER_URL.replace(/^https?:\/\//, "")}/api/graphql`;
	}

	// Finally, fallback to hard-coded URL in case nothing else works
	return `http://localhost:3001/api/graphql`;
};

let ssr: SSRExchange;
let urqlClient: Client | null = null;

export interface CreateUrqlClientParams {
	isStatic?: boolean;
	req?: GetServerSidePropsContext["req"];
	ssr?: SSRExchange;
}

export const createUrqlClient = (params: CreateUrqlClientParams = {}): Client => {
	const { isStatic, ssr: _ssr = ssrExchange({ isClient: !params.req }), req } = params;

	if (WindowUtils.isSsr() || !urqlClient) {
		urqlClient = createClient({
			exchanges: [
				devtoolsExchange(),
				dedupExchange,
				requestPolicyExchange(),
				refocusExchange(),
				createCache(),
				errorExchange(),
				_ssr,
				multipartFetchExchange()
			],
			fetchOptions: {
				credentials: "include",
				headers: {
					cookie: req?.headers.cookie ?? (WindowUtils.isBrowser() ? document.cookie : "")
				}
			},
			maskTypename: false,
			requestPolicy: "cache-first",
			url: getApiUrl(isStatic)
		});

		// Serialize the urqlClient to null on the client-side.
		// This ensures we don't share client and server instances of the urqlClient.
		(urqlClient as any).toJSON = () => null;
	}

	return urqlClient;
};

export interface InitializeUrqlOptions {
	initialState?: SSRData;
}

export const initializeUrql = (options: InitializeUrqlOptions = {}): Client => {
	const { initialState = {} } = options;

	if (!ssr || WindowUtils.isSsr()) {
		ssr = ssrExchange({ initialState, isClient: true });
	} else if (ssr && WindowUtils.isBrowser()) {
		const existingCache = ssr.extractData();

		// Merge the existing cache into the data passed from getStaticProps/getServerSideProps
		const data = deepMerge(initialState, existingCache, {
			// combine arrays using deep object equality (like in sets)
			/* eslint-disable */
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) => sourceArray.every((s) => !deepEqual(d, s)))
			]
			/* eslint-enable */
		});

		ssr.restoreData(data);
	}

	return createUrqlClient({ ssr });
};

export const addUrqlState = <T extends { props: Record<string, any> }>(
	ssrCache: SSRExchange,
	pageProps: T
) => {
	return {
		props: {
			...pageProps.props,
			[URQL_STATE_PROP_NAME]: ssrCache.extractData()
		}
	} as T & { props: T["props"] & { [URQL_STATE_PROP_NAME]: SSRData } };
};
