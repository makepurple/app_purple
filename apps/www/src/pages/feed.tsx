import { MainContainer, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import { useGetActivityFeedQuery } from "../graphql";
import {
	LoadingUserActivityCardPost,
	LoadingUserActivityCardSkill,
	LoadingUserActivityCardUser,
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
`;

const Activities = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetActivityFeedQuery, {
		field: "viewer.activityFeed",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE
		}
	});

	const viewer = data?.viewer;
	const activities = viewer?.activityFeed.nodes ?? [];

	return (
		<Root size="small">
			<Activities>
				{!activities.length
					? !fetching && (
							<NonIdealState>
								<PulseIcon height={96} width={96} />
							</NonIdealState>
					  )
					: activities.map((activity, i) => (
							<UserActivityCard
								key={activity.id}
								ref={getLoadMoreRef(i)}
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