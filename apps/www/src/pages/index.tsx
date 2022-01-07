import { MainContainer } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { Masonry } from "masonic";
import { NextPage } from "next";
import React, { useMemo, useRef } from "react";
import tw from "twin.macro";
import { useSuggestFriendsQuery } from "../graphql";
import { SuggestedFriendCard } from "../organisms";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
`;

export const Page: NextPage = () => {
	const jitterSeed = useRef<number>(new Date().getTime());

	/**
	 * TODO
	 * @description Allow users to configure this in settings
	 * @author David Lee
	 * @date January 6, 2022
	 */
	const [{ data }, getLoadMoreRef] = useRelayCursor(useSuggestFriendsQuery, {
		field: "suggestFriends",
		requestPolicy: "cache-first",
		variables: {
			first: 50,
			where: {
				desiredSkillsThreshold: 0,
				skillsThreshold: 0,
				jitter: 0.15,
				jitterSeed: jitterSeed.current,
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
			<Masonry
				columnGutter={8}
				columnWidth={240}
				items={suggestedFriends}
				overscanBy={5}
				render={(friendProps) => (
					<SuggestedFriendCard ref={getLoadMoreRef(friendProps.index)} {...friendProps} />
				)}
			/>
		</Root>
	);
};

export default Page;
