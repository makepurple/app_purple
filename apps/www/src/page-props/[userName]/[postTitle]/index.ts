import ms from "ms";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDocument,
	GetPostQuery,
	GetPostQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "../../../graphql";
import { NextUtils } from "../../../utils";

export const pageProps = NextUtils.castStaticProps(async (ctx) => {
	const { params } = ctx;

	const userName = params?.userName as string;
	const postTitle = params?.postTitle as string;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	const [post] = await NextUtils.concurrent([
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
			.then((result) => result.data?.post ?? null),
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: userName }
			)
			.toPromise()
	]);

	if (!post) return { notFound: true };

	return addUrqlState(ssr, {
		props: {},
		revalidate: ms("24h") / 1_000
	});
});

export const paths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: "blocking"
	};
};

export type PageProps = InferGetStaticPropsType<typeof pageProps>;
