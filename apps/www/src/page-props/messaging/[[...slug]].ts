import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetChatDocument,
	GetChatQuery,
	GetChatQueryVariables,
	GetChatsDocument,
	GetChatsQuery,
	GetChatsQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const { slug } = query as { slug: string[] };

	const chatId = slug[0] ?? "";

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		!!chatId &&
			urqlClient
				.query<GetChatQuery, GetChatQueryVariables>(GetChatDocument, {
					messageLimit: BATCH_SIZE,
					messageOffset: 0,
					where: {
						id: chatId
					}
				})
				.toPromise(),
		urqlClient
			.query<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, {
				first: BATCH_SIZE,
				where: {
					user: {
						name: {
							contains: ""
						}
					}
				}
			})
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
