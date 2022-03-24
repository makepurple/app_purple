import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetCodeExampleDocument,
	GetCodeExampleQuery,
	GetCodeExampleQueryVariables,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "../../../../graphql";
import { NextUtils } from "../../../../utils";

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const session = await getSession(ctx);

	const authorName = query.userName as string;
	const urlSlug = query.codeExampleTitle as string;

	const [codeExample] = await NextUtils.concurrent([
		urqlClient
			.query<GetCodeExampleQuery, GetCodeExampleQueryVariables>(GetCodeExampleDocument, {
				authorName,
				urlSlug
			})
			.toPromise()
			.then((result) => result.data?.codeExample),
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.userName as string }
			)
			.toPromise(),
		!!session &&
			urqlClient
				.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
				.toPromise()
	]);

	if (!codeExample) return { notFound: true };

	return addUrqlState(ssr, {
		props: {
			session
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
