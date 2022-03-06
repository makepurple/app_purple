import { Avatar, Button, ErrorBoundaryContext, MainContainer } from "@makepurple/components";
import { WindowUtils } from "@makepurple/utils";
import { oneLine, stripIndents } from "common-tags";
import ms from "ms";
import type { NextPage } from "next";
import type { ErrorProps } from "next/error";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo } from "react";
import tw from "twin.macro";

const LOGIN_REDIRECT_DELAY = ms("5s");

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
`;

const StyledAvatar = tw(Avatar)`
	rounded-2xl
	cursor-auto
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-48
	w-48
	bg-white
	z-index[1]
`;

const StatusCode = tw.div`
	text-6xl
	font-semibold
	leading-none
	text-gray-700
`;

const Title = tw.div`
	max-w-lg
	text-center
	text-lg
	font-medium
	text-gray-700
	text-opacity-60
	whitespace-pre-line
`;

const HomeButton = tw(Button)`
	max-width[20rem]
	w-full
`;

export const Page: NextPage<ErrorProps> = ({ statusCode, title: _title }) => {
	const router = useRouter();

	const { reset } = useContext(ErrorBoundaryContext);

	const title: string = useMemo(() => {
		if (_title) return _title;

		switch (statusCode) {
			case 401:
				return stripIndents`
					You need to join before you do that!
					Let me show you where, one moment...
				`;
			case 403:
				return oneLine`
					Tsk, tsk. That's not where you're supposed to go.
				`;
			case 404:
				return oneLine`
					Hmm... This page doesn't seem to exist
				`;
			default:
				return stripIndents`
					Oops! Something went wrong...
					Please try again later, and let us know if the issue persists
				`;
		}
	}, [statusCode, _title]);

	const isBrowser = WindowUtils.isBrowser();

	useEffect(() => {
		if (!isBrowser) return;

		const timeout = setTimeout(async () => {
			await router.push("/signup");
		}, LOGIN_REDIRECT_DELAY);

		return () => {
			clearTimeout(timeout);
		};
	}, [isBrowser, router]);

	useEffect(
		() => () => {
			reset?.();
		},
		[reset]
	);

	return (
		<Root>
			<StyledAvatar border={10}>
				<AvatarIconContainer>
					<StatusCode>{statusCode}</StatusCode>
				</AvatarIconContainer>
			</StyledAvatar>
			{!!title && <Title tw="mt-6">{title}</Title>}
			<NextLink href="/" passHref>
				<HomeButton as="a" size="large" tw="mt-16">
					<span>Return to the home page</span>
				</HomeButton>
			</NextLink>
		</Root>
	);
};

export default Page;
