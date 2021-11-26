import {
	addUrqlState,
	createUrqlClient,
	GetMyUserDocument,
	GetMyUserQuery,
	GetMyUserQueryVariables,
	useGetMyUserQuery
} from "@/client/graphql";
import { NextUtils } from "@/utils";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { ssrExchange } from "urql";

export const getServerSideProps = NextUtils.castSSRProps(async (ctx) => {
	const ssr = ssrExchange({ isClient: false });

	const { req } = ctx;

	const session = await getSession(ctx);

	const urqlClient = createUrqlClient({ req, ssr });

	await urqlClient
		.query<GetMyUserQuery, GetMyUserQueryVariables>(GetMyUserDocument)
		.toPromise()
		.then((result) => result.data?.viewer ?? null);

	return addUrqlState(ssr, {
		props: { session }
	});
});

export const Page: NextPage = () => {
	const [{ data }] = useGetMyUserQuery({
		requestPolicy: "cache-only"
	});

	const viewer = data?.viewer;

	return <div>{JSON.stringify(viewer ?? {}, null, 4)}</div>;
};

export default Page;
