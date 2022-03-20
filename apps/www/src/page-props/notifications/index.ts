import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetNotificationsDocument,
	GetNotificationsQuery,
	GetNotificationsQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await NextUtils.concurrent([
		urqlClient
			.query<GetNotificationsQuery, GetNotificationsQueryVariables>(
				GetNotificationsDocument,
				{
					after: null,
					first: BATCH_SIZE
				}
			)
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
