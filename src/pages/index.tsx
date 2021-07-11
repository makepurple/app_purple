import { GradientHeader, MainContainer } from "@/client/atoms";
import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import styled from "styled-components";

const Root = styled(MainContainer)`
	height: 200vh;
`;

export const Page: NextPage = () => {
	const [session] = useSession();

	return (
		<>
			<GradientHeader />
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
			</Root>
		</>
	);
};

export default Page;
