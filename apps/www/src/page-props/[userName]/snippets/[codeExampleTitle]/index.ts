import ms from "ms";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetCodeExampleDocument,
	GetCodeExampleQuery,
	GetCodeExampleQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "../../../../graphql";
import { NextUtils } from "../../../../utils";

export const pageProps = NextUtils.castStaticProps(async (ctx) => {
	const { params } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	const authorName = params?.userName as string;
	const urlSlug = params?.codeExampleTitle as string;

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
				{ name: authorName }
			)
			.toPromise()
	]);

	if (!codeExample) return { notFound: true };

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
