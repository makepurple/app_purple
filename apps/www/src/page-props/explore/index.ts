import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	SuggestFriendsDocument,
	SuggestFriendsQuery,
	SuggestFriendsQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 50;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { req } = ctx;

	const seed = new Date().toString();

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await NextUtils.concurrent([
		urqlClient
			.query<SuggestFriendsQuery, SuggestFriendsQueryVariables>(SuggestFriendsDocument, {
				after: null,
				first: BATCH_SIZE,
				where: { seed }
			})
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			seed,
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
