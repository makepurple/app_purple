import { Anchor, Button, GitHubIcon, MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import React from "react";
import tw from "twin.macro";

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

const Description = tw.p`
	max-w-lg
	text-center
	text-lg
	font-medium
	text-gray-700
	text-opacity-60
	whitespace-pre-line
`;

const SignUpButton = tw(Button)`
	max-width[20rem]
	w-full
	background-color[#323a4d]
	hover:background-color[#4b5672]
`;

const AlreadyRegistered = tw.div`
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
			<Header>MakePurple Signup</Header>
			<Greeting tw="mt-3">Join our community!</Greeting>
			<Description tw="mt-6">
				Find skilled developers.{"\n"}
				Join other developers in discussing technologies, projects, best-practices and much
				more!
			</Description>
			<SignUpButton
				onClick={async () => {
					await signIn("github");
				}}
				size="large"
				type="button"
				tw="mt-16"
			>
				<GitHubIcon height={24} width={24} tw="mr-3" />
				<span>Sign up with GitHub</span>
			</SignUpButton>
			<AlreadyRegistered tw="mt-12">
				<span>Already registered?</span>{" "}
				<NextLink href="/login" passHref>
					<CreateAccount>Login instead</CreateAccount>
				</NextLink>
			</AlreadyRegistered>
			<Disclaimer tw="mt-32">
				By signing up you agree to the{" "}
				<NextLink href="/legal/terms" passHref>
					<DisclaimerLink>Terms of Service</DisclaimerLink>
				</NextLink>{" "}
				and{" "}
				<NextLink href="/legal/privacy" passHref>
					<DisclaimerLink>Privacy Policy</DisclaimerLink>
				</NextLink>
				.
			</Disclaimer>
		</Root>
	);
};

export default Page;
