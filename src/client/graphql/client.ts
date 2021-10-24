import { WindowUtils } from "@/utils";
import type { SSRData, SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import deepMerge from "deepmerge";
import deepEqual from "fast-deep-equal";
import produce from "immer";
import toast from "react-hot-toast";
import {
	Client,
	createClient,
	dedupExchange,
	errorExchange,
	fetchExchange,
	ssrExchange
} from "urql";
import { createCache } from "./cache";

export const URQL_STATE_PROP_NAME = "urqlState";

/**
 * Consistently determine the API URL for the current client even when in a
 * deploy preview or similar
 */
const getApiUrl = (): string => {
	// In the browser we just use a relative URL and everything works perfectly
	if (process.browser) return `/api/graphql`;

	// Infer the deploy URL if we're in production
	// VERCEL_URL = Vercel, DEPLOY_URL = Netlify
	const PROVIDER_URL = process.env.VERCEL_URL || process.env.DEPLOY_URL;

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
	if (process.env.NODE_ENV === `development`) return `http://localhost:3000/api/graphql`;

	// TODO: Replace with your production URL for the very final fallback
	return "https://example.org";
};

let ssr: SSRExchange;
let urqlClient: Client | null = null;

export interface CreateUrqlClientParams {
	ssr?: SSRExchange;
}

export const createUrqlClient = (params: CreateUrqlClientParams): Client => {
	const { ssr: _ssr = ssrExchange() } = params;

	if (WindowUtils.isSsr() || !urqlClient) {
		urqlClient = createClient({
			exchanges: [
				errorExchange({
					onError: (error) => {
						toast.error(error.message.replace("[GraphQL]", "Server error:"));
					}
				}),
				dedupExchange,
				createCache(),
				_ssr,
				fetchExchange
			],
			fetchOptions: {
				credentials: "include"
			},
			requestPolicy: "cache-and-network",
			url: getApiUrl()
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
	return produce(pageProps, (newPageProps) => {
		newPageProps.props = {
			...newPageProps.props,
			[URQL_STATE_PROP_NAME]: ssrCache.extractData()
		};
	});
};
