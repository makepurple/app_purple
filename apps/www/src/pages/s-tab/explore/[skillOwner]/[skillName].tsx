import { Anchor, Brand, Button, MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { Masonry, RenderComponentProps } from "masonic";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useRef } from "react";
import tw from "twin.macro";
import { SuggestedFriendCardUserFragment, SuggestFriendsDocument } from "../../../../graphql";
import { SkillPageLayout, SuggestedFriendCard } from "../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../page-props/s/[skillOwner]/[skillName]/tab=explore";
import { GitHubIcon, PersonIcon } from "../../../../svgs";

const BATCH_SIZE = 50;

const Root = tw(MainContainer)`
	w-full
`;

const StyledBrand = tw(Brand)`
	font-size[inherit]
`;

const AuthContainer = tw.div`
	flex
	flex-col
	items-stretch
	w-48
`;

const StyledLoginButton = tw(Button)`
	bg-transparent
	text-black
	border-gray-300
	hover:shadow-md
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = ({ jitterSeed }) => {
	const router = useRouter();
	const { status } = useSession();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const jitterSeedRef = useRef<Date>(new Date(jitterSeed));

	const [{ data }, { getRef }] = useRelayCursor({
		query: SuggestFriendsDocument,
		field: "suggestFriends",
		pause: status !== "authenticated",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			where: {
				desiredSkillsThreshold: 0,
				skillsThreshold: 0,
				jitter: 0.15,
				jitterSeed: jitterSeedRef.current,
				skills: {
					name: { equals: skillName },
					owner: { equals: skillOwner }
				},
				weights: {
					skillsOverlap: 1,
					desiredSkillsOverlap: 1
				}
			}
		}
	});

	const suggestedFriends = useMemo(
		() => data?.suggestFriends.nodes.slice() ?? [],
		[data?.suggestFriends.nodes]
	);

	const itemKey = useCallback((item: SuggestedFriendCardUserFragment) => item.id, []);

	const renderCard = useCallback(
		(friendProps: RenderComponentProps<SuggestedFriendCardUserFragment>) => {
			return <SuggestedFriendCard ref={getRef(friendProps.index)} {...friendProps} />;
		},
		[getRef]
	);

	return (
		<SkillPageLayout selectedTab="explore" skillName={skillName} skillOwner={skillOwner}>
			<Root>
				{status !== "authenticated" ? (
					<NonIdealState
						title="You're not signed up!"
						subTitle={
							<span>
								Please{" "}
								<NextLink href="/signup" passHref>
									<Anchor>sign up</Anchor>
								</NextLink>{" "}
								to discover developers from the <StyledBrand /> community.
							</span>
						}
					>
						<AuthContainer>
							<NextLink href="/signup" passHref>
								<Button as="a">Sign Up</Button>
							</NextLink>
							<NextLink href="/login" passHref>
								<StyledLoginButton as="a" tw="mt-2">
									<GitHubIcon height={24} width={24} tw="mr-2" />
									<span>Login</span>
								</StyledLoginButton>
							</NextLink>
						</AuthContainer>
					</NonIdealState>
				) : !suggestedFriends.length ? (
					<NonIdealState
						title="There's nobody here"
						subTitle="We couldn't find anyone to suggest"
					>
						<PersonIcon height={96} width={96} />
					</NonIdealState>
				) : (
					<Masonry
						columnGutter={8}
						columnWidth={240}
						itemKey={itemKey}
						items={suggestedFriends}
						overscanBy={5}
						tabIndex={-1}
						render={renderCard}
					/>
				)}
			</Root>
		</SkillPageLayout>
	);
};

export default Page;
