import { GradientHeader, MainContainer } from "@/client/atoms";
import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import { styled } from "twin.macro";
import { gql, useQuery } from "urql";

const Root = styled(MainContainer)`
	height: 200vh;
`;

export const Page: NextPage = () => {
	const [session] = useSession();

	const [, doQuery] = useQuery({
		query: gql`
			query {
				viewer {
					github {
						bio
						company
						twitterUsername
						websiteUrl
					}
				}
			}
		`,
		pause: true
	});

	return (
		<>
			<GradientHeader />
			<Root>
				<div>{session?.user.email}</div>
				<button
					onClick={async () => {
						await signIn("github");
					}}
					type="button"
				>
					Sign in
				</button>
				<button
					onClick={async () => {
						await signOut();
					}}
					type="button"
				>
					Sign out
				</button>
				<button
					onClick={() => {
						doQuery();
					}}
					type="button"
				>
					Do query
				</button>
			</Root>
		</>
	);
};

export default Page;
