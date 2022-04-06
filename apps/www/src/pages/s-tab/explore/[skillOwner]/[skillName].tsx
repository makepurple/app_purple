import { MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { Masonry, RenderComponentProps } from "masonic";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import tw from "twin.macro";
import { SuggestedFriendCardUserFragment, SuggestFriendsDocument } from "../../../../graphql";
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

export const Page: NextPage<PageProps> = ({ seed }) => {
	const router = useRouter();
	const { status } = useSession();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const [{ data }, { getRef }] = useRelayCursor({
		query: SuggestFriendsDocument,
		field: "suggestFriends",
		pause: status !== "authenticated",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			where: {
				seed,
				skills: {
					name: { equals: skillName },
					owner: { equals: skillOwner }
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
