import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import { addUrqlState, createUrqlClient, GetChatDocument, GetChatsDocument } from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const slug = (query.slug as string[] | undefined) ?? [];
	const chatId = slug[0] ?? "";

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await NextUtils.concurrent([
		!!chatId &&
			urqlClient
				.query(GetChatDocument, {
					where: {
						id: chatId
					}
				})
				.toPromise(),
		urqlClient
			.query(GetChatsDocument, {
				first: BATCH_SIZE,
				where: {
					user: { name: { contains: "" } }
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
