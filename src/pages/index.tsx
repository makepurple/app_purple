import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import styled from "styled-components";
import { gql, useQuery } from "urql";

const Root = styled.div`
	background-color: #efefef;
`;

export const Page: NextPage = () => {
	const [session, loading] = useSession();

	const [, doOk] = useQuery({
		query: gql`
			query {
				ok
			}
		`,
		pause: true
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Root>
			<div>{session?.user.email}</div>
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
					doOk();
				}}
				type="button"
			>
				Do ok
			</button>
		</Root>
	);
};

export default Page;
