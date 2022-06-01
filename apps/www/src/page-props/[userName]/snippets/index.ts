import ms from "ms";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetUserCodeExamplesDocument,
	GetUserCodeExamplesQuery,
	GetUserCodeExamplesQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "../../../graphql";
import { NextUtils } from "../../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castStaticProps(async (ctx) => {
	const { params } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	const [user] = await NextUtils.concurrent([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: params?.userName as string }
			)
			.toPromise()
			.then((result) => result.data?.user),
		urqlClient
			.query<GetUserCodeExamplesQuery, GetUserCodeExamplesQueryVariables>(
				GetUserCodeExamplesDocument,
				{
					after: null,
					first: BATCH_SIZE,
					name: params?.userName as string
				}
			)
			.toPromise()
	]);

	if (!user) return { notFound: true };

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
