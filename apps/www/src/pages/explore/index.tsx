import { MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { Masonry } from "masonic";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { useMemo, useRef } from "react";
import tw from "twin.macro";
import { SuggestFriendsDocument } from "../../graphql";
import { SuggestedFriendCard } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/explore";
import { PersonIcon } from "../../svgs";

const BATCH_SIZE = 50;

const Root = tw(MainContainer)`
	w-full
	my-12
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = ({ jitterSeed }) => {
	useSession({ required: true });

	const jitterSeedRef = useRef<Date>(new Date(jitterSeed));

	/**
	 * TODO
	 * @description Allow users to configure this in settings
	 * @author David Lee
	 * @date January 6, 2022
	 */
	const [{ data }, { getRef }] = useRelayCursor({
		query: SuggestFriendsDocument,
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
					itemKey={(item) => item.id}
					items={suggestedFriends}
					overscanBy={5}
					tabIndex={-1}
					render={(friendProps) => (
						<SuggestedFriendCard ref={getRef(friendProps.index)} {...friendProps} />
					)}
				/>
			)}
		</Root>
	);
};

export default Page;
