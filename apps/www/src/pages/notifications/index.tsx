import { Divider, MainContainer, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { Fragment, useEffect } from "react";
import tw from "twin.macro";
import {
	GetNotificationsDocument,
	useGetNotificationCountsQuery,
	useOpenNotificationsMutation
} from "../../graphql";
import { LoadingNotificationCard, NotificationCard } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/notifications";
import { SearchIcon } from "../../svgs";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
`;

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	overflow-hidden
`;

const Title = tw.h1`
	flex
	pt-6
	px-6
	text-xl
	font-bold
	leading-none
`;

const Notifications = tw.div`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	useSession({ required: true });

	const [{ data: countData }] = useGetNotificationCountsQuery({ requestPolicy: "cache-first" });

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetNotificationsDocument,
		field: "viewer.notifications",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE
		}
	});

	const [, updateCounts] = useOpenNotificationsMutation();

	const notifications = data?.viewer?.notifications.nodes ?? [];
	const unopenedCount = countData?.viewer?.notifications.totalCount ?? 0;

	useEffect(() => {
		return () => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			updateCounts();
		};
	}, [updateCounts]);

	return (
		<Root size="small">
			<Content>
				<Title>
					{unopenedCount
						? `You have ${unopenedCount.toLocaleString()} new notifications`
						: "Notifications"}
				</Title>
				<Notifications tw="mt-6">
					{!notifications.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="You don't have any notifications yet"
									tw="shadow-none"
								>
									<SearchIcon height={96} width={96} />
								</NonIdealState>
						  )
						: notifications.map((notification, i) => (
								<Fragment key={notification.id}>
									{!!i && <Divider />}
									<NotificationCard ref={getRef(i)} notification={notification} />
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!notifications.length) && <Divider />}
								<LoadingNotificationCard />
							</Fragment>
						))}
				</Notifications>
			</Content>
		</Root>
	);
};

export default Page;
