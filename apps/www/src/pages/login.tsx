import { Anchor, Button, GitHubIcon, MainContainer } from "@makepurple/components";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import tw from "twin.macro";
import { Seo } from "../organisms";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
	text-center
`;

const Header = tw.h1`
	uppercase
	text-center
	text-sm
	font-semibold
	text-gray-700
	text-opacity-50
	tracking-wider
	sm:text-base
`;

const Greeting = tw.div`
	text-5xl
	font-semibold
	text-gray-700
`;

const LoginButton = tw(Button)`
	max-width[20rem]
	w-full
	background-color[#323a4d]
	hover:background-color[#4b5672]
`;

const NotRegistered = tw.div`
	text-sm
	text-gray-700
	text-opacity-50
	font-medium
`;

const CreateAccount = tw(Anchor)`
	text-gray-700
	text-opacity-50
	underline
	hover:text-opacity-100
`;

const Disclaimer = tw.div`
	text-sm
	text-gray-700
	text-opacity-50
	font-medium
`;

const DisclaimerLink = tw(Anchor)`
	text-gray-700
	text-opacity-50
	underline
	hover:text-opacity-100
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<Seo
				title="Login"
				description={oneLine`
					Login to MakePurple, the developer discovery community, with
					your GitHub account.
				`}
				robots={{ follow: true, index: true }}
			/>
			<Header>MakePurple Login</Header>
			<Greeting tw="mt-3">Welcome back!</Greeting>
			<LoginButton
				onClick={async () => {
					await signIn("github", { callbackUrl: "/" });
				}}
				size="large"
				type="button"
				tw="mt-16"
			>
				<GitHubIcon height={24} width={24} tw="mr-3" />
				<span>Login with GitHub</span>
			</LoginButton>
			<NotRegistered tw="mt-12">
				<span>Not registered yet?</span>{" "}
				<NextLink legacyBehavior href="/signup" passHref>
					<CreateAccount>Create your account</CreateAccount>
				</NextLink>
			</NotRegistered>
			<Disclaimer tw="mt-32">
				By signing up you agree to the{" "}
				<NextLink legacyBehavior href="/legal/terms" passHref>
					<DisclaimerLink>Terms of Service</DisclaimerLink>
				</NextLink>{" "}
				and{" "}
				<NextLink legacyBehavior href="/legal/privacy" passHref>
					<DisclaimerLink>Privacy Policy</DisclaimerLink>
				</NextLink>
				.
			</Disclaimer>
		</Root>
	);
};

export default Page;
