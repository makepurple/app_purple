import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { GetSkillFollowersDocument } from "../../../../graphql";
import { LoadingUserFollowCard, SkillPageLayout, UserFollowCard } from "../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../page-props/s/[skillOwner]/[skillName]/tab=followers";
import { PersonIcon } from "../../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const Followers = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetSkillFollowersDocument,
		field: "skill.followers",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: skillName,
			owner: skillOwner
		}
	});

	const followers = data?.skill?.followers.nodes ?? [];

	return (
		<SkillPageLayout selectedTab="followers" skillName={skillName} skillOwner={skillOwner}>
			<Content>
				<Followers>
					{!followers.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="We couldn't find any followers"
									tw="shadow-none"
								>
									<PersonIcon height={96} width={96} />
								</NonIdealState>
						  )
						: followers.map((follower, i) => (
								<UserFollowCard key={follower.id} ref={getRef(i)} user={follower} />
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingUserFollowCard key={i} />)}
				</Followers>
			</Content>
		</SkillPageLayout>
	);
};

export default Page;
