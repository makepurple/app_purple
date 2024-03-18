import { Button, MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import tw from "twin.macro";
import { GetActivityFeedDocument } from "../graphql";
import {
	ActivityFeedFollowableSkills,
	ActivityFeedInfo,
	LoadingUserActivityCardPost,
	LoadingUserActivityCardSkill,
	LoadingUserActivityCardUser,
	Seo,
	UserActivityCard
} from "../organisms";
import { PageProps, pageProps } from "../page-props/feed";
import { PulseIcon } from "../svgs";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-stretch
	gap-4
	w-full
	mb-6
	lg:w-96
	lg:ml-4
	xl:gap-6
	xl:ml-6
`;

const Activities = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

const ExploreButton = tw(Button)`
	w-36
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetActivityFeedDocument,
		field: "activityFeed",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE
		}
	});

	const activities = data?.activityFeed.nodes ?? [];

	return (
		<Root>
			<Seo
				title="MakePurple"
				description={oneLine`
					The latest activities of developers, including new posts and code-examples for
					Next.js, Urql, Prisma, React, TailwindCSS and more!
				`}
				postfix={false}
				robots={{ follow: true, index: true }}
			/>
			<SideBar>
				<ActivityFeedInfo />
				<ActivityFeedFollowableSkills />
			</SideBar>
			<Activities>
				{!activities.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle={
									<div tw="flex flex-col items-center">
										<div>Discover developers and skills</div>
										<NextLink legacyBehavior href="/explore" passHref>
											<ExploreButton as="a" size="small" tw="mt-3">
												Explore
											</ExploreButton>
										</NextLink>
									</div>
								}
							>
								<PulseIcon height={96} width={96} />
							</NonIdealState>
					  )
					: activities.map((activity, i) => (
							<UserActivityCard
								key={activity.id}
								ref={getRef(i)}
								userActivity={activity}
							/>
					  ))}
				{fetching && (
					<>
						<LoadingUserActivityCardPost />
						<LoadingUserActivityCardSkill />
						<LoadingUserActivityCardUser />
					</>
				)}
			</Activities>
		</Root>
	);
};

export default Page;
