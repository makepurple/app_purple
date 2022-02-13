import { MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { Masonry } from "masonic";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo, useRef } from "react";
import tw from "twin.macro";
import { useSuggestFriendsQuery } from "../../../../graphql";
import { SkillPageLayout, SuggestedFriendCard } from "../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../page-props/s/[skillOwner]/[skillName]/tab=explore";
import { PersonIcon } from "../../../../svgs";

const BATCH_SIZE = 50;

const Root = tw(MainContainer)`
	w-full
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = ({ jitterSeed }) => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const jitterSeedRef = useRef<Date>(new Date(jitterSeed));

	const [{ data }, getLoadMoreRef] = useRelayCursor(useSuggestFriendsQuery, {
		field: "suggestFriends",
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

	return (
		<SkillPageLayout selectedTab="explore" skillName={skillName} skillOwner={skillOwner}>
			<Root>
				{!suggestedFriends.length ? (
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
						items={suggestedFriends}
						overscanBy={5}
						render={(friendProps) => (
							<SuggestedFriendCard
								ref={getLoadMoreRef(friendProps.index)}
								{...friendProps}
							/>
						)}
					/>
				)}
			</Root>
		</SkillPageLayout>
	);
};

export default Page;
