import { MainContainer } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "twin.macro";

const BATCH_SIZE = 20;

const Root = styled(MainContainer)``;

export const Page: NextPage = () => {
	const router = useRouter();

	const { username } = router.query;

	const [{ data }] = useGetPostsQuery({
		requestPolicy: "cache-first",
		variables: {
			take: BATCH_SIZE,
			where: {}
		}
	});

	const posts = data?.posts ?? [];

	return <Root>{username}</Root>;
};

export default Page;
