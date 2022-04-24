import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { GetUserActivitiesDocument } from "../../graphql";
import {
	LoadingUserActivityCardPost,
	LoadingUserActivityCardSkill,
	LoadingUserActivityCardUser,
	Seo,
	UserActivityCard,
	UserPageLayout
} from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/activity";
import { PulseIcon } from "../../svgs";

const BATCH_SIZE = 20;
const MIN_SEO_SIZE = 20;

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

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetUserActivitiesDocument,
		field: "user.activities",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const user = data?.user;
	const activities = user?.activities.nodes ?? [];

	const shouldIndex = activities.length >= MIN_SEO_SIZE;

	return (
		<UserPageLayout selectedTab="activity" userName={userName}>
			<Seo
				title={`${userName}'s Activities`}
				description={oneLine`
					${userName}'s latest activities on MakePurple, including posts,
					code-examples and developers
				`}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			<Activities>
				{!activities.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle={`${user?.name} hasn't done anything yet`}
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
		</UserPageLayout>
	);
};

export default Page;
