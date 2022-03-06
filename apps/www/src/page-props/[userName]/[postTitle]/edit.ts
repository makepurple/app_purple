import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDocument,
	GetPostQuery,
	GetPostQueryVariables
} from "../../../graphql";
import { NextUtils } from "../../../utils";

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const userName = query.userName as string;
	const postTitle = query.postTitle as string;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const [post] = await Promise.all([
		urqlClient
			.query<GetPostQuery, GetPostQueryVariables>(GetPostDocument, {
				where: {
					authorName_urlSlug: {
						authorName: userName,
						urlSlug: postTitle
					}
				}
			})
			.toPromise()
			.then((result) => result.data?.post ?? null)
	]);

	if (!post) return { notFound: true };

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
