import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetUserActivitiesQuery } from "../../graphql";
import { UserActivityCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/activity";
import { PulseIcon } from "../../svgs";

const BATCH_SIZE = 20;

const Activities = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetUserActivitiesQuery, {
		field: "user.activities",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const activities = data?.user?.activities.nodes ?? [];

	return (
		<UserPageLayout selectedTab="activity" userName={userName}>
			<Activities>
				{!activities.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find any activity"
							>
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
			</Activities>
		</UserPageLayout>
	);
};

export default Page;
